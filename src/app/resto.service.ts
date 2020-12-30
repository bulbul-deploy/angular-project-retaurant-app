import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resto } from './resto';
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/retaurants";

  constructor(private http:HttpClient) { }

  getList(): Observable<Resto[]>{
    return this.http.get<Resto[]>(`${this.url}`);
  }
  
  saveResto(resto: Resto): Observable<Object>{
    return this.http.post(`${this.url}`, resto);
  }
  getCurrentRestoId(id: number): Observable<Resto>{
    return this.http.get<Resto>(`${this.url}/${id}`);
  }

  updateResto(id: number, resto: Resto): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, resto);
  }

  deleteResto(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }


}
