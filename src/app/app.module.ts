import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarAddComponent } from './car/car-add/car-add.component';
import { CarEditComponent } from './car/car-edit/car-edit.component';
import { CarReducer } from './car-store/car.reducer';
import { carEffect } from './car-store/car.effect';
import { CarFacade } from './application/car.facade';

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
    StoreModule.forRoot({ car: CarReducer }),
    EffectsModule.forRoot([carEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [CarFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
