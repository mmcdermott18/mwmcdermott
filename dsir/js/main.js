// center header text
$(document).ready(function() {
	var h1 = $('body').height();
	var h2 = $('#container').height();
	var h3 = ((h1 -h2) /2);
  var h4 = $('#about').height();
  var h5 = ((h1 -h4) /2);
  var w1 = $('body').width();
  var w2 = $('#container').width();
  var w3 = (((w1 -w2) /2)/2);
	console.log(h1)
	console.log(h2)
	console.log(h3)
  console.log(h4)
  console.log(h5)
  console.log(w1)
  console.log(w2)
  console.log(w3)
	$('#container').css( "top", h3 );
  $('#container').css( "left", w3 );
  $('#about').css( "padding-top", h5 );
  	$(window).resize(function () {
  		var h1 = $('body').height();
  		var h2 = $('#container').height();
  		var h3 = ((h1 -h2) /2);
      var h4 = $('#about').height();
      var h5 = ((h1 -h4) /2);
      var w1 = $('body').width();
      var w2 = $('#container').width();
      var w3 = ((w1 -w2) /2);
      console.log(w2)
      console.log(w3)
  		$('#container').css( "top", h3 );
      $('#container').css( "left", w3 );
      $('#about').css( "padding-top", h5 );
  	});
	});