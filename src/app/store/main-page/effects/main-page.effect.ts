import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../modules/home/home.service";
import {MainPageAction} from "../actions/main-page.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {IApiResponse} from "../../../models/apiResponse.interface";
import {IMainPage} from "../../../models/main-page/mainPage.interface";

@Injectable()
export class MainPageEffect {
  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadMainPage$ = createEffect(() => {
    return this.action$.pipe(
      ofType(MainPageAction.loadMainPage),
      mergeMap(() => this.homeService.getMainPage().pipe(
        map((response: IApiResponse<IMainPage>) =>
        MainPageAction.loadMainPageSuccess({payload: response.data!})),
      catchError((error) => of(MainPageAction.loadMainPageFailure(error)))
    )),
    catchError((error) => of(MainPageAction.loadMainPageFailure(error)))
    )
})
}
