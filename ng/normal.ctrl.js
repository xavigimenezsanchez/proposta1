angular.module('appEnplater')
    .controller('NormalController', function($scope,ContentSvc,$state) {
        $scope.content = ContentSvc.getContent($state.current.code);

        $scope.video= '1v3s6t6MTh8';
        $scope.value = ContentSvc.getValue($state.current.code);
        $scope.type = ContentSvc.getType($state.current.code);
        /*
        $scope.$on('changeLanguage', function() {
            $scope.content = ContentSvc.getContent($state.current.code);
        });*/
          
       $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    })