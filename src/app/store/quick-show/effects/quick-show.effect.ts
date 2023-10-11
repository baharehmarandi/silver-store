import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../../../shared/product/product.service";
import {QuickShowActions} from "../actions/quick-show.action";
import {catchError, map, of, switchMap} from "rxjs";
import {IProducts} from "../../../models/main-page/products.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {IApiResponse} from "../../../models/apiResponse.interface";

@Injectable()
export class QuickShowEffects {
  constructor(private action$: Actions,
              private productService: ProductService) {}

  loadQuickShow$ = createEffect(() => {
    return this.action$.pipe(
      ofType(QuickShowActions.loadQuickShow),
      switchMap((action) => this.productService.getProductQuickShow(action.id).pipe(
        map((response: IApiResponse<IProducts>) =>
          QuickShowActions.loadQuickShowSuccess ({payload: response.data!})),
        catchError((error: HttpErrorResponse) => of(QuickShowActions.loadQuickShowFailure(error)))
      )),
      catchError((error:HttpErrorResponse) => of(QuickShowActions.loadQuickShowFailure(error)))
    )
  });
}
