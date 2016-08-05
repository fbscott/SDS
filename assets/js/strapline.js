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
 * - '.js-strapline                     : Clickable strapline element (span.icon & label container) - div
 */

;(function($){
// set a local $ variable only available in this block as an alias to jQuery
// helps with alerts (mootools) conflicts

        // Strapline highlights container (where straplineContents contents will be displayed on the DOM)
    var straplineContent    = $('.strapline-highlights'),
        // Data attribute from strapline-secondary.htm (starts at 0)
        straplineData       = 0,
        // Array of what will populate .strapline-highlights in the DOM
        straplineContents   = [
            {
                header  : "About",
                content : "Jackie aims to please when it comes to design. Serving others with home staging and design is not just her career, it's a passion. \"Its not just a career... it's a life dream.\"",
                link    : "Visit our About page to learn more about us! \u00BB",
                url     : "/about/about.htm",
                // For test
                // url     : "https://f3c7e0fd5a5d3d4d9a64f3fb1769fc1590c352d0-www.googledrive.com/host/0B1OzuLRhXA-PWWVNbVhIdFcxNms/about/about.htm",
                // small   : "16.666666%",
                large   : "10%"
            },
            {
                header  : "Services",
                content : "Please review the options and select one that best suit your needs and comfort level. I look forward to doing business with you!",
                link    : "Click here to learn more about our services! \u00BB",
                url     : "/services/services.htm",
                // small   : "50%",
                large   : "30%"
            },
            {
                header  : "Gallery",
                content : "See what we've done for some of our previous customers.",
                link    : "Click here to view our Gallery page! \u00BB",
                url     : "/gallery/gallery.htm",
                // small   : "83.333333%",
                large   : "50%"
            },
            {
                header  : "FAQs",
                content : "You have questions, we have answers.",
                link    : "Visit our FAQs page to learn more! \u00BB",
                url     : "/faqs/faqs.htm",
                // small   : "16.666666%",
                large   : "70%"
            },
            {
                header  : "Contact",
                content : "Let us know how we can help! Reach out to us via telephone, email, or web form.",
                link    : "Find our contact information here! \u00BB",
                url     : "/contact/contact.htm",
                // small   : "50%",
                large   : "90%"
            }
        ];

    /**
     * Set event listeners
     * Loop through strapline contents array if cookie == 'es'
     */
    function init() {
        // When js is ready
        $(window).load(function() {
            // Array of strapline elements (6 total)
            var straplineArr = $('.js-strapline');
            // Update strapline contents on click
            $(document).on('mouseenter', '.js-strapline', updateStrapline);
            // Click first .js-strapline on window load
            $(straplineArr[0]).mouseenter();
        });
    }

    /**
     * Update strapline highlights as icons are clicked
     * Shift caret position
     * Add/remove "show" class for highlights DOM element: p
     * @var     {Object} straplineContainer     Strapline container
     * @var     {Object} caretPosition          Current or clicked strapline element
     */
    function updateStrapline() {

        var straplineContainer = $('.js-strapline-nav-items'),
            caretPosition      = $(this);

        // Update straplineData with index of clicked strapline item (subtract 1 from data-attr for index value)
        straplineData = $(this).data('strapline') - 1;

        // Shift caret position based on clicked .js-strapline data-percent attribute.
        $('.caret').css('left', function() {
            if ($(window).width() < 623) {
                return straplineContents[straplineData].small;
            } else {
                return straplineContents[straplineData].large;
            }
        });

        // De-emphasize current strapline item - add/remove "strapline-active" class to lighten grey text and icon color
        caretPosition.closest(straplineContainer)
                     .find('.js-strapline')
                    /**
                     * Note: the .strapline-active class part of
                     * _nav.scss (lines 130 - 134).
                     */
                     .removeClass('strapline-active');
        caretPosition.addClass('strapline-active');

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
