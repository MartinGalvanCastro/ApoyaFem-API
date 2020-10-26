import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseoRoutingModule } from './paseo-routing.module';
import { PaseoListarComponent } from './paseo-listar/paseo-listar.component';
import { PaseoDetailComponent } from './paseo-detail/paseo-detail.component';
import { RecorridoModule } from '../recorrido/recorrido.module';
import { PaseoCrearComponent } from './paseo-crear/paseo-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    PaseoRoutingModule,
    RecorridoModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [PaseoListarComponent, PaseoDetailComponent, PaseoCrearComponent],
  exports: [PaseoListarComponent, PaseoCrearComponent]

})
export class PaseoModule { }
