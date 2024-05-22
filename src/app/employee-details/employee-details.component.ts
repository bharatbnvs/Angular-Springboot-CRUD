import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  id!:number;
  employee:Employee;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){ }
  ngOnInit(): void {
    this.getByEmployeeId();
  }

  private getByEmployeeId(){
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
    next:(data)=>{
     this.employee=data;
        }
    });

}
}
