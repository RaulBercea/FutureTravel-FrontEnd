import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../models/apiResult.model';

//Named parameters for the api call function
interface ApiParams {
  dataset?: string;
  residence?: string;
  solution?: string;
  province?: string;
  startDate?: string | null;
  endDate?: string | null;
}
@Injectable({ providedIn: 'root' })
export class apiService {
  constructor(private httpClient: HttpClient) {}

  // base url
  apiUrl: string = 'http://localhost:8085/gruppo8';

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
  getApiCall({
    dataset = 'S',
    residence = 'IT',
    solution = 'HOTELLIKE',
    province = 'ITF3',
    startDate,
    endDate,
  }: ApiParams) {
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
