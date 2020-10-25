import { Component, OnInit, Input } from '@angular/core';
import { PagoPaseadorDetail } from '../pago-paseador-detail';

@Component({
  selector: 'app-pago-paseador-detail',
  templateUrl: './pago-paseador-detail.component.html',
  styleUrls: ['./pago-paseador-detail.component.css', '../../paseadores.css']
})
export class PagoPaseadorDetailComponent implements OnInit {

  @Input() pagoPaseadorDetail : PagoPaseadorDetail;

  constructor() { }

  ngOnInit() {
  }

  formatoDia(publishingdate: string): string {
    return publishingdate.split('T')[0];
  }

}
