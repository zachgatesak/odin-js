
function titleCase(str) {
  let output = str.split(' ');
  let minorWords = ["a", 'an', "the", "for", "and", "nor", "but", "or", "yet", "so", "at", "around", "by", "after", "along", "for", "from", "of", "on", "to", "with", "without"];
  for(let i=0; i<output.length; i++){
    let flag = false;
    for(let j=0; j < minorWords.length; j++){
      if(output[i] === minorWords[j] && i != 0){
        console.log("hit");
        console.log(output[i]);
        flag = true;
      }
    }
    if(!flag){
      output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1).toLowerCase();
    }
  }
  console.log(output.join(" "));
  return output.join(" ");
}

titleCase("I'm a little tEA pot");
