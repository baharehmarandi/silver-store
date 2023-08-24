import {IMainPage} from "../../../models/main-page/mainPage.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {MainPageAction} from "../actions/main-page.action";

export interface MainPageState {
  mainPage?: IMainPage;
  loading?: boolean;
  success?: boolean;
  error?: HttpErrorResponse;
}

export const initialState: MainPageState = {
  mainPage: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const MainPageReducer = createReducer(
  initialState,
  on(MainPageAction.loadMainPage, (state) => ({
    ...state,
    loading: true,
    success: undefined
  })),
  on(MainPageAction.loadMainPageSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    mainPage: action.payload
  })),
  on(MainPageAction.loadMainPageFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
