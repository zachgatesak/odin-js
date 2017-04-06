function my_max(arr){
  let output = arr[0];
  for(let i=0; i < arr.length;i++){
    if(arr[i] > output){
      output = arr[i];
    }
  }
  return output;
}
function vowel_count(string){
  let output = 0;
  for(let i=0; i < string.length;i++){
    let a = string[i].toUpperCase();
    if(a == "A" || a == "E" || a == "I" || a == "O" || a == "U"){
      output++;
    }
  }
  return output;
}
function reverse(arr){
  let output = [];
  for(let i = arr.length; i > 0; i--){
    output.push(arr[i-1]);
  }
  return output.join("");
}
// Calc Functions
function add(n1,n2){
  let output = n1 + n2;
  return output;
}
function subtract(n1,n2){
  let output = n1 - n2;
  return output;
}
function multiply(n1,n2){
  let output = n1 * n2;
  return output;
}
function divide(n1,n2){
  let output = n1 / n2;
  return output;
}
function carot(n1,n2){
  let output = n1;
  for(let i=1; i < n2; i++){
    output *= n1;
  }
  return output;
}

//Operators
function clearOp(){
  if(display.length === 0){
    memory = [];
  }
  display = [];
  operator = [];
  updateDisplay();
}
function enterOp(){
  let a = parseFloat(memory.join(""));
  let b = parseFloat(display.join(""));
  if(operator.length === 0 || memory.length === 0 || display.length === 0){
    return a;
  }
  switch(operator[1]){
    case 0:
      memory[0] = add(a,b);
      clearOp();
      break;
    case 1:
      memory[0] = subtract(a,b);
      clearOp();
      break;
    case 2:
      memory[0] = multiply(a,b);
      clearOp();
      break;
    case 3:
      memory[0] = divide(a,b);
      clearOp();
      break;
    case 4:
    memory[0] = Math.pow(a,b);
    clearOp();
    break;
  }
}
function addOp(){
  operator[0]="+";
  operator[1]=0;
  mem();
  updateDisplay();
}
function subtractOp(){
  operator[0]="-";
  operator[1]=1;
  mem();
  updateDisplay();
}
function multiplyOp(){
  operator[0]="*";
  operator[1]=2;
  mem();
  updateDisplay();
}
function divideOp(){
  operator[0]="/";
  operator[1]=3;
  mem();
  updateDisplay();
}
function carotOp(){
  operator[0]="^";
  operator[1]=4;
  mem();
  updateDisplay();
}
function dotOp(){
  for(let i=0; i<display.length; i++){
    if(display[i] === "."){
      return;
    }
  }
  display.push($(this).find('p')[0].innerHTML);
  updateDisplay();
}
//Display Managers
function click(){
  display.push($(this).find('p')[0].innerHTML);
  updateDisplay();
}
function updateDisplay(){
  if(display.length == 0 && memory.length === 0){
    $( '#output h3')[0].innerHTML = "Output will be presented here."
  }
  else {
    let me ="";
    let op ="";
    let ou ="";
    for(let i=0; i<memory.length; i++){
      me += memory[i];
    }
    if(operator.length > 0){
      op += operator[0];
    }
    for(let i=0; i<display.length; i++){
      ou += display[i];
    }
    $( '#output h3')[0].innerHTML = me + " " + op + " " + ou;
  }
}
function mem(){
  if(display.length === 0){
    return;
  }
  else if(memory.length === 0){
    memory[0] = display.join("");
    display = [];
  }

}
//Digit listeners
$(document).ready(function() {
  var tag = $( '.digit' );
  for(let i=0; i < tag.length; i++){
    tag[i].addEventListener('click', click ,false);
  }
  //add
  $('#add')[0].addEventListener('click', addOp, false);
  //subtract
  $('#subtract')[0].addEventListener('click', subtractOp, false);
  //multiply
  $('#multiply')[0].addEventListener('click', multiplyOp, false);
  //divide
  $('#divide')[0].addEventListener('click', divideOp, false);
  //carot
  $('#carot')[0].addEventListener('click', carotOp, false);
  //Clear
  $('#clear')[0].addEventListener('click', clearOp, false);
  //enter
  $('#enter')[0].addEventListener('click', enterOp, false);
  //dot
  $('#dot')[0].addEventListener('click', dotOp, false);
});

//Global Variables
var display = [];
var memory = [];
var operator = [];
