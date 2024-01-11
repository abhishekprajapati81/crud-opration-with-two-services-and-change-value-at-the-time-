import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CarListComponent } from './car-component/car-list/car-list.component';
import { CarAddComponent } from './car-component/car-add/car-add.component';
import { CarEditComponent } from './car-component/car-edit/car-edit.component';
import { CarReducer } from './store/car-store/car.reducer';

import { CarFacade } from './application/car.facade';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarEffect } from './store/car-store/car.effect';
import { CarFuelReducer } from './store/carfuel-store/carfuel.reducer';
import { ToasterEffect } from './store/toaster/toster.effect';
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ car: CarReducer, Fuel: CarFuelReducer }),
    EffectsModule.forRoot([CarEffect, ToasterEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [CarFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
