import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CriticalLevel } from '../utils/critical-levels';
import { AirQuality } from './air-quality-model';
import { AirQualityService } from './air-quality.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-air-qaulity',
  templateUrl: './air-qaulity.component.html',
  styleUrls: ['./air-qaulity.component.scss'],
})
export class AirQaulityComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('map') map: ElementRef<HTMLDivElement>;

  private unsubscribe$ = new Subject<void>();

  airQulaity: AirQuality;

  constructor(private _airQualityService: AirQualityService) {}

  ngOnInit(): void {
    this._airQualityService
      .getAirQuality()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.airQulaity = data;
        this.handleAlerts(data);
      });
  }

  private handleAlerts(data: AirQuality): void {
    Object.entries(data).forEach(([key, obj]) => {
      if (key in CriticalLevel.aqi) {
        if (obj.aqi >= CriticalLevel.aqi[key]) {
          alert('Critical AQI!');
        }
      }

      if (key in CriticalLevel.concentration) {
        if (obj.concentration >= CriticalLevel.concentration[key]) {
          alert('Critical Concentration!');
        }
      }
    });
  }

  ngAfterViewInit(): void {
    const coords = JSON.parse(localStorage.getItem('coords') || '');

    const map = L.map(this.map.nativeElement, {
      center: [coords.lat, coords.lng],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
