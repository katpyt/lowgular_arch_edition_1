import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AgePredictionParamsModel } from '../../models/age-prediction-params.model';
import { AgePredictionService } from '../../services/age-prediction.service';
import { AgePredictionModel } from "../../models/age-prediction.model";

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly params$: Observable<AgePredictionParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({ name: params['name'] }))
  )
  readonly age$: Observable<AgePredictionModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._agePredictionService.predictAge(data['name']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _agePredictionService: AgePredictionService) {
  }
}
