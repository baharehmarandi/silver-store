import {Component, Input, OnInit} from '@angular/core';
import {SwiperOptions} from "swiper/types";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {QuickShowComponent} from "./quick-show/quick-show.component";
import {IProducts} from "../../../models/main-page/products.interface";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

  @Input() cardProduct?: IProducts;

  discount?: number
  showQuickMode: boolean = false;
  ref: DynamicDialogRef | undefined;

  public config: SwiperOptions = {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    autoHeight: true,
    spaceBetween: 5,
    slidesPerView: 1,
    simulateTouch: false,
  }

  constructor(public dialogService: DialogService) {
  }
  ngOnInit() {
    if (this.cardProduct?.discount){
      this.discount = this.cardProduct.fee! - (this.cardProduct.fee! * this.discount!/100)
    }
  }

  onMouseEnter(){
    this.showQuickMode = true;
  }

  onMouseLeave(){
    this.showQuickMode = false;
  }

  onShowQuickMode(){
    this.ref = this.dialogService.open(QuickShowComponent, {
      data: {
        id: this.cardProduct?.id
      },
      width: '1000px',
      style: {
        'max-width': '90%',
        'min-height' : '500px',
      }
    });
  }
}
