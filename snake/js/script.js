//Declarations
let numRows = 40;
let numColumns = 40;
let height = 400;
let width = 400;
let pixelR = height/numRows;
let pixelC = width/numColumns;
let grid = []
for(let r=0; r < numRows; r++){
  grid[r] = [];
  for(let c=0; c <numColumns; c++){
    grid[r][c] = " ";
  }
}
let apple = {
  x:Math.round(getRandomArbitrary(0,height/numColumns-1)),
  y:Math.round(getRandomArbitrary(0,height/numRows-1)),
  draw:function(){
    let selector = ".column-" + this.x + " .row-" + this.y;
    $(selector).addClass('apple');
  },
  flush:function(){
    this.x = Math.round(getRandomArbitrary(0,height/numColumns -1));
    this.y = Math.round(getRandomArbitrary(0,height/numRows -1));
    for(let i=0; i<snake.position.length; i++){
      if(this.x === snake.position[i][0]){
        if(this.y === snake.position[i][1]){
          this.flush();
        }
      }
    }
  },
  chomp:function(){
    if(snake.headX ===this.x && snake.headY === this.y){
      snake.segments++;
      this.flush();
    }
  }
}
function bounce(){
  if(snake.headY + direction.y > pixelC - 1|| snake.headY + direction.y < 0){
    snake.death();
  }
  if(snake.headX + direction.x > pixelR - 1 || snake.headX + direction.x < 0){
    snake.death();
  }
  for(let i=5; i<snake.position.length; i++){
    if(snake.headX=== snake.position[i][0]){
      if(snake.headY === snake.position[i][1]){
        console.log("snake.headX: "+snake.headX);
        console.log("snake.position[i][0]: "+snake.position[i][0]);

        console.log("snake.headY: "+snake.headY);
        console.log("snake.position[i][1]: "+snake.position[i][0]);
        snake.death();
      }
    }
  }
}
let direction = {
  x:1,
  y:0,
  tickRate:100,
  rotateR:function(){
    //right
    if(this.x === 1 && this.y ===0){
      this.x = 0;
      this.y = 1;
    }
    //down
    else if(this.y === 1 && this.x ===0){
      this.y = 0;
      this.x = -1;
    }
    //left
    else if(this.x === -1 && this.y === 0){
      this.x = 0;
      this.y = -1;
    }
    //up
    else if(this.y === -1 && this.x === 0){
      this.y = 0;
      this.x = 1;
    }
  },
  rotateL:function(){
    //right
    if(this.x === 1 && this.y ===0){
      this.x = 0;
      this.y = -1;
    }
    //down
    else if(this.y === 1 && this.x ===0){
      this.y = 0;
      this.x = 1;
    }
    //left
    else if(this.x === -1 && this.y === 0){
      this.x = 0;
      this.y = 1;
    }
    //up
    else if(this.y === -1 && this.x === 0){
      this.y = 0;
      this.x = -1;
    }
  }

}
let snake = {
  headX:1,
  headY:1,
  segments:10,
  position:[],
  lives: 3,
  move:function(){
    this.position.push([this.headX,this.headY])
    if(this.position.length > this.segments){
      this.position.shift();
    }
  },
  death:function(){
    if(this.lives > 1){
      this.headX = 1;
      this.headY = 1;
      this.segments = 2;
      this.position = [];
      this.lives--;
      direction.x = 1;
      direction.y = 0;
      apple.flush();
      console.log(this.lives);
    }
    else{
      direction.x =0;
      direction.y =0;
      alert("Game Over!");
    }
  }
};
function stop(){
  document.write('<!--');
  console.log("Document stopped please reload to continue.")
}

function clean(obj, rem){
  $(obj).find(rem).remove();
}
function drawSnake(){
  for(let i=0; i<snake.position.length; i++){
    let selector = ".column-" + snake.position[i][0] + " .row-" + snake.position[i][1];
    $(selector).addClass('fill');
  }
}
function render(){
  clean('.container','.column');
  let container = $('.container');
  for(let c=0; c < pixelC; c++){
    container.append("<div class=column-"+c+"></div>");
    }
  $('.container div').addClass("column");

  let columns = $('.container div.column');
  for(let r=0; r< pixelR; r++){
    columns.append("<div class=row-"+r+"></div>");
  }
  snake.headY += direction.y;
  snake.headX += direction.x;

  drawSnake();
  apple.draw();
  apple.chomp();
  snake.move();
  bounce();
}

function keydown(e){
  if(e.keyCode==39){
    direction.rotateR();
    console.log("Right!");
  }
  else if(e.keyCode==37){
  direction.rotateL();
  console.log("Left!");
  }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
//Body
render();
setInterval(render,direction.tickRate);

// Listeners
document.addEventListener("keydown",keydown,false);
