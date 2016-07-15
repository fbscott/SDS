;(function($) {
	var navTrigger = $('.js-nav-trigger');
	var	navToggle  = $('.js-nav-toggle');

	navTrigger.on('click', function() {
		// navToggle.slideToggle(200);
	});

	// Show desktop nav in window sizes above 639px
	$(document).ready(function() {
	    $(window).on("resize", function() {

		    // windowWidth = viewport().width;
		    var windowWidth = SDS.IS_WIN_SIZE.isViewport().width;

		    // Get the correct window size
		    SDS.IS_WIN_SIZE.isViewport();

				// if (windowWidth > 639) {
					// Show nav in large views
					$('.js-nav-toggle').css('display', 'block');
				// } else {
					// Hide nav in small views
					// $('.js-nav-toggle').css('display', 'none');
				// }

				// windowWidth > 639
				// 	? $('.js-nav-toggle').css('display', 'block')
				// 		: $('.js-nav-toggle').css('display', 'none');

	    });
	});

})(jQuery);
