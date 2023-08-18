import {IPriceSilverPrices} from "../../../models/silver-price-prices.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {SilverPriceAction} from "../actions/silver-price.action";

export interface SilverPriceState {
  silverPrice?: IPriceSilverPrices[];
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: SilverPriceState = {
  silverPrice: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const SilverPriceReducer = createReducer(
  initialState,
  on(SilverPriceAction.loadSilverPrice, (state) => ({
    ...state,
    loading: true,
    success: undefined
  })),
  on(SilverPriceAction.loadSilverPriceSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    silverPrice: action.payload
  })),
  on(SilverPriceAction.loadSilverPriceFailure,(state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
