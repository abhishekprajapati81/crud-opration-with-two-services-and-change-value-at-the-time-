import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarFuelType } from '../car-modal/car.modal';

@Injectable({
  providedIn: 'root',
})
export class CarFuelTypeService {
  constructor(private carFuel: HttpClient) {}

  carFuelType: string = 'http://localhost:3000/fuelType';

  getCarFuelType(): Observable<CarFuelType> {
    return this.carFuel.get<CarFuelType>(this.carFuelType);
  }
}
