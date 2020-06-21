import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  timeLeft: number = 600; //10 minutes
  interval;

  constructor() { }

  ngOnInit() {

    console.log('check resources interval',this.timeLeft)

    this.checkResourcesTimer()

  }

  checkResourcesTimer()
  {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 600;
      }
    },1000)

  }

}
