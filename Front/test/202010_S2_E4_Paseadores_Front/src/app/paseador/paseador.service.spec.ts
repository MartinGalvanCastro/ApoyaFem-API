/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaseadorService } from './paseador.service';

// describe('Service: Paseador', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [PaseadorService]
//     });
//   });
//   it('should ...', inject([PaseadorService], (service: PaseadorService) => {
//     expect(service).toBeTruthy();
//   }));
// });

describe('PaseadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaseadorService = TestBed.get(PaseadorService);
    expect(service).toBeTruthy();
  });
});
