import {createFeatureSelector} from "@ngrx/store";
import {MainPageState} from "../reducers/main-page.reducer";

export const selectMainPageFeature = createFeatureSelector<MainPageState>('MainPage');
