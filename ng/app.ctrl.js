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
                                    {'type' : 'twitter' ,   'url' : 'http://twitter.com'},
                                    {'type' : 'facebook' ,  'url' : 'http://twitter.com'},
                                    {'type' : 'youtube' ,   'url' : 'http://twitter.com'},
                                    {'type' : 'google-plus','url' : 'http://twitter.com'},
                                    {'type' : 'linkedin' ,  'url' : 'http://twitter.com'}
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