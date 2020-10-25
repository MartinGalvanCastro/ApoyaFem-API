/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HoraHotelService } from './hora-hotel.service';

describe('Service: HoraHotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoraHotelService]
    });
  });

  it('should ...', inject([HoraHotelService], (service: HoraHotelService) => {
    expect(service).toBeTruthy();
  }));
});
