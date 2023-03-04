import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryNameModel } from '../../models/category-name.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  styleUrls: ['./category.component.scss'],
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  readonly list$: Observable<CategoryNameModel[]> = this._categoryService.getCategories();

  constructor(private _categoryService: CategoryService) {
  }
}
