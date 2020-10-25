import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import { CalificacionRecListarComponent } from './calificacionRecorrido-listar/calificacion-listar.component';
import { CalificacionPasListarComponent } from './calificacionPaseador-listar/calificacion-listar.component';
import { CalificacionHotelListarComponent } from './calificacionHotel-listar/calificacionHotel-listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalificarComponent } from './calificar/calificar.component';
import { CalificarPasComponent } from './calificar-pas/calificar-pas.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CalificacionDetailComponent,CalificacionRecListarComponent, CalificacionPasListarComponent, CalificacionHotelListarComponent, CalificarComponent,CalificarPasComponent],
  exports: [CalificacionRecListarComponent, CalificacionPasListarComponent, CalificacionHotelListarComponent, CalificarComponent,CalificarPasComponent],
})
export class CalificacionModule { }
