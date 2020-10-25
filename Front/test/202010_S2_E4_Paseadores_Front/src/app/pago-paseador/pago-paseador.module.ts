import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoPaseadorListarComponent } from './pago-paseador-listar/pago-paseador-listar.component';
import { PagoPaseadorRoutingModule } from './pago-paseador-routing.module';
import { PagoPaseadorDetailComponent } from './pago-paseador-detail/pago-paseador-detail.component';
import { PagoPaseadorListarListaComponent } from './pago-paseador-listar-lista/pago-paseador-listar-lista.component';
import { PaseoModule } from '../paseo/paseo.module';

@NgModule({
  imports: [
    CommonModule,
    PagoPaseadorRoutingModule,
    PaseoModule
  ],
  declarations: [PagoPaseadorListarComponent, PagoPaseadorDetailComponent, PagoPaseadorListarListaComponent],
  exports: [PagoPaseadorListarComponent, PagoPaseadorListarListaComponent]
})
export class PagoPaseadorModule { }
