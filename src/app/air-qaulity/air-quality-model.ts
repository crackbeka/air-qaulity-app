export interface AirQuality {
  CO: Co;
  NO2: Co;
  O3: Co;
  SO2: Co;
  'PM2.5': Co;
  PM10: Co;
  overall_aqi: number;
}

export interface Co {
  concentration: number;
  aqi: number;
}
