import {IProducts} from "./products.interface";

export interface ISpecialOffers {
  id: number,
  name?: string,
  to?: string,
  products?: IProducts[]
}
