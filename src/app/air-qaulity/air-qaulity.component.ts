import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AirQualityService } from './air-quality.service';

@Component({
  selector: 'app-air-qaulity',
  templateUrl: './air-qaulity.component.html',
  styleUrls: ['./air-qaulity.component.scss'],
})
export class AirQaulityComponent implements OnInit {
  airQuality$: Observable<any[]>;

  constructor(private _airQualityService: AirQualityService) {}

  ngOnInit(): void {
    this.getAirQuality();
  }

  getAirQuality() {
    this.airQuality$ = this._airQualityService.getAirQuality();
  }
}
