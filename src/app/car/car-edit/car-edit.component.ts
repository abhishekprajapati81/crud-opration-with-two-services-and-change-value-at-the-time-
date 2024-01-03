import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarFacade } from 'src/app/application/car.facade';
import { car } from 'src/app/car-modal/car.modal';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  CarEditForm!: FormGroup;
  carfacade = inject(CarFacade);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res);
      const getid: string = res.get('id')!;
      this.carfacade.Carlist$.subscribe((val) => {
        const getcardata = val.find((cardata) => cardata.id === +getid);
        // console.log(val);

        this.CarEditForm = new FormGroup({
          id: new FormControl(getcardata?.id),
          carname: new FormControl(getcardata?.carname, Validators.required),
          carfule: new FormControl(getcardata?.carfule, Validators.required),
        });
      });
    });
  }
  onadd(id: number, value: car) {
    console.log(this.CarEditForm.value);
    this.carfacade.updatecar(id, value);
  }
}
