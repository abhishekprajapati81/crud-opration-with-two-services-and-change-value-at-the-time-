import { createFeatureSelector, createSelector } from '@ngrx/store';
import { carAdapter, CarState } from './car.reducer';

export const selectCarState = createFeatureSelector<CarState>('car');

export const selectorAllCars = createSelector(
  selectCarState,
  carAdapter.getSelectors().selectAll
);
