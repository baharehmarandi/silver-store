import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {MainPageAction} from "../../store/main-page/actions/main-page.action";
import {Observable} from "rxjs";
import {selectMainPage} from "../../store/main-page/selectors/main-page.selector";
import {IMainPage} from "../../models/main-page/mainPage.interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  mainPage$: Observable<IMainPage | undefined>

  constructor(private store: Store) {
    this.store.dispatch(MainPageAction.loadMainPage());
    this.mainPage$ = this.store.select(selectMainPage)
  }

}
