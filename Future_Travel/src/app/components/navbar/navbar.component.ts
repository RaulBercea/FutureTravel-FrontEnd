import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  checkToogle() {
    let navBarToggle = document.getElementById("navbar-default")
    if (navBarToggle?.classList.contains("hidden")) {
      navBarToggle?.classList.remove("hidden")
    } else {
      navBarToggle?.classList.add("hidden")
    }

  }





}
