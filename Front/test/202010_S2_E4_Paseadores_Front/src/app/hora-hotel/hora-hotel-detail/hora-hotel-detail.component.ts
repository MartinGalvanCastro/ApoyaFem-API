import { Component, OnInit, Input } from '@angular/core';
import { HoraHotelDetail } from '../hora-hotel-detail';

@Component({
  selector: 'app-hora-hotel-detail',
  templateUrl: './hora-hotel-detail.component.html',
  styleUrls: ['./hora-hotel-detail.component.css', '../../paseadores.css']
})
export class HoraHotelDetailComponent implements OnInit {

  @Input() horaHotelDetail: HoraHotelDetail;
  
  constructor() { }

  ngOnInit() {
    console.log(this.horaHotelDetail.id)
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
