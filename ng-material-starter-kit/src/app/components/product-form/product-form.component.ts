import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Observable } from "rxjs";
import { CategoryNameModel } from "../../models/category-name.model";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {

  categoryList$: Observable<CategoryNameModel[]> = this._productService.getCategoryList();

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    price: new FormControl(null),
    description: new FormControl(null),
    category: new FormControl(null),
    image: new FormControl(null)
  });

  constructor(private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      title: productForm.get('title')?.value,
      category: productForm.get('category')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value
    }).subscribe();
  }
}
