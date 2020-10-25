import { Routes, RouterModule } from "@angular/router";
import { PagoClienteListarComponent } from './pago-cliente-listar/pago-cliente-listar.component';
import { NgModule } from '@angular/core';
import { PagoClienteDetailComponent } from './pago-cliente-detail/pago-cliente-detail.component';

const routes: Routes = [{
  path: 'pagosCliente',
  children: [
    {
      path: 'list',
      component: PagoClienteListarComponent,
    },
    {
      path: 'referencia/:referenciaCliente',
      component: PagoClienteDetailComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoClienteRoutingModule { }