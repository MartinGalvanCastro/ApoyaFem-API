import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Punto } from '../punto';
//

@Component({
  selector: 'app-punto-listar',
  templateUrl: './punto-listar.component.html',
  styleUrls: ['./punto-listar.component.css','../../paseadores.css']
})
export class PuntoListarComponent implements OnInit {

  @Input() puntos: Array<Punto>;

  pins: string;

  constructor() { }

  ngOnInit() {
    this.pins = "";
    this.buildPins();
    console.log("puntos");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  buildPins(): void{
     this.puntos.forEach(p => {
       this.pins = this.pins +"pin-s-"+String(p.posicion)+"+e26e2d("+String(p.longitud)+","+String(p.latitud)+"),";
     });
     if(this.puntos.length > 0)
     {
       this.pins = this.pins.substring(0,this.pins.length-1);
     }
     console.info(this.pins);
   }

  getPins(): String{
    return this.pins;
  }

}
