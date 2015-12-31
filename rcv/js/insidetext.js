$(document).ready(function() {
	var h1 = $('#insideHead').height();
	var h2 = $('#insidemobile').height();
	var h3 = ((h1 -h2) /2);
	var w1 = $('#insidemobile').width();
	console.log(h1)
	console.log(h2)
	console.log(h3)
	console.log(w1)
  $('#insidemobile').css( "padding-top", h3 );
	 $(window).resize(function () {
		var h1 = $('#insideHead').height();
		var h2 = $('#insidemobile').height();
		var h3 = ((h1 -h2) /2);
		$('#insidemobile').css( "padding-top", h3 );
	});
});