import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css', '../../paseadores.css']
})
export class ClienteListarComponent implements OnInit {

  clientes: Array<ClienteDetail>;
  clienteSeleccionado: ClienteDetail;
  seleccionado: boolean;


  constructor(private clienteService: ClienteService) { }

  getClientes(): void {
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes,
        error => console.log('Error al recibir getClientes:' + error.error),
        () => console.log('Se terminó la ejecución de listar los clientes')
      );
  }

  ngOnInit() {
    this.getClientes();
    this.seleccionado = false;
  }

  alSeleccionar(cliente : ClienteDetail) {
    this.seleccionado = true;
    this.clienteSeleccionado = cliente;
  }

}
