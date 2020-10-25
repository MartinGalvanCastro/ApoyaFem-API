import{ NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import{ ContratoHotelListarComponent } from './contrato-hotel-listar/contrato-hotel-listar.component';

const routes: Routes = [
    {
        path: 'contratoshotel',
        children: [
            {
                path: 'list',
                component: ContratoHotelListarComponent
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContratoHotelRoutingModule {}
