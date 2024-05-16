import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employeeservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService:EmployeeService,private router: Router){ }

  ngOnInit(): void {
  } 
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToEmployeeList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToEmployeeList() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
