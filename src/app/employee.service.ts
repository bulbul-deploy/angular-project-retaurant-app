import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  url = "http://localhost:8080/api/v1/employees";

  constructor(private http:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}`);
  }

 
}
