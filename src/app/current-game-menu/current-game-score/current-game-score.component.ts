import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-current-game-score',
  templateUrl: './current-game-score.component.html',
  styleUrls: ['./current-game-score.component.css']
})
export class CurrentGameScoreComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit() {
  }

}
