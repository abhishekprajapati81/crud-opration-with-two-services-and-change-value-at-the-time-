import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Car, CarFuelType } from '../../car-modal/car.modal';

export const carAction = createActionGroup({
  source: 'car action',
  events: {
    getAllCars: emptyProps(),
    getAllCarsSuccess: props<{ car: Car[] }>(),
    getAllCarsFailure: props<{ error: string }>(),

    deleteCar: props<{ id: number }>(),
    deleteCarSuccess: props<{ id: number }>(),
    deleteCarFailure: props<{ error: string }>(),

    addCar: props<{ car: Car }>(),
    addCarSuccess: props<{ car: Car }>(),
    addCarFailure: props<{ error: string }>(),

    updateCar: props<{ id: number; car: Car }>(),
    updateCarSuccess: props<{ id: number; car: Car }>(),
    updateCarFailure: props<{ error: string }>(),

    getFuelCars: emptyProps(),
    getFuelCarsSuccess: props<{ fuel: CarFuelType[] }>(),

    fuelFilter: props<{ fuelid: number }>(),
    fuelFilterSuccess: props<{ car: Car[] }>(),
  },
});
