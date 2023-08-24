import {Component, Input, OnInit} from '@angular/core';
import {ISliderMainPage} from "../../../../models/main-page/slider-mainPage.interface";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliders?: ISliderMainPage[];
  responsiveOptions: any[] | undefined;
  constructor() {
  }

  ngOnInit() {

    console.log(this.sliders)
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
