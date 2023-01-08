/**
 * The file serivce containing all the calls to the api
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = 'http://18.102.24.178:8085/gruppo8/front/';
}
