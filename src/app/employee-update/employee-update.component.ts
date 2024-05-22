import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employeeservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent implements OnInit {

id!:number;
employee:Employee;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){ }
  ngOnInit(): void {
    this.getByEmployeeId();
  }

  private getByEmployeeId(){
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
    data=>{
     this.employee=data;
        }
    );

  }
  private updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
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
    this.updateEmployee();
  }
}
