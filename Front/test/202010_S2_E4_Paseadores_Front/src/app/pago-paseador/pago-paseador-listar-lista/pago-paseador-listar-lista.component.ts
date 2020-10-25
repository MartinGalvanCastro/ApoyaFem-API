import { Component, OnInit, Input } from '@angular/core';
import { PagoPaseador } from '../pago-paseador';

@Component({
  selector: 'app-pago-paseador-listar-lista',
  templateUrl: './pago-paseador-listar-lista.component.html',
  styleUrls: ['./pago-paseador-listar-lista.component.css', '../../paseadores.css']
})
export class PagoPaseadorListarListaComponent implements OnInit {

  @Input() pagosPaseador : PagoPaseador[];

  constructor() { }

  ngOnInit() {
  }

  formatoDia(publishingdate: string): string {
    return publishingdate.split('T')[0];
  }

}
