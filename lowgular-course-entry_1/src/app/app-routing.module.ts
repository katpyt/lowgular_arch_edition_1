import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeCreateComponent } from './ui/employee-create/employee-create.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { EmployeeCreateComponentModule } from './ui/employee-create/employee-create.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee-create', component: EmployeeCreateComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'employee-details/:id/:name', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmployeeCreateComponentModule,
    EmployeeServiceModule,
    EmployeeListComponentModule,
    EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
