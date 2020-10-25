/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContratoHotelService } from './contrato-hotel.service';

describe('Service: ContratoHotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratoHotelService]
    });
  });

  it('should ...', inject([ContratoHotelService], (service: ContratoHotelService) => {
    expect(service).toBeTruthy();
  }));
});
