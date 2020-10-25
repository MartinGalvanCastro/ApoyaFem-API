import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerroRoutingModule} from './perro-routing.module';
import { PerroListarComponent } from './perro-listar/perro-listar.component';
import { PerroDetailComponent } from './perro-detail/perro-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerroRegistrarComponent } from './perro-registrar/perro-registrar.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    PerroRoutingModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [PerroListarComponent, PerroDetailComponent, PerroRegistrarComponent ],
  exports: [PerroListarComponent, PerroDetailComponent, PerroRegistrarComponent]
})
export class PerroModule { }
