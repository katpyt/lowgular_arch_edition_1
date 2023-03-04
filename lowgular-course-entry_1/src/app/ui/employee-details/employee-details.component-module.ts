import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponentModule {
}
