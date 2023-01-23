import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { APIResult } from 'src/app/models/apiResult.model';
import { CityName } from 'src/app/models/enums/cityName.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  city: String | null = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: apiService,
    private httpClient: HttpClient
  ) {}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    layout: {
      padding: 0,
    },
    indexAxis: 'y',
    locale: 'en-us',
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';
  public pieChartType: ChartType = 'pie';
  public barChartPlugins = [DataLabelsPlugin];

  // container for the api call
  apiCallData: APIResult[] = [];

  arrivals: Array<number> = [];
  attendance: Array<number> = [];
  months: Array<string> = [];

  public barChartData: ChartData<'bar' | 'line' | 'pie'> = {
    labels: this.months,
    datasets: [{ data: this.arrivals, label: 'Arivals' }],
  };

  formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('province');
    if (!this.city) {
      this.city = 'Campania';
    }

    let provinceCode: string | undefined;

    if (Object.keys(CityName).includes(this.city.toString())) {
      provinceCode = Object.values(CityName).at(
        Object.keys(CityName).indexOf(this.city.toString())
      );
    }

    this.apiService
      .getApiCall({
        province: provinceCode,
        startDate: '2021-01',
        endDate: '2022-12',
      })
      .subscribe((res: any) => {
        console.log(provinceCode);
        this.apiCallData = res;

        this.apiCallData.forEach((record) => {
          this.arrivals.push(record.arrivi);
          this.attendance.push(record.presenze);
          this.months.push(record.time);
        });
        this.chart?.update();
      });
  }
}
