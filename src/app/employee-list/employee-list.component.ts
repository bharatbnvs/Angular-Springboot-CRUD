import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employeeservice';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees:Employee[];
  id!:number;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.getEmployeeList();
  }
  private getEmployeeList(){

           this.employeeService.getEmployeeList().subscribe(data =>{
           console.log(data);
           this.employees=data;


});

  }
   updateemployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
  findEmployee(id: number) {
    this.router.navigate(['details-employee', id]);
   }
  deleteUser(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployeeList();
    });
  }
  
}
