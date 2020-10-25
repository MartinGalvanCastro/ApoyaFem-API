/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaseoService } from './paseo.service';

//describe('Service: Paseo', () => {
  //beforeEach(() => {
    //TestBed.configureTestingModule({
      //providers: [PaseoService]
    //});
  //});

 // it('should ...', inject([PaseoService], (service: PaseoService) => {
  //  expect(service).toBeTruthy();
  //}));
//});

describe('PaseosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaseoService = TestBed.get(PaseoService);
    expect(service).toBeTruthy();
  });
});

