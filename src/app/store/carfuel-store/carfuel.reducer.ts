import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CarFuelType } from 'src/app/car-modal/car.modal';
import { carAction } from '../car-store/car.action';

export const carFuelAdapter = createEntityAdapter<CarFuelType>();
export interface CarFuelState extends EntityState<CarFuelType> {}
export const carFuelInitialState: CarFuelState =
  carFuelAdapter.getInitialState();

export const CarFuelReducer = createReducer<CarFuelState>(
  carFuelInitialState,
  on(carAction.getFuelCarsSuccess, (state, { fuel }) => {
    console.log(fuel);
    return carFuelAdapter.setAll(fuel, state);
  })
);
