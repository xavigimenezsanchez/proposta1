angular.module('appEnplater')
    .controller('AppController',function($scope,$state,MenuSvc,GeneralSvc){
        $scope.menuItems = MenuSvc.getMenu(GeneralSvc.getLang());
        $scope.language = GeneralSvc.getLang();
        $scope.changeLanguage = function(lang) {
            //GeneralSvc.setLang(lang);
            //$state.go(lang);
            //$scope.menuItems = MenuSvc.getMenu();
            console.log(lang);
        };
        $scope.$on('changeLanguage',function() {
            $scope.menuItems = MenuSvc.getMenu(GeneralSvc.getLang());
            $scope.language = GeneralSvc.getLang();
        });
        $scope.menuClass = 'navbar-wrapper';
        $scope.social = { 'text'    : '© Copyright - Enplater',
                          'icons'   : [
                                    {'type' : 'twitter' ,   'url' : 'https://twitter.com/enplater'},
                                    {'type' : 'facebook' ,  'url' : 'https://www.facebook.com/enplater'},
                                    {'type' : 'youtube' ,   'url' : 'https://www.youtube.com/channel/UCv-dzNk_r_4rRukuMq1HW1w'},
                                    {'type' : 'google-plus','url' : 'https://plus.google.com/116589014532206686803'},
                                    {'type' : 'linkedin' ,  'url' : 'https://www.linkedin.com/company/enplater-s-a-'}
                              ]
                        };
        
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if (toState.code == 0) {
                $scope.menuClass = 'navbar-wrapper';
            } else {
                $scope.menuClass = 'navbar';
            }
        });
        
    });