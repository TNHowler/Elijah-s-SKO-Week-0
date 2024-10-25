var elevator;
var ellipses = [];

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://example.com/2" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://example.com/3" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://example.com/4" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://example.com/5" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://example.com/6" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://example.com/7" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://example.com/8" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://example.com/9" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://example.com/10" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://example.com/11" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://example.com/12" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://example.com/13" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/The-Zipped-Face-Final/" }
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 0) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }
}