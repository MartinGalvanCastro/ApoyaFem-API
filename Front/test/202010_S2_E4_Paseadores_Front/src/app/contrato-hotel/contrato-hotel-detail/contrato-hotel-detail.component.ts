import { Component, OnInit, Input } from '@angular/core';
import { ContratoHotelDetail } from '../contrato-hotel-detail';

@Component({
  selector: 'app-contrato-hotel-detail',
  templateUrl: './contrato-hotel-detail.component.html',
  styleUrls: ['./contrato-hotel-detail.component.css', '../../paseadores.css']
})
export class ContratoHotelDetailComponent implements OnInit {

  @Input() contratoHotelDetail: ContratoHotelDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.contratoHotelDetail.id);
  }

  strToDate(publishingdate: string): String {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const date: string = dateTime[0];
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return date ;
  }

  strToTime(publishingdate: string): String {
    console.log(publishingdate);
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  timeHM[0] + ':'+ timeHM[1];
  }

}

