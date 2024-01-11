export interface Car {
  id?: number;
  carname: string;
  fuelId: number;
  fuelname?: string;
  carFuelTypeName?: CarFuelType;
}

export interface CarFuelType {
  id?: number;
  fuelname: string;
}
