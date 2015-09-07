angular.module('appEnplater',['ui.router','youtube-embed'])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })
    .run(function(GeneralSvc, $stateParams) {
        console.log(navigator.language.substr(0,2));
        console.log($stateParams)
        //GeneralSvc.setLang((navigator.userLanguage || navigator.language).substr(0,2));
    })