import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAirQuality } from './air-quality-model';
import { AirQualityService } from './air-quality.service';

@Component({
  selector: 'app-air-qaulity',
  templateUrl: './air-qaulity.component.html',
  styleUrls: ['./air-qaulity.component.scss'],
})
export class AirQaulityComponent {
  airQuality$: Observable<IAirQuality[]>;

  constructor(private _airQualityService: AirQualityService) {}

  ngOnInit(): void {
    this.getAirQuality();
  }

  getAirQuality() {
    this.airQuality$ = this._airQualityService.getAirQuality();
  }
}
