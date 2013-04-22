$(document).ready(function(){
	// The slider being synced must be initialized first
	$('#carousel').flexslider({
		direction: "vertical",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		// itemWidth: 100,
		itemHeight: 100,
		asNavFor: '#gallery',
		animation: "slide"
	});
	   
	$('#gallery').flexslider({
		direction: "vertical",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel",
		animation: "slide"
	});
});