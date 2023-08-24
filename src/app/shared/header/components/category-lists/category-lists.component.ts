import {AfterViewInit, Component, Input, Renderer2} from '@angular/core';
import {ICategory} from "../../../../models/category.interface";
import {Store} from "@ngrx/store";
import {CategoryAction} from "../../../../store/category/actions/category.action";
import {selectCategory} from "../../../../store/category/selectores/category.selector";

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})

export class CategoryListsComponent implements AfterViewInit {

  @Input() showCategories: boolean = false;

  categoryList: ICategory[] | undefined;
  subCategoryIndex?: number;
  showSubCategory: boolean = false;
  isHover: boolean[] = [];
  imageUrl?: string = "";

  constructor(private store: Store,
              private renderer: Renderer2) {
    this.store.dispatch(CategoryAction.loadCategory());
    this.store.select(selectCategory).subscribe((categories: ICategory[] | undefined) => {
      this.categoryList = categories;
    });
  }

  ngAfterViewInit() {
    this.onShowSubCategory(0);
  }

  onShowSubCategory(index: number){

    this.showSubCategory = true;
    this.categoryList?.forEach((item, i) => {
      this.renderer.removeClass(document.getElementById("categoryById"+(i))!, "top-category");
      this.renderer.removeClass(document.getElementById("categoryById"+(i))!, "bottom-category");
    })

    this.subCategoryIndex = index;
    this.isHover = Array(this.categoryList?.length).fill(false);
    this.isHover[index] = true;

    if(index === 0){
      if(document.getElementById("categoryById"+(index+1))){
        this.renderer.addClass(document.getElementById("categoryById"+(index+1))!, "top-category");
      }
    }
    else if(index === (this.categoryList?.length!-1)){
      this.renderer.addClass(document.getElementById("categoryById"+(index-1))!, "bottom-category");
    }
    else {
      this.renderer.addClass(document.getElementById("categoryById"+(index+1))!, "top-category");
      this.renderer.addClass(document.getElementById("categoryById"+(index-1))!, "bottom-category");
    }

    this.imageUrl = this.categoryList![index].image;
  }

}
