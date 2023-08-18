import {createSelector} from "@ngrx/store";
import {selectCategoryFeature} from "./category-feature.selector";
import {CategoryState} from "../reducers/category.reducer";

export const selectCategory = createSelector(selectCategoryFeature, (state: CategoryState) => state.category);

export const selectCategoryLoading = createSelector(selectCategoryFeature, (state: CategoryState) => state.loading);

export const selectCategorySuccess = createSelector(selectCategoryFeature, (state: CategoryState) => state.success);

export const selectCategoryError = createSelector(selectCategoryFeature, (state: CategoryState) => state.error);
