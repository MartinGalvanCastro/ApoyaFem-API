import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Punto } from './punto';

@Injectable({
  providedIn: 'root'
})
export class PuntoService {

  private apiUrl = environment.baseUrl + 'puntos';

  constructor(private http: HttpClient) { }

  crearPunto(nuevoPunto : Punto) : Observable<Punto>{
    return this.http.post<Punto>(this.apiUrl, nuevoPunto);
  }

}
