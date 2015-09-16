angular.module('appEnplater')
    .directive('carousel', function() {
       return {
           restrict:    'E',
           scope: {
                content: '=content'
            },
           templateUrl: 'carousel-template.html',
           link: function(scope,element,attr) {
               console.log('Carousel loaded');
                $('.carousel').carousel({
                      interval: 4000
                    });
                 $('.carousel .active .row p.u').transition({ y: -210 },500,'snap');
                $('.carousel').on('slid.bs.carousel', function () {
                    
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
                    
           }
       };
    });