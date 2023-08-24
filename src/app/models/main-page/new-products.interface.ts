import {IProductSilverPrice} from "./product-silver-price.interface";

export interface INewProducts {
  id: number,
  title?: string,
  description?: string,
  images?: string[],
  defaultWeight?: number,
  fee?: number,
  discount?: number,
  status?: string,
  bookmark?: boolean,
  silverPrice: IProductSilverPrice
}
