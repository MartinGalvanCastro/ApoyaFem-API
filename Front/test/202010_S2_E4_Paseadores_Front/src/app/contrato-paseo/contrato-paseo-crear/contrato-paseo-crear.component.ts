import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContratoPaseoService } from '../contrato-paseo.service';
import { ContratoPaseo } from '../contrato-paseo';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteDetail } from 'src/app/cliente/cliente-detail';
import { Perro } from 'src/app/perro/perro';
import { PagoCliente } from 'src/app/pago-cliente/pago-cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { PerroService } from 'src/app/perro/perro.service';
import { Psicologo } from 'src/app/paseo/paseo';
import { PagoClienteService } from 'src/app/pago-cliente/pago-cliente.service';
import { Punto } from 'src/app/punto/punto';
import { PuntoService } from 'src/app/punto/punto.service';

@Component({
  selector: 'app-contrato-paseo-crear',
  templateUrl: './contrato-paseo-crear.component.html',
  styleUrls: ['./contrato-paseo-crear.component.css', '../../paseadores.css']
})
export class ContratoPaseoCrearComponent implements OnInit {

  contratoPaseoFormulario: FormGroup;
  clienteA : ClienteDetail;
  mediosPago: String[] = ['EFECTIVO', 'PSE', 'CRÉDITO', 'DÉBITO'];
  @Input() paseoDet: Psicologo;
  pagosCliente: Array<PagoCliente>;
  
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private contratoPaseoService : ContratoPaseoService, 
    private clienteService: ClienteService,
    private perroService: PerroService,
    private pagoClienteService: PagoClienteService,
    private puntoService: PuntoService) { }

  ngOnInit() {

    this.pagoClienteService.getPagosCliente().subscribe(pagos => {this.pagosCliente = pagos;});

    this.clienteService.getClienteDetail(localStorage.getItem('id'))
      .subscribe(clienteDetail => {
        this.clienteA = clienteDetail;
      }); 
      this.contratoPaseoFormulario = this.formBuilder.group({
        //sitioEncuentro: ["", [Validators.required ]],
        perro: ["", Validators.required ],
        medioPago:["", [Validators.required]],
        fechaInicio : ["", Validators.pattern("[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]")],
        horaInicio: ["", [Validators.required, Validators.pattern("[0-9][0-9]:[0-9][0-9]")]]
      });
  }

  showSuccess() {
    this.toastr.success('¡Tu reserva fue realizada!', '', { "progressBar": true, timeOut: 4000 });
  }
  
  closeModal(sendData) {
    this.activeModal.close(sendData);
    this.contratoPaseoFormulario.reset();
    window.location.reload();
  }

  cancel(sendData) {
    console.log("Cancelando ...");
    this.activeModal.close(sendData);
    this.contratoPaseoFormulario.reset();
  }

  crearContratoPaseo(nuevoContratoPaseo : ContratoPaseo, nuevoPagoCliente: PagoCliente, sitioEncuentro: Punto) {

    let numRef = this.pagosCliente.length+1;
    nuevoPagoCliente.referencia = 'referencia'+ numRef;
    nuevoPagoCliente.monto = this.paseoDet.costo;
    nuevoPagoCliente.cliente = this.clienteA;

    //let sitioEncuentro : string = this.contratoPaseoFormulario.value.sitioEncuentro;
    let hora : string = this.contratoPaseoFormulario.value.fechaInicio + "T" + this.contratoPaseoFormulario.value.horaInicio + ":00";
    console.log(hora);
    
    nuevoContratoPaseo.horaEncuentro = hora;
    nuevoContratoPaseo.cliente = this.clienteA;
    nuevoContratoPaseo.paseo = this.paseoDet;
    sitioEncuentro.recorrido = this.paseoDet.recorrido;

    this.perroService.getPerroDetail(this.contratoPaseoFormulario.value.perro)
      .subscribe(perroDetail => {
        nuevoContratoPaseo.perro = perroDetail;
        this.pagoClienteService.crearPagoCliente(nuevoPagoCliente).subscribe(pagoClienteN => {

          nuevoContratoPaseo.pago = pagoClienteN;

          this.contratoPaseoService.crearContratoPaseo(nuevoContratoPaseo).subscribe(contratoPaseo => {
            this.showSuccess();
            this.contratoPaseoFormulario.reset();
            this.closeModal('Botón Guardar');
          }); 
        })
      }); 
    
  }
}