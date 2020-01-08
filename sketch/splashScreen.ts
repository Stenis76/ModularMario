class SplashScreen {
  w: number;
  h: number;
  x: number;
  y: number;

  public constructor(w: number, h: number, x: number, y: number) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  draw() {
    textFont(gameFont)
    textAlign(CENTER)
    let infoText: string =
      "Ett puzzelspel blandat med plattformsspel. \n Du skall bygga en bana för att hjälpa den stackars Jonathan \n  till sin efterlängtade ciggarett. \n Du kan när du vill pausa och gå in i byggfasen och börja om. \n Akta dig för grönsakerna på botten, \n Jonathan avskyr dem och du vet inte vad som kan hända..";
    fill("black");
    rect(this.x, this.y, this.w, this.h);
    fill("white");
    imageMode(CENTER);
    image(splashImg,  width / 2, height / 4.3 );
    textSize(24);
    text("click anywhere to start", width / 2, height / 2.5);
    textSize(20);
    text(infoText, width / 2, height / 2 + 20);
    // console.log(this.h, this.w);
  }
}


