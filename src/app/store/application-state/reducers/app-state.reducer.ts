import {IProfile} from "../../../models/profile.interface";
import {createReducer, on} from "@ngrx/store";
import {SetAgeAction, SetProfileAction} from "../actions/app-state.action";

export interface ProfileState {
  profile?: IProfile
}

export const initialState: ProfileState = {
  profile: undefined
}

export const profileReducer = createReducer(
  initialState,
  on(SetProfileAction, (state, action) => ({
    ...state,
    profile: action.profile
  })),
  on(SetAgeAction, (state, action) => ({
    ...state,
    profile: {
      ...state.profile,
      age: action.age
    }
  }))
)
