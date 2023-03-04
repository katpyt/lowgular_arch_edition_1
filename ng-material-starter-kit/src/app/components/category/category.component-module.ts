import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryComponent } from './category.component';
import { NgForOf } from '@angular/common';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, NgForOf, CommonModule, MatListModule],
  declarations: [CategoryComponent],
  providers: [],
  exports: [CategoryComponent]
})
export class CategoryComponentModule {
}
