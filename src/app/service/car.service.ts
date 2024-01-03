import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from '../car-modal/car.modal';

@Injectable({
  providedIn: 'root',
})
export class carService {
  constructor(private http: HttpClient) {}

  url: string = ' http://localhost:3000/Cars';

  getCar(): Observable<car[]> {
    return this.http.get<car[]>(this.url);
  }

  deletCar(id: number): Observable<car> {
    return this.http.delete<car>(`${this.url}/${id}`);
  }

  addNewCar(addnewdata: car): Observable<car> {
    return this.http.post<car>(this.url, addnewdata);
  }

  updateCar(id: number, todochange: car): Observable<car> {
    return this.http.patch<car>(`${this.url}/${id}`, todochange);
  }
}
