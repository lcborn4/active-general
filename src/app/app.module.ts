import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { FarmComponent } from './game/farm/farm.component';
import { ResourceComponent } from './game/resource/resource.component';
import { TimerComponent } from './game/timer/timer.component';
import { ChangeUnitsComponent } from './game/change-units/change-units.component';
import { ShenanigansComponent } from './game/shenanigans/shenanigans.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    FarmComponent,
    ResourceComponent,
    TimerComponent,
    ShenanigansComponent,
    ChangeUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
