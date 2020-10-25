import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoHotelListarComponent } from './contrato-hotel-listar/contrato-hotel-listar.component';
import { ContratoHotelRoutingModule } from './contrato-hotel-routing.module';
import { ContratoHotelDetailComponent } from './contrato-hotel-detail/contrato-hotel-detail.component';
import { ContratoHotelCrearComponent } from './contrato-hotel-crear/contrato-hotel-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    ContratoHotelRoutingModule,
    FullCalendarModule
  ],
  declarations: [ContratoHotelListarComponent, ContratoHotelDetailComponent, ContratoHotelCrearComponent],
  exports: [ContratoHotelListarComponent, ContratoHotelCrearComponent]
})
export class ContratoHotelModule { }
