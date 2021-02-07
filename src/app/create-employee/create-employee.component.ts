import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import { Employee } from './../Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee:Employee=new Employee();
submitted=false;
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
  }


  save(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>
      {
        console.log(data)
        this.employee=new Employee();
        this.gotoList();
      },
      error=>console.log(error));
    }
      onSubmit(){
        this.submitted=true;
        this.save();
      }

      gotoList(){
        this.router.navigate(['/employees']);
      }
  }


