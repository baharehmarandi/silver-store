import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProfileState} from "../reducers/app-state.reducer";

export const profileSelectorFeature = createFeatureSelector<ProfileState>("profile");

export const selectProfile = createSelector(profileSelectorFeature, (state) => state.profile);
