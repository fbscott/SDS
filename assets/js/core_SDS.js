// Create random background images namespace.
SDS.createNS('SDS.RANDOM_BG_IMAGE');
// Create footer namespace.
SDS.createNS('SDS.FOOTER');

// Dynamically change background images on page load.
SDS.RANDOM_BG_IMAGE = function(imageContainer) {
    
    // Set CSS prop on bg image container.
    var bgImgProp = 'url(./assets/img/' + SDS.RANDOM_BG_IMAGE.imagesHome[Math.floor(Math.random() * SDS.RANDOM_BG_IMAGE.imagesHome.length)] + ')';

    document.getElementById(imageContainer).style.backgroundImage = bgImgProp;
};

// Home images
SDS.RANDOM_BG_IMAGE.imagesHome = ['112-N-Castle-Pines-Drive-Castle-Rock-CO-80108_21.jpg',
    '278-Dahlia-Street-Denver-CO-80220_08.jpg',
    '278-Dahlia-Street-Denver-CO-80220_16.jpg',
    '382-Galena-Street-Aurora-CO-80010_01.jpg',
    '382-Galena-Street-Aurora-CO-80010_06.jpg',
    '382-Galena-Street-Aurora-CO-80010_08.jpg',
    '382-Galena-Street-Aurora-CO-80010_10.jpg',
    '382-Galena-Street-Aurora-CO-80010_12.jpg',
    '2514-Tournament-Drive-Castle-Rock-CO-80108_09.jpg',
    '2514-Tournament-Drive-Castle-Rock-CO-80108_11.jpg',
    '2514-Tournament-Drive-Castle-Rock-CO-80108_16.jpg',
    '6166-Massive-Peak-Loop-Castle-Rock-CO_11.jpg',
    '6166-Massive-Peak-Loop-Castle-Rock-CO_13.jpg',
    '6166-Massive-Peak-Loop-Castle-Rock-CO_22.jpg',
    '6166-Massive-Peak-Loop-Castle-Rock-CO_25.jpg',
    '6912-Chestnut-Court-Parker-CO-80134_12.jpg',
    '6912-Chestnut-Court-Parker-CO-80134_16.jpg',
    '10995-Bluegate-Way-Highlands-Ranch-CO-80130_15.jpg',
    '10995-Bluegate-Way-Highlands-Ranch-CO-80130_17.jpg',
    '18752-E-Powers-Drive-Aurora-CO-80015_01.jpg'
];

// Footer copyright date
SDS.FOOTER = function(copyright) {
    // Copyright span
    var copyright = document.getElementsByClassName(copyright)[0];
    // Current year
    var currentYear = new Date().getFullYear();

    // Set copyright span to current year
    copyright.innerHTML = currentYear;
};
