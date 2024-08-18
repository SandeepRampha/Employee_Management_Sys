import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeApiService } from 'src/app/services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-db-emp-update',
  templateUrl: './db-emp-update.component.html',
  styleUrls: ['./db-emp-update.component.css']
})
export class DbEmpUpdateComponent implements OnInit {
  empId: number;
  employee: Partial<Employee> = { 
    empId: 0,
    empName: '',
    mobile: 0,
    email: '',
    location: '',
    dateOfJoining: null
  };

  constructor(
    private empService: EmployeeApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    this.empService.getEmployeeById(this.empId).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

  updateEmp() {
    if (this.empId) {
      this.employee.empId = this.empId;
    }

    this.empService.updateEmployee(this.empId, this.employee).subscribe(() => {
      // alert('Update Successful!!!');
      Swal.fire({
        title: "Updated!!!",
        text: "Updated Successfully!!!",
        icon: "success"
      });
      this.router.navigate(['/']);
    });
  }
}
