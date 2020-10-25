import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { PaseadorService } from '../paseador.service';
import { Paseador } from '../paseador';

@Component({
  selector: 'app-paseador-crear',
  templateUrl: './paseador-crear.component.html',
  styleUrls: ['./paseador-crear.component.css','../../paseadores.css']
})
export class PaseadorCrearComponent implements OnInit {

  paseadorFormulario: FormGroup;
  imagenes = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0JM0itXg28v2KRr2Ngh3b6yDhEcAFSHGC6EMwtk0fj7Qph206&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTcNrQj4LRFsJxyOv_L8ovgODPO9wueTQUdMHzzhCrKX5muE8w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQA-e0qNeoX2ByMe0eR_XVImDJvTjLhmb1GxPG6I90NmLwcB6h&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdT09GRkK-hOMcQ6UKzSA6hbA07tnxfdavrkwvlCE1Zidicd12&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIq85_6BRPPZxIv3lLDExgVx6VqrSNIqPzBs0TK-i_ZHBtCzDf&usqp=CAU'];

  indexImagen = Math.floor(Math.random() * 5);

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private paseadorService : PaseadorService) { }

  ngOnInit() {
    this.paseadorFormulario = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      identificacion: ["", [Validators.required, Validators.min(100000)]],
      correo: ["", [Validators.required, Validators.email]],
      telefono : ["", [Validators.required, Validators.min(1000000)]],
      cuentaBancaria: ["", [Validators.required, Validators.min(100000)]],
      eps: ["", [Validators.required, Validators.minLength(3)]],
      arl: ["", [Validators.required, Validators.minLength(3)]],
      imagen: [""]
    });
  }

  crearPaseo(nuevoPaseador : Paseador) {
    // Process checkout data here
    nuevoPaseador.calificacionGlobal = 0;
    nuevoPaseador.numeroCalificaciones = 0;
    if(nuevoPaseador.imagen == "") {
      nuevoPaseador.imagen = this.imagenes[this.indexImagen];
    }
    this.paseadorService.crearPaseador(nuevoPaseador).subscribe(paseador => {
    this.showSuccess();
    });
    this.paseadorFormulario.reset();

  }

  showSuccess() {
    this.toastr.success('Paseador creado exitosamente!', '', { "progressBar": true, timeOut: 4000 });
  }

  cancelarCreacion() {
    this.paseadorFormulario.reset();
  }

}
