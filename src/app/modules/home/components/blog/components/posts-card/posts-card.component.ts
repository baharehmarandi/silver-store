import {Component, Input} from '@angular/core';
import {IBlog} from "../../../../../../models/main-page/blog.interface";

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent {

  @Input() post?: IBlog;
  constructor() {}
}
