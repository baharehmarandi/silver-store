import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {MainPageAction} from "../../store/main-page/actions/main-page.action";
import {Observable, tap} from "rxjs";
import {IMainPage} from "../../models/main-page/mainPage.interface";
import {selectMainPage} from "../../store/main-page/selectors/main-page.selector";
import {ISliderMainPage} from "../../models/main-page/slider-mainPage.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  MainPage$: Observable<IMainPage | undefined>;
  slider?: ISliderMainPage[]
  constructor(private store: Store) {
    this.store.dispatch(MainPageAction.loadMainPage());
    this.MainPage$ = this.store.select(selectMainPage).pipe(
      tap((item) =>
        this.slider = item?.sliders
      )
    );
  }

}
