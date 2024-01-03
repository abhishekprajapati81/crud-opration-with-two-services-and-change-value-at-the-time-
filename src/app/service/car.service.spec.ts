import { TestBed } from '@angular/core/testing';

import { carService } from './car.service';

describe('TodoService', () => {
  let service: carService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
