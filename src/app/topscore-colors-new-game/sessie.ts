export class TIMER{
    totaaltijd:number;
    aantaltijden :number;
    gemiddeld: number;
    verschil:number;

    constructor(){
        this.aantaltijden = 0;
        this.totaaltijd = 0;
        this.gemiddeld = 0;
        this.verschil = 0;
    }
    addTime(time:number){
        this.totaaltijd +=time;
        this.aantaltijden++;
        this.gemiddeld = this.totaaltijd/this.aantaltijden;
        this.gemiddeld = parseFloat(this.gemiddeld.toFixed(2));
    }

}