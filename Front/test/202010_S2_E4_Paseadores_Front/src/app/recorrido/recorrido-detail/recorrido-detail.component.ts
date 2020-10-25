import { Component, OnInit, Input } from '@angular/core';
import { RecorridoDetail } from '../recorrido-detail';
import { RecorridoService } from '../recorrido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recorrido-detail',
  templateUrl: './recorrido-detail.component.html',
  styleUrls: ['./recorrido-detail.component.css','../../paseadores.css']
})
export class RecorridoDetailComponent implements OnInit {

  @Input() recorridoDetail: RecorridoDetail;

  formatter = new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP', minimumFractionDigits:2});

  constructor(private route: ActivatedRoute, private recorridoService : RecorridoService) { }

  ngOnInit() {
    if(this.recorridoDetail === undefined)
    {
      this.recorridoService.getRecorrido(this.route.snapshot.paramMap.get('id')).subscribe(recorrido => {
        this.recorridoDetail = recorrido;
      })
    }
    console.log(this.recorridoDetail.id);
  }

  strToTime(publishingdate: string): String {
    //console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  dateTime[0] + " " + timeHM[0] + ':'+ timeHM[1];
  }
}

