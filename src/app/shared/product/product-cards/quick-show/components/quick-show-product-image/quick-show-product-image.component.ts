import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-quick-show-product-image',
  templateUrl: './quick-show-product-image.component.html',
  styleUrls: ['./quick-show-product-image.component.scss']
})
export class QuickShowProductImageComponent {

  @Input() imageLink?: string;
}
