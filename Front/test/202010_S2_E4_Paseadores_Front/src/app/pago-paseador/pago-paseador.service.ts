import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PagoPaseadorDetail } from './pago-paseador-detail';

@Injectable({
  providedIn: 'root'
})
export class PagoPaseadorService {

  private apiUrl = environment.baseUrl + 'pagosPaseadores'

  constructor( private http : HttpClient) { }

  getPagosPaseadores() : Observable<PagoPaseadorDetail[]> {
    return this.http.get<PagoPaseadorDetail[]>(this.apiUrl);
  }
}
