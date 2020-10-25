import { Component, OnInit, Input } from '@angular/core';
import { Paseo } from '../paseo';

@Component({
  selector: 'app-paseo-listar-lista',
  templateUrl: './paseo-listar-lista.component.html',
  styleUrls: ['./paseo-listar-lista.component.css', '../../paseadores.css']
})
export class PaseoListarListaComponent implements OnInit {

  @Input() paseos: Paseo[];

  constructor() { }

  ngOnInit() {
  }

  formatoDia(date: string): string {
    return date.split('T')[0] + " " + date.split('T')[1].split('Z')[0];
  }

  darDisponible(ocu : boolean) : string {
    var estaDisponible : string = "No";
    if (ocu) {
      estaDisponible = "Sí"
    }
    return estaDisponible;
  }
}