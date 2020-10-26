import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Psicologo } from '../paseo';
import { PaseoService } from '../paseo.service';

@Component({
  selector: 'app-paseo-crear',
  templateUrl: './paseo-crear.component.html',
  styleUrls: ['./paseo-crear.component.css','../../paseadores.css']
})
export class PaseoCrearComponent implements OnInit {

  paseoFormulario: FormGroup;
  duraciones : string[];

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private paseoService : PaseoService) { }

  ngOnInit() {
    this.paseoFormulario = this.formBuilder.group({
      cupoMaximo: ["", [Validators.required, Validators.min(1)]],
      costo: ["", [Validators.required, Validators.min(0)]],
      duracion: ["", Validators.required],
      fechaInicio : ["", Validators.pattern("[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]")],
      horaInicio: ["", [Validators.required, Validators.pattern("[0-9][0-9]:[0-9][0-9]")]]
    });
    this.duraciones = ['30 minutos', '60 minutos', '90 minutos'];
  }

  crearPaseo(nuevoPaseo : Psicologo) {
    // Process checkout data here
    let cupo : number = this.paseoFormulario.value.cupoMaximo;
    let costo : number = this.paseoFormulario.value.costo;
    let duracion : number;
    if (this.paseoFormulario.value.duracion == this.duraciones[0])
    {
      duracion = 30;
    }
    else if(this.paseoFormulario.value.duracion == this.duraciones[1])
    {
      duracion = 60;
    }
    else if(this.paseoFormulario.value.duracion == this.duraciones[2])
    {
      duracion = 90;
    }
    let hora : string = this.paseoFormulario.value.fechaInicio + "T" + this.paseoFormulario.value.horaInicio
    nuevoPaseo.horaInicio = hora;
    nuevoPaseo.duracion = duracion;
    nuevoPaseo.costo = costo;
    nuevoPaseo.cupoMaximo = cupo;
    nuevoPaseo.disponible = true;
    this.toastr.success('Paseo creado exitosamente!', nuevoPaseo.horaInicio, { "progressBar": true, timeOut: 4000 });
    this.paseoService.crearPaseo(nuevoPaseo).subscribe(paseo => {
    this.showSuccess();
    });
    this.paseoFormulario.reset();

  }

  showSuccess() {
    this.toastr.success('Paseo creado exitosamente!', '', { "progressBar": true, timeOut: 4000 });
  }

  cancelarCreacion() {
    this.paseoFormulario.reset();
  }

}
