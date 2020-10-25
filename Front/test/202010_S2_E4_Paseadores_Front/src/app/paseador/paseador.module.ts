import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseadorListarComponent } from './paseador-listar/paseador-listar.component';
import { PaseadorRoutingModule } from './paseador-routing.module';
import { PaseadorDetailComponent } from './paseador-detail/paseador-detail.component';
import { PagoPaseadorModule } from '../pago-paseador/pago-paseador.module';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { HorarioModule } from '../horario/horario.module';
import { PaseoModule } from '../paseo/paseo.module';
import { RegistrarHorarioComponent } from './registrar-horario/registrar-horario.component';
import { PaseadorCrearComponent } from './paseador-crear/paseador-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  imports: [
    CommonModule,
    PaseadorRoutingModule,
    PagoPaseadorModule,
    CalificacionModule,
    HorarioModule,
    PaseoModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [PaseadorListarComponent, PaseadorDetailComponent, RegistrarHorarioComponent, PaseadorCrearComponent],
  exports: [PaseadorListarComponent, RegistrarHorarioComponent, PaseadorCrearComponent]
})
export class PaseadorModule { }
