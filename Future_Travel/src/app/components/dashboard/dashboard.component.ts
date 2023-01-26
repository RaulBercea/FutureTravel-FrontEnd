import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { APIResult } from 'src/app/models/apiResult.model';
import { CityName } from 'src/app/models/enums/cityName.enum';
import { callbackify } from 'util';
import { shareReplay } from 'rxjs';
import { time } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  city: String | null = '';
  // container for the api call
  apiCallData: APIResult[] = [];
  arrivals: Array<number> = [];
  attendance: Array<number> = [];
  arrivalsSum: number = JSON.parse(localStorage.getItem('TotalArrivals')!);
  attendanceSum: number = JSON.parse(localStorage.getItem('TotalAttendance')!);
  months: Array<string> = [];
  years: Array<string> = [
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
  ];
  year: string | null | undefined = '2021';
  provinceCode: string | undefined;
  solutionChoice: string | undefined = 'HOTELLIKE';

  constructor(
    private route: ActivatedRoute,
    private apiService: apiService,
    private httpClient: HttpClient
  ) {}

  updateArrivals(year: string, residence: any, solution: string) {
    this.arrivals.length = 0;
    this.apiService
      .getApiCall({
        solution: solution,
        province: this.provinceCode,
        startDate: `${year}-01`,
        endDate: `${year}-12`,
        residence: residence,
      })
      .subscribe((res: any) => {
        this.apiCallData = res;
        this.apiCallData.forEach((record) => {
          this.arrivals.push(record.arrivi);
          let date = new Date();
          date.setMonth(parseInt(record.time.slice(5)) - 1);
          this.months = [];
          this.months.push(date.toLocaleString('en-US', { month: 'short' }));
        });
        this.charts?.forEach((chart) => {
          chart.update();
        });
      });
  }

  updateAttendance(year: string, residence: any, solution: string) {
    this.attendance.length = 0;
    this.apiService
      .getApiCall({
        solution: solution,
        province: this.provinceCode,
        startDate: `${year}-01`,
        endDate: `${year}-12`,
        residence: residence,
      })
      .subscribe((res: any) => {
        this.apiCallData = res;
        this.apiCallData.forEach((record) => {
          this.attendance.push(record.presenze);
          let date = new Date();
          date.setMonth(parseInt(record.time.slice(5)) - 1);
          this.months = [];
          this.months.push(date.toLocaleString('en-US', { month: 'short' }));
        });

        this.charts?.forEach((chart) => {
          chart.update();
        });
      });
  }

  @ViewChildren(BaseChartDirective) charts: BaseChartDirective[] | undefined;

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
      x: {
        ticks: {
          callback: (value: any) => {
            let formattedValue = value;
            if (value >= 1000) {
              formattedValue = value / 1000 + 'K';
            }
            if (value > 1000000) {
              formattedValue = value / 1000000 + 'M';
            }
            return formattedValue;
          },
        },
      },
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'start',
        align: 'end',
      },
    },
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    locale: 'en-us',
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        display: false,
      },
    },
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';
  public pieChartType: ChartType = 'pie';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: this.months,
    datasets: [
      { data: this.arrivals, label: 'Arivals', backgroundColor: '#FF2F6490' },
    ],
  };

  public barChartData2: ChartData<'bar'> = {
    labels: this.months,
    datasets: [
      { data: this.attendance, label: 'Arivals', backgroundColor: '#09D9D690' },
    ],
  };

  public pieChartData!: ChartData<'pie'>;

  public lineChartData: ChartData<'line'> = {
    labels: this.months,
    datasets: [
      {
        data: this.attendance,
        label: 'Attendance',
        backgroundColor: '#FF2F6490',
      },
      {
        data: this.arrivals,
        label: 'Arivals',
        backgroundColor: '#09D9D690',
      },
    ],
  };

  formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

  ngOnInit(): void {
    this.arrivalsSum = JSON.parse(localStorage.getItem('TotalArrivals')!);
    this.attendanceSum = JSON.parse(localStorage.getItem('TotalAttendance')!);
    this.pieChartData  = {
      labels: ['Arrivals', 'Attendance'],
      datasets: [
        {
          data: [this.arrivalsSum, this.attendanceSum],
          backgroundColor: [ '#09D9D690','#FF2F6490'],
        },
      ],
    };

    this.city = this.route.snapshot.paramMap.get('province');
    if (!this.city) {
      this.city = 'Campania';
    }

    // look for the name of the province in the
    // province enum and return the ISTAT code
    if (Object.keys(CityName).includes(this.city.toString())) {
      this.provinceCode = Object.values(CityName).at(
        Object.keys(CityName).indexOf(this.city.toString())
      );
    }

    this.apiService
      .getApiCall({
        solution: this.solutionChoice,
        province: this.provinceCode,
        startDate: `${this.year}-01`,
        endDate: `${this.year}-12`,
      })
      .subscribe((res: any) => {
        localStorage.setItem('TotalArrivals', '0');
        localStorage.setItem('TotalAttendance', '0');
        this.apiCallData = res;
        this.apiCallData.forEach((record) => {
          this.arrivalsSum += record.arrivi;
          this.arrivals.push(record.arrivi);

          this.attendanceSum += record.presenze;
          this.attendance.push(record.presenze);

          let date = new Date();
          date.setMonth(parseInt(record.time.slice(5)) - 1);
          this.months.push(date.toLocaleString('en-US', { month: 'short' }));

          localStorage.setItem(
            'TotalArrivals',
            JSON.stringify(this.arrivalsSum)
          );
          localStorage.setItem(
            'TotalAttendance',
            JSON.stringify(this.attendanceSum)
          );
        });
        this.charts?.forEach((chart) => {
          chart.update();
        });
      });
  }
}
