/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagoPaseadorListarListaComponent } from './pago-paseador-listar-lista.component';

describe('PagoPaseadorListarListaComponent', () => {
  let component: PagoPaseadorListarListaComponent;
  let fixture: ComponentFixture<PagoPaseadorListarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPaseadorListarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPaseadorListarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
