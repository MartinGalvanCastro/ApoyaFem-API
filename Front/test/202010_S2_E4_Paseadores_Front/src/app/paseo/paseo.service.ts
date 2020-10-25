import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaseoDetail } from './paseoDetail';

import { environment } from '../../environments/environment';
import { Paseo } from './paseo';

@Injectable({
  providedIn: 'root'
})
export class PaseoService {
  
  private apiUrl = environment.baseUrl + 'paseos';

  constructor(private http: HttpClient) { }

  getPaseos(): Observable<Array<PaseoDetail>>{
    return this.http.get<Array<PaseoDetail>>(this.apiUrl);
  }

  getPaseo(id:string): Observable<PaseoDetail>{
    return this.http.get<PaseoDetail>(this.apiUrl + '/' + id);
  }

  crearPaseo(nuevoPaseo : Paseo) : Observable<Paseo>{
    return this.http.post<Paseo>(this.apiUrl, nuevoPaseo);
  }
}
