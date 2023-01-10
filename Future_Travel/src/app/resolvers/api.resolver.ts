import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { apiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class YourResolver implements Resolve<any> {
  constructor(private apiService: apiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getApiData(route.paramMap.get('query'));
  }
}
