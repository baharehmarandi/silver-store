import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ICategory} from "../../../../models/category.interface";
import {selectCategory} from "../../../../store/category/selectors/category.selector";

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {

  sidebarVisible: boolean = false;
  logoImage: string = "assets/images/logo (1).png";
  value: string | undefined;
  categoryList$: Observable<ICategory[] | undefined>

  activeIndex: number | undefined;

  constructor(private store: Store) {
    this.categoryList$ = this.store.select(selectCategory)
  }
}
