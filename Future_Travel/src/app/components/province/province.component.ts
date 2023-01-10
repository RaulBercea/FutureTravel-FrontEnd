import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent {

  city: any = "";

  constructor(

    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get("province");
  }





}
