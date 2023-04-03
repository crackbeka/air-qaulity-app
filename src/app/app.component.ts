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
    const video = document.getElementById('bgVideo') as HTMLVideoElement;
    video.play();

    // Get the stored data from local storage
    const storedData = localStorage.getItem('bgVideo');
    if (storedData !== null) {
      this.myData = JSON.parse(storedData);
    }
  }

  onToggleButtonClick() {
    this.darkMode = !this.darkMode;
    // Save the current state of the toggle button to local storage
    localStorage.setItem('bgVideo', JSON.stringify(this.darkMode));
  }
}
