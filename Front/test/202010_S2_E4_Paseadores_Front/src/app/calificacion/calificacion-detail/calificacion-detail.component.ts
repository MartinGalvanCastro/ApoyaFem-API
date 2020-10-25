import { Component, OnInit, Input } from '@angular/core';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css','../../paseadores.css']
})
export class CalificacionDetailComponent implements OnInit {

  @Input() calificacion: Calificacion;
  @Input() autor: string;
  @Input() img: string;

  constructor() { }

  ngOnInit() {
    console.log("calificacion");
  }

  getAutor(): string{
    return this.autor;
  }

  getImg(): string{
    return this.img;
  }
}

