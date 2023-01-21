import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { apiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class apiServiceResolver implements Resolve<any> {
  constructor(private apiService: apiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const startDateUrl = route.paramMap.get('startDate');
    const endDateUrl = route.paramMap.get('endDate');
    return this.apiService.getApiCall({
      startDate: startDateUrl,
      endDate: endDateUrl,
    });
  }
}
