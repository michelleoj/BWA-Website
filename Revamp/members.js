$(document).ready(function() {
	$(".fancybox").fancybox({
	    helpers:  {
	        thumbs: {
	            width: 50,
	            height: 50
	        }
	    }
	});

	var bwaGallery = $('.bwa-gallery');

	bwaGallery.find('img').each(function() {
		console.log($(this));
		$(this).tooltip();
	});
});