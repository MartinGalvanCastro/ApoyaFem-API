/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecorridoService } from './recorrido.service';

// describe('Service: Recorrido', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [RecorridoService]
//     });
//   });

//   it('should ...', inject([RecorridoService], (service: RecorridoService) => {
//     expect(service).toBeTruthy();
//   }));
// });

describe('RecorridosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecorridoService = TestBed.get(RecorridoService);
    expect(service).toBeTruthy();
  });
});

