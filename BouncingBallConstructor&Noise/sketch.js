var ball = [];
var numBalls = 1;
var ballSize = 50;
var speed;
//sound
var env;
var osc;
var hz;
var delay;

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < numBalls; i++) {
    ball[i] = new Ball();
  }
  //sound
  osc = new p5.Oscillator();

  env = new p5.Env();
  env.setADSR(0.02, 0.01, 0.5, 0.1);
  env.setRange(0.5, 0);
  
  delay = new p5.Delay();
  delay.process(osc, 0.3, 0.6);
}

function draw() {
  background(110, 110, 230, 80);
  for (var i = 0; i < ball.length; i++) {
    ball[i].display();
    ball[i].move();


  }
}

function mousePressed() {
  ball.push(new Ball());
  osc = new p5.Oscillator();

}

function Ball() {
  this.x = random(25, width - 25);
  this.y = random(25, height - 25);
  this.xspeed = 3;
  this.yspeed = -3;
  this.colour = random(255);

  this.display = function() {
      noStroke();
      fill(this.colour);
      ellipse(this.x, this.y, ballSize, ballSize);
    },

    this.move = function() {
      this.x = this.x + this.xspeed;
      if (this.x > width - 25 || this.x < 25) {
        this.xspeed = -this.xspeed;
        osc.setType('sine');
        osc.start();
        osc.freq(hz);
        osc.amp(env);
        env.play();
        hz = random(200, 10,000);
      }
      this.y = this.y + this.yspeed;
      if (this.y > height - 25 || this.y < 25) {
        this.yspeed = -this.yspeed;
        osc.setType('triangle');
        osc.start();
        osc.freq(hz);
        osc.amp(env);
        env.play();
        hz = random(200, 10,000);
      }


    }
}