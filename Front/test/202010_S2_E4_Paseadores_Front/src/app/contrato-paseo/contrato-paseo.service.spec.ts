/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContratoPaseoService } from './contrato-paseo.service';

describe('Service: ContratoPaseo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratoPaseoService]
    });
  });

  it('should ...', inject([ContratoPaseoService], (service: ContratoPaseoService) => {
    expect(service).toBeTruthy();
  }));
});
