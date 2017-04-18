console.log("Initiating Script");
function palandrome(string){
  let pos1=0;
  let pos2=string.length - 1;
  for(let i=0; i < pos2; i++){
    if (string[pos1+i]!==string[pos2-i]){
      return false;
    }
  }
  return true;
}
