$( "div.container div div" ).mouseover(function() {
  $( "div.container div div" ).html("<p>X</p>");
});
$( "div.container div div" ).mouseout(function() {
  $( "div.container div div" ).html("<p>O</p>");
});
