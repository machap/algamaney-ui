import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu = true;

  exibindoMenu() {
    if (this.menu) {
      this.menu = false;
    } else {
      this.menu = true;
    }
  }
}
