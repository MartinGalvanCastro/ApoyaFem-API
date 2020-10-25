import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaseoDetail } from '../paseo/paseoDetail';
import { environment } from '../../environments/environment';
import { Paseo } from '../paseo/paseo';
import { ContratoHotelDetail } from '../contrato-hotel/contrato-hotel-detail';
import { Calificacion } from './calificacion';
import { ClienteDetail } from '../cliente/cliente-detail';
import { ContratoPaseo } from '../contrato-Paseo/contrato-paseo';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPaseo(v: Paseo): Observable<PaseoDetail>{
    return this.http.get<PaseoDetail>(this.apiUrl + 'paseos/' + v.id);
  }

  getCliente(id: String): Observable<ClienteDetail>{
    return this.http.get<ClienteDetail>(this.apiUrl + 'clientes/' + id);
  }

  getHoteles(): Observable<ContratoHotelDetail[]>{
    return this.http.get<ContratoHotelDetail[]>(this.apiUrl + 'contratoshotel/');
  }


  createCalificacion(calificacion:Calificacion) : Observable<Calificacion> {
    return this.http.post<Calificacion>(this.apiUrl + 'calificaciones/', calificacion);
  }

  getContratoPaseo(id : String) : Observable<ContratoPaseo> {
    return this.http.get<ContratoPaseo>(this.apiUrl + 'contratosPaseo/' + id);
  }
}

