import { Routes, RouterModule } from "@angular/router";
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { NgModule } from '@angular/core';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

const routes: Routes = [{
  path: 'clientes',
  children: [
    {
      path: 'list',
      component: ClienteListarComponent,
    },
    {
      path: ':id',
      component: ClienteDetailComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
