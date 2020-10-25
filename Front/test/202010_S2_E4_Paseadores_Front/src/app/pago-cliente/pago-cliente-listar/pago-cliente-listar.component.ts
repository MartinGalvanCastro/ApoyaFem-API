import { Component, OnInit } from '@angular/core';
import { PagoCliente } from '../pago-cliente';
import { PagoClienteService } from '../pago-cliente.service';

@Component({
  selector: 'app-pago-cliente-listar',
  templateUrl: './pago-cliente-listar.component.html',
  styleUrls: ['./pago-cliente-listar.component.css', '../../paseadores.css']
})
export class PagoClienteListarComponent implements OnInit {

  private pagosCliente: Array<PagoCliente>;
  pagoClienteSeleccionado: PagoCliente;
  seleccionado: boolean;

  constructor(private pagoClienteService: PagoClienteService) { }

  getPagosCliente(): void {
    this.pagoClienteService.getPagosCliente()
      .subscribe(pagosCliente => {
        this.pagosCliente = pagosCliente;
      });
  }

  ngOnInit() {
    this.getPagosCliente();
    this.seleccionado = false;
  }

  alSeleccionar(pagoCliente : PagoCliente) {
    this.seleccionado = true;
    this.pagoClienteSeleccionado = pagoCliente;
  }


}
