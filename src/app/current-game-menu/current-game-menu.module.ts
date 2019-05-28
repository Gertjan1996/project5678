import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentGameScoreComponent } from './current-game-score/current-game-score.component';
import { CurrentTimeLeftComponent } from './current-time-left/current-time-left.component';

@NgModule({
  declarations: [CurrentGameScoreComponent, CurrentTimeLeftComponent],
  exports: [
    CurrentGameScoreComponent, CurrentTimeLeftComponent],
  imports: [
    CommonModule
  ]
})
export class CurrentGameMenuModule { }
