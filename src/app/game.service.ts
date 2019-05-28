import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  boardsize: number;

  constructor() {
    this.boardsize = 4;
  }
}
