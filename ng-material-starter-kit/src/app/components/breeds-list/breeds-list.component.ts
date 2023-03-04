import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BreedsListModel } from '../../models/breeds-list.model';
import { DogBreedsService } from '../../services/dog-breeds.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedsListComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  readonly getAllBreeds$: Observable<BreedsListModel[]> = this._dogBreedsService.getAll();

  constructor(private _activatedRoute: ActivatedRoute, private _dogBreedsService: DogBreedsService) {
  }
}
