import {
   Injectable
} from '@angular/core';
import {
   Observable
} from 'rxjs';
import {
   HttpClient
} from '@angular/common/http';
import {
   environment
} from 'src/environments/environment';
import {
   PerroDetail
} from './perro-detail';
import {
   Perro
} from './perro';
import { ClienteDetail } from '../cliente/cliente-detail';



@Injectable({
   providedIn: 'root'
})

export class PerroService {
   private apiUrl = environment.baseUrl ;

   constructor(private http: HttpClient) {}

   getPerros(): Observable < PerroDetail[] > {
      return this.http.get < PerroDetail[] > (this.apiUrl+ 'perros');
   }

   createPerro(perro: Perro): Observable <Perro> {
      return this.http.post <Perro> (this.apiUrl+ 'perros', perro);
   }

   getPerroDetail(perroId:string): Observable < PerroDetail > {
      return this.http.get < PerroDetail > (this.apiUrl+ 'perros' + '/' + perroId);
   }

   getClientes(): Observable<Array<ClienteDetail>>{
      return this.http.get<Array<ClienteDetail>>(this.apiUrl+'clientes');
   }
  
   getCliente(): Observable<ClienteDetail>{
      return this.http.get<ClienteDetail>(this.apiUrl+'clientes/'+localStorage.getItem('id'));
    }



}