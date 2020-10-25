import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Paseador } from '../paseador';
import { PaseadorService } from '../paseador.service';
import { Horario } from 'src/app/horario/horario';
import { PaseadorDetail } from '../paseador-detail';
import { HorarioDetail } from 'src/app/horario/horarioDetail';


@Component({
  selector: 'app-registrar-horario',
  templateUrl: './registrar-horario.component.html',
  styleUrls: ['./registrar-horario.component.css','../../paseadores.css']
})
export class RegistrarHorarioComponent implements OnInit {

  
  horarioForm: FormGroup;
  paseadorA : Paseador;
  paseadores: Paseador[];
  
  //Paseadores: Array<Paseador>;
  //PaseadoresS: Paseador[];
 // PaseadorV: Paseador;

 

  constructor(
    private activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private PaseadorService : PaseadorService
  ) { }

  createHorario(newHorario : HorarioDetail) {

    let dia : any = this.horarioForm.value.dia;
    let ocupado : boolean = this.horarioForm.value.ocupado ;
    let duracio : number = this.horarioForm.value.duracion ;

    console.log(dia);
    console.log(ocupado);
    console.log(duracio);

    newHorario.duracion = duracio; 
    newHorario.dia = dia  ;
    newHorario.ocupado = ocupado;

    newHorario.Paseadores = this.paseadores; 
  
    

    this.PaseadorService.addHorario( newHorario.id, newHorario ).subscribe(hor => {
    console.log(hor.id);
    console.warn("El Horario fue creado", newHorario);
    this.toastr.success('Horario creado exitosamente!', " " , { "progressBar": true, timeOut: 4000 });
     });

     this.horarioForm.reset();
     window.location.reload();
     this.activeModal.close();
  }



  cancelnewHorarioCreation() {
    console.log("Cancelando ...");
    this.horarioForm.reset();
    this.activeModal.close();
  }

  ngOnInit() {
    this.horarioForm = this.formbuilder.group({
      duracion: ["",Validators.required],
      dia: ["", [Validators.required, Validators.pattern("[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]")]],
      ocupado: ["",Validators.required]
    });

    this.PaseadorService.getPaseadores().subscribe(paseadores => {this.paseadores = paseadores})

    if(localStorage.getItem('role')=='Paseador'){
      this.PaseadorService.getPaseadorActual().subscribe(paseador => {
      this.paseadorA = paseador;
      })
    }

  }

}
