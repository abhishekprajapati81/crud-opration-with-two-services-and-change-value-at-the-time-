import { TestBed } from '@angular/core/testing';

import { CarFuelTypeService } from './car-fuel-type.service';

describe('CarFuelTypeService', () => {
  let service: CarFuelTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFuelTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
