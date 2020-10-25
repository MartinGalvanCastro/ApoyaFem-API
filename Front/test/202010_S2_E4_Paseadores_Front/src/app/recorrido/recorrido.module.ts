import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecorridoDetailComponent } from './recorrido-detail/recorrido-detail.component';
import { RecorridoListarComponent } from './recorrido-listar/recorrido-listar.component';
import { RecorridoRoutingModule } from './recorrido-routing.module';
import { PuntoModule } from '../punto/punto.module';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { RecorridoPreviewComponent } from './recorrido-preview/recorrido-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RecorridoRoutingModule,
    PuntoModule,
    CalificacionModule
  ],
  declarations: [RecorridoListarComponent, RecorridoDetailComponent,RecorridoPreviewComponent],
  exports: [RecorridoDetailComponent,RecorridoPreviewComponent],
})
export class RecorridoModule { }
