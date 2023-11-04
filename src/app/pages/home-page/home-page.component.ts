import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {MainPageAction} from "../../store/main-page/actions/main-page.action";
import {Observable} from "rxjs";
import {selectMainPage} from "../../store/main-page/selectors/main-page.selector";
import {IMainPage} from "../../models/main-page/mainPage.interface";
import {BlogAction} from "../../store/blog/actions/blog.action";
import {IProfile} from "../../models/profile.interface";
import {SetAgeAction, SetProfileAction} from "../../store/application-state/actions/app-state.action";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  mainPage$: Observable<IMainPage | undefined>

  profile: IProfile = {
    id: 0,
    name: "spring",
    age: 28
  }

  constructor(private store: Store) {
    this.store.dispatch(MainPageAction.loadMainPage());
    this.mainPage$ = this.store.select(selectMainPage);
    this.store.dispatch(BlogAction.loadBlog());
    this.store.dispatch(SetProfileAction({profile: this.profile}));
    this.store.dispatch(SetAgeAction({age: 34}));
  }

}
