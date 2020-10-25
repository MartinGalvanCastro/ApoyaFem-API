import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators,} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css','../../paseadores.css']
})
export class ClienteEditarComponent implements OnInit {

  clientForm: FormGroup;
  @Input() clienteDetail: ClienteDetail;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private toastrService: ToastrService,) { }

    ngOnInit() {
      this.clientForm = this.formBuilder.group({
        nombre: [this.clienteDetail.nombre, [Validators.required, Validators.minLength(2)]],
        identificacion: [this.clienteDetail.identificacion, [Validators.required, Validators.minLength(10)]],
        correo: [this.clienteDetail.correo, [Validators.required, Validators.email]],
        telefono: [this.clienteDetail.telefono, [Validators.required, Validators.minLength(10)]],
        imagen: [this.clienteDetail.imagen, Validators.required]
      });
    }

    closeModal(sendData) {
      this.activeModal.close(sendData);
      this.clientForm.reset();
      window.location.reload();
    }

    updateCliente(cliente: Cliente) {
      this.clienteService.updateCliente(cliente, this.clienteDetail.id).subscribe(client => {
          console.log(client.nombre);
          this.toastrService.success('Se ha guardado tu información', cliente.nombre, { closeButton: true });
          this.closeModal('Botón Guardar');
        });
    }

    cancel(sendData) {
      console.log("Cancelando ...");
      this.activeModal.close(sendData);
      this.clientForm.reset();
    }

}
