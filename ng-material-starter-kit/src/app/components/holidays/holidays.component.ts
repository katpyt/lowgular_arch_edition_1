import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holidays',
  styleUrls: ['./holidays.component.scss'],
  templateUrl: './holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysComponent {
  readonly list$: Observable<HolidaysModel[]> = this._holidaysService.getHolidays();

  constructor(private _holidaysService: HolidaysService) {
  }
}
