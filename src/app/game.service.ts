import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  firstCard: number;
  secondCard: number;
  tempFirstCard;
  tempSecondCard;

  timeOutTimer;
  totaalTimer;

  timeOut: number;
  totaalTijd: number;
  gevondenParen: number;
  boardsize: number;

  speelVeld = { "Rows": [] };
  cardLetters = [];
  karakter: string;

  constructor() {
    this.timeOut = 3;
    this.totaalTijd = 0;
    this.gevondenParen = 0;
    this.boardsize = 4;
    this.karakter = '#';
    this.vulSpeelveld()
  }

  vulSpeelveld(cardIndex = 0) {
    var getNextLetter = this.nextLetter(this.boardsize);

    for (var rows = 0; rows < this.boardsize; rows++) {
      this.speelVeld.Rows.push({ kaarten: [] })

      for (var columns = 0; columns < this.boardsize; columns++) {
        this.speelVeld.Rows[rows].kaarten.push(cardIndex);
        this.cardLetters.push(getNextLetter())
        cardIndex++;
      }
    }
  }

  startTijd() {
    if (!this.totaalTimer) {
      this.totaalTimer = setInterval(() => {
        this.totaalTijd++;
      }, 1000);
    }
  }

  playAgain() {
    this.firstCard = null;
    this.secondCard = null;
    this.tempFirstCard = null;
    this.tempSecondCard = null;

    clearInterval(this.timeOutTimer);
    clearInterval(this.totaalTimer);

    this.timeOut = 3;
    this.totaalTijd = 0;
    this.gevondenParen = 0;
    this.boardsize = 4;
    this.speelVeld = { "Rows": [] };
    this.cardLetters = [];
    this.karakter = '#';
    
    this.vulSpeelveld()
  }

  nextLetter = function (size) {
    var letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0, size * size).split('');
    var idx = 0;

    letterArray = this.shuffle(letterArray);

    return function () {
      var letter = letterArray[idx++];
      return letter;
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
