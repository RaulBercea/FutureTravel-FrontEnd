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
   * api call to get all of the hotellike data for the italian residents
   * @param province - the istat province code (defaults to the regional code if not given)
   * @param startDate - the begining date of the dataset (yyyy-mm format)
   * @param endDate - the endingDate of the dataset (yyyy-mm format)
   * @returns the resulting json of the api call
   */
  getHotelLikeItStoric(
    province: string | 'ITF3',
    startDate?: string,
    endDate?: string
  ) {
    // check weather to add the date range to the api
    if (typeof startDate !== null && typeof endDate !== null) {
      return this.httpClient.get(
        `${this.apiUrl}/S/IT/HOTELLIKE/${province}?startDate=${startDate}&endDate=${endDate}`
      );
    }
    // individual checks for each of the ends of the range
    else if (typeof startDate !== null && typeof endDate == null) {
      return this.httpClient.get(
        `${this.apiUrl}/S/IT/HOTELLIKE/${province}?startDate=${startDate}`
      );
    } else if (typeof startDate == null && typeof endDate !== null) {
      return this.httpClient.get(
        `${this.apiUrl}/S/IT/HOTELLIKE/${province}?endDate=${endDate}`
      );
    }
    // return the result of the call with no query strings
    else {
      return this.httpClient.get(`${this.apiUrl}/S/IT/HOTELLIKE/${province}`);
    }
  }
}
