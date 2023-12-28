import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, Useradapter } from './user.reducer';

export const SelectUserState = createFeatureSelector<UserState>('user');

export const SelectUser = createSelector(
  SelectUserState,
  Useradapter.getSelectors().selectAll
);
