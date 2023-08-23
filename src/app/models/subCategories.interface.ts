import {ICategoryFeatures} from "./categoryFeatures.interface";
import {ICategorySizes} from "./categorySizes.interface";

export interface ISubCategories {
  id: number,
  name?: string,
  image?: string,
  icon?: string,
  subCategories?: string[],
  features?: ICategoryFeatures[],
  sizes?: ICategorySizes[]
}
