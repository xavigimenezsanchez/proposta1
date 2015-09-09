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
        
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.log(toState);
            if (toState.code == 0) {
                $scope.menuClass = '';
            } else {
                $scope.menuClass = '';
            }
        });
        
    });