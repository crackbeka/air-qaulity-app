import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap, tap } from 'rxjs';
import { AirQuality } from './air-quality-model';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  private baseUrl = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1';

  constructor(private http: HttpClient) {}

  getAirQuality(): Observable<AirQuality> {
    const city = encodeURIComponent('Tbilisi');

    return this.http.get<AirQuality>(
      `${this.baseUrl}/airquality?city=${city}`,
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key':
            '0926b2866dmsh2fb434822f27838p1b2886jsn96c7601aad1a',
          'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com',
        }),
      }
    );
  }
}
