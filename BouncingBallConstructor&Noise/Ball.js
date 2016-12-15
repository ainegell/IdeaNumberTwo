var ball = [];
var numBalls = 20;
var ballSize = 25;
var speed;

function Ball() {  
this.x = random(25, width - 25);
this.y = random(25, height - 25);
this.speed = random(5);
this.colour = random(255);

this.display = function() {     
noStroke();
fill(this.colour);
ellipse(this.x, this.y, ballSize, ballSize);
    },
 
this.move = function() {
this.x = this.x + this.speed;
      if (this.x > (width - 25)) {
this.speed = -this.speed;
      }
 