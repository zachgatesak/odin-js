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
function click(){console.log("Click!");}
// Calc listeners
var buttons = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "add", "subtract", "enter", "carot", "divide", "multiply", "clear", "dot"];

var classname = document.getElementsByClassName("digit");
var listeners = function() {
    var attribute = this.getAttribute("id");
    console.log(attribute);
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', listeners, false);
}
