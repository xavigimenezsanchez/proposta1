angular.module('appEnplater')
    .directive('appFooter', function() {
        return {
            restrict    :  'E',
            scope       : {
                social  : '=social'
            },
            templateUrl :   'footer-templater.html'
        };
    });