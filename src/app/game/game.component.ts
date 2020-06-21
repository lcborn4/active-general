import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import {TimerComponent} from './timer/timer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {

  @ViewChild(TimerComponent,{static: false})

  private timerComponent: TimerComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.timerComponent.pauseTimeLine();
  }

  endGame() {
    console.log('endGame')


    this.timerComponent.pauseTimeLine();
    this.router.navigate(['/home']);

  }

}
