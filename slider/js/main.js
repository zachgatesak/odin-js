function display(i){
  //if this 0 blank display
  if(i === 0){
      $('div.container img').removeClass('show');
  }
  else {
    // if >0 display img
    $('div.images img').removeClass('show');
    $('div.images > img:nth-child('+ i +')').addClass('show');
  }
}
function augmentDisplay(bool){
  if(bool){
    //Increase position
    if(position + 1 > numberOfImages){
      position = 1;
    }
    else {
      position++;
    }
  }
  else if (!bool){
    //Decrease position
    if(position - 1 < 1){
      position = numberOfImages;
    }
    else {
      position--;
    }
  }
  display(position);
  console.log("Hit");
}



let position = 0;
let numberOfImages = $("div.container div img").length;
//Button Click Events
$('#RIGHT').click(function(){
  augmentDisplay(true);
});
$('#LEFT').click(function(){
  augmentDisplay(false);
});$('#BLANK').click(function(){
  display(0);
});
