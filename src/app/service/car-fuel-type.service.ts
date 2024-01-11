import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarFuelType } from '../car-modal/car.modal';

@Injectable({
  providedIn: 'root',
})
export class CarFuelTypeService {
  constructor(private carFuelHttp: HttpClient) {}

  carFuelUrl: string = 'http://localhost:3000/fuelType';

  getFuelCar(): Observable<CarFuelType[]> {
    return this.carFuelHttp.get<CarFuelType[]>(this.carFuelUrl);
  }

  // addCarFuel(carFuel: CarFuelType): Observable<CarFuelType> {
  //   return this.carFuelHttp.post<CarFuelType>(this.carFuelUrl, carFuel);
  // }

  // deletCarFuel(id: number): Observable<CarFuelType> {
  //   return this.carFuelHttp.delete<CarFuelType>(`${this.carFuelUrl}/${id}`);
  // }

  // updateCarFuel(id: number, carFuel: CarFuelType): Observable<CarFuelType> {
  //   return this.carFuelHttp.patch<CarFuelType>(
  //     `${this.carFuelUrl}/${id}`,
  //     carFuel
  //   );
  // }
}
