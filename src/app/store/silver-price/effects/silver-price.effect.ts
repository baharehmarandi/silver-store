import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../modules/home/home.service";
import {SilverPriceAction} from "../actions/silver-price.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {IApiResponse} from "../../../models/apiResponse.interface";
import { IPriceSilverResponse} from "../../../models/silver-price.interface";

@Injectable()
export class SilverPriceEffect {

  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadSilverPrice$ = createEffect(() => {
    return this.action$.pipe(
      ofType(SilverPriceAction.loadSilverPrice),
      mergeMap(() => this.homeService.getSilverPrice().pipe(
        map((response: IApiResponse<IPriceSilverResponse>) =>
        SilverPriceAction.loadSilverPriceSuccess({payload: response.data?.prices!})),
        catchError((error: HttpErrorResponse) => of(SilverPriceAction.loadSilverPriceFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(SilverPriceAction.loadSilverPriceFailure(error)))
    )
  })
}
