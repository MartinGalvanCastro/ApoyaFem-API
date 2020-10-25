import { Component, OnInit, Input } from '@angular/core';
import { PerroDetail } from '..//perro-detail'
import { ActivatedRoute } from '@angular/router';
import { PerroService } from '../perro.service';

@Component({
  selector: 'app-perro-detail',
  templateUrl: './perro-detail.component.html',
  styleUrls: ['./perro-detail.component.css','../../paseadores.css']
})
export class PerroDetailComponent implements OnInit {

  @Input() perroDetail : PerroDetail;
  
  constructor(private route: ActivatedRoute, private perroService : PerroService) { }

  ngOnInit() {
    if(this.perroDetail === undefined)
    {
      this.perroService.getPerroDetail(this.route.snapshot.paramMap.get('id')).subscribe(recorrido => {
        this.perroDetail = recorrido;
      })
    }
    console.log(this.perroDetail.id);
  }

}
