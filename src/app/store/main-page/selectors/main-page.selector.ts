import {createSelector} from "@ngrx/store";
import {selectMainPageFeature} from "./main-page-feature.selector";
import {MainPageState} from "../reducers/main-page.reducer";

export const selectMainPage = createSelector(selectMainPageFeature, (state: MainPageState) => state.mainPage);

export const selectMainPageLoading = createSelector(selectMainPageFeature, (state: MainPageState) => state.loading);

export const selectMainPageSuccess = createSelector(selectMainPageFeature, (state: MainPageState) => state.success);

export const selectMainPageError = createSelector(selectMainPageFeature, (state: MainPageState) => state.error)
