import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarFacade } from 'src/app/application/car.facade';
import { Car } from 'src/app/car-modal/car.modal';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carFacade = inject(CarFacade);
  carAddForm!: FormGroup;

  ngOnInit() {
    this.carAddForm = new FormGroup({
      carname: new FormControl('', Validators.required),
      fuelId: new FormControl('', Validators.required),
    });

    this.carFacade.carFuelData();
  }

  onadd(car: Car) {
    console.log(this.carAddForm.value);
    this.carFacade.addCar(car);
    this.carAddForm.reset();
  }
}
