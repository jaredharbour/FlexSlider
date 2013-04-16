$(document).ready(function(){
/*
	$('.flexslider').flexslider({
		// direction: "horizontal",
		direction: "vertical",
		animation: 'slide'
	});
	*/
	
	// The slider being synced must be initialized first
	$('#carousel').flexslider({
		// direction: "horizontal",
		// direction: "vertical",
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		// itemHeight: 455,
		// itemMargin: 5,
		// move: 1,
		asNavFor: '#slider'
	});
	   
	$('#slider').flexslider({
		// direction: "horizontal",
		// direction: "vertical",
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
});