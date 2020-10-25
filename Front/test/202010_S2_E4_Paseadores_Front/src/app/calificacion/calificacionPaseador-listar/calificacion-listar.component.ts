import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';
import { PaseoDetail } from 'src/app/paseo/paseoDetail';
import { Paseo } from 'src/app/paseo/paseo';

@Component({
  selector: 'app-calificacionPas-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css','../../paseadores.css']
})
export class CalificacionPasListarComponent{
  @Input() paseosIn: Array<Paseo>;
  selectedCalificacion: Calificacion;
  selected = false;

  paseos: Array<PaseoDetail>;

  constructor(private calificacionService: CalificacionService) { }

  getCalificacion(v): void {
    this.calificacionService.getPaseo(v)
      .subscribe(paseo => {
        this.paseos.push(paseo);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.paseos = new Array<PaseoDetail>();
    this.paseosIn.forEach((v) =>{this.getCalificacion(v);});
  }

}
