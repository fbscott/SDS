var VIEWPORT = {
		// Full window width including scrollbar
		dimensions : function viewport() {

        var e = window,
        		a = 'inner';

        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }

        return { width : e[ a + 'Width' ], height : e[ a + 'Height' ] };
    },
		windowHeight : this.dimensions.height(),
		windowWidth : this.dimensions.width()
}