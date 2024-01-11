import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CarFacade } from 'src/app/application/car.facade';
import { Car } from 'src/app/car-modal/car.modal';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  CarEditForm!: FormGroup;
  carFacade = inject(CarFacade);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res);
      const getId: string = res.get('id')!;
      this.carFacade.carList$.subscribe((value) => {
        const getCarData = value.find((cardata) => cardata.id === +getId);

        this.CarEditForm = new FormGroup({
          id: new FormControl(getCarData?.id),
          carname: new FormControl(getCarData?.carname, Validators.required),
          carfuel: new FormControl(getCarData?.fuelId, Validators.required),
        });
      });
    });
  }
  onadd(id: number, value: Car) {
    console.log(this.CarEditForm.value);
    const carFuelValue: Car = {
      carname: this.CarEditForm.value.carname,
      fuelId: this.CarEditForm.value.carfuel,
    };
    this.carFacade.updateCar(id, carFuelValue);
  }
}
