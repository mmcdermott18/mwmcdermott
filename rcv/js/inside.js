// fixing nav bar
$(document).ready(function() {
		var v1 = $('#insideHead').height();
	  	$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	      	console.log(v1)
	     	console.log($('#navbar').outerHeight(true))
    		if ($(window).scrollTop() > v1) {
      			$('#navbar').addClass('navbar-fixed');
      			$('#content').addClass('navbar-fix')
    		}
    		if ($(window).scrollTop() < (v1+1)) {
      			$('#navbar').removeClass('navbar-fixed');
      			$('#content').removeClass('navbar-fix')
    		}
	  	});
	});
// center text in header
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
// slide toggle nav bar
$(document).ready(function() {
	$("#menuToggle").click(function(){
    	$("#expandableMenu").slideToggle();
	});
});