import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { car } from '../car-modal/car.modal';

export const caraction = createActionGroup({
  source: 'car action',
  events: {
    getAllcars: emptyProps(),
    getAllCarSucc: props<{ car: car[] }>(),
    getalldatafail: props<{ error: string }>(),

    deleteCar: props<{ id: number }>(),
    deleteCarsucc: props<{ id: number }>(),
    getdeletefail: props<{ error: string }>(),

    addCar: props<{ addnewcar: car }>(),
    addCarsucc: props<{ addnewcar: car }>(),
    adddatafail: props<{ error: string }>(),

    updateCar: props<{ id: number; addcar: car }>(),
    updateCarsucc: props<{ id: number; addcar: car }>(),
    updatedatafail: props<{ error: string }>(),
  },
});
