import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode: boolean = true;

  ngOnInit(): void {
    const video = document.getElementById('bgVideo') as HTMLVideoElement;
    video.play();

    const savedToggleState = localStorage.getItem('toggleState');
    if (savedToggleState !== null) {
      this.darkMode = JSON.parse(savedToggleState);
    }
  }

  onToggleButtonClick() {
    this.darkMode = !this.darkMode;
    // Save the current state of the toggle button to local storage
    localStorage.setItem('toggleState', JSON.stringify(this.darkMode));
  }
}
