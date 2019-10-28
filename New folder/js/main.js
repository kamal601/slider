(function($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.  Script Initialization
    2.  preloaderSetup
    3.  scrollUpSetup
    4.  countrySelector
    5.  mobileMenu
    6.  catagorySlider
    7.  LatestPostSlider
    8.  blogMasonary
    ===========================================================*/
    /* ================================================
       Script Initialization
  ==================================================*/

    // Window Load Function
    $(window).on('load', function() {
        preloaderSetup();
    });

    // Document Ready Function
    $(document).ready(function() {

        blogSlider();

    });



    // =================== blogSlider ===================
    function blogSlider() {
        $('.slider-blog-img').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            startPosition: 0,
            smartSpeed: 1100,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }


    
   

})(jQuery); // End of use strict