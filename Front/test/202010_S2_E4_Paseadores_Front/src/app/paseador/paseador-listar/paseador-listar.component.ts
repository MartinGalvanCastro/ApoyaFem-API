import { Component, OnInit } from '@angular/core';
import { PaseadorService } from '../paseador.service';
import { PaseadorDetail } from '../paseador-detail';

@Component({
  selector: 'app-paseador-listar',
  templateUrl: './paseador-listar.component.html',
  styleUrls: ['./paseador-listar.component.css', '../../paseadores.css']
})
export class PaseadorListarComponent implements OnInit {

  paseadores : PaseadorDetail[];
  paseadorSeleccionado : PaseadorDetail;
  seleccionado : boolean;
  crearNuevo : boolean;

  constructor( private paseadorService : PaseadorService) { }

  ngOnInit() {
    this.seleccionado = false;
    this.crearNuevo = false;
    this.getPaseadores();
  }

  getPaseadores() : void {
    this.paseadorService.getPaseadores().subscribe(paseadores => {
      this.paseadores = paseadores;
    })
  }

  alSeleccionar(paseador : PaseadorDetail) {
    this.seleccionado = true;
    this.paseadorSeleccionado = paseador;
  }

  agregarPaseador() {
    this.crearNuevo = true;
  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }
}
