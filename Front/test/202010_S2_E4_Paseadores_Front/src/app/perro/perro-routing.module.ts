import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { PerroListarComponent } from './perro-listar/perro-listar.component';
import { PerroDetailComponent } from './perro-detail/perro-detail.component';

const routes: Routes = [{
    path: 'perros',
    children: [
        {
          path: 'list',
          component: PerroListarComponent
        },
        {
          path: ':id',
          component: PerroDetailComponent,
        },
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

export class PerroRoutingModule {} 
