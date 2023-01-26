import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  provinces: string[];
  urlImg: string[];
  data: string = this.route.snapshot.paramMap.get('Data')!;

  constructor(private route: ActivatedRoute) {
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
    localStorage.clear();
  }
}
