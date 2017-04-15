//Jquery after DOM load
$(function() {
  //hide images not in first position
  $('#roller div:not(:first)').hide();

  $('#plus').click(fadeNext);
  $('#minus').click(fadePrev);
  $('#blank').click(blank);

  function fadeNext() {
    $('#roller div').first().hide().appendTo($('#roller'));
    $('#roller div').first().fadeIn();
  }
  function fadePrev(){
    $('#roller div').first().hide();
    $('#roller div').last().prependTo($('#roller')).fadeIn();
  }
  function blank(){
    if($('#roller div:hidden').length == $('#roller div').length){
      $('#roller div').first().fadeIn();
      console.log("A");
    }
    else {
      $('#roller div:visible').first().fadeOut();
      console.log("B");
    }
  }
});
