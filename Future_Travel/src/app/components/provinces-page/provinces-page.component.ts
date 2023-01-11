import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-provinces-page',
  templateUrl: './provinces-page.component.html',
  styleUrls: ['./provinces-page.component.scss']
})
export class ProvincesPageComponent {
  provinces: string[];

  constructor() {
    this.provinces = [
      "Napoli",
      "Salerno",
      "Caserta",
      "Avellino",
      "Benevento"

    ]
  }



}
