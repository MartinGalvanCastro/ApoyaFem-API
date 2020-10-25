import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioListarComponent } from './horario-listar/horario-listar.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HorarioListarComponent],
  exports: [HorarioListarComponent]

})
export class HorarioModule { }
