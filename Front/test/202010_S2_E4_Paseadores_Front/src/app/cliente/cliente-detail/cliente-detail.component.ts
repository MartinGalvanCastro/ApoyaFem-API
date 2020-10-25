import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { RecorridoDetail } from 'src/app/recorrido/recorrido-detail';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerroRegistrarComponent } from 'src/app/perro/perro-registrar/perro-registrar.component';
import { ClienteEditarComponent } from '../cliente-editar/cliente-editar.component';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css', '../../paseadores.css']
})
export class ClienteDetailComponent implements OnInit {

  @Input() clienteDetail: ClienteDetail;
  clienteId: number;
  nombreEnA: boolean;
  primerNombre: String;
  esCliente: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private modalService: NgbModal
  ) {
  }

  openPerro() {
    const modalRef = this.modalService.open(PerroRegistrarComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }


  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.clienteId)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail;
        this.nombreEnA = this.nombreTerminaEnA();
        this.esCliente = localStorage.getItem('role') == 'Cliente';
      });
  }

  ngOnInit() {
    console.log('Inicia el detail');
    if (this.clienteDetail === undefined) {
      console.log('routerLink');
      this.clienteId = +this.route.snapshot.paramMap.get('id');
      this.getClienteDetail();

    } else { 
      console.log(this.clienteDetail.id); 
      this.nombreEnA = this.nombreTerminaEnA();
      this.esCliente = localStorage.getItem('role') == 'Cliente';
    }
  }

  nombreTerminaEnA(): boolean{

    this.primerNombre = this.clienteDetail.nombre.split(" ")[0];

    if (this.primerNombre.endsWith('a')){
      console.log('Termina en A')
      return true;
    }
    
    console.log('No termina en A');
    return false;
  }

  abrirEditarPerfil(){
    const modalRef = this.modalService.open(ClienteEditarComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
      modalRef.componentInstance.clienteDetail = this.clienteDetail;
 
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

}
