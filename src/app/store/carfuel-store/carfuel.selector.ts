import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarFuelState, carFuelAdapter } from './carfuel.reducer';

export const selectCarFuelState = createFeatureSelector<CarFuelState>('Fuel');
export const carFuelselector = createSelector(
  selectCarFuelState,
  carFuelAdapter.getSelectors().selectAll
);
