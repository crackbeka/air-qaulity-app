import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AirQualityService } from './air-quality.service';

@Component({
  selector: 'app-air-qaulity',
  templateUrl: './air-qaulity.component.html',
  styleUrls: ['./air-qaulity.component.scss'],
})
export class AirQaulityComponent implements OnInit {
  airQuality: any;

  constructor(private _airQualityService: AirQualityService) {}

  ngOnInit(): void {
    this.getAirQuality();
  }

  getAirQuality() {
    this._airQualityService.getAirQuality().subscribe((result) => {
      this.airQuality = result;
    });
  }
}
