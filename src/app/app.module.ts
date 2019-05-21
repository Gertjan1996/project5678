import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentgameComponent } from './currentgame/currentgame.component';
import { TileComponent } from './tile/tile.component';
import { TimeleftComponent } from './timeleft/timeleft.component';
import { TopvijfComponent } from './topvijf/topvijf.component';
import { BoardoptionsComponent } from './boardoptions/boardoptions.component';
import { BoardcolorsComponent } from './boardcolors/boardcolors.component';
import { NewgameComponent } from './newgame/newgame.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentgameComponent,
    TileComponent,
    TimeleftComponent,
    TopvijfComponent,
    BoardoptionsComponent,
    BoardcolorsComponent,
    NewgameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
