import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './../Employee';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.employees=this.employeeService.getEmployee();
  }

  deleteEmployee(empId:number){
    this.employeeService.deleteEmployee(empId)
    .subscribe(data=>{
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error));
    
    
  }

 
  updateEmployee(empId:number){
    this.router.navigate(['update',empId]);
  }
employeeDetails(empId:number){
  this.router.navigate(['details',empId]);

}
}
