import { Component, OnInit, Input } from '@angular/core';
import { Horario } from '../horario';

@Component({
  selector: 'app-horario-listar',
  templateUrl: './horario-listar.component.html',
  styleUrls: ['./horario-listar.component.css','../../paseadores.css']
})
export class HorarioListarComponent implements OnInit {
  constructor() { }

  @Input() horarios: Array<Horario>;
 
  ngOnInit() {
    console.log("horarios");
  }

  formatoDia(date: string): string {
    return date.split('T')[0] + " " + date.split('T')[1].split('Z')[0];
  }

  darOcupado(ocu : boolean) : string {
    var estaOcupado : string = "No";
    if (ocu) {
        estaOcupado = "Sí"
    }
    return estaOcupado;
  }
}
