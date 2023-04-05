import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { AirQuality } from '../air-qaulity/air-quality-model';

@Component({
  selector: 'app-canvas-charts',
  templateUrl: './canvas-charts.component.html',
  styleUrls: ['./canvas-charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasChartsComponent implements OnChanges {
  @Input()
  data?: AirQuality;

  aqiOptions: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
    ],
  };

  concentrationOptions: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
      { type: 'pie' },
    ],
  };

  constructor() {}

  ngOnChanges({ data }: SimpleChanges): void {
    if (data.currentValue) {
      this.renderCharts(data.currentValue);
    }
  }

  private renderCharts(data: AirQuality) {
    this.aqiOptions = {
      ...this.aqiOptions,
      dataset: {
        ...this.aqiOptions.dataset,
        source: [
          ['CO', data.CO.aqi],
          ['NO2', data.NO2.aqi],
          ['O3', data.O3.aqi],
          ['SO2', data.SO2.aqi],
          ['PM2.5', data['PM2.5'].aqi],
          ['PM10', data.PM10.aqi],
        ],
      },
    };

    this.concentrationOptions = {
      ...this.concentrationOptions,
      dataset: {
        ...this.concentrationOptions.dataset,
        source: [
          ['CO', data.CO.concentration],
          ['NO2', data.NO2.concentration],
          ['O3', data.O3.concentration],
          ['SO2', data.SO2.concentration],
          ['PM2.5', data['PM2.5'].concentration],
          ['PM10', data.PM10.concentration],
        ],
      },
    };
  }
}
