import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL="http://localhost:8081/v1/service/emp";
  constructor( private Https:HttpClient) { }

getEmployeeList():Observable<Employee[]> {

  return this.Https.get<Employee[]>(`${this.baseURL}/getAll`);
}
getEmployeeById(id: number): Observable<Employee>{
  return this.Https.get<Employee>(`${this.baseURL}/${id}`);
}
updateEmployee(id: number,employee:Employee): Observable<Object>{
  return this.Https.put(`${this.baseURL}/${id}`,employee);
}
createEmployee(employee:Employee): Observable<Object>{
  return this.Https.post(`${this.baseURL}/saveEmp`,employee);
}
deleteEmployee(id:number): Observable<Object>{
  return this.Https.delete(`${this.baseURL}/${id}`);
}

  }

  