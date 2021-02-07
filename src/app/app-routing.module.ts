import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import{EmployeeListComponent} from './employee-list/employee-list.component';
import{UpdateEmployeeComponent} from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employees',component:EmployeeListComponent},
  {path:'add',component:CreateEmployeeComponent},
  {path:'update/:empId',component:UpdateEmployeeComponent},
  {path:'details/:empId',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
