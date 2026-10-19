import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CarsService {
  private readonly http = inject(HttpClient);

  getCars(): Observable<unknown> {
    let headers = new HttpHeaders();
    const { carsApiAuthHeaderName, carsApiAuthHeaderValue } = environment;

    if (carsApiAuthHeaderName && carsApiAuthHeaderValue) {
      headers = headers.set(carsApiAuthHeaderName, carsApiAuthHeaderValue);
    }

    return this.http.get<unknown>(environment.carsApiUrl, { headers });
  }
}
