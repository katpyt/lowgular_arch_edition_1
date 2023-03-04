import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductDetailsParamsModel} from "../../models/product-details-params.model";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly params$: Observable<ProductDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id'] }))
  )

  readonly details$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getOne(data['id']))
  );

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }


}
