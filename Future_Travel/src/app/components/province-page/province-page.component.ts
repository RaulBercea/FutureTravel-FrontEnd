import { Component } from '@angular/core';

@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.scss']
})
export class ProvincePageComponent {
  province: string[];

  constructor() {
    this.province = [
      "Napoli",
      "Salerno",
      "Caserta",
      "Avellino",
      "Benevento"

    ]
  }

}
