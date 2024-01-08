import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { carAction } from './car.action';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { CarService } from '../service/car.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emptyToster, showToster } from './toster/toster.action';

Injectable();

export class CarEffect {
  action$ = inject(Actions);
  carService = inject(CarService);
  matSnackBar = inject(MatSnackBar);

  loadCars$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.getAllCars),
      mergeMap(() =>
        this.carService
          .getCar()
          .pipe(map((car) => carAction.getAllCarsSuccess({ car })))
      )
    )
  );

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

  updateCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(carAction.updateCar),
      mergeMap((action) =>
        this.carService.updateCar(action.id, action.car).pipe(
          switchMap((updateCar) => {
            const updateAction = carAction.updateCarSuccess({
              id: action.id,
              car: updateCar,
            });
            const showTosterAction = showToster({
              message: 'update data successfully',
            });
            return [updateAction, showTosterAction];
          }),
          catchError((error) => {
            const toasterErrorAction = showToster({
              message: 'server problem',
            });
            return of(
              carAction.getAllCarsFailure({ error }),
              toasterErrorAction
            );
          })
        )
      )
    )
  );

  showTosterbox$ = createEffect(() =>
    this.action$.pipe(
      ofType(showToster),
      mergeMap((action) =>
        this.snackBar(action.message).pipe(map(() => emptyToster()))
      )
    )
  );

  private snackBar(message: string) {
    return this.matSnackBar
      .open(message, 'done', {
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
      })
      .afterDismissed();
  }
}
