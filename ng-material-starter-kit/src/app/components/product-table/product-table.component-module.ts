import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table.component';

@NgModule({
  imports: [MatTableModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
