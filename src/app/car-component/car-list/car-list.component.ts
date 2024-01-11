import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarFacade } from 'src/app/application/car.facade';
import { CarFuelType } from 'src/app/car-modal/car.modal';
import { CarFuelTypeService } from 'src/app/service/car-fuel-type.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  carFacade = inject(CarFacade);
  carFuelTypes$!: Observable<CarFuelType[]>;
  constructor(private carFuelTypeService: CarFuelTypeService) {}

  ngOnInit(): void {
    this.carFacade.getAllCar();
    this.carFuelTypes$ = this.carFuelTypeService.getFuelCar();
    this.carFacade.carFuelData();
  }
  onDelete(id: number) {
    this.carFacade.deleteCar(id);
  }

  getFilterdata(event: any) {
    this.carFacade.getFilterDataById(Number(event.target.value));
  }
}
