import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HoraHotelListarComponent} from './hora-hotel-listar/hora-hotel-listar.component';

const routes: Routes = [
    {
        path : 'horashotel',
        children: [
            {
              path: 'list',
              component:  HoraHotelListarComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HoraHotelRoutingModule {}
