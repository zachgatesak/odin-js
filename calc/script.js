var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

// Ball ifnormation
var ballRadius = 10;
var ballColor = "#0095DD";

// Paddle information
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

// Input
var rightPressed = false;
var leftPressed = false;

//Brick Madness
var brickRowCount = 5;
var brickColumnCount = 10;
var brickWidth = 30;
var brickHeight = 10;
var brickPadding = 5;
var brickOffsetTop = 50;
var brickOffsetLeft = 30;

var bricks = [];
for(c=0; c<brickColumnCount; c++){
  bricks[c] = [];
  for(r=0; r<brickRowCount; r++){
    bricks[c][r] = {x: 0, y: 0, status: brickRowCount-r};
  }
}

var score = 0;
var lives = 3;
var status1 = 0;
function colorPicker(e) {
    var colorArr = ["#6600ff","#0000ff","#bfff00","#ffbf00","#ff0000","#8000ff"];
    return colorArr[e];
}

function drawLives(){
  ctx.font="16px Arial";
  ctx.fillstyle ="#0095DD";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
function mouseMoveHandler(e){
  var relativeX=e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX <canvas.width){
    paddleX = relativeX - paddleWidth/2;
  }
}
function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " +score, 8, 20);
}
function brickCounter(){
  var brickCount=0;
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){
      if(bricks[c][r].status > 0){
        brickCount++;
      }
    }
  }
  return brickCount;
}

function drawBricks() {
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){
      if(bricks[c][r].status > 0) {
        var brickX =(c*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY =(r*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        // bricks[c][r].status = status1;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = colorPicker(bricks[c][r].status);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
function paddleMovement(){
  if(rightPressed) {
    if(paddleX + 7 + paddleWidth < canvas.width){
      paddleX += 7;
    }
  }
  else if (leftPressed) {
    if(paddleX - 7 > 0){
      paddleX -= 7;
    }
  }
}
function drawPaddle(){
  paddleMovement();
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}
// TODO add a case statement allowing check for bumper based on width of the bumper.
function collision() {
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  if (y + dy > canvas.height - ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth){
        if(leftPressed){
          dy = -dy;
          dx = dx+(dx*.5);
        }
        else if (rightPressed) {
          dy = -dy;
          dx = dx+(dx*.5);
        }
        else {
          dy = -dy;
        }
    }
    else {
      lives--;
      if(lives == 0){
        alert("Game Over");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width-paddleWidth)/2;
      }

    }
  }
  if(x + dx < ballRadius){
    dx = -dx;
  }
  if(x + dx > canvas.width - ballRadius){
    dx = -dx;
  }
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){
      var b = bricks[c][r];
      //Calcs
      if( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight && b.status > 0){
        dy = -dy;
        ballColor = colorPicker(b.status);
        b.status -= 1;
        score++ ;
        var temp = brickCounter();
        if (temp=0){
          alert("You Win, CONGRATULATIONS!");
          document.location.reload();
        }
      }
    }
  }
}
function draw(){
  //Draw code to go here.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  collision();
  drawBricks();
  drawScore();
  drawLives();
  drawBall();
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
// Listeners:
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

draw();
