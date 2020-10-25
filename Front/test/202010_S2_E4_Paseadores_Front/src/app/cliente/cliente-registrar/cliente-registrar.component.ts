import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styleUrls: ['./cliente-registrar.component.css','../../paseadores.css']
})
export class ClienteRegistrarComponent implements OnInit {

  clientForm: FormGroup;

  imagenes = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0JM0itXg28v2KRr2Ngh3b6yDhEcAFSHGC6EMwtk0fj7Qph206&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTcNrQj4LRFsJxyOv_L8ovgODPO9wueTQUdMHzzhCrKX5muE8w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQA-e0qNeoX2ByMe0eR_XVImDJvTjLhmb1GxPG6I90NmLwcB6h&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdT09GRkK-hOMcQ6UKzSA6hbA07tnxfdavrkwvlCE1Zidicd12&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIq85_6BRPPZxIv3lLDExgVx6VqrSNIqPzBs0TK-i_ZHBtCzDf&usqp=CAU'];

  indexImagen = Math.floor(Math.random() * 5);

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      identificacion: ["", [Validators.required, Validators.minLength(10)]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", [Validators.required, Validators.minLength(10)]],
      imagen: [this.imagenes[this.indexImagen], Validators.required]
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  createCliente(cliente: Cliente) {
    this.clienteService.createCliente(cliente).subscribe(client => {
        console.log(client.nombre);
        this.toastrService.success('Ahora eres cliente de Paseadores', '¡Bienvenido(a) ' + cliente.nombre + '!', { closeButton: true });
        this.closeModal('Botón Guardar');
      });
    this.clientForm.reset();
    
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.clientForm.reset();
  }

}
