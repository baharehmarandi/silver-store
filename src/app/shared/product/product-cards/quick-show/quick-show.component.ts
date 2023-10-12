import {Component, Input, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IProducts} from "../../../../models/main-page/products.interface";
import {Store} from "@ngrx/store";
import {QuickShowActions} from "../../../../store/quick-show/actions/quick-show.action";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {selectQuickShow, selectQuickShowLoading} from "../../../../store/quick-show/selectors/quick-show.selector";

@Component({
  selector: 'app-quick-show',
  templateUrl: './quick-show.component.html',
  styleUrls: ['./quick-show.component.scss']
})
export class QuickShowComponent implements OnInit {


  quickShow$: Observable<IProducts | undefined>;
  quickShowLoading$: Observable<boolean | undefined>;

  @Input() imageLink?: string;

  constructor(private store: Store,
              private dynamicDialogConfig: DynamicDialogConfig) {
    this.quickShow$ = this.store.select(selectQuickShow);
    this.quickShowLoading$ = this.store.select(selectQuickShowLoading);
  }

  ngOnInit() {
    this.store.dispatch(QuickShowActions.loadQuickShow({id: this.dynamicDialogConfig.data?.id}));

    this.quickShow$.pipe(
      tap((item) => console.log("item", item))
    )
  }

}
