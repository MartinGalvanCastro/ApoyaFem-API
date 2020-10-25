import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoListarComponent } from './punto-listar/punto-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PuntoListarComponent],
  exports: [PuntoListarComponent],
})
export class PuntoModule { }