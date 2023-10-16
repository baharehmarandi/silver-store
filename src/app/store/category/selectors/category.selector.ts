import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CategoryState} from "../reducers/category.reducer";

export const selectCategoryFeature = createFeatureSelector<CategoryState>('Category');

export const selectCategory = createSelector(selectCategoryFeature, (state: CategoryState) => state.category);

export const selectCategoryLoading = createSelector(selectCategoryFeature, (state: CategoryState) => state.loading);

export const selectCategorySuccess = createSelector(selectCategoryFeature, (state: CategoryState) => state.success);

export const selectCategoryError = createSelector(selectCategoryFeature, (state: CategoryState) => state.error);
