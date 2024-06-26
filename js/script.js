// Slider Home page

var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    wrapAround: true,  // Added for infinite scrolling
    autoPlay: 3000, 
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var $carousel = $('[data-carousel]').flickity(options);
var $slideContent = $('.slide-content');
var flkty = $carousel.data('flickity');
var selectedSlide = flkty.selectedElement;

flkty.on('settle', function (index) {
    selectedSlide = flkty.selectedElement;
});

flkty.on('change', function (index) {
    $slideContent.eq(index).removeClass('mask');

    setTimeout(function () {
        $slideContent.addClass('mask');
    }, 500);
});

flkty.on('dragStart', function (event) {
    var index = 0;
    selectedSlide = flkty.selectedElement;

    if (event.layerX > 0) { // direction right
        index = $(selectedSlide).index() + 1;
    } else { // direction left
        index = $(selectedSlide).index() - 1;
    }

    $slideContent.eq(index).removeClass('mask');
});

setTimeout(function () {
    $slideContent.addClass('mask');
}, 500);


// testimonals

(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoPlay: true,
            autoplayTimeout: 1000,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();



