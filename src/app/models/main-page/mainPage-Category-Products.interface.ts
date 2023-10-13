import {IProducts} from "./products.interface";

export interface IMainPageCategoryProducts {
  id: number,
  name?: string,
  products?: IProducts[]
}
