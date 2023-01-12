import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  city: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('province');
  }
}
