import {ISliderMainPage} from "./slider-mainPage.interface";
import {ICategory} from "../category.interface";
import {ISpecialOffers} from "./special-offers.interface";
import {IBanners} from "./banners.interface";
import {INewProducts} from "./new-products.interface";
import {IBestSellerProducts} from "./best-seller-products.interface";
import {IDiscountProducts} from "./discount-products.interface";
import {IMainPageCategoryProducts} from "./mainPage-Category-Products.interface";
import {ISimilarProducts} from "./similar-products.interface";

export interface IMainPage {
  sliders?: ISliderMainPage[],
  categories: ICategory[],
  specialOffers?: ISpecialOffers,
  similarProducts: ISimilarProducts[],
  banners?: IBanners[],
  newProducts?: INewProducts[],
  bestsellerProducts?: IBestSellerProducts[],
  discountProducts?: IDiscountProducts[],
  mainPageCategoryProducts?: IMainPageCategoryProducts[]
}
