import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { caraction } from '../car-store/car.action';
import { car } from '../car-modal/car.modal';
import { selectCar } from '../car-store/car.selector';

@Injectable({
  providedIn: 'root',
})
export class CarFacade {
  store = inject(Store);
  Carlist$ = this.store.select(selectCar);
  error$!: Error;

  getallcar() {
    this.store.dispatch(caraction.getAllcars());
  }

  deletecar(id: number) {
    this.store.dispatch(caraction.deleteCar({ id }));
  }

  addcar(addnewcar: car) {
    this.store.dispatch(caraction.addCar({ addnewcar: addnewcar }));
  }

  updatecar(id: number, addcar: car) {
    this.store.dispatch(caraction.updateCar({ id, addcar }));
  }
}
