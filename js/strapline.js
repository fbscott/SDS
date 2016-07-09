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

(function($){
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
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius purus eros, a laoreet dolor egestas eu. Sed eleifend molestie sem. Sed quis egestas metus, sed dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat.",
                link    : "Visit our About page to learn more! \u00BB",
                url     : "javascript:void(0);",
                // small   : "16.666666%",
                large   : "10%"
            },
            {
                header  : "Services",
                content : "In consequat justo eget justo semper, in tincidunt elit molestie. Aenean varius hendrerit tellus id tincidunt. Mauris nunc lorem, efficitur non odio at, ullamcorper consectetur sem. Nulla aliquet faucibus molestie. Aenean ante nibh, lobortis at nibh ac, feugiat dignissim justo.",
                link    : "Visit our Services page to learn more! \u00BB",
                url     : "javascript:void(0);",
                // small   : "50%",
                large   : "30%"
            },
            {
                header  : "Gallery",
                content : "Phasellus bibendum nunc in ex semper consectetur. Nam aliquet tortor egestas malesuada scelerisque. Sed id maximus lectus. Nullam condimentum nulla sem, et finibus felis volutpat eu. Suspendisse nisi neque, ornare a diam a, tincidunt ornare lacus. Duis scelerisque sapien non nisi ultricies molestie.",
                link    : "Visit our Gallery page to learn more! \u00BB",
                url     : "javascript:void(0);",
                // small   : "83.333333%",
                large   : "50%"
            },
            {
                header  : "FAQs",
                content : "Curabitur rhoncus mollis risus in mattis. Sed ut orci volutpat elit porta rutrum ac et mauris. In pharetra, libero non blandit volutpat, lorem ipsum interdum ipsum, sit amet commodo ante felis nec erat. Fusce dui turpis, elementum vitae ornare nec, accumsan id risus. Fusce semper ante a purus tempor laoreet.",
                link    : "Visit our FAQs page to learn more! \u00BB",
                url     : "javascript:void(0);",
                // small   : "16.666666%",
                large   : "70%"
            },
            {
                header  : "Contact",
                content : "Curabitur rutrum elementum rhoncus. Proin nec suscipit velit, eget hendrerit purus. Morbi id odio egestas, mattis mi eu, viverra felis. Suspendisse et orci non lacus porta finibus id in mauris. Sed sed accumsan nunc. Donec turpis felis, sollicitudin in neque id, faucibus egestas quam.",
                link    : "Visit our Contact page to learn more! \u00BB",
                url     : "javascript:void(0);",
                // small   : "50%",
                large   : "90%"
            }
        ];

    /**
     * Set event listeners
     * Loop through strapline contents array if cookie == 'es'
     */
    function init(){
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

        var straplineContainer  = $('.js-strapline-nav-items'),
            caretPosition = $(this);

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
                     * _nav.scss (lines 117 - 121).
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

    /**
     * Set strapline.content and .link values - from main.json
     * @param  {Object} currentValue current element being processed in the array
     * @param  {Object} index        index of the current element being processed in the array
     * @param  {Object} array        array the forEach is being applied to: straplineContents
     * @return {String}              From main.json
     */
    function translateContent(currentValue, index, array) {
        // Set strapline.content to value from main.json
    }

    init();

})(jQuery);
