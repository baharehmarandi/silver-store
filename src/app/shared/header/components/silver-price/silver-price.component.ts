import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {SilverPriceAction} from "../../../../store/silver-price/actions/silver-price.action";
import {selectSilverPrice} from "../../../../store/silver-price/selectors/silver-price.selector";
import {Observable} from "rxjs";
import {IPriceSilverPrices} from "../../../../models/silver-price-prices.interface";

@Component({
  selector: 'app-silver-price',
  templateUrl: './silver-price.component.html',
  styleUrls: ['./silver-price.component.scss']
})
export class SilverPriceComponent {

  silverPrice$: Observable<IPriceSilverPrices[] | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(SilverPriceAction.loadSilverPrice());
    this.silverPrice$ = this.store.select(selectSilverPrice);
  }

}
