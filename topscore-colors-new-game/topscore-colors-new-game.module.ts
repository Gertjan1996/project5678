import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { AverageCharacterSizeComponent } from './average-character-size/average-character-size.component';
import { ColorOptionsComponent } from './color-options/color-options.component';
import { NewGameComponent } from './new-game/new-game.component';

@NgModule({
  declarations: [TopFiveComponent, AverageCharacterSizeComponent, ColorOptionsComponent, NewGameComponent],
  exports: [TopFiveComponent, AverageCharacterSizeComponent, ColorOptionsComponent, NewGameComponent],
  imports: [
    CommonModule
  ]
})
export class TopscoreColorsNewGameModule { }
