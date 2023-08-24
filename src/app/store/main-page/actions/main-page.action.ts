import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IMainPage} from "../../../models/main-page/mainPage.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const MainPageAction = createActionGroup({
  source: 'MainPage',
  events: {
    'Load MainPage': emptyProps(),
    'Load MainPage Success': props<{payload: IMainPage}>(),
    'Load MainPage Failure': props<{error: HttpErrorResponse}>()
  }
})
