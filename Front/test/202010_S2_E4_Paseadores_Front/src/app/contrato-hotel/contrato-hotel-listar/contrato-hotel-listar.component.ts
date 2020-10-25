import { Component, OnInit } from '@angular/core';
import { ContratoHotelService } from '../contrato-hotel.service';
import { ContratoHotelDetail } from '../contrato-hotel-detail';

@Component({
  selector: 'app-contrato-hotel-listar',
  templateUrl: './contrato-hotel-listar.component.html',
  styleUrls: ['./contrato-hotel-listar.component.css', '../../paseadores.css']
})
export class ContratoHotelListarComponent implements OnInit {

  constructor(private contratoHotelService: ContratoHotelService) { }
  
  contratosHotel: Array<ContratoHotelDetail>;
  selected = false;
  selectedContratoHotel:ContratoHotelDetail;
  crearNuevo = false;

  getContratosHotel(): void{
    this.contratoHotelService.getContratosHotel()
    .subscribe(contratosHotel => {
      this.contratosHotel = contratosHotel;
    });
  }
  ngOnInit() {
    this.getContratosHotel();
    this.crearNuevo = false
  }

  alSeleccionar() {
    this.crearNuevo = true
  }
  
  onSelected(c: ContratoHotelDetail):void{
    this.selected=true;
    this.selectedContratoHotel=c;
  }

}
