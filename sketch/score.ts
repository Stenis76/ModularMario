class Score {
private time: number = 100;
public score: number = 0;
private ladderAmount: number;
private logAmount: number;
private stoneAmount: number;
private sidebar = new Sidebar;

    constructor(time: number, ladderAmount: number, logAmount: number, stoneAmount: number) { 
        this.time = time;
        this.ladderAmount = ladderAmount;
        this.logAmount = logAmount;
        this.stoneAmount = stoneAmount;    
    }

    // Hämta score uträknat på tid och hjälpmedel ej använt.
    public getScore(): number {    
        this.score = Math.round(500 * Math.pow(Math.E, (this.time) / -120) + (100+(this.ladderAmount * 90) + (this.logAmount * 60) + (this.stoneAmount * 30)));
        if (currentScreen == 2) {
            fill('red');
            text(`Score: ${this.score}`, this.sidebar.w / 2, this.sidebar.h * 0.15);
        }
        return this.score;
    }

}