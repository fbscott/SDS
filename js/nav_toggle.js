;(function($) {
		var navTrigger = $('.js-nav-trigger'),
				navToggle  = $('.js-nav-toggle');

		navTrigger.on('click', function() {
				navToggle.slideToggle(200);
		});

})(jQuery);

// Show desktop nav in window sizes above 639px
$(document).ready(function() {
    $(window).on("resize", function() {

      function viewport() {

          var e = window,
          		a = 'inner';

          if (!('innerWidth' in window )) {
              a = 'client';
              e = document.documentElement || document.body;
          }
          return { width : e[ a + 'Width' ], height : e[ a + 'Height' ] };
      }

	    // Get the correct window sizes with these declarations
	    windowHeight = viewport().height;
	    windowWidth = viewport().width;

			if (windowWidth > 639) {
					console.log('less than 640.');
					$('.js-nav-toggle').css('display', 'block');
			}

    });
});
