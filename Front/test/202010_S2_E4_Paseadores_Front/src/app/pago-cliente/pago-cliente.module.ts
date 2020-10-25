import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoClienteListarComponent } from './pago-cliente-listar/pago-cliente-listar.component';
import { PagoClienteDetailComponent } from './pago-cliente-detail/pago-cliente-detail.component';
import { PagoClienteRoutingModule } from './pago-cliente-routing.module';



@NgModule({
  imports: [
    CommonModule,
    PagoClienteRoutingModule
  ],
  declarations: [PagoClienteListarComponent, PagoClienteDetailComponent],
  exports: [PagoClienteListarComponent, PagoClienteDetailComponent]
})
export class PagoClienteModule { }
