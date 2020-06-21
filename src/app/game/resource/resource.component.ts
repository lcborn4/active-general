import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  timeLeft: number = 300; //5 minutes
  initialCheck: number = 600;
  interval;
  initialInterval;

  ALERT = false;

  constructor() { }

  ngOnInit() {

    console.log('check resources interval',this.timeLeft)
    this.timeLeft = 600; //600
    this.checkResourcesTimer()

  }

  checkResourcesTimer()
  {
    this.initialInterval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 300;
        this.ALERT = true;
        clearInterval(this.initialInterval);
        this.interval = setInterval(()=>{
          if(this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.timeLeft = 300;
            this.ALERT = true;
            setTimeout(()=>{
              this.ALERT = false;
            },10000)

          }
        },1000)

        setTimeout(()=>{
          this.ALERT = false;
        },10000)

      }
    },1000)

  }

}
