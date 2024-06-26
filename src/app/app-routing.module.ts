import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
  
{path:'employee', component: EmployeeListComponent},
{path: '', redirectTo: 'employee', pathMatch: 'full' },
{path: 'create-employee', component: EmployeeCreateComponent},
{path: 'update-employee/:id', component: EmployeeUpdateComponent },
{path: 'details-employee/:id', component: EmployeeDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
