import {Component, Input, OnInit} from '@angular/core';
import {INewProducts} from "../../../models/main-page/new-products.interface";
import {SwiperOptions} from "swiper/types";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {QuickShowComponent} from "./quick-show/quick-show.component";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

  @Input() cardProduct?: INewProducts;
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
    slidesPerView: 1
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
      width: '700px',
      style: {
        'max-width': '90%',
        'min-height' : '500px'
      }
    });
  }
}
