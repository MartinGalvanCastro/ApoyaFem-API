/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagoPaseadorService } from './pago-paseador.service';

// describe('Service: PagoPaseador', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [PagoPaseadorService]
//     });
//   });

//   it('should ...', inject([PagoPaseadorService], (service: PagoPaseadorService) => {
//     expect(service).toBeTruthy();
//   }));
// });

describe('PagoPaseadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagoPaseadorService = TestBed.get(PagoPaseadorService);
    expect(service).toBeTruthy();
  });
});
