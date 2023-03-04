import {EmployeeCreateComponent} from "./ui/employee-create/employee-create.component";
import {EmployeeListComponent} from "./ui/employee-list/employee-list.component";
import {HomeComponent} from "./ui/home/home.component";

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employee-form',
    component: EmployeeCreateComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
