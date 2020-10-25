import { Component, OnInit } from '@angular/core';
import { PaseoDetail } from '../paseoDetail';
import { PaseoService } from '../paseo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratoPaseoCrearComponent } from 'src/app/contrato-paseo/contrato-paseo-crear/contrato-paseo-crear.component';
import { Paseo } from '../paseo';

@Component({
  selector: 'app-recorrido-listar',
  templateUrl: './paseo-listar.component.html',
  styleUrls: ['./paseo-listar.component.css','../../paseadores.css']
})
export class PaseoListarComponent implements OnInit {
  constructor(private paseoService: PaseoService, private modalService: NgbModal) { }

  paseos: Array<PaseoDetail>;
  selectedPaseo : PaseoDetail;
  selected = false;
  crearNuevo = false;
  formatter = new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP', minimumFractionDigits:2});

  getPaseos(): void {
    this.paseoService.getPaseos()
      .subscribe(paseos => {
        this.paseos = paseos;
      });
  }
  ngOnInit() {
    this.getPaseos();
    this.crearNuevo = false
  }

  alSeleccionar() {
    this.crearNuevo = true
  }

  onSelected(c: PaseoDetail):void{
    this.selected=true;
    this.selectedPaseo=c;
  }

  strToDate(publishingdate: string): String {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const date: string = dateTime[0];
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return date ;
  }

  strToTime(publishingdate: string): String {
    //console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  dateTime[0] + " " + timeHM[0] + ':'+ timeHM[1];
  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }

  reservar(paseo:Paseo): void{
    const modalRef = this.modalService.open(ContratoPaseoCrearComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      modalRef.componentInstance.paseoDet = paseo;
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

}
