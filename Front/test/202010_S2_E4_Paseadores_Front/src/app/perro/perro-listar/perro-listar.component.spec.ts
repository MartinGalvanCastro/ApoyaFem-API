/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerroListarComponent } from './perro-listar.component';

describe('PerroListarComponent', () => {
  let component: PerroListarComponent;
  let fixture: ComponentFixture<PerroListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerroListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
