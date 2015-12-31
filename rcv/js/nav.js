$(document).ready(function() {
		var v1 = $('#hero').height();
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