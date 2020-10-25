import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaseadorDetail } from './paseador-detail';
import { HorarioDetail } from '../horario/horarioDetail';
import { Horario } from '../horario/horario';
import { Paseador } from './paseador';

@Injectable({
  providedIn: 'root'
})
export class PaseadorService {

  private apiUrl = environment.baseUrl ;

  constructor(private http : HttpClient) { }

  getPaseadores() : Observable<PaseadorDetail[]> {
    return this.http.get<PaseadorDetail[]>(this.apiUrl+ 'paseadores');
  }

  getPaseador(id : string) : Observable<PaseadorDetail> {
    return this.http.get<PaseadorDetail>(this.apiUrl+ 'paseadores' + "/" + id);
  }

  getPaseadorActual(): Observable<PaseadorDetail>{
    return this.http.get<PaseadorDetail>(this.apiUrl+'paseadores/'+localStorage.getItem('id'));
 }


  createHorario(Horario : Horario): Observable < Horario >{

    console.log('id Horario: '+Horario.id);
    console.log('ocupado Horario: '+Horario.ocupado);
    console.log('p1 Horario: '+Horario.paseo1);
    console.log('p2 Horario: '+Horario.paseo2);
    console.log('duracion Horario: '+Horario.duracion);
    console.log('dia Horario: '+Horario.dia);


    return this.http.post<Horario>(this.apiUrl+ 'paseadores', Horario);
  }
  

  getHorarios(): Observable<Array<Horario>>{
    return this.http.get<Array<Horario>>(this.apiUrl+'horarios');
  }

  getHorario(id:number): Observable<Horario>{
    return this.http.get<Horario>(this.apiUrl+'horarios/'+id);
  }

  addHorario(horarioId: number, Horario: Horario) : Observable<HorarioDetail>{

    console.log('id Horario: '+Horario.id);
    console.log('ocupado Horario: '+Horario.ocupado);
    console.log('p1 Horario: '+Horario.paseo1);
    console.log('p2 Horario: '+Horario.paseo2);
    console.log('duracion Horario: '+Horario.duracion);
    console.log('dia Horario: '+Horario.dia);

    console.log('dia Horario: '+ HorarioDetail);

    return this.http.post<HorarioDetail>(this.apiUrl+'paseadores/'+ localStorage.getItem('id') + '/horarios/'+horarioId,Horario);
  }

  crearPaseador(paseador : Paseador) : Observable<Paseador> {
    return this.http.post<Paseador>(this.apiUrl+ 'paseadores', paseador);
  }

}
