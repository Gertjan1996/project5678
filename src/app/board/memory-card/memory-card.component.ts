import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { TopscoreService } from '../../topscore-colors-new-game/gameinfo.service';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.css']
})
export class MemoryCardComponent implements OnInit {

  constructor(private game: GameService, private gameinfo: TopscoreService ) { }

  ngOnInit() {
  }

  cardClicked(event) {
    var cardID = event.target.id;

    if (event.target.className == "inactive") {
      if (this.game.firstCard == null) {
        this.game.tempFirstCard = event.target;
        event.target.className = "active";
        this.game.firstCard = cardID;
        event.target.innerText = this.game.cardLetters[cardID];

        this.game.startTijd();
      }
      else if (this.game.firstCard != null && this.game.secondCard == null) {
        this.game.tempSecondCard = event.target;
        event.target.className = "active";
        this.game.secondCard = cardID;
        event.target.innerText = this.game.cardLetters[cardID];

        this.checkKaarten(this.game.tempFirstCard, this.game.tempSecondCard)
      }
    }
  }

  checkKaarten(firstCard, secondCard) {
    if (firstCard.innerText == secondCard.innerText) {
      firstCard.className = "found";
      secondCard.className = "found";
      this.game.gevondenParen++;
      this.game.firstCard = null;
      this.game.secondCard = null;

      if (this.game.gevondenParen == this.game.cardLetters.length / 2) {
        this.endGame()
      }
    }
    else {
      this.startTimeOut()
    }
  }

  startTimeOut() {
    this.game.timeOutTimer = setInterval(() => {
      if (this.game.timeOut == 0) {
        clearInterval(this.game.timeOutTimer);
        this.game.timeOut = 3;
        this.deactivateCards()
      }
      else {
        this.game.timeOut--;
      }
    }, 1000);
  }

  deactivateCards() {
    this.game.tempFirstCard.innerText = this.game.karakter;
    this.game.tempFirstCard.className = "inactive";
    this.game.tempSecondCard.innerText = this.game.karakter;
    this.game.tempSecondCard.className = "inactive";
    this.game.firstCard = null;
    this.game.secondCard = null;
    this.game.timeOutTimer = null;
  }

  endGame() {
    clearInterval(this.game.totaalTimer);
    var name = prompt("Enter your name: ");
    var time = this.game.totaalTijd;
    this.gameinfo.newScore(name, time);
  }
}
