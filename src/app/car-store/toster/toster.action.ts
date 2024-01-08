import { createAction, props } from '@ngrx/store';

export const show_Toster = '[app event] show toster';
export const empty_Toster = '[app event] empty toster';

export const showToster = createAction(
  show_Toster,
  props<{ message: string }>()
);
export const emptyToster = createAction(empty_Toster);
