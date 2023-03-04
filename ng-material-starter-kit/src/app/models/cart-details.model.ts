import {ProductsInCart} from "./cart-products-in-cart.model";

export interface CartDetailsModel {
  readonly id: number;
  readonly userId: number;
  readonly date: any;
  readonly products?: ProductsInCart[];
  readonly __v: number;
}

