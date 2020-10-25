import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { PagoPaseadorListarComponent } from './pago-paseador-listar/pago-paseador-listar.component';

const routes: Routes = [{
    path: 'pagosPaseadores',
    children: [
        {
          path: 'list',
          component: PagoPaseadorListarComponent
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
export class PagoPaseadorRoutingModule {}