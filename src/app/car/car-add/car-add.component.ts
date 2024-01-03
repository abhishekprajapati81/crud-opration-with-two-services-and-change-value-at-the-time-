import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarFacade } from 'src/app/application/car.facade';
import { car } from 'src/app/car-modal/car.modal';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carfacade = inject(CarFacade);
  carAddForm!: FormGroup;
  ngOnInit() {
    this.carAddForm = new FormGroup({
      carname: new FormControl('', Validators.required),
      carfule: new FormControl('', Validators.required),
    });
  }

  onadd(car: car) {
    console.log(this.carAddForm.value);
    this.carfacade.addcar(car);
    this.carAddForm.reset();
  }
}
