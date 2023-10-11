import {IProducts} from "../../../models/main-page/products.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {QuickShowActions} from "../actions/quick-show.action";

export interface QuickShowState {
  quickShow?: IProducts,
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: QuickShowState = {
  quickShow: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const quickShowReducer = createReducer(
  initialState,
  on(QuickShowActions.loadQuickShow,(state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(QuickShowActions.loadQuickShowSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    quickShow: action.payload
  })),
  on(QuickShowActions.loadQuickShowFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
