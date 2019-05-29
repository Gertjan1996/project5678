import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-current-time-left',
  templateUrl: './current-time-left.component.html',
  styleUrls: ['./current-time-left.component.css'],
 })
export class CurrentTimeLeftComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit() {
  }

}
