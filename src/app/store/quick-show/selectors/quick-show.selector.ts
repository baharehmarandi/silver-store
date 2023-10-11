import {createFeatureSelector, createSelector} from "@ngrx/store";
import {QuickShowState} from "../reducers/quik-show.reducer";

export const selectQuickShowFeature = createFeatureSelector<QuickShowState>('quickShow');

export const selectQuickShow = createSelector(selectQuickShowFeature, (state: QuickShowState) => state.quickShow);

export const selectQuickShowLoading = createSelector(selectQuickShowFeature, (state: QuickShowState) => state.loading);

export const selectQuickShowSuccess = createSelector(selectQuickShowFeature, (state: QuickShowState) => state.success);

export const selectQuickShowError = createSelector(selectQuickShowFeature, (state: QuickShowState) => state.error);
