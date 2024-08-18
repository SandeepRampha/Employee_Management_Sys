import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeApiService } from 'src/app/services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-emp-list',
  templateUrl: './db-emp-list.component.html',
  styleUrls: ['./db-emp-list.component.css']
})
export class DbEmpListComponent {
  emplist: Employee[] = [];
  filteredEmplist: Employee[] = [];
  searchTerm: string = '';
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
    // aler(){
    //   alert("Deleted Successfully!!!");
    // }
  constructor(private Emp:EmployeeApiService,
     private _rout: Router,){}

  ngOnInit(){
    this.Emp.getEmp().subscribe(
      (res)=>{
        console.log("hello");
        this.emplist=res;
        this.filteredEmplist = res;
      }
    )
  }
  updateProduct(empId: number){
    this._rout.navigate(['/DbEmpUpd',empId]);
  }

  deleteEmployee(empId: number) {
    this.Emp.deleteEmployee(empId).subscribe(
      () => {
        Swal.fire({
          title: "Deleted!!!",
          text: "Deleted Successfully!!!",
          icon: "success"
        });
        this.emplist = this.emplist.filter(emp => emp.empId !== empId);
        this.filteredEmplist = this.filteredEmplist.filter(emp => emp.empId !== empId);
      }
    );
  }
  
  searchEmployees() 
  {
    if (this.searchTerm) {
      this.filteredEmplist = this.emplist.filter(emp => 
        emp.empId.toString().includes(this.searchTerm)||
        emp.empName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        emp.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmplist = this.emplist; // If search term is empty, show all employees
    }
  }

  sortEmployees(field: string)
  {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.filteredEmplist.sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];
      
      if (typeof valueA === 'string') valueA = valueA.toLowerCase();
      if (typeof valueB === 'string') valueB = valueB.toLowerCase();

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
