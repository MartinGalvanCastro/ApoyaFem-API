import { Component, OnInit } from '@angular/core';
import { ContratoPaseo } from '../contrato-paseo';
import { ContratoPaseoService } from '../contrato-paseo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratoPaseoCrearComponent } from '../contrato-paseo-crear/contrato-paseo-crear.component';

@Component({
  selector: 'app-contrato-paseo-listar',
  templateUrl: './contrato-paseo-listar.component.html',
  styleUrls: ['./contrato-paseo-listar.component.css','../../paseadores.css']
})
export class ContratoPaseoListarComponent implements OnInit {

  private contratosPaseo: Array<ContratoPaseo>;
  crearNuevo = false;
  selected : false;
  //selectedContratoPaseo: ContratoPaseo;

  constructor(private contratoPaseoService: ContratoPaseoService,
    private modalService: NgbModal) { }

  getContratosPaseo(): void {
    this.contratoPaseoService.getContratosPaseo()
      .subscribe(contratosPaseo => {
        this.contratosPaseo = contratosPaseo;
      });
  }

  ngOnInit() {
    //this.selected =false;
    this.getContratosPaseo();
    this.crearNuevo = false
  }

  alSeleccionar() {
    this.crearNuevo = true
  }
/*
  onSelected(cp: ContratoPaseo):void{
    this.selected=true;
    this.selectedContratoPaseo=cp;
  }
*/
  strToDate(publishingdate: string): String {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const date: string = dateTime[0];
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return date ;
  }

  strToTime(publishingdate: string): String {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  timeHM[0] + ':'+ timeHM[1];
  }
  
  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  abrirReservar(){
    const modalRef = this.modalService.open(ContratoPaseoCrearComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }
}
