/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecorridoListarComponent } from './recorrido-listar.component';

describe('RecorridoListarComponent', () => {
  let component: RecorridoListarComponent;
  let fixture: ComponentFixture<RecorridoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorridoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

