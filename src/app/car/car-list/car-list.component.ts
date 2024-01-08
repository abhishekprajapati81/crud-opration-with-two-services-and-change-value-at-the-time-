import { Component, inject } from '@angular/core';
import { CarFacade } from 'src/app/application/car.facade';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  carFacade = inject(CarFacade);
  ngOnInit(): void {
    this.carFacade.getAllCar();
  }
  onDelete(id: number) {
    this.carFacade.deleteCar(id);
  }
}
