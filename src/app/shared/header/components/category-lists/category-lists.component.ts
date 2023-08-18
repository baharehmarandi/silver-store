import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ICategory} from "../../../../models/category.interface";
import {Store} from "@ngrx/store";
import {CategoryAction} from "../../../../store/category/actions/category.action";
import {selectCategory} from "../../../../store/category/selectores/category.selector";

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})
export class CategoryListsComponent {

  categoryList$: Observable<ICategory[] | undefined>;

  constructor(private store: Store) {

    this.store.dispatch(CategoryAction.loadCategory());
    this.categoryList$ = this.store.select(selectCategory);
  }

}
