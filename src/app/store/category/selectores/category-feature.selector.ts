import {createFeatureSelector} from "@ngrx/store";
import {CategoryState} from "../reducers/category.reducer";

export const selectCategoryFeature = createFeatureSelector<CategoryState>('Category');
