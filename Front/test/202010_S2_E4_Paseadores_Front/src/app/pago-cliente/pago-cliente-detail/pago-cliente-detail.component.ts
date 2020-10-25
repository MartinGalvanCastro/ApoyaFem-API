import { Component, OnInit, Input } from '@angular/core';
import { PagoCliente } from '../pago-cliente';
import { PagoClienteService } from '../pago-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-pago-cliente-detail',
  templateUrl: './pago-cliente-detail.component.html',
  styleUrls: ['./pago-cliente-detail.component.css', '../../paseadores.css']
})
export class PagoClienteDetailComponent implements OnInit {

  @Input() pagoCliente: PagoCliente;
  pagoClienteReferencia: string;
  tuvoInput:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pagoClienteService: PagoClienteService
  ) {
  }

  getPagoClienteDetail(): void {
    this.pagoClienteService.getPagoClienteByReferencia(this.pagoClienteReferencia)
      .subscribe(pagoCliente => {
        this.pagoCliente = pagoCliente;
      });
  }

  ngOnInit() {
    if (this.pagoCliente === undefined) {
      this.tuvoInput=false;
      console.log('routerLink');
      this.pagoClienteReferencia = this.route.snapshot.paramMap.get('referenciaCliente');
      this.getPagoClienteDetail();

    } else { console.log(this.pagoCliente.id);
              this.tuvoInput=true;}
  }

}
