import {createAction, props} from "@ngrx/store";
import {ICategory} from "../../../models/category.interface";
import {HttpErrorResponse} from "@angular/common/http";

// export const CategoryAction = createActionGroup({
//   source: 'Category',
//   events: {
//     'Load Category': emptyProps(),
//     'Load Category Success': props<{payload: ICategory[]}>(),
//     'Load Category Failure': props<{error: HttpErrorResponse}>(),
//   }
// })

export const LoadCategoryAction = createAction(
  "[Category] Load Category"
)

export const LoadCategorySuccessAction = createAction(
  "[Category] Load Category Success", props<{payload: ICategory[]}>()
)

export const LoadCategoryFailureAction = createAction(
  "[Category] Load Category Failure", props<{error: HttpErrorResponse}>()
)
