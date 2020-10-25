import { Component, OnInit, Input } from '@angular/core';
import { PaseoDetail } from '../paseoDetail';
import { PaseoService } from '../paseo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paseo-detail',
  templateUrl: './paseo-detail.component.html',
  styleUrls: ['./paseo-detail.component.css','../../paseadores.css']
})
export class PaseoDetailComponent implements OnInit {

  @Input() paseoDetail: PaseoDetail;

  formatter = new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP', minimumFractionDigits:2});

  constructor(private route: ActivatedRoute, private paseoService: PaseoService) { }

  ngOnInit() {
    if(this.paseoDetail === undefined)
    {
      this.paseoService.getPaseo(this.route.snapshot.paramMap.get('id')).subscribe(pas => {
        this.paseoDetail = pas;
      })
    }
    console.log(this.paseoDetail.id);
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
    return  dateTime[0] + " " + timeHM[0] + ':'+ timeHM[1];
  }

  reservar(): void{

  }

  esAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  esCliente(): boolean{
    return localStorage.getItem('role') == 'Cliente';
  }

}
