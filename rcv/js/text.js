$(document).ready(function() {
		var h1 = $('#hero').height();
  		var h2 = $('#textbox').height();
  		var h3 = ((h1 -h2) /2);
  		var w1 = $('#navbox').width();
  		console.log(h1)
  		console.log(h2)
  		console.log(h3)
  		console.log(w1)
  		$('#textbox').css( "padding-top", h3 );
	  	$(window).resize(function () {
	  		var h1 = $('#hero').height();
	  		var h2 = $('#textbox').height();
	  		var h3 = ((h1 -h2) /2);
  			$('#textbox').css( "padding-top", h3 );
	  	});
	});