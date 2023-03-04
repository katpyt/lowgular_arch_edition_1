import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryNameModel } from '../../models/category-name.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-horizontal-checkbox-list',
  styleUrls: ['./category-horizontal-checkbox-list.component.scss'],
  templateUrl: './category-horizontal-checkbox-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryHorizontalCheckboxListComponent {
  readonly list$: Observable<CategoryNameModel[]> = this._categoryService.getCategories();

  constructor(private _categoryService: CategoryService) {
  }
}
