import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ContratoHotelDetail } from './contrato-hotel-detail';
import { Perro } from '../perro/perro';
import { Cliente } from '../cliente/cliente';
import { PagoCliente } from '../pago-cliente/pago-cliente';
import { HoraHotel } from '../hora-hotel/hora-hotel';
import { ClienteDetail } from '../cliente/cliente-detail';
import { HoraHotelDetail } from '../hora-hotel/hora-hotel-detail';


@Injectable({
  providedIn: 'root'
})
export class ContratoHotelService {

  private apiUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }
 
  getContratosHotel(): Observable<Array<ContratoHotelDetail>>{
    return this.http.get<Array<ContratoHotelDetail>>(this.apiUrl+'contratoshotel');
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

  crearContratoHotel(nuevoContrato : ContratoHotelDetail) : Observable<ContratoHotelDetail>{
    return this.http.post<ContratoHotelDetail>(this.apiUrl+'contratoshotel', nuevoContrato);
  }

  addHoraHotel(idContratoHotel: number, idHoraHotel: number, horaHotel: HoraHotel) : Observable<HoraHotelDetail>{
    return this.http.post<HoraHotelDetail>(this.apiUrl+'contratoshotel/'+idContratoHotel+ '/horashotel/'+idHoraHotel,horaHotel);
  }

  
  crearPagoCliente(nuevoPagoCliente : PagoCliente) : Observable<PagoCliente>{
    return this.http.post<PagoCliente>(this.apiUrl+'pagosCliente', nuevoPagoCliente);
  }
}
