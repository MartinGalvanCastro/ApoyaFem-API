import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecorridoDetail } from './recorrido-detail';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecorridoService {
  private apiUrl = environment.baseUrl + 'usuarios/Abogado/';

  constructor(private http: HttpClient) { }

  getRecorridos(): Observable<RecorridoDetail[]> {
    return this.http.get<RecorridoDetail[]>(this.apiUrl);
  }

  getRecorrido(id: string): Observable<RecorridoDetail> {
    return this.http.get<RecorridoDetail>(this.apiUrl + "/" + id);
  }
}
