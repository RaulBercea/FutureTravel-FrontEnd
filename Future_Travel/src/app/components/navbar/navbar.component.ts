import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

  checkToogle() {
    let navBarToggle = document.getElementById('navbar-default');
    if (navBarToggle?.classList.contains('hidden')) {
      navBarToggle?.classList.remove('hidden');
    } else {
      navBarToggle?.classList.add('hidden');
    }
  }
}
