import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-air-pollution-modal',
  templateUrl: './air-pollution-modal.component.html',
  styleUrls: ['./air-pollution-modal.component.scss'],
})
export class AirPollutionModalComponent {
  myData: any;

  constructor(public dialogRef: MatDialogRef<AirPollutionModalComponent>) {}

  closeDialog() {
    this.dialogRef.close(this.myData);
  }
}
