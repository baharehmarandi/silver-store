import {AfterViewInit, Component, Input, OnDestroy, Renderer2} from '@angular/core';
import {ICategory} from "../../../../models/category.interface";
import {Store} from "@ngrx/store";
import {selectCategory} from "../../../../store/category/selectors/category.selector";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})

export class CategoryListsComponent implements AfterViewInit, OnDestroy {

  @Input() showCategories: boolean = false;
  @Input() showCategoryFirstImage?: boolean;

  categoryList: ICategory[] | undefined;

  subCategoryIndex?: number;
  showSubCategory: boolean = false;
  isHover: boolean[] = [];
  imageUrl?: string = "";

  private subscriptions = new Subscription();
  constructor(private store: Store,
              private renderer: Renderer2) {

    this.subscriptions.add(
      this.store.select(selectCategory).subscribe((categories: ICategory[] | undefined) => {
        this.categoryList = categories;
        this.imageUrl = categories![0].image
      })
    )
  }

  ngAfterViewInit() {
    this.onShowSubCategory(0);
  }


  onShowSubCategory(index: number){

    this.showCategoryFirstImage = false;

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

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
