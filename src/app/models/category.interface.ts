import {ISubCategories} from "./subCategories.interface";
import {ICategoryFeatures} from "./categoryFeatures.interface";
import {ICategorySizes} from "./categorySizes.interface";

export interface ICategory {
  id?: number,
  name?: string,
  image?: string,
  icon?: string,
  subCategories?: ISubCategories[]
  features?: ICategoryFeatures[],
  sizes?: ICategorySizes[]
}
