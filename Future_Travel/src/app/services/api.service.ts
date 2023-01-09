/**
 * The file serivce containing all the calls to the api
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  // base url
  apiUrl: string = 'http://18.102.24.178:8085/gruppo8/front/';

  getHotelLikeData(query?: string) {
    if (typeof query !== null) {
      return this.httpClient.get(`${this.apiUrl}${query}`);
    } else {
      return this.httpClient.get(`${this.apiUrl})`);
    }
  }
}
