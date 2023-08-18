import {createSelector} from "@ngrx/store";
import {selectSilverPriceFeature} from "./silve-price-feature.selector";
import {SilverPriceState} from "../reducers/silver-price.reducer";

export const selectSilverPrice = createSelector(selectSilverPriceFeature, (state: SilverPriceState) => state.silverPrice);

export const selectSilverPriceLoading = createSelector(selectSilverPriceFeature, (state: SilverPriceState) => state.loading);

export const selectSilverPriceSuccess = createSelector(selectSilverPriceFeature, (state: SilverPriceState) => state.success);

export const selectSilverPriceError = createSelector(selectSilverPriceFeature, (state: SilverPriceState) => state.error);
