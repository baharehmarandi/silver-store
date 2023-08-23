import {ICategoryFeatures} from "./categoryFeatures.interface";
import {ICategorySizes} from "./categorySizes.interface";

export interface ICategory {
  id: number,
  name?: string,
  image?: string,
  icon?: string,
  subCategories?: ICategory[]
  features?: ICategoryFeatures[],
  sizes?: ICategorySizes[]
}
