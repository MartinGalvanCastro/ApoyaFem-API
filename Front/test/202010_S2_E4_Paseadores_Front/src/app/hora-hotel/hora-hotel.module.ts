import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraHotelListarComponent } from './hora-hotel-listar/hora-hotel-listar.component';
import { HoraHotelRoutingModule } from './hora-hotel-routing.module';
import { HoraHotelDetailComponent } from './hora-hotel-detail/hora-hotel-detail.component';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ContratoHotelModule } from '../contrato-hotel/contrato-hotel.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    HoraHotelRoutingModule,
    NgxPermissionsModule.forRoot(),
    ContratoHotelModule,
    CalificacionModule,
    FullCalendarModule
  ],
  declarations: [HoraHotelListarComponent, HoraHotelDetailComponent],
  exports: [HoraHotelListarComponent]
})
export class HoraHotelModule { }
