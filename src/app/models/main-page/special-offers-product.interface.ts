import {IProductColors} from "./product-colors.interface";
import {IStoneColors} from "./stone-colors.interface";
import {IProductSizes} from "./product-sizes.interface";
import {ISimilarProducts} from "./similar-products.interface";
import {ISetProducts} from "./setProducts.interface";
import {IProductSilverPrice} from "./product-silver-price.interface";
import {ISpecialProductCategory} from "./special-product-category.interface";
import {ISpecialProductFeature} from "./special-product-feature.interface";

export interface ISpecialOfferProduct {
  id: 0,
  title?: string,
  description?: string,
  bookmark?: boolean,
  defaultWeight?: number,
  fee?: number,
  discount?: number,
  status?: string,
  category?: ISpecialProductCategory,
  features?: ISpecialProductFeature[],
  colors?: IProductColors[],
  stoneColors?: IStoneColors[],
  sizes?: IProductSizes[],
  review?: string,
  silverPrice?: IProductSilverPrice,
  similarProducts?: ISimilarProducts[],
  setProducts?: ISetProducts[],
  isSet?: boolean,
  images: string[]
}
