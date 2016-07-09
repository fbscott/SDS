;(function($) {
				// Copyright span
		var copyright = document.getElementsByClassName('copyright')[0],
				// Current year
				currentYear = new Date().getFullYear();
				
		// Set copyright span to current year
		copyright.innerHTML = currentYear;
})(jQuery);
