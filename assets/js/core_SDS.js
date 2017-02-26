// Create random background images namespace.
SDS.createNS('SDS.RANDOM_BG_IMAGE');
// Create footer namespace.
SDS.createNS('SDS.FOOTER');

// Dynamically change background images on page load.
SDS.RANDOM_BG_IMAGE = function(imageContainer) {
    
    // Set CSS prop on bg image container.
    var bgImgProp = 'url(/assets/img/' + SDS.RANDOM_BG_IMAGE.imagesHome[Math.floor(Math.random() * SDS.RANDOM_BG_IMAGE.imagesHome.length)] + ')';

    document.getElementById(imageContainer).style.backgroundImage = bgImgProp;
};

// Home images
SDS.RANDOM_BG_IMAGE.imagesHome = [
    // 'aurora_01.jpg',
    // 'aurora_02.jpg',
    // 'aurora_03.jpg',
    // 'aurora_04.jpg',
    // 'aurora_05.jpg',
    // 'aurora_06.jpg',
    // 'castleRock_01.jpg',
    // 'castleRock_02.jpg',
    // 'castleRock_03.jpg',
    // 'castleRock_04.jpg',
    // 'castleRock_05.jpg',
    // 'castleRock_06.jpg',
    // 'castleRock_07.jpg',
    // 'castleRock_08.jpg',
    // 'castleRock_09.jpg',
    // 'castleRock_09_b.jpg',
    // 'denver_01.jpg',
    // 'denver_02.jpg',
    // 'highlandsRanch_01.jpg',
    'highlandsRanch_04.jpg'
    // 'parker_01.jpg',
    // 'parker_02.jpg'
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
