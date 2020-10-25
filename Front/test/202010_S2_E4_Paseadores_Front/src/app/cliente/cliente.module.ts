import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteRegistrarComponent } from './cliente-registrar/cliente-registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerroModule } from '../perro/perro.module';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';



@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    PerroModule
  ],
  declarations: [ClienteListarComponent, ClienteDetailComponent, ClienteRegistrarComponent, ClienteEditarComponent],
  exports: [ClienteListarComponent, ClienteDetailComponent, ClienteRegistrarComponent, ClienteEditarComponent]
})
export class ClienteModule { }
