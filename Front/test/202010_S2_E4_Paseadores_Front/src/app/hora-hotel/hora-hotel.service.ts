import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HoraHotelDetail } from './hora-hotel-detail';

@Injectable({
  providedIn: 'root'
})
export class HoraHotelService {

private apiUrl = environment.baseUrl + 'horashotel';
constructor(private http: HttpClient) { }

getHorasHotel(): Observable<Array<HoraHotelDetail>>{
  return this.http.get<Array<HoraHotelDetail>>(this.apiUrl);  
}
getHoraHotel(id:number): Observable<HoraHotelDetail>{
  return this.http.get<HoraHotelDetail>(this.apiUrl+'/'+id);
}
}
