/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerroService } from './perro.service';

describe('PerroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerroService = TestBed.get(PerroService);
    expect(service).toBeTruthy();
  });
});