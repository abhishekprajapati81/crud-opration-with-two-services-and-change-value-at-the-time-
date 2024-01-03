import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { caraction } from './car.action';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { carService } from '../service/car.service';

Injectable();

export class carEffect {
  action$ = inject(Actions);
  _httpService = inject(carService);

  loadCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(caraction.getAllcars),
      mergeMap(() =>
        this._httpService.getCar().pipe(
          map((car) => caraction.getAllCarSucc({ car })),
          catchError((error) => of(caraction.getalldatafail({ error })))
        )
      )
    )
  );

  DeleteCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(caraction.deleteCar),
      mergeMap((action) =>
        this._httpService.deletCar(action.id).pipe(
          tap(() => {
            const msg = 'car data delete successfully';
            alert(msg);
          }),
          map((id) => caraction.deleteCarsucc({ id: action.id })),
          catchError((error) => of(caraction.getdeletefail({ error })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(caraction.addCar),
      mergeMap((action) =>
        this._httpService.addNewCar(action.addnewcar).pipe(
          tap(() => {
            const msg = 'data add successfully';
            alert(msg);
          }),
          map((addnewcar) => caraction.addCarsucc({ addnewcar })),
          catchError((error) => of(caraction.adddatafail({ error })))
        )
      )
    )
  );

  UpdateCar$ = createEffect(() =>
    this.action$.pipe(
      ofType(caraction.updateCar),
      mergeMap((action) =>
        this._httpService.updateCar(action.id, action.addcar).pipe(
          tap(() => {
            const msg = 'update data successfully';
            alert(msg);
          }),
          map((addcar) => caraction.updateCarsucc({ id: action.id, addcar })),
          catchError((error) => of(caraction.updatedatafail({ error })))
        )
      )
    )
  );
}
