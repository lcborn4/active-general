import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-units',
  templateUrl: './change-units.component.html',
  styleUrls: ['./change-units.component.scss']
})
export class ChangeUnitsComponent implements OnInit {

  timeLeft: number = 1800; //30 minutes
  interval;

  constructor() { }

  ngOnInit() {

    console.log('change-units interval',this.timeLeft)

    this.changeUnitsTimer()

  }

  changeUnitsTimer()
  {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1800;
      }
    },1000)

  }

  
}
