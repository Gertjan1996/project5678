import {Component,OnInit} from '@angular/core';

@Component({
    selector:'Project5678-cards',
    templateUrl: './cardComponent.html',
    styleUrls: ['./cardComponent.css']
})

export class CardComponent implements OnInit{
    size:Number;
    cards: [];
    constructor(){}

    ngOnInit(){
        for(let row = 0; row<this.size;row++){
            if (!this.cards[row]) this.cards[row] = [];
            for(let cell =0;cell<this.size;cell++){
                if(!this.cards[row][cell]) this.cards[row][cell] = cell;
            }
        }
    }
    
}
