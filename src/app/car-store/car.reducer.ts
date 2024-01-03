import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { car } from '../car-modal/car.modal';
import { createReducer, on } from '@ngrx/store';
import { caraction } from './car.action';
import { state } from '@angular/animations';

export const CarAdapter = createEntityAdapter<car>();
export interface CarState extends EntityState<car> {}
export const CaritialState: CarState = CarAdapter.getInitialState();

export const CarReducer = createReducer<CarState>(
  CaritialState,
  on(caraction.getAllCarSucc, (state, { car }) => {
    return CarAdapter.setAll(car, state);
  }),
  on(caraction.getalldatafail, (state, { error }) => ({
    ...state,
    error,
  })),
  // delete
  on(caraction.deleteCarsucc, (state, { id }) => {
    return CarAdapter.removeOne(id, { ...state });
  }),
  on(caraction.getdeletefail, (state, { error }) => ({
    ...state,
    error,
  })),
  // addcar
  on(caraction.addCarsucc, (state, { addnewcar }) => {
    return CarAdapter.addOne(addnewcar, { ...state });
  }),
  on(caraction.adddatafail, (state, { error }) => ({
    ...state,
    error,
  })),
  // update
  on(caraction.updateCarsucc, (state, { id, addcar }) => {
    return CarAdapter.updateOne({ id, changes: addcar }, state);
  }),
  on(caraction.updatedatafail, (state, { error }) => ({
    ...state,
    error,
  }))
);
