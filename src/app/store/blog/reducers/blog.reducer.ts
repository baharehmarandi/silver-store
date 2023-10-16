import {IBlog} from "../../../models/main-page/blog.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {BlogAction} from "../actions/blog.action";

export interface BlogState {
  posts?: IBlog[];
  loading?: boolean;
  success?: boolean;
  error?: HttpErrorResponse;
}

export const initialState: BlogState = {
  posts: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const BlogReducer = createReducer(
  initialState,
  on(BlogAction.loadBlog, (state) => ({
    ...state,
    loading: true,
    success: undefined
  })),
  on(BlogAction.loadBlogSuccess, (state, action) => ({
    ...state,
    loading: false,
    posts: action.payload,
    success: true
  })),
  on(BlogAction.loadBlogFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
