import { Component, OnInit } from '@angular/core';
import { RecorridoDetail } from '../recorrido-detail';
import { RecorridoService } from '../recorrido.service';

@Component({
  selector: 'app-recorrido-listar',
  templateUrl: './recorrido-listar.component.html',
  styleUrls: ['./recorrido-listar.component.css','../../paseadores.css']
})
export class RecorridoListarComponent implements OnInit {

  selectedRecorrido: RecorridoDetail;
  selected = false;

  recorridos: Array<RecorridoDetail>;

  constructor(private recorridoService: RecorridoService) { }

  getRecorridos(): void {
    this.recorridoService.getRecorridos()
      .subscribe(recorridos => {
        this.recorridos = recorridos;
      });
  }
  ngOnInit() {
    this.getRecorridos();
  }

  onSelected(b: RecorridoDetail): void {
    this.selected = true;
    this.selectedRecorrido = b;
  }

}
