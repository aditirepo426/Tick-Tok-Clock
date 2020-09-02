var hr , min , sec , angle;
var secAngle , minAngle , hrAngle;

function setup() {
  createCanvas(400,400);

 

}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
   
  // seconds arc
  push();
  strokeWeight(8);
  noFill();
  stroke(255,100,150);
  secAngle = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);
  pop();

  //second hand
  push();
  rotate(secAngle);
  stroke(255,100,150);
  strokeWeight(8);
  line(0,0,150,0);
  pop();

  // min arc
  push();
  strokeWeight(8);
  noFill();
  stroke("blue");
  minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);
  pop();

  // min hand 
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(8);
  line(0,0,130,0);
  pop();

  // hour arc
  push();
  strokeWeight(8);
  noFill();
  stroke("white");
  hrAngle = map( hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);
  pop();

  // hour hand
  push();
  rotate(hrAngle);
  stroke("white");
  strokeWeight(8);
  line(0,0,50,0);
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(8);
  arc(0,0,320,320,0,360);
  pop();
  
  push();
  stroke("red");
  strokeWeight(8);
  point(0,0);
  pop();
  
  drawSprites();
}