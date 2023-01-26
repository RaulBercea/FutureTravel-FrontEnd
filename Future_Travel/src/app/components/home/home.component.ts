import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  provinces: string[];
  urlImg: string[];

  constructor() {
    this.provinces = ['Napoli', 'Salerno', 'Caserta', 'Avellino', 'Benevento'];

    this.urlImg = [
      'assets/napoli.jpeg',
      'assets/salerno.jpeg',
      'assets/caserta.jpeg',
      'assets/avellino.jpeg',
      'assets/benevento.jpeg',
    ];
  }

  ngOnInit(): void {
    localStorage.clear()
  }
}
