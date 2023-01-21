/**
 * The file serivce containing all the calls to the api
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class apiService {
  constructor(private httpClient: HttpClient) {}

  // base url
  apiUrl: string = 'http://18.102.24.178:8085/gruppo8/front/';

  /**
   *
   * @param dataset
   * @param residence
   * @param solution
   * @param province
   * @param startDate
   * @param endDate
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
