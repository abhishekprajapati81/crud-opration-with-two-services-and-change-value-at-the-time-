import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car-modal/car.modal';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  carUrl: string = ' http://localhost:3000/Cars';

  getCar(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }

  deletCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.carUrl}/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carUrl, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.carUrl}/${id}`, car);
  }
}
