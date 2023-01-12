import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { apiService } from '../services/api.service';
import { APIResult } from '../models/apiResult.model';

@Injectable({ providedIn: 'root' })
export class apiDataResolver implements Resolve<any> {
  constructor(private apiService: apiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getApiData(route.paramMap.get('query'));
  }
}
