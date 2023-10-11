import {AfterViewInit, Component, Input} from '@angular/core';
import {IBanners} from "../../../../models/main-page/banners.interface";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements AfterViewInit {

  @Input() banners?: IBanners

  ngAfterViewInit(){
    const borderRadiusStyle = document.getElementsByClassName("banner-image")

    if(this.banners?.position! % 2 === 0){
      borderRadiusStyle[1].classList.add("banner-radius-left")
    }
    else if(this.banners?.position! % 2 !== 0){
      borderRadiusStyle[0].classList.add("banner-radius-right")
    }
  }
}
