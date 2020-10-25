import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PaseadorModule } from './paseador/paseador.module';
import { PagoPaseadorModule } from './pago-paseador/pago-paseador.module';
import { RecorridoModule } from './recorrido/recorrido.module';
import { PuntoModule } from './punto/punto.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { HoraHotelModule } from './hora-hotel/hora-hotel.module';
import { ContratoHotelModule } from './contrato-hotel/contrato-hotel.module';
import { PerroModule } from './perro/perro.module';
import { ContratoPaseoModule} from './contrato-paseo/contrato-paseo.module';
import { HorarioModule} from './horario/horario.module';
import { PaseoModule} from './paseo/paseo.module';
import { ClienteModule } from './cliente/cliente.module';
import { PagoClienteModule } from './pago-cliente/pago-cliente.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPermissionsModule} from 'ngx-permissions';
import { LoginModule } from './login/login.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    PaseadorModule,
    PagoPaseadorModule,
    RecorridoModule,
    PuntoModule,
    CalificacionModule,
    HomeModule,
    HoraHotelModule,
    ContratoHotelModule,
    PerroModule,
    ContratoPaseoModule,
    HorarioModule,
    PaseoModule,
    ClienteModule,
    PagoClienteModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }