import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, NgIf, MatInputModule, MatButtonModule],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent]
})
export class UserComponentModule {
}
