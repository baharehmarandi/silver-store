import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ICategory} from "../../models/category.interface";
import {LoadCategoryAction} from "../../store/category/actions/category.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categoryList: ICategory[] | undefined;
  firstImageUrl?: string;

  constructor(private store: Store) {
    this.store.dispatch(LoadCategoryAction());
  }

}
