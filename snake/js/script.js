//Declarations
let numRows = 40;
let numColumns = 40;
let grid = []
for(let r=0; r < numRows; r++){
  grid[r] = [];
  for(let c=0; c <numColumns; c++){
    grid[r][c] = " ";
  }
}
//TODO: Remove this funciton prior to production build
function stop(){
  document.write('<!--');
  console.log("Document stopped please reload to continue.")
}
function clean(obj, rem){
  $(obj).find(rem).remove();
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
  segments:4,
  position:[],
  move:function(){
    this.position.push([this.headX,this.headY])
    if(this.position.length > this.segments){
      this.position.shift();
    }
  }
};

function drawSnake(){
  for(let i=0; i<snake.position.length; i++){
    let selector = ".column-" + snake.position[i][0] + " .row-" + snake.position[i][1];
    $(selector).addClass('fill');
  }
}

function render(){
  clean('.container','.column');
  let container = $('.container');
  let height = 400;
  let width = 400;
  let pixelR = height/numRows;
  let pixelC = width/numColumns;
  for(let c=0; c < pixelC; c++){
    container.append("<div class=column-"+c+"></div>");
    }
  $('.container div').addClass("column");

  let columns = $('.container div.column');
  for(let r=0; r< pixelR; r++){
    columns.append("<div class=row-"+r+"></div>");
  }
  if(snake.headY + direction.y > pixelC - 1|| snake.headY + direction.y < 0){
    direction.y = direction.y * -1;
  }
  if(snake.headX + direction.x > pixelR - 1 || snake.headX + direction.x < 0){
    direction.x = direction.x * -1;
  }
  snake.headY += direction.y;
  snake.headX += direction.x;
  snake.move();
  drawSnake();

  console.log("D.x"+direction.x);
  console.log("D.y"+direction.y);
  console.log("###");
}

render();
setInterval(render,direction.tickRate);

// Listeners
document.addEventListener("keydown",keydown,false);

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
