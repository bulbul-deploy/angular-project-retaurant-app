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

  getList(){
    return this.http.get(this.url);
  }
  
  saveResto(data: any){
    //console.warn("service",data);
    return this.http.post(this.url,data);
  }
  deleteResto(id: any){

    return this.http.delete(`${this.url}/${id}`);
    
  }
  getCurrentResto(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  getCurrentRestoId(id: number): Observable<Resto>{
    return this.http.get<Resto>(`${this.url}/${id}`);
  }
  updateResto(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
