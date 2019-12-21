let currentScreen: number = 0;

class SplashScreen {
  w: number;
  h: number;
  x: number;
  y: number;

  constructor(w: number, h: number, x: number, y: number) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  draw() {
    fill("black");
    rect(this.x, this.y, this.w, this.h);
    fill("white");
    ellipse(width / 2, height / 2, 400, 400);
    textAlign(CENTER);
    fill("black");
    text("The game CIGGEN", width / 2, height / 3);
    text("click anywhere to start", width / 2, height / 2);
    text(
      "Ett puzzelspel blandat med plattformsspel. \n Du skall bygga en bana för att hjälpa den stackars Jonathan \n  till sin efterlängtade ciggarett. \n Du kan när du vill pausa och gå in i byggfasen och börja om. \n Akta dig för grönsakerna på botten, \n Jonathan avskyr dem och du vet inte vad som kan hända..",
      width / 2,
      height / 2 + 20
    );
    // console.log(this.h, this.w);
  }
}

function mousePressed() {
  if (currentScreen == 0) {
    currentScreen = 1;
  }
}
