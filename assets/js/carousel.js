var carousel = (function(){
    var firstExec = false;
    var launch = function() { 
            console.log('patataCarousel' + ':'+ firstExec);
            if (true /*!firstExec*/) {
                firstExec = true;
                console.log('He executat el carouselllllllllllllllllllllllllllll');
                 $('.carousel').carousel({
                                  interval: 4000
                                });
                                
                            //$('.carousel .active .row p.u').transition({ y: -210 },500,'snap');
                            $( ".carousel").unbind('slid.bs.carousel');
                             $( ".carousel").unbind('slide.bs.carousel');
                            $('.carousel').on('slid.bs.carousel', function () {
                                console.log(this);
                                $('.carousel .active .row p.u').transition({ y: -210 },500,'snap');
                                $('.carousel .active .row p.q').transition({
                                          perspective: '100px',
                                          rotateX:  '360deg'
                                        },500,'snap');
                            });
                            
                            $('.carousel').on('slide.bs.carousel', function () {
                                $('.carousel .active .row p.u').transition({ y: 210 },500,'snap');
                                $('.carousel .active .row p.q').transition({
                                          perspective: '100px',
                                          rotateX:  '-360deg'
                                        },500,'snap');
                            });
            } else {
                console.log('El carousel ja s\'està executant');
                $('.carousel').carousel({
                                  interval: false
                                });
            }
    };
    return launch;
    })();