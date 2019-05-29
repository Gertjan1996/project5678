import { Component, OnInit } from '@angular/core';
import {TopscoreService} from '../gameinfo.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {

  constructor(public gameinfo: TopscoreService) { }

  ngOnInit() {
  }

}
