import { Routes, RouterModule } from "@angular/router";
import { PaseadorListarComponent } from './paseador-listar/paseador-listar.component';
import { NgModule } from '@angular/core';
import { PaseadorDetailComponent } from './paseador-detail/paseador-detail.component';

const routes: Routes = [{
    path: 'paseadores',
    children: [
      {
        path: 'list',
        component: PaseadorListarComponent
      },
      {
          path: ':id',
          component: PaseadorDetailComponent
      }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaseadorRoutingModule {}