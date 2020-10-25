import { Component, OnInit } from '@angular/core';
import { HoraHotelService } from '../hora-hotel.service';
import { HoraHotelDetail } from '../hora-hotel-detail';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-hora-hotel-listar',
  templateUrl: './hora-hotel-listar.component.html',
  styleUrls: ['./hora-hotel-listar.component.css', '../../paseadores.css']
})
export class HoraHotelListarComponent implements OnInit {


  constructor(private horaHotelService: HoraHotelService) { }
  horasHotel: Array<HoraHotelDetail>;

  selectedHoraHotel: HoraHotelDetail;
  selected = false;
  crearNuevo = false;

  alSeleccionar() {
    this.crearNuevo = !this.crearNuevo;
  }

  getHorasHotel(): void {
    this.horaHotelService.getHorasHotel()
    .subscribe(horasHotel => {
      this.horasHotel = horasHotel;
      this.addEvents(this.horasHotel);
    });
  }
  ngOnInit() {
    this.getHorasHotel();
  }

  
  onSelected(h: HoraHotelDetail): void{
    this.selected = true;
    this.selectedHoraHotel = h;
  }

  strToDate(publishingdate: string): String {
    const dateTime: string[] = publishingdate.split('T');
    const date: string = dateTime[0];
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return date ;
  }

  strToTime(publishingdate: string): String {
    const dateTime: string[] = publishingdate.split('T');
    const timeSec: string = dateTime[1];
    const timeHM: String[] = timeSec.split(':');
    return  timeHM[0] + ':'+ timeHM[1];
  }
 


  calendarPlugins = [dayGridPlugin];
  calendarEvents = [{}];
  color = '#fd7e14';
  addEvents(horasHotel: HoraHotelDetail[]){
    horasHotel.forEach(h => {
      let d = h.dia.split('T')[0];
      this.calendarEvents = this.calendarEvents.concat({title: 'Hotel', date:d, id: h.id});
    })
    console.log(this.calendarEvents);
  }

  handleDateClick(arg) { // handler method
    console.log(arg);
    console.log(arg.event.start);
    let f = arg.event.start;
    let id = arg.event.id;
    console.log(new Date(f));
    console.log(id);
    
    this.horaHotelService.getHoraHotel(id).subscribe(horaHotel => {
      console.log(horaHotel);
      this.onSelected(horaHotel);
    })
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }
}
