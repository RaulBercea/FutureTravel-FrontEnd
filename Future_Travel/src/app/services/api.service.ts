import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../models/apiResult.model';

@Injectable({ providedIn: 'root' })
export class apiService {
  constructor(private httpClient: HttpClient) {}

  // base url
  apiUrl: string = 'http://18.102.24.178:8085/gruppo8/front/';

  /**
   * Creates a call to the api based on the givven parameters
   * @param dataset - either the historic dataset (S) or the preddictive dataset (P)
   * @param residence - the provenance of the customers
   * @param solution - the type of accomodation chosen by the customers
   * @param province - the ISTAT code of the region
   * @param startDate - starting date of the data
   * @param endDate - ending date of the data
   * @returns
   */
  getApiCall(
    dataset: string = 'S',
    residence: string = 'ALL',
    solution: string = 'ALL',
    province: string = 'ITF3',
    startDate?: string,
    endDate?: string
  ) {
    // check weather to add the date range to the api
    if (startDate && endDate) {
      return this.httpClient.get(
        `${this.apiUrl}/${dataset}/${residence}/${solution}/${province}?startDate=${startDate}&endDate=${endDate}`
      );
    }
    // individual checks for each of the ends of the range
    else if (startDate && !endDate) {
      return this.httpClient.get(
        `${this.apiUrl}/${dataset}/${residence}/${solution}/${province}?startDate=${startDate}`
      );
    } else if (!startDate && endDate) {
      return this.httpClient.get(
        `${this.apiUrl}/${dataset}/${residence}/${solution}/${province}?endDate=${endDate}`
      );
    }
    // return the result of the call with no query strings
    else {
      return this.httpClient.get(
        `${this.apiUrl}/${dataset}/${residence}/${solution}/${province}`
      );
    }
  }
}
