import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  categoryListShown = false;

  onShowCategoryList(){
    this.categoryListShown = !this.categoryListShown;
  }
}
