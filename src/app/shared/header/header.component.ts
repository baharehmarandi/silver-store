import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CategoryAction} from "../../store/category/actions/category.action";
import {ICategory} from "../../models/category.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categoryList: ICategory[] | undefined;
  firstImageUrl?: string;

  constructor(private store: Store) {
    this.store.dispatch(CategoryAction.loadCategory());
  }

}
