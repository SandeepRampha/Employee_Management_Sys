import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../employee';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  _Baseurl="http://localhost:1234";
  constructor(private _http: HttpClient) { }

  getEmp(): Observable<Employee[]>
  {
    return this._http.get<Employee[]>(`${this._Baseurl}/ViewAll`);
  }

  getEmployeeById(empId: number): Observable<Employee> {
    return this._http.get<Employee>(`${this._Baseurl}/ViewById/${empId}`);
  }
  
  insertEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${this._Baseurl}/insert`, employee);
  }

  deleteEmployee(id:number): Observable<any>{
    return this._http.delete<any>(`${this._Baseurl}/DeleteById/${id}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Employee> {
    return this._http.patch<Employee>(`${this._Baseurl}/UpdateById/${empId}`, employee);
  }
}
