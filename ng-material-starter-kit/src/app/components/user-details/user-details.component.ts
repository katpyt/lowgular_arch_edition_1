import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserDetailsParamsModel } from '../../models/user-details-params.model';
import { UserService } from '../../services/user.service';
import {UserDetailsModel} from "../../models/user-details.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly params$: Observable<UserDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id'] }))
  )

  readonly details$: Observable<UserDetailsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getUserDetails(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
