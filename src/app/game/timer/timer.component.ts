import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  elapsedTime: any;
  stopwatch: any;
  constructor() {

    this.elapsedTime = 0;

  }

  ngOnInit() {
    console.log('starting at 0')
    this.elapsedTime = 0;

    this.elapsedTime = localStorage.startTime ? JSON.parse(localStorage.startTime) : 0;
    localStorage.setItem('startTime', JSON.stringify(this.elapsedTime));

    this.runTimer();
  }

  runTimer() {
    this.stopwatch = setInterval(() => { this.intervalFunc() }, 1000)

  }

  intervalFunc() {
    this.elapsedTime += 1;
    localStorage.setItem('startTime', JSON.stringify(this.elapsedTime));
  }

  pauseTimeLine() {
    console.log('pausing stopwatch')
    clearInterval(this.stopwatch);
  }

}
