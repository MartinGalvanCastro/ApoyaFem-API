import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ContratoPaseoListarComponent } from './contrato-paseo-listar/contrato-paseo-listar.component';


const routes: Routes = [{
  path: 'contratosPaseo',
  children: [
    {
      path: 'list',
      component: ContratoPaseoListarComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoPaseoRoutingModule { }