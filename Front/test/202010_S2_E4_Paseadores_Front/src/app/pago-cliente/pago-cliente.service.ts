import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PagoCliente } from './pago-cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoClienteService {

private apiUrl = environment.baseUrl + 'pagosCliente';

constructor(private http: HttpClient) { }

getPagosCliente(): Observable<PagoCliente[]> {
  return this.http.get<PagoCliente[]>(this.apiUrl);
}

getPagoClienteByReferencia(pagoClienteReferencia): Observable<PagoCliente> {
  return this.http.get<PagoCliente>(`${this.apiUrl}/referencia/${pagoClienteReferencia}`);
}


crearPagoCliente(nuevoPagoCliente : PagoCliente) : Observable<PagoCliente>{
  return this.http.post<PagoCliente>(this.apiUrl, nuevoPagoCliente);
}

}
