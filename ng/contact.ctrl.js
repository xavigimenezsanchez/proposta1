angular.module('appEnplater')
    .controller('ContactController', function($scope,ContentSvc,$state) {
        $scope.content = ContentSvc.getContent($state.current.code);
        $scope.value = ContentSvc.getValue($state.current.code);
        $scope.type = ContentSvc.getType($state.current.code);
        $scope.$on('changeLanguage', function() {
            $scope.content = ContentSvc.getContent($state.current.code);
        });
       $scope.map1 = { center: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, mark: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, zoom: 13 };
       $scope.map2 = { center: { latitude: 41.7719806, longitude: -0.17225277777777775 }, mark: { latitude: 41.7719806, longitude: -0.17225277777777775 }, zoom: 13 };
    })