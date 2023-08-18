import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IPriceSilverPrices} from "../../../models/silver-price-prices.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const SilverPriceAction = createActionGroup({
  source: 'SilverPrice',
  events: {
    'Load silverPrice': emptyProps(),
    'Load silverPrice Success': props<{payload: IPriceSilverPrices[]}>(),
    'Load silverPrice Failure': props<{error: HttpErrorResponse}>(),
  }
})
