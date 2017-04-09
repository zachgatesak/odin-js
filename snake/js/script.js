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
  tickRate:100
}
let snake = {
  headX:1,
  headY:1,
  length:2,
  position:[],
  move:function(){
    this.position.push([this.headX,this.headY])
  }
};

function drawSnake(){
  let selector = ".column-" + snake.headX + " .row-" + snake.headY;
  $(selector).addClass('fill');
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
  drawSnake();
  if(snake.headY + direction.y > pixelC - 1|| snake.headY + direction.y < 0){
    direction.y = direction.y * -1;
  }
  if(snake.headX + direction.x > pixelR - 1 || snake.headX + direction.x < 0){
    direction.x = direction.x * -1;
  }
  snake.headY += direction.y;
  snake.headX += direction.x;
}
render();
setInterval(render,direction.tickRate);
