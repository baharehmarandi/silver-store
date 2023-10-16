import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BlogState} from "../reducers/blog.reducer";

export const selectBlogFeatures = createFeatureSelector<BlogState>('Blog');

export const selectPosts = createSelector(selectBlogFeatures, (state: BlogState) => state.posts);

export const selectPostsLoading = createSelector(selectBlogFeatures, (state: BlogState) => state.loading);

export const selectPostsSuccess = createSelector(selectBlogFeatures, (state: BlogState) => state.success);

export const selectPostsError = createSelector(selectBlogFeatures, (state: BlogState) => state.error);
