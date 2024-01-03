import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarAdapter, CarState } from './car.reducer';

export const SelectCarState = createFeatureSelector<CarState>('car');

export const selectCar = createSelector(
  SelectCarState,
  CarAdapter.getSelectors().selectAll
);
