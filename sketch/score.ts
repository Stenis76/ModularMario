class Score {
private time: number = 100;
public score: number = 0;
private ladderAmount: number;
private logAmount: number;
private stoneAmount: number;


constructor(ladderAmount: number, logAmount: number, stoneAmount: number) { 
    this.ladderAmount = ladderAmount;
    this.logAmount = logAmount;
    this.stoneAmount = stoneAmount;    
}

public getScore() {    
    this.score = 500 * Math.pow(Math.E, (this.time) / -120) + (100+(this.ladderAmount * 90) + (this.logAmount * 60) + (this.stoneAmount * 30));
    console.log(this.score);    
}

}