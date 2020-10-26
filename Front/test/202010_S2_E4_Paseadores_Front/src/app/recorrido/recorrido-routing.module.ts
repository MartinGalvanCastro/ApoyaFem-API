import { Routes, RouterModule } from "@angular/router";
import { RecorridoListarComponent } from './recorrido-listar/recorrido-listar.component';
import { NgModule } from '@angular/core';
import { RecorridoDetailComponent } from './recorrido-detail/recorrido-detail.component';

const routes: Routes = [{
  path: 'abogados',
  children: [
    {
      path: 'list',
      component: RecorridoListarComponent,
    },
    {
      path: ':id',
      component: RecorridoDetailComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecorridoRoutingModule { }