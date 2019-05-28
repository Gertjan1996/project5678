import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { CurrentGameMenuModule } from './current-game-menu/current-game-menu.module';
import { TopscoreColorsNewGameModule } from './topscore-colors-new-game/topscore-colors-new-game.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CurrentGameMenuModule,
    BoardModule,
    TopscoreColorsNewGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
