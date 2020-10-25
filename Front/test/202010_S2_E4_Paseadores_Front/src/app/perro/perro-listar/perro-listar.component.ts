import { Component, OnInit } from '@angular/core';
import { PerroDetail } from '../perro-detail';
import { PerroService } from '../perro.service';

@Component({
  selector: 'app-perro-listar',
  templateUrl: './perro-listar.component.html',
  styleUrls: ['./perro-listar.component.css','../../paseadores.css']
})
export class PerroListarComponent implements OnInit {

  perros : PerroDetail[];
  perroSeleccionado: PerroDetail;
  seleccionado : Boolean;

  constructor( private perroService : PerroService) { }

  ngOnInit() {
    this.seleccionado=false;
    this.getPerros();
  }

  getPerros() : void {
    this.perroService.getPerros().subscribe(perros => {
      this.perros = perros;
    })
  }
  
  alSeleccionar(perro : PerroDetail) {
    this.seleccionado = true;
    this.perroSeleccionado = perro;
  }



}
