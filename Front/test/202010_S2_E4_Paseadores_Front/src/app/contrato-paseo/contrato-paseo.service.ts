import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContratoPaseo } from './contrato-paseo';
import { Observable } from 'rxjs';
import { HoraHotel } from '../hora-hotel/hora-hotel';
import { ClienteDetail } from '../cliente/cliente-detail';
import { Perro } from '../perro/perro';
import { PagoCliente } from '../pago-cliente/pago-cliente';

@Injectable({
  providedIn: 'root'
})
export class ContratoPaseoService {

  private apiUrl = environment.baseUrl + 'contratosPaseo';

  constructor(private http: HttpClient) { }
  
  getContratosPaseo(): Observable<ContratoPaseo[]> {
    return this.http.get<ContratoPaseo[]>(this.apiUrl);
  }

  getContratoPaseo(contratoId): Observable<ContratoPaseo> {
    return this.http.get<ContratoPaseo>(`${this.apiUrl}/${contratoId}`);
  }

  crearContratoPaseo(nuevoContratoPaseo : ContratoPaseo) : Observable<ContratoPaseo>{
    return this.http.post<ContratoPaseo>(this.apiUrl, nuevoContratoPaseo);
  }

  getPerros(): Observable<Array<Perro>>{
    return this.http.get<Array<Perro>>(this.apiUrl+'perros');
  }

  getClientes(): Observable<Array<ClienteDetail>>{
    return this.http.get<Array<ClienteDetail>>(this.apiUrl+'clientes');
  }

  getCliente(): Observable<ClienteDetail>{
    return this.http.get<ClienteDetail>(this.apiUrl+'clientes/'+localStorage.getItem('id'));
  }

  getHorasHotel(): Observable<Array<HoraHotel>>{
    return this.http.get<Array<HoraHotel>>(this.apiUrl+'horashotel');
  }

  getHoraHotel(id:number): Observable<HoraHotel>{
    return this.http.get<HoraHotel>(this.apiUrl+'horashotel/'+id);
  }

  getPagosCliente(): Observable<Array<PagoCliente>>{
    return this.http.get<Array<PagoCliente>>(this.apiUrl+'pagosCliente');
  }
  
  crearPagoCliente(nuevoPagoCliente : PagoCliente) : Observable<PagoCliente>{
    return this.http.post<PagoCliente>(this.apiUrl+'pagosCliente', nuevoPagoCliente);
  }
}


