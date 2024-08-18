import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeApiService } from 'src/app/services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-emp-insert',
  templateUrl: './db-emp-insert.component.html',
  styleUrls: ['./db-emp-insert.component.css']
})
export class DbEmpInsertComponent {
alert() {
  alert("Inserted "+this.employee.empName+" Successfully!!!");
}
  employee: Employee = { 
    empId:0,
    empName: '',
    mobile: 0,
    email: '',
    location: '',
    dateOfJoining: null
  };

  constructor(private employeeService: EmployeeApiService, 
    private router: Router,) { }
    
  addEmployee(): void {
    this.employeeService.insertEmployee(this.employee).subscribe()
    this.employee.empId=0;
    this.employee.empName='';
    this.employee.mobile=0;
    this.employee.email='';
    this.employee.location='';
    this.employee.dateOfJoining=null;

  }

}
