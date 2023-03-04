import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryHorizontalCheckboxListComponent } from './category-horizontal-checkbox-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoryHorizontalCheckboxListComponent],
  providers: [],
  exports: [CategoryHorizontalCheckboxListComponent]
})
export class CategoryHorizontalCheckboxListComponentModule {
}
