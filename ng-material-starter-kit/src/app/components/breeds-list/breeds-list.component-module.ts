import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreedsListComponent } from './breeds-list.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule, CommonModule, MatGridListModule],
  declarations: [BreedsListComponent],
  providers: [],
  exports: [BreedsListComponent]
})
export class BreedsListComponentModule {
}
