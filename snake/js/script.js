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


//functions
function render(){
  let canvas = $('canvas');
  let height = canvas[0].height;
  let width = canvas[0].width;
  let pixelR = height/numRows;
  let pixelC = width/numColumns;
  for(let r=0; r < pixelR; r++){
    for(let c=0; c < pixelC; c++){
      canvas.append("<div></div>");
      console.log(c);
    }
  }
}
