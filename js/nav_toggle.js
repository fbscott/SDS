;(function($) {
		var navTrigger = $('.js-nav-trigger'),
				navToggle  = $('.js-nav-toggle');

		navTrigger.on('click', function() {
				navToggle.slideToggle(200);
		});
})(jQuery);