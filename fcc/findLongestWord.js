function findLongestWord(str) {
  words = str.split(' ');
  let output = {
    longest:0,
    position:-1
  };
  for(let i=0; i<words.length; i++){
    if(words[i].length > output.longest){
      output.longest = words[i].length;
      output.position = i;
    }
  }
  console.log(output.longest);
  return(output.longest);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
