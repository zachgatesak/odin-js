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
  headY:1
}
function drawSnake(){
  let selector = ".column-" + snake.headX + " .row-" + snake.headY;
  console.log(selector);
  $(selector).addClass('fill');
}
function render(){
  clean('.container','.column');
  console.log(direction.x);
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
  snake.headY += direction.y;
  snake.headX += direction.x;
}
render();
setInterval(render,direction.tickRate);
