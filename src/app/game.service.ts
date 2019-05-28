import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  speelVeld = { "Rows": [] };
  kaartenArray = [];
  boardsize: number;
  karakter: string;

  constructor() {
    this.boardsize = 4;
    this.karakter = '#';
    this.vulSpeelveld()
  }

  vulSpeelveld(kaartCount = 0) {
    var getNextLetter = this.nextLetter(this.boardsize);

    for (var rows = 0; rows < this.boardsize; rows++) {
      this.speelVeld.Rows.push({ kaarten: [] })

      for (var columns = 0; columns < this.boardsize; columns++) {
        this.speelVeld.Rows[rows].kaarten.push(kaartCount);
        this.kaartenArray.push(getNextLetter())
        kaartCount++;
      }
    }
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
