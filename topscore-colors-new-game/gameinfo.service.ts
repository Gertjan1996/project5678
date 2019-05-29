import { Injectable} from '@angular/core';
import {Score} from './score';
import {SCORES} from './mock-score';
import {TIMER} from './sessie';
@Injectable({
    providedIn: 'root'
})
export class TopscoreService{
    scores: Score[];
    stats : TIMER;
    constructor(){
        this.scores = SCORES;
        this.stats = new TIMER();
    }
//get top vijf score in een array
getTopvijf():Score[]{
    const topvijf : Score[] = this.scores;
    // sorteren
    topvijf.sort((a,b)=>(a.time>b.time)?1:((b.time>a.time)?1:0));
    //slice() zorgt voor elke keer een nieuw array retoureet
    return topvijf.slice(0,5);
}
newScore(name:string, time:number):number{
    const score = new Score();
    score.name = name;
    score.time = time;

    this.scores.push(score);
    this.stats.addTime(time);
    return this.getTopvijf().indexOf(score)+1;
}
}
