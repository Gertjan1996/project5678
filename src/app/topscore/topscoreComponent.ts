import {Component,OnInit} from '@angular/core';
@Component({
    selector:'topscore',
    templateUrl: './topscorecomponent.html',
    styleUrls: ['./topscorecomponent.css']
})
export class TopScoreComponent implements OnInit{
    name:String;
    score:Number;
    constructor(){}
    ngOnInit(){} 
}
