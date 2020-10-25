/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuntoService } from './punto.service';

describe('Service: Punto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoService]
    });
  });

  it('should ...', inject([PuntoService], (service: PuntoService) => {
    expect(service).toBeTruthy();
  }));
});
