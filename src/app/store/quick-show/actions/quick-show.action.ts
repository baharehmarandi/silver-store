import {createActionGroup, props} from "@ngrx/store";
import {IProducts} from "../../../models/main-page/products.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const QuickShowActions = createActionGroup({
  source: 'QuickShow',
  events: {
    'Load Quick Show': props<{id: number}>(),
    'Load Quick Show Success': props<{payload: IProducts}>(),
    'Load Quick Show Failure': props<{error: HttpErrorResponse}>()
  }
})
