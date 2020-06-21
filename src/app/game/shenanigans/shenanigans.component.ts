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
  initialInterval;

  constructor() { }

  ngOnInit() {

    console.log('shenanigans interval',this.timeLeft)
    this.timeLeft = 3600; //3600
    this.shenanigansTimer()

  }

  shenanigansTimer()
  {
    this.initialInterval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 300; //check every 5 minutes now
        clearInterval(this.initialInterval);
        this.interval = setInterval(()=>{
          if(this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.timeLeft = 300; //check every 5 minutes now
          }
        },1000)
      }
    },1000)

  }

}
