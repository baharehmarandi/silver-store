import {createAction, props} from "@ngrx/store";
import {IProfile} from "../../../models/profile.interface";

export const SetProfileAction = createAction(
  "[Profile] Set Profile", props<{profile: IProfile}>()
)

export const SetAgeAction = createAction(
  "[Profile] Set Age", props<{age: number}>()
)
