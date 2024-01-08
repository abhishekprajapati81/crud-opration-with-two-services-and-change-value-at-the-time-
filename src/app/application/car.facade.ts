import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { carAction } from '../car-store/car.action';
import { Car } from '../car-modal/car.modal';
import { selectorAllCars } from '../car-store/car.selector';

@Injectable({
  providedIn: 'root',
})
export class CarFacade {
  store = inject(Store);
  carList$ = this.store.select(selectorAllCars);

  getAllCar() {
    this.store.dispatch(carAction.getAllCars());
  }

  deleteCar(id: number) {
    this.store.dispatch(carAction.deleteCar({ id }));
  }

  addCar(addCar: Car) {
    this.store.dispatch(carAction.addCar({ car: addCar }));
  }

  updateCar(id: number, updateCar: Car) {
    this.store.dispatch(carAction.updateCar({ id, car: updateCar }));
  }
}
