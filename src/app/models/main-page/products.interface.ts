import {IProductCategory} from "./product-category.interface";
import {IProductFeatures} from "./product-features.interface";
import {IProductColors} from "./product-colors.interface";
import {IStoneColors} from "./stone-colors.interface";
import {IProductSizes} from "./product-sizes.interface";
import {IProductSilverPrice} from "./product-silver-price.interface";
import {ISimilarProducts} from "./similar-products.interface";
import {ISetProducts} from "./setProducts.interface";

export interface IProducts {
  id: number,
  title?: string,
  description?: string,
  bookmark?: boolean,
  defaultWeight?: number,
  fee?: number,
  discount?: number,
  status?: string,
  category?: IProductCategory,
  features?: IProductFeatures[],
  colors?: IProductColors[],
  stoneColors?: IStoneColors[],
  sizes: IProductSizes[],
  review?: string,
  silverPrice?: IProductSilverPrice,
  similarProducts?: ISimilarProducts[],
  setProducts?: ISetProducts[],
  isSet?: boolean,
  images: string[]
}
