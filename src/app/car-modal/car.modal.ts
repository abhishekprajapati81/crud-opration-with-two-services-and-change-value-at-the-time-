export interface Car {
  id?: number;
  carname: string;
  carfuel: string;
}

export interface CarFuelType extends Car {
  id: number;
  carFuelType: string;
}
