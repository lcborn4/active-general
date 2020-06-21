import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shenanigans',
  templateUrl: './shenanigans.component.html',
  styleUrls: ['./shenanigans.component.scss']
})
export class ShenanigansComponent implements OnInit {

  //1 hour
  timeLeft: number = 3600; //1 hour
  interval;

  constructor() { }

  ngOnInit() {

    console.log('shenanigans interval',this.timeLeft)

    this.shenanigansTimer()

  }

  shenanigansTimer()
  {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 3600;
      }
    },1000)

  }

}
