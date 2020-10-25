
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoPaseoListarComponent } from './contrato-paseo-listar/contrato-paseo-listar.component';
import { ContratoPaseoRoutingModule } from './contrato-paseo-routing.module';
import { ContratoPaseoCrearComponent } from './contrato-paseo-crear/contrato-paseo-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    ContratoPaseoRoutingModule
  ],
  declarations: [ContratoPaseoListarComponent, ContratoPaseoCrearComponent],
  exports: [ContratoPaseoListarComponent, ContratoPaseoCrearComponent]
})
export class ContratoPaseoModule { }

