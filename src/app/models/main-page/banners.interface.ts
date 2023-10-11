import {ICategory} from "../category.interface";

export interface IBanners {
  id: number,
  showInMobile?: boolean,
  image?: string,
  position?: number,
  category: ICategory
}
