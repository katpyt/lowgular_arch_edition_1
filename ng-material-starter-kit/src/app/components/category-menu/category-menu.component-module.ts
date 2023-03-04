import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryMenuComponent } from './category-menu.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonToggleModule, MatButtonModule, MatMenuModule],
  declarations: [CategoryMenuComponent],
  providers: [],
  exports: [CategoryMenuComponent]
})
export class CategoryMenuComponentModule {
}
