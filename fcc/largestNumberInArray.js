function largestOfFour(arr) {
  let output = [];
  for(let i=0; i<arr.length; i++){
    let tmp = 0;
    for(let j=0; j<arr[i].length; j++){
      if(tmp < arr[i][j]){
        tmp = arr[i][j]
      }
    }
    output.push(tmp);
  }
  console.log(output.join(" "))
  return output;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
