import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-component/car-list/car-list.component';
import { CarAddComponent } from './car-component/car-add/car-add.component';
import { CarEditComponent } from './car-component/car-edit/car-edit.component';

const routes: Routes = [
  {
    path: 'car',
    component: CarListComponent,
    children: [
      {
        path: 'addcar',
        component: CarAddComponent,
      },
      {
        path: 'caredit/:id',
        component: CarEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
