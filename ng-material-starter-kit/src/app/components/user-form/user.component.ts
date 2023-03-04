import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl( null,[Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    street: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required])
  });

  constructor(private _registerUserService: UserService) {
  }

  onUserFormSubmitted(userForm: FormGroup) {
    this._registerUserService.registerNewUser({
      email: userForm.get('email')?.value,
      username: userForm.get('username')?.value,
      password: userForm.get('password')?.value,
      name: { firstname: userForm.get('firstname')?.value, lastname: userForm.get('lastname')?.value },
      address: {city: userForm.get('city')?.value},
      street: userForm.get('street')?.value,
      number: userForm.get('number')?.value,
      zipcode: userForm.get('zipcode')?.value,
      phone: userForm.get('phone')?.value,
    }).subscribe();
  }
}
