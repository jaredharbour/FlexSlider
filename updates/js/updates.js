$(document).ready(function(){
	// The slider being synced must be initialized first
	$('#carousel').flexslider({
		// direction: "horizontal",
		direction: "vertical",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 50,
		itemHeight: 200,
		// itemMargin: 5,
		// move: 1,
		asNavFor: '#gallery',
		animation: "slide"
	});
	   
	$('#gallery').flexslider({
		// direction: "horizontal",
		// reverse: true,
		direction: "vertical",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel",
		animation: "slide"
	});
});