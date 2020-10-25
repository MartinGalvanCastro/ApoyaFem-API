import { Component, OnInit, Input } from '@angular/core';
import { RecorridoDetail } from '../recorrido-detail';
import { RecorridoService } from '../recorrido.service';

@Component({
  selector: 'app-recorrido-preview',
  templateUrl: './recorrido-preview.component.html',
  styleUrls: ['./recorrido-preview.component.css','../../paseadores.css']
})
export class RecorridoPreviewComponent implements OnInit {
  @Input() id: string;

  recorrido : RecorridoDetail;

  constructor(private recorridoService : RecorridoService) { }

  ngOnInit() {
    this.recorridoService.getRecorrido(this.id).subscribe(rec => {
      this.recorrido = rec;
    })
    
  }

}
