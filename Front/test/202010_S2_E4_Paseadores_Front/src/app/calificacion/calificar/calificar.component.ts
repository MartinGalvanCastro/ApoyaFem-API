import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';
import { ClienteDetail } from 'src/app/cliente/cliente-detail';
import { ContratoPaseo } from 'src/app/contrato-Paseo/contrato-paseo';
import { ContratoPaseoService } from 'src/app/contrato-paseo/contrato-paseo.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css','../../paseadores.css']
})
export class CalificarComponent implements OnInit {
  calForm: FormGroup;
  clienteAct : ClienteDetail;

  comentarios: Calificacion[];
  constructor(private contratoPaseoService: ContratoPaseoService, private formBuilder: FormBuilder, private toastr: ToastrService, private calificacionService: CalificacionService) { }
  calificar(newCal: Calificacion) {

    this.contratoPaseoService.getContratoPaseo(newCal.contratoRecorrido).subscribe(
      contratoP => {
        newCal.contratoRecorrido = contratoP;

        this.calificacionService.createCalificacion(newCal).subscribe(cal => {
          console.log("El id de la calificación = " + cal.id);
          console.warn("La calificacion fue creada");
          this.showSuccess();
        });
    this.calForm.reset();
      }
    );
  }
  
  showSuccess() {
    this.toastr.success('¡Gracias por tus comentarios!',"Tu calificación fue publicada", { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.calForm.reset();
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  esPaseador(): boolean{
    return localStorage.getItem('role') == 'Paseador';
  }

  getCliente(): ClienteDetail{
    this.calificacionService.getCliente(localStorage.getItem('id'))
      .subscribe(cliente => {
        this.clienteAct = cliente;
      });
    return this.clienteAct;
  }

  ngOnInit() {
    this.getCliente();
    this.calForm = this.formBuilder.group({
      valoracion: ["", Validators.required],
      contratoRecorrido: [null, Validators.required],
      contratoPaseador: [null],
      contratoHotel: [null],
      comentario: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  strToTime(publishingdate: string): string {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  dateTime[0] + " " + timeHM[0] + ':'+ timeHM[1];
  }

}