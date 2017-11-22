// Create viewport size namespace.
SDS.createNS('SDS.IS_WIN_SIZE');

// Determin window size (including scroll bar)
SDS.IS_WIN_SIZE.isViewport = function viewport() {

    var e = window;
    var a = 'inner';

    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a + 'Width' ], height : e[ a + 'Height' ] };
};
