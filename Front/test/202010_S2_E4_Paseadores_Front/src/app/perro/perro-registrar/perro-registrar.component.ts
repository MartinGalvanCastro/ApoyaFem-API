import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Perro } from '../perro';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PerroService } from '../perro.service';
import { ClienteDetail } from 'src/app/cliente/cliente-detail';

@Component({
  selector: 'app-perro-registrar',
  templateUrl: './perro-registrar.component.html',
  styleUrls: ['./perro-registrar.component.css','../../paseadores.css']
})
export class PerroRegistrarComponent implements OnInit {

  perroForm: FormGroup;
  clienteA : ClienteDetail;
  clientes: Array<ClienteDetail>;
  perro: Perro[];

  imagenes = ['https://images4.alphacoders.com/277/thumb-1920-277138.jpg',
  'https://images2.alphacoders.com/715/715729.jpg',
  'https://images.alphacoders.com/891/891402.jpg',
  'https://images5.alphacoders.com/102/1023276.jpg',
  'https://images2.alphacoders.com/814/thumb-1920-81480.jpg',
  'https://images8.alphacoders.com/380/thumb-1920-380977.jpg',
  'https://images6.alphacoders.com/678/678636.jpg',
  'https://images5.alphacoders.com/865/thumb-1920-865169.jpg'];

  indexImagen = Math.floor(Math.random() * 9);


  constructor(
    private activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private perroService: PerroService
  ) { }

  createPerro(newPerro: Perro) {
    let edad : number = this.perroForm.value.edad;
    let idPerro: number = this.perroForm.value.idPerro;
    let nombre: string = this.perroForm.value.nombre;
    let raza: string = this.perroForm.value.raza;

    let imagen : string = this.perroForm.value.imagen;

    console.log(newPerro);

    newPerro.edad= edad;
    newPerro.idPerro= idPerro;
    newPerro.nombre= nombre;
    newPerro.raza= raza;
    newPerro.propietario = this.clienteA;
    newPerro.imagen= imagen;



    this.perroService.createPerro(newPerro).subscribe(perr => {
    console.log(perr.idPerro);
    console.warn("El perro fue creado", newPerro);
    this.toastr.success('Perro creado exitosamente!', newPerro.nombre, { "progressBar": true, timeOut: 4000 });
     });

    this.perroForm.reset();
    window.location.reload();
    this.activeModal.close();
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.perroForm.reset();
    this.activeModal.close();
  }

  ngOnInit() {
    
    this.perroForm = this.formbuilder.group({
      edad: ["", [Validators.required, Validators.min(0)]],
      idPerro: ["", [Validators.required, Validators.min(0)]],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      raza: ["", [Validators.required, Validators.minLength(3)]],
      imagen: [this.imagenes[this.indexImagen], Validators.required]
    });

    this.perroService.getClientes().subscribe(clientes => {this.clientes = clientes;});

    if(localStorage.getItem('role')=='Cliente'){
      this.perroService.getCliente().subscribe(cliente => {
      this.clienteA = cliente;
      })
    }
  }

  //Hacer validator de que debe existir el cliente.

}
