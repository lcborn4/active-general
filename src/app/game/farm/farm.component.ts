import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  timeLeft: number = 300;
  interval;

  constructor() { }

  ngOnInit() {

    console.log('check farms interval',this.timeLeft)

    this.checkFarmsTimer()

  }

  checkFarmsTimer()
  {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 300;
      }
    },1000)

  }

}
