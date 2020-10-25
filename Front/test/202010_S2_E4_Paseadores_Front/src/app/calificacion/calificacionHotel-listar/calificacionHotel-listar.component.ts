import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';
import { ContratoHotelDetail } from 'src/app/contrato-hotel/contrato-hotel-detail';

@Component({
  selector: 'app-calificacionHotel-listar',
  templateUrl: './calificacionHotel-listar.component.html',
  styleUrls: ['./calificacionHotel-listar.component.css','../../paseadores.css']
})
export class CalificacionHotelListarComponent  implements OnInit{

  selectedCalificacion: Calificacion;
  selected = false;

  contratosHotel: Array<ContratoHotelDetail>;
  constructor(private calificacionService: CalificacionService) { }

  getContratosHotel(): void{
    this.calificacionService.getHoteles()
    .subscribe(contratosHotel => {
      this.contratosHotel = contratosHotel;
    });
  }
  
  ngOnInit() {
    this.getContratosHotel();
  }

}
