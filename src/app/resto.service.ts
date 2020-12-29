import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
