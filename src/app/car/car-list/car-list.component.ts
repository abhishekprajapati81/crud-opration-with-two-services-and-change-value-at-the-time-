import { Component, inject } from '@angular/core';
import { CarFacade } from 'src/app/application/car.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  carFacde = inject(CarFacade);

  ngOnInit(): void {
    this.carFacde.getallcar();
  }
  onDelete(id: number) {
    this.carFacde.deletecar(id);
  }
}
