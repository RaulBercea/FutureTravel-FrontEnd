import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.scss']
})
export class ProvincePageComponent {
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
