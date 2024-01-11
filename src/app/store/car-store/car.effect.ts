import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { carAction } from './car.action';
import { catchError, filter, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { CarService } from '../../service/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CarFuelTypeService } from '../../service/car-fuel-type.service';
import { Car } from '../../car-modal/car.modal';
import { emptyToster, showToster } from '../toaster/toster.action';

Injectable();

export class CarEffect {
  action$ = inject(Actions);
  carService = inject(CarService);
  matSnackBar = inject(MatSnackBar);
  cardata: any;
  carFuelTypeService = inject(CarFuelTypeService);

  //data list Effect

  loadCars$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.getAllCars),
      mergeMap(() =>
        this.carService.getCar().pipe(
          map((car) => {
            // this.cardata = car;
            return carAction.getAllCarsSuccess({ car });
          })
        )
      )
    )
  );

  // delete Effect
  deleteCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.deleteCar),
      mergeMap((action) =>
        this.carService.deletCar(action.id).pipe(
          map(() => carAction.deleteCarSuccess({ id: action.id })),
          switchMap((deleteAction) => [
            deleteAction,
            showToster({ message: 'Delete data successfully' }),
          ]),
          catchError((error) => of(carAction.deleteCarFailure({ error })))
        )
      )
    )
  );

  // add Effect

  addCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.addCar),
      mergeMap((action) =>
        this.carService.addCar(action.car).pipe(
          map((addCar) => carAction.addCarSuccess({ car: addCar })),
          switchMap((addnewcaraction) => [
            addnewcaraction,
            showToster({ message: 'Add data successfully' }),
          ]),
          catchError((error) => of(carAction.addCarFailure({ error })))
        )
      )
    )
  );

  // Update Effect

  updateCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.updateCar),
      mergeMap((action) =>
        this.carService
          .updateCar(action.id, action.car)
          .pipe(
            map((car) => carAction.updateCarSuccess({ id: action.id, car }))
          )
      )
    )
  );

  loadFuel$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.getFuelCars),
      mergeMap(() =>
        this.carFuelTypeService
          .getFuelCar()
          .pipe(map((fuel) => carAction.getFuelCarsSuccess({ fuel: fuel })))
      )
    )
  );

  carFuelFilter$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.fuelFilter),
      switchMap((action) => {
        const filterData = this.cardata.filter(
          (ele: Car) => ele.fuelId == action.fuelid
        );
        return of(filterData).pipe(
          map((result) => {
            return carAction.fuelFilterSuccess({
              car: result,
            });
          })
        );
      })
    )
  );
}
