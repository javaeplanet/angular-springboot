import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8080/employees/getEmployees';
  private baseUrl1='http://localhost:8080/employees/saveEmployee';
private baseUrl2='http://localhost:8080/employees/getOne';
private baseUrl3='http://localhost:8080/employees/updateEmployee';
private baseUrl4='http://localhost:8080/employees/deleteEmployee';

  constructor(private http:HttpClient) { }

  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, employee);
  }

  getEmployee():Observable<any>{
    return this.http.get(`${this.baseUrl}`);

  }
  deleteEmployee(empId:number):Observable<any>{
    return this.http.delete(`${this.baseUrl4}/${empId}`, {responseType:'text'});
  }

  updateEmployee(empId:number, value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl3}/${empId}`, value);
  }
  createEmployeeById(empId:number):Observable<any>{
    return this.http.get(`${this.baseUrl2}/${empId}`)
  }
}
