import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  logoImage: string = "assets/images/logo (1).png";
  value: string | undefined;
}
