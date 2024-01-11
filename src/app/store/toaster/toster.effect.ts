import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { emptyToster, showToster } from './toster.action';
import { map, switchMap } from 'rxjs';

Injectable();

export class ToasterEffect {
  action$ = inject(Actions);
  matSnackBar = inject(MatSnackBar);

  // toster action
  showTosterbox$ = createEffect(() =>
    this.action$.pipe(
      ofType(showToster),
      switchMap((action) =>
        this.snackBar(action.message).pipe(map(() => emptyToster()))
      )
    )
  );

  private snackBar(message: string) {
    return this.matSnackBar.open(message, 'done', {}).afterDismissed();
  }
}
