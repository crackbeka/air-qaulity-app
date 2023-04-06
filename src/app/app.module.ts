import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQaulityComponent } from './air-qaulity/air-qaulity.component';
import { MatButtonModule } from '@angular/material/button';
import { CanvasChartsComponent } from './canvas-charts/canvas-charts.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxEchartsModule } from 'ngx-echarts';
import { AirPollutionModalComponent } from './air-qaulity/air-pollution-modal/air-pollution-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AirQaulityComponent,
    CanvasChartsComponent,
    AirPollutionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
