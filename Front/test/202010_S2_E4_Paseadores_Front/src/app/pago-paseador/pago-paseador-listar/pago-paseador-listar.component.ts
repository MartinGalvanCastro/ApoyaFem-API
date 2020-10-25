import { Component, OnInit } from '@angular/core';
import { PagoPaseadorDetail } from '../pago-paseador-detail';
import { PagoPaseadorService } from '../pago-paseador.service';

@Component({
  selector: 'app-pago-paseador-listar',
  templateUrl: './pago-paseador-listar.component.html',
  styleUrls: ['./pago-paseador-listar.component.css', '../../paseadores.css']
})
export class PagoPaseadorListarComponent implements OnInit {

  pagosPaseadores : PagoPaseadorDetail[];
  pagoPaseadorSeleccionado : PagoPaseadorDetail;
  seleccionado : boolean;

  constructor(private pagoPaseadorService : PagoPaseadorService) { }

  ngOnInit() {
    this.seleccionado = false;
    this.getPagosPaseador();
  }

  getPagosPaseador() : void {
    this.pagoPaseadorService.getPagosPaseadores().subscribe(pagosPaseadores => {
      this.pagosPaseadores = pagosPaseadores;
    })
  }

  alSeleccionar(pagoPaseador : PagoPaseadorDetail) {
    this.seleccionado = true;
    this.pagoPaseadorSeleccionado = pagoPaseador;
  }

  formatoDia(publishingdate: string): string {
    return publishingdate.split('T')[0];
  }
}
