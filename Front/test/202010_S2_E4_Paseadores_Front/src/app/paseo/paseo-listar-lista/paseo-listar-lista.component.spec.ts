/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaseoListarListaComponent } from './paseo-listar-lista.component';

describe('PaseoListarListaComponent', () => {
  let component: PaseoListarListaComponent;
  let fixture: ComponentFixture<PaseoListarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseoListarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseoListarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
