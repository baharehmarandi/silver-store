import {ISpecialOfferProduct} from "./special-offers-product.interface";

export interface ISpecialOffers {
  id: number,
  name?: string,
  to?: string,
  products?: ISpecialOfferProduct[]
}
