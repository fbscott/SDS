/**
 * strapline.js
 *
 * JS DEPENDENCIES:
 * - jQuery
 * - jQuery cookie plugin
 * - localization.js
 *
 * DOM DEPENDENCIES:
 * - '.strapline-secondary'             : Secondary strapline container - outer div
 * - '.strapline-highlights .content'   : Strapline highlight container - p
 * - '.js-strapline                     : Hoverable strapline element (span.icon & label container) - div
 */

;(function($){
// set a local $ variable only available in this block as an alias to jQuery
// helps with alerts (mootools) conflicts

        // Strapline highlights container (where straplineContents contents will be displayed on the DOM)
    var straplineContent     = $('.strapline-highlights'),
        // Data attribute from strapline-secondary.htm (starts at 0)
        straplineData        = 0,
        // Strapline timer function
        straplineTimer       = '',
        // Strapline timer toggle
        straplineTimer_is_on = 0,
        // Array of what will populate .strapline-highlights in the DOM
        straplineContents    = [
            {
                header  : "About",
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lectus, tincidunt non tempor a, tristique a purus. Nullam nec ex non orci tincidunt rutrum.",
                link    : "Visit our About page to learn more about us! \u00BB",
                url     : "/about/about.htm",
                // small   : "16.666666%",
                large   : "10%"
            },
            {
                header  : "Services",
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lectus, tincidunt non tempor a, tristique a purus. Nullam nec ex non orci tincidunt rutrum.",
                link    : "Click here to learn more about our services! \u00BB",
                url     : "/services/services.htm",
                // small   : "50%",
                large   : "30%"
            },
            {
                header  : "Gallery",
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lectus, tincidunt non tempor a, tristique a purus. Nullam nec ex non orci tincidunt rutrum.",
                link    : "Click here to view our Gallery page! \u00BB",
                url     : "/gallery/gallery.htm",
                // small   : "83.333333%",
                large   : "50%"
            },
            {
                header  : "FAQs",
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lectus, tincidunt non tempor a, tristique a purus. Nullam nec ex non orci tincidunt rutrum.",
                link    : "Visit our FAQs page to learn more! \u00BB",
                url     : "/faqs/faqs.htm",
                // small   : "16.666666%",
                large   : "70%"
            },
            {
                header  : "Contact",
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lectus, tincidunt non tempor a, tristique a purus. Nullam nec ex non orci tincidunt rutrum.",
                link    : "Find our contact information here! \u00BB",
                url     : "/contact/contact.htm",
                // small   : "50%",
                large   : "90%"
            }
        ];

    /**
     * Set event listeners
     * Loop through strapline contents
     */
    function init() {
        // When js is ready
        $(window).load(function() {
            // Array of strapline elements
            var _straplineArr = $('.js-strapline');
            // Update strapline contents on hover
            $(document).on('mouseenter', '.js-strapline', updateStrapline);
            $(document).on('mouseleave', '.js-strapline', function() {
                startCount(_straplineArr);
            });
            // Auto-cycle through strapline elems
            startCount(_straplineArr);

        });
    }

    function highlightStrapline(elems, i, delay) {
        elems.eq(i).mouseenter();
        straplineTimer = setTimeout(function() {
            highlightStrapline(elems, ++i % elems.length, delay);
        }, delay);
    }

    function startCount(arr) {
        if (!straplineTimer_is_on) {
            straplineTimer_is_on = 1;
            highlightStrapline(arr, straplineData, 8000);
        }
    }

    function stopCount() {
        clearTimeout(straplineTimer);
        straplineTimer_is_on = 0;
    }

    /**
     * Update strapline highlights as icons are hovered
     * Shift caret position
     * Add/remove "show" class for highlights DOM element: p
     * @var     {Object} _straplineContainer     Strapline container
     * @var     {Object} _caretPosition          Current or hovered strapline element
     */
    function updateStrapline() {

        stopCount();

        var _straplineContainer = $('.js-strapline-nav-items'),
            _caretPosition      = $(this);

        // Update straplineData with index of hovered strapline item (subtract 1 from data-attr for index value)
        straplineData = $(this).data('strapline') - 1;

        // Shift caret position based on hovered .js-strapline data-percent attribute.
        $('.caret').css('left', function() {
            if ($(window).width() < 623) {
                return straplineContents[straplineData].small;
            } else {
                return straplineContents[straplineData].large;
            }
        });

        // De-emphasize current strapline item - add/remove "strapline-active" class to lighten grey text and icon color
        _caretPosition.closest(_straplineContainer)
                     .find('.js-strapline')
                    /**
                     * Note: the .strapline-active class part of
                     * _nav.scss (lines 103 - 107).
                     */
                     .removeClass('strapline-active');
        _caretPosition.addClass('strapline-active');

        // Change .strapline-highlights HTML based on caret position.
        straplineContent.html(function() {
            straplineContent.find('.show').delay(150).queue(function(next) {
                $(this).removeClass('show');
                // Remove "show" class, continue with opacity transition
                next();
            });
            deliverStraplineData();
        });

    }

    /**
     * Update strapline highlight contents
     * Add "show" class to strapline p tag in the DOM
     * @return {String} class: div.content p.show
     */
    function deliverStraplineData () {

        $('.strapline-highlights .content p.js-strapline-highlights-p').delay(150).queue(function(next) {
            $(this).text(straplineContents[straplineData].content);
            $(this).addClass('show');
            // Replace text, add "show" class, continue with opacity transition
            next();
        });
        $('.strapline-highlights .content p.js-strapline-highlights-a').delay(150).queue(function(next) {
            $(this).find('a').attr('href', straplineContents[straplineData].url);
            $(this).find('a').text(straplineContents[straplineData].link);
            $(this).addClass('show');
            // Replace text, add "show" class, continue with opacity transition
            next();
        });
        $('.strapline-highlights .header h2.js-strapline-highlights-header').delay(150).queue(function(next) {
            $(this).text(straplineContents[straplineData].header);
            $(this).addClass('show');
            // Replace text, add "show" class, continue with opacity transition
            next();
        });
    }

    init();

})(jQuery);
