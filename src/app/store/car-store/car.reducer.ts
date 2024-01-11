import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Car, CarFuelType } from '../../car-modal/car.modal';
import { createReducer, on } from '@ngrx/store';
import { carAction } from './car.action';
import { state } from '@angular/animations';

export const carAdapter = createEntityAdapter<Car>();
export interface CarState extends EntityState<Car> {}
export const carInitialState: CarState = carAdapter.getInitialState();

export const CarReducer = createReducer<CarState>(
  carInitialState,
  on(carAction.getAllCarsSuccess, (state, { car }) => {
    console.log(car);
    // console.log(state);
    return carAdapter.setAll(car, state);
  }),
  on(carAction.getAllCarsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // delete
  on(carAction.deleteCarSuccess, (state, { id }) => {
    console.log(state);
    return carAdapter.removeOne(id, { ...state });
  }),
  on(carAction.deleteCarFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // addcar
  on(carAction.addCarSuccess, (state, { car: addCar }) => {
    return carAdapter.addOne(addCar, { ...state });
  }),
  on(carAction.addCarFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // update
  on(carAction.updateCarSuccess, (state, { id, car: updateCar }) => {
    return carAdapter.updateOne({ id, changes: updateCar }, state);
  }),
  on(carAction.updateCarFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(carAction.fuelFilterSuccess, (state, { car }) => {
    console.log(car);
    // console.log(state);
    return carAdapter.setAll(car, state);
  })
);
