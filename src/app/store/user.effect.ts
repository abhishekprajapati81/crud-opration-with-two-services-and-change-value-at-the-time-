import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../service/user.service';
import { map, mergeMap, tap } from 'rxjs';
import { UserActions } from './user.action';

Injectable();

export class UserEffect {
  action$ = inject(Actions);
  _httpService = inject(UserService);

  loadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.getAllUser),
      mergeMap(() =>
        this._httpService
          .getuser()
          .pipe(map((UserList) => UserActions.getAllUserSucc({ UserList })))
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap((action) =>
        this._httpService
          .deleteUsers(action.id)
          .pipe(
            tap(() => {
              const msg = 'user data delete';
              alert(msg);
            })
          )
          .pipe(map(() => UserActions.deleteUserSucc({ id: action.id })))
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.addNewUser),
      mergeMap((action) =>
        this._httpService
          .addNewUsers(action.newUser)
          .pipe(
            tap(() => {
              const msg = 'user data add';
              alert(msg);
            })
          )
          .pipe(map((newUser) => UserActions.addNewUserSucc({ newUser })))
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.updateUser),
      mergeMap((action) =>
        this._httpService.updateUsers(action.id, action.editUser).pipe(
          tap(() => {
            const msg = 'user data update';
            alert(msg);
          }),
          map((editUser) =>
            UserActions.updateUserSecc({ id: action.id, editUser })
          )
        )
      )
    )
  );
}
