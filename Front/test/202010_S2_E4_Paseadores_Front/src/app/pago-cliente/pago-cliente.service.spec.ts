/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagoClienteService } from './pago-cliente.service';

describe('Service: PagoCliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoClienteService]
    });
  });

  it('should ...', inject([PagoClienteService], (service: PagoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
