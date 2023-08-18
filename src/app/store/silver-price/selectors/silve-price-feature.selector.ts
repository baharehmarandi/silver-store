import {createFeatureSelector} from "@ngrx/store";
import {SilverPriceState} from "../reducers/silver-price.reducer";

export const selectSilverPriceFeature = createFeatureSelector<SilverPriceState>('silverPrice');
