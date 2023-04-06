import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode: boolean = true;

  myData: any;

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      localStorage.setItem(
        'coords',
        JSON.stringify({ lat: coords.latitude, lng: coords.longitude })
      );
    });

    const video = document.getElementById('bgVideo') as HTMLVideoElement;
    video?.play();

    // Get the stored data from local storage
    this.myData = JSON.parse(localStorage.getItem('bgVideo') || '');
    this.darkMode = this.myData;
  }

  onToggleButtonClick() {
    this.darkMode = !this.darkMode;
    // Save the current state of the toggle button to local storage
    localStorage.setItem('bgVideo', JSON.stringify(this.darkMode));
  }
}
