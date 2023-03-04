import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {CartDetailsParamsModel} from "../../models/cart-details-params.model";
import {CartService} from "../../services/cart.service";
import {CartDetailsModel} from "../../models/cart-details.model";
import {ProductsInCart} from "../../models/cart-products-in-cart.model";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CartComponent {
  getProductsQuantity(productsInCartArray?: ProductsInCart[]){
    return productsInCartArray?.reduce((acc,cur) => acc+cur.quantity,0);
  }

  readonly params$: Observable<CartDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id'] }))
  );

  readonly details$: Observable<CartDetailsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartService.getCart(data['id']))
  );

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }

}
