class Sidebarright implements DrawArea{
    gamearea = new GameArea();
    sidebar = new Sidebar();
    w: number = width - this.gamearea.w - this.sidebar.w;
    h: number = height;
    x: number = width - this.w;
    y: number = 0;
    
  
    draw() { console.log(this.w)
      fill(26, 9, 56);    
      rect(this.x, this.y, this.w, this.h);
      fill(129, 177, 248);
      textSize(30);
      textFont(gameFont)
      text('Controls', this.x + this.w / 2, this.h *0.1);
      textSize(18);
      text('Press "Space" to jump', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.09 + 100);
      text('Press "D" to move forward', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.09 + 125);
      text('Press "A" to move backward', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.09 + 150);
      text('Press "L" for level selector', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.4 + 75);
      text('Press "B" to enter Build Mode', this.x + this.w / 2, this.y + this.h * 0.4 + 50);
      text('Press "1" to add a ladder', this.x + this.w / 2, this.sidebar.y + this.sidebar.h * 0.73 - 25); 
      text('Press "2" to add a log', this.x + this.w / 2, this.sidebar.y + this.sidebar.h * 0.73); 
      text('Press "3" to add a stone', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.73 + 25);
      text('Use mouse to draw items', this.x + this.w / 2, this.sidebar.y + this.sidebar.h  * 0.73 + 50);
      text('Press "R" to reset level', this.x + this.w / 2, this.sidebar.y + this.sidebar.h * 0.73 + 175);
      textSize(24);
      text('When in build mode', this.x + this.w / 2, this.h *0.65)
      stroke(129, 177, 248)
      line(-85 + this.x + this.w / 2, this.h *0.655, 85 + this.x + this.w / 2, this.h *0.655)


    }
  }