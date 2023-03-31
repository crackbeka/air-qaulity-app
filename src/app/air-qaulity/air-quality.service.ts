import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { IAirQuality } from './air-quality-model';

export const _options: any = {
  observe: 'response',
  headers: new HttpHeaders({
    'X-RapidAPI-Key': '0926b2866dmsh2fb434822f27838p1b2886jsn96c7601aad1a',
    'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  constructor(private http: HttpClient) {}

  getAirQuality(): Observable<IAirQuality[]> {
    const _url =
      'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';

    return this.http.request('get', _url, _options).pipe(
      switchMap((response: any) => {
        const result = response.body.result;
        if (response.status === 200) {
          return of(result);
        }
        return of(null);
      })
    );
  }
}
