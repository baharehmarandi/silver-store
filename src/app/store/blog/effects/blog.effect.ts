import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../modules/home/home.service";
import {BlogAction} from "../actions/blog.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {IBlog} from "../../../models/main-page/blog.interface";

@Injectable()
export class BlogEffect {

  constructor(private action$: Actions,
              private homeService: HomeService){}

  loadBlog$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BlogAction.loadBlog),
      mergeMap(() => this.homeService.getBlogPosts().pipe(
        map((response: IBlog[]) =>
        BlogAction.loadBlogSuccess({payload: response})),
        catchError((error) => of(BlogAction.loadBlogFailure(error)))
      )),
      catchError((error) => of(BlogAction.loadBlogFailure(error)))
    )
  })

}
