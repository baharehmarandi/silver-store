import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IBlog} from "../../../models/main-page/blog.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const BlogAction = createActionGroup({
  source: 'Blog',
  events: {
    'Load Blog': emptyProps(),
    'Load Blog Success': props<{payload: IBlog[]}>(),
    'Load Blog Failure': props<{error: HttpErrorResponse}>()
  }
})
