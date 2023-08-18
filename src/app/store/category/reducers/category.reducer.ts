import {ICategory} from "../../../models/category.interface";
import {createReducer, on} from "@ngrx/store";
import {CategoryAction} from "../actions/category.action";
import {HttpErrorResponse} from "@angular/common/http";

export interface CategoryState {
  category?: ICategory[];
  loading?: boolean;
  success?: boolean;
  error?: HttpErrorResponse;
}

export const initialState: CategoryState = {
  category: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const CategoryReducer = createReducer(
  initialState,
  on(CategoryAction.loadCategory, (state) => ({
    ...state,
    loading: true,
    success: undefined
  })),
  on(CategoryAction.loadCategorySuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    category: action.payload
  })),
  on(CategoryAction.loadCategoryFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
