import {IProductColors} from "./product-colors.interface";
import {IStoneColors} from "./stone-colors.interface";
import {IProductSizes} from "./product-sizes.interface";
import {IProductSilverPrice} from "./product-silver-price.interface";

export interface IProductSliderMainPage {
  id: number,
  title?: string,
  description?: string,
  defaultWeight?: number,
  fee?: number,
  discount?: number,
  status?: string,
  colors?: IProductColors[],
  stoneColors?: IStoneColors[],
  sizes?: IProductSizes[],
  silverPrice?: IProductSilverPrice
}


