import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { ClienteDetail } from './cliente-detail';
import { Cliente } from './cliente';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private apiUrl = environment.baseUrl + 'clientes';

constructor(private http: HttpClient) { }

getClientes() : Observable<ClienteDetail[]> {
  return this.http.get<ClienteDetail[]>(this.apiUrl);
}

createCliente(cliente:Cliente) : Observable<Cliente> {
  return this.http.post<Cliente>(this.apiUrl, cliente);
}

updateCliente(cliente:Cliente, clienteId) : Observable<Cliente> {
  return this.http.put<Cliente>(`${this.apiUrl}/${clienteId}`, cliente);
}

getClienteDetail(clienteId): Observable<ClienteDetail> {
  return this.http.get<ClienteDetail>(`${this.apiUrl}/${clienteId}`);
}

}
