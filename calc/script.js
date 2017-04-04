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
