import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-units',
  templateUrl: './change-units.component.html',
  styleUrls: ['./change-units.component.scss']
})
export class ChangeUnitsComponent implements OnInit {

  timeLeft: number = 1800; //30 minutes
  interval;
  initialInterval;

  ALERT = false;

  constructor() { }

  ngOnInit() {

    console.log('change-units interval',this.timeLeft)

    this.changeUnitsTimer()

  }

  changeUnitsTimer()
  {
    this.initialInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 600; //every 10 minutes check for change units
        this.ALERT = true;
        clearInterval(this.initialInterval);
        this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.timeLeft = 600;
            this.ALERT = true;
            setTimeout(() => {
              this.ALERT = false;
            }, 10000)

          }
        }, 1000)

        setTimeout(() => {
          this.ALERT = false;
        }, 10000)

      }

    }, 1000)

  }

}
