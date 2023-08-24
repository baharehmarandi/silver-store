import {ICategory} from "../category.interface";
import {IProductSliderMainPage} from "./product-slider-mainPage.interface";

export interface ISliderMainPage {
  id: number,
  image?: string,
  description?: string,
  category?: ICategory,
  product?: IProductSliderMainPage
}
