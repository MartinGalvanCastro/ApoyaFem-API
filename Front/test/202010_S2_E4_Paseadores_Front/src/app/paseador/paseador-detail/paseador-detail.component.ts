import { Component, OnInit, Input } from '@angular/core';
import { PaseadorDetail } from '../paseador-detail';
import { PaseadorService } from '../paseador.service';
import { ActivatedRoute } from '@angular/router';
import { RegistrarHorarioComponent } from '../registrar-horario/registrar-horario.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paseador-detail',
  templateUrl: './paseador-detail.component.html',
  styleUrls: ['./paseador-detail.component.css', '../../paseadores.css']
})
export class PaseadorDetailComponent implements OnInit {

  @Input() paseadorDetail : PaseadorDetail;

  formatter = new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP', minimumFractionDigits:2});

  constructor(
    private route: ActivatedRoute, 
    private paseadorService : PaseadorService, 
    private modalService: NgbModal) { }

  selected = false;
  crearNuevo = false;

  openHorario() {
    const modalRef = this.modalService.open(RegistrarHorarioComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  ngOnInit() {
    if(this.paseadorDetail === undefined)
    {
      this.paseadorService.getPaseador(this.route.snapshot.paramMap.get('id')).subscribe(paseador => {
        this.paseadorDetail = paseador;
      })
    }
    this.crearNuevo= false;
  }
  alSeleccionar() {
    this.crearNuevo = true
  }

  formatoDia(date: string): string {
    return date.split('T')[0];
  }

  strToTime(publishingdate: string): String {
    console.log(publishingdate);
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

  esPaseador(): boolean{
    return localStorage.getItem('role') == 'Paseador';
  }


}
