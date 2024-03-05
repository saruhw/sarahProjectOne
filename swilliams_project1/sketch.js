
let bg1;
let bg2;
let bg3;


let startTime;
let switchTime = 10000;

let chicken = {
  x: 5,
  y: 240,
  w: 150,
  h: 100,
  isInBowl: false,

  display: function () {
    if (this.isInBowl == true) {
      this.x = 170;
      this.y = 210;
    } else {
      this.x = 5;
      this.y = 240;
    }
    
    image(chicken.img, this.x, this.y, this.w, this.h);
  },
}
let garlic = {
  x: 130,
  y: 350,
  w: 70,
  h: 80,
  isInBowl: false,

  display: function () {
    if (this.isInBowl == true) {
      this.x = 250;
      this.y = 230;
    } else {
      this.x = 130;
      this.y = 350;
    }
   
    image(garlic.img, this.x, this.y, this.w, this.h);
  },
}
let saltnpepper = {
  x: 400,
  y: 220,
  w: 80,
  h: 70,
  isInBowl: false,

  display: function () {
    if (this.isInBowl == true) {
      this.x = 240;
      this.y = 230;
    } else {
      this.x = 400;
      this.y = 220;
    }
    
    image(saltnpepper.img, this.x, this.y, this.w, this.h);
  },
}
let soysauce = {
  x: 330,
  y: 310,
  w: 50,
  h: 110,
  isInBowl: false,

  display: function () {
    if (this.isInBowl == true) {
      this.x = 230;
      this.y = 180;
    } else {
      this.x = 330;
      this.y = 310;
    }
    
    image(soysauce.img, this.x, this.y, this.w, this.h);
  },
}
let vinegar = {
  x: 430,
  y: 250,
  w: 50,
  h: 120,
  isInBowl: false,

  display: function () {
    if (this.isInBowl == true) {
      this.x = 240;
      this.y = 180;
    } else {
      this.x = 430;
      this.y = 250;
    }
    image(vinegar.img, this.x, this.y, this.w, this.h);
  },
}


function preload() {
  chicken.img = loadImage('chicken_stack.png');
  garlic.img = loadImage('garlic.png');
  saltnpepper.img = loadImage('saltnpepper.png');
  soysauce.img = loadImage('soysauce.png');
  vinegar.img = loadImage('vinegar.png');
  bg1 = loadImage('bowlBG.png');
  bg2 = loadImage('stoveBG.png');
  bg3 = loadImage('servedBG.png');
}

function setup() {
  createCanvas(500, 500);
  image(bg1, 0, 0, width, height);
  startTime = millis();
}

function draw() {
  if (
    chicken.isInBowl &&
    garlic.isInBowl &&
    saltnpepper.isInBowl &&
    soysauce.isInBowl &&
    vinegar.isInBowl
  ) {
    if (millis() - startTime >= switchTime) {
      image(bg3, 0, 0, width, height);
    } else {
      image(bg2, 0, 0, width, height);
    }
  } else {
    chicken.display();
    garlic.display();
    saltnpepper.display();
    soysauce.display();
    vinegar.display();
  }
}

function mousePressed() {
  if (mouseX > chicken.x && mouseY > chicken.y && mouseX < chicken.x + chicken.w && mouseY < chicken.y + chicken.h) {
    chicken.isInBowl = true;
  }
  if (mouseX > garlic.x && mouseY > garlic.y && mouseX < garlic.x + garlic.w && mouseY < garlic.y + garlic.h) {
    garlic.isInBowl = true;
  }
  if (mouseX > saltnpepper.x && mouseY > saltnpepper.y && mouseX < saltnpepper.x + saltnpepper.w && mouseY < saltnpepper.y + saltnpepper.h) {
    saltnpepper.isInBowl = true;
  }
  if (mouseX > soysauce.x && mouseY > soysauce.y && mouseX < soysauce.x + soysauce.w && mouseY < soysauce.y + soysauce.h) {
    soysauce.isInBowl = true;
  }
  if (mouseX > vinegar.x && mouseY > vinegar.y && mouseX < vinegar.x + vinegar.w && mouseY < vinegar.y + vinegar.h) {
    vinegar.isInBowl = true;
  }
}