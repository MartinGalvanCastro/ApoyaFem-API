import { Routes, RouterModule } from "@angular/router";
import { PaseoListarComponent } from './paseo-listar/paseo-listar.component';
import { NgModule } from '@angular/core';
import { PaseoDetailComponent } from './paseo-detail/paseo-detail.component';

const routes: Routes = [{
  path: 'paseos',
  children: [
    {
      path: 'list',
      component: PaseoListarComponent,
    },
    {
      path: ':id',
      component: PaseoDetailComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaseoRoutingModule { }