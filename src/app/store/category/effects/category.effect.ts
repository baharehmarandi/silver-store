import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../modules/home/home.service";
import {LoadCategoryAction, LoadCategoryFailureAction, LoadCategorySuccessAction} from "../actions/category.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {ICategory} from "../../../models/category.interface";
import {IApiResponseList} from "../../../models/apiResponseList.interface";

@Injectable()
export class CategoryEffect {
  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoadCategoryAction),
      mergeMap(() => this.homeService.getCategoryList().pipe(
        map((response: IApiResponseList<ICategory>) =>
        LoadCategorySuccessAction({payload: response.data!})),
        catchError((error) => of(LoadCategoryFailureAction(error)))
      )),
      catchError((error) => of(LoadCategoryFailureAction(error)))
    )
  })
}
