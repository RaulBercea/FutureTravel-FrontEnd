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

  getHotelLiokeData(province?: string, startDate?: string, endDate?: string) {
    if (typeof province !== null) {
      return this.httpClient.get(
        `${this.apiUrl}/alloggio/hotellike?=${province}`
      );
    } else {
      return this.httpClient.get(`${this.apiUrl})`);
    }
  }
}
