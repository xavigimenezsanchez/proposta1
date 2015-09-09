angular.module('appEnplater',['ui.router', 'youtube-embed', 'uiGmapgoogle-maps'])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })
    .run(function(GeneralSvc, $stateParams) {
        console.log(navigator.language.substr(0,2));
        console.log($stateParams);
        //GeneralSvc.setLang((navigator.userLanguage || navigator.language).substr(0,2));
    })
    .config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        });
    }]
);
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
angular.module('appEnplater')
    .controller('ContactController', function($scope,ContentSvc,$state) {
        $scope.content = ContentSvc.getContent($state.current.code);
        $scope.value = ContentSvc.getValue($state.current.code);
        $scope.type = ContentSvc.getType($state.current.code);
        $scope.$on('changeLanguage', function() {
            $scope.content = ContentSvc.getContent($state.current.code);
        });
       $scope.map1 = { center: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, mark: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, zoom: 10 };
       $scope.map2 = { center: { latitude: 45.03858820702037, longitude: 4.139367401599884 }, mark: { latitude: 45.03858820702037, longitude: 4.139367401599884 }, zoom: 10 };
    })
angular.module('appEnplater')
    .service('ContentSvc', function(GeneralSvc) {
        //var lang=GeneralSvc.getLang();
        var content = [{},{ 
                    code    : 1,
                    type   :'video', 
                    class   : '---', 
                    content :  {    'ca': 'Fundada el 1962 a Torroella de Montgrí (Girona), Enplater S.A. va néixer als inicis de la revolució del packaging per l’alimentació. Des de llavors, les exigències del mercat i la voluntat de servei han sigut el motor que ens ha fet innovar i progressar per a estar sempre en els llocs de lideratge d’un mercat en constant evolució. Al llarg dels 50 anys de presencia dins del sector, ens caracteritzem per la serietat en el servei i la qualitat.El nostre mercat es centra en un 95% en el sector alimentari (plats preparats, quarta gama, productes frescos, bosses de pa de motllo, pet food, cafè,…) L’exportació a països com França, Països Baixos, Països Nòrdics, Regne Unit i Portugal representa una part important de la facturació',
                                   'es': 'Fundada el 1962 en Torroella de Montgrí (Girona), Enplater S.A. nació en los inicios de la revolución del packaging para la alimentación. Desde entonces, las exigencias del mercado y la voluntad de servicio han sido el motor que nos ha hecho innovar y progresar para estar siempre en los lugares de liderazgo de un mercado en constante evolución. A lo largo de los 50 años de presencia en el sector, nos caracterizamos por la seriedad en servicio y la calidad.Nuestro mercado se centra en un 95% en el sector alimentario (platos preparados, cuarta gama, productos frescos, bolsas de pan de molde, pet food, café, etc.).Actualmente estamos presentes en toda Europa y el norte de África.',
                                   'fr': 'Fondée en 1962 à Torroella de Montgrí (Girona), Enplater S.A. a ses origines dans les débuts de la révolution du packaging dans le secteur alimentaire. Dès lors, les exigences du marché et la volonté du service ont été les moteurs qui nous ont conduits vers l’innovation et le progrès, afin de nous maintenir toujours dans le podium du leadership d’un marché en évolution constante. Au long des 50 années de présence dans le secteur, nous sommes connues par nos services et qualité.Notre marché se consacre en un 95% au secteur alimentaire (prêt-à-manger, salades, pain de mie, pet food, café, etc.). L’exportation vers la France, les Pays-Bas, les Pays Nordiques, le Royaume Uni et le Portugal représentent une importante partie de nos revenus.',
                                   'en': 'Enplater was founded at the beginning of the food packaging revolution in 1962 and it’s located in Torroella de Montgri and Sariñena (Spain). Since then, we have been growing, innovating and progressing with our customers.We export to countries like France, United Kingdom, The Netherlands, Finland, Sweden, Denmark and Portugal.'
                                },
                    value   : '1v3s6t6MTh8'
                            
                 },{ 
                    code    : 2,
                    type   : 'image', 
                    'class' : '----', 
                    content :  {    'ca': 'A Enplater fabriquem embalatges flexibles pels seus productes segons les característiques i requisits, assegurant la imatge, protecció i maquinabilitat. Posem al seu abast el suport dels nostres especialistes i el productes més innovadors del mercat per a que es trobi la millor solució a les seves necessitats.La disponibilitat d’una amplia gama de materials d’última tecnologia i la infinitat de combinacions possibles, amb la garantia d’una impressió de qualitat sobre qualsevol superfície, assegura un alt valor afegit pels nostres clients.',
                                   'es': 'En Enplater ofrecemos embalajes flexible para sus productos según sus características y requisitos, asegurando su imagen, protección y maquinabilidad.A su vez, ponemos a su alcance, el soporte de sus especialistas y los productos más innovadores del mercado para que encuentre la solución más adecuada a sus necesidades.La disponibilidad de una amplia gama de materiales de última tecnología y la infinidad de combinaciones posibles, junto a la garantía de una impresión de calidad sobre cualquier superficie, asegura un alto valor añadido para nuestros clientes.',
                                   'fr': 'Chez Enplater nous vous proposons des emballages flexibles en fonction des caractéristiques et requis de votre produit, en assurant une bonne image, protection et machinabilitée.De plus, nous vous proposons le soutien de ses spécialistes ainsi que les produits les plus innovateurs du marché pour que vous puissiez trouvez la solution la plus satisfaisante pour vos besoins.La disponibilité d’un vaste échantillon de matériaux de technologie de pointe et de l’infinité de combinaisons possibles, tout en ajoutant la garantie d’une impression de qualité sur quelconque superficie, assure une haute valeur ajoutée pour nos clients.',
                                   'en': 'There is not english description '
                                },
                    value : 'fabricacion.jpg'
                            
                 },{ 
                    code    : 3,
                    type   : 'image', 
                    'class' : '----', 
                    content :  {    'ca': 'Tipus 3 català',
                                   'es': 'Tipo 3 castellano',
                                   'fr': 'Tipeee 3 francès',
                                   'en': 'English 3 type'
                                },
                    value   : 'fabricacion.jpg'
                            
                 },{ 
                    code    : 4,
                    type   :'video', 
                    'class' : '----', 
                    content :  {    'ca': 'Tipus 4 català',
                                   'es': 'Tipo 4 castellano',
                                   'fr': 'Tipeee 4 francès',
                                   'en': 'English 4 type'
                                },
                    value: '1v3s6t6MTh8'
                            
                 },{ 
                    code    : 5,
                    type   :'video', 
                    'class' : '----', 
                    content :  {    'ca': 'Tipus 5 català',
                                   'es': 'Tipo 5 castellano',
                                   'fr': 'Tipeee 5 francès',
                                   'en': 'English 5 type'
                                },
                    value: '1v3s6t6MTh8'
                            
                 }];
        this.getContent = function(code) {
            return content[code].content[GeneralSvc.getLang()];
        };
        
        this.getValue = function(code) {
            return content[code].value;
        };
        
        this.getType = function(code) {
            return content[code].type;
        }
        
    });

angular.module('appEnplater')
    .service('GeneralSvc',function() {
        var lang ="patata";
        this.setLang = function(l) {
            lang = l;
        };
        this.getLang = function() {
            return lang;
        };
    })
angular.module('appEnplater')
    .directive('menuEnplater',function($rootScope,$state,MenuSvc,GeneralSvc) {
        return {
            restrict: 'E',
            scope: {
                menus: '=items',
                language: '=language',
                menuClass: '=menuClass'
            },
            templateUrl: 'menu-template.html',
            link: function(scope,element,attr) {
                //scope.menuItems = scope.menus;
                scope.translates = { 'language': {'ca':'idiomes','es':'idiomas','en':'languages','fr':'langues'},
                                     'languages': { 'ca' : { 'ca':'Català',     'es' : 'Castellà' ,     'fr' : 'Francès',   'en' : 'Anglès' },
                                                    'es' : { 'ca':'Catalán',    'es' : 'Castellano' ,   'fr' : 'Francés',   'en' : 'Inglés' },
                                                    'en' : { 'ca':'Catalan',    'es' : 'Spanish' ,      'fr' : 'French',    'en' : 'English' },
                                                    'fr' : { 'ca':'Catalane',    'es' : 'Espagnol' ,   'fr' : 'Français',   'en' : 'Anglais' }
                                                    }
                                    };
                scope.changeLanguage = function(lang){
                    GeneralSvc.setLang(lang);
                    scope.menus = MenuSvc.getMenu();
                    scope.language = lang;
                    
                    $rootScope.$broadcast('changeLanguage');
                    $state.go('^.^.'+lang+$state.current.name.substr(6));
                };
            }
        };
    });
angular.module('appEnplater')
    .service('MenuSvc', function(GeneralSvc) {
       var menu = { 'tipus':'M',   //M: main
                    'content': {
                                    'ca' : [{'label':'Inici','link':'home'},{'label':'Empresa','link':'empresa'},{'label':'Aplicacions','link':'applications'},{'label':'Fabricació','link':'fabrication'},{'label':'Qualitat','link':'quality'},{'label':'Contacte','link':'contact'}],
                                    'es' : [{'label':'Inicio','link':'home'},{'label':'Empresa','link':'empresa'},{'label':'Aplicaciones','link':'applications'},{'label':'Fabricación','link':'fabrication'},{'label':'Calidad','link':'quality'},{'label':'Contacto','link':'contact'}],
                                    'fr' : [{'label':'Accueil','link':'home'},{'label':'Société','link':'empresa'},{'label':'Packaging pour','link':'applications'},{'label':'Fabrication','link':'fabrication'},{'label':'Qualité','link':'quality'},{'label':'Contact','link':'contact'}],
                                    'en' : [{'label':'Home','link':'home'},{'label':'The Company','link':'empresa'},{'label':'Applications','link':'applications'},{'label':'Production','link':'fabrication'},{'label':'Quality','link':'quality'},{'label':'Contact','link':'contact'}]
                                }
                    };
        this.getMenu = function() {
            return menu.content[GeneralSvc.getLang()];
        };
    });
angular.module('appEnplater')
    .controller('NormalController', function($scope,ContentSvc,$state) {
        $scope.content = ContentSvc.getContent($state.current.code);
        console.log('-------------------------------------------------');
        console.warn($state);
        $scope.video= '1v3s6t6MTh8';
        $scope.value = ContentSvc.getValue($state.current.code);
        $scope.type = ContentSvc.getType($state.current.code);
        $scope.$on('changeLanguage', function() {
            $scope.content = ContentSvc.getContent($state.current.code);
        });
       $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    })
angular.module('appEnplater')
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {
        $stateProvider
            .state('app',{
                abstract: true,
                url: '',
                template: '<ui-view/>'
            })
            .state('app.es',{
                abstract: true,
                url: '/es',
                template: '<ui-view/>',
                controller: function($rootScope,GeneralSvc) {
                    GeneralSvc.setLang('es');
                    $rootScope.$broadcast('changeLanguage');
                }
            })
            .state('app.ca',{
                abstract: true,
                url: '/ca',
                template: '<ui-view/>',
                controller: function($rootScope,GeneralSvc) {
                    GeneralSvc.setLang('ca');
                    $rootScope.$broadcast('changeLanguage');
                }
            })
            .state('app.fr',{
                abstract: true,
                url: '/fr',
                template: '<ui-view/>',
                controller: function($rootScope,GeneralSvc) {
                    GeneralSvc.setLang('fr');
                    $rootScope.$broadcast('changeLanguage');
                }
            })
            .state('app.en',{
                abstract: true,
                url: '/en',
                template: '<ui-view/>',
                controller: function($rootScope,GeneralSvc) {
                    GeneralSvc.setLang('en');
                    $rootScope.$broadcast('changeLanguage');
                }
            })
            .state('app.es.home', {
                url: '/home',
                templateUrl: 'template-home.html'
            })
            .state('app.ca.home', {
                url: '/home',
                templateUrl: 'template-home.html'
            })
            .state('app.en.home', {
                url: '/home',
                templateUrl: 'template-home.html'
            })
            .state('app.fr.home', {
                url: '/home',
                templateUrl: 'template-home.html'
            })
            .state('app.ca.empresa' , {
                url: '/empresa',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 1
            })
            .state('app.es.empresa' , {
                url: '/empresa',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 1
            })
            .state('app.en.empresa' , {
                url: '/empresa',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 1
            })
            .state('app.fr.empresa' , {
                url: '/empresa',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 1
            })
            .state('app.ca.applications' , {
                url: '/applications',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 2
            })
            .state('app.es.applications' , {
                url: '/applications',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 2
            })
            .state('app.en.applications' , {
                url: '/applications',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 2
            })
            .state('app.fr.applications' , {
                url: '/applications',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 2
            })
            .state('app.ca.fabrication' , {
                url: '/fabrication',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 3
            })
            .state('app.es.fabrication' , {
                url: '/fabrication',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 3
            })
            .state('app.en.fabrication' , {
                url: '/fabrication',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 3
            })
            .state('app.fr.fabrication' , {
                url: '/fabrication',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 3
            })
            .state('app.ca.quality' , {
                url: '/quality',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 4
            })
            .state('app.es.quality' , {
                url: '/quality',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 4
            })
            .state('app.en.quality' , {
                url: '/quality',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 4
            })
            .state('app.fr.quality' , {
                url: '/quality',
                templateUrl: 'template-normal.html',
                controller: 'NormalController',
                code: 4
            })
            .state('app.ca.contact' , {
                url: '/contact',
                templateUrl: 'template-contact.html',
                controller: 'ContactController',
                code: 5
            })
            .state('app.es.contact' , {
                url: '/contact',
                templateUrl: 'template-contact.html',
                controller: 'ContactController',
                code: 5
            })
            .state('app.en.contact' , {
                url: '/contact',
                templateUrl: 'template-contact.html',
                controller: 'ContactController',
                code: 5
            })
            .state('app.fr.contact' , {
                url: '/contact',
                templateUrl: 'template-contact.html',
                controller: 'ContactController',
                code: 5
            });
            
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/'+(navigator.userLanguage || navigator.language).substr(0,2)+'/home');
        //$urlRouterProvider.otherwise('/');
    });
    
    //Mirar això pel SEO http://fadeit.dk/blog/post/angular-translate-ui-router-seo
    //Més SEO: http://www.michaelbromley.co.uk/blog/171/enable-rich-social-sharing-in-your-angularjs-app
    //pLUGIN seo https://github.com/jvandemo/angular-update-meta
    //http://startbootstrap.com/template-categories/full-websites/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5jdHJsLmpzIiwiY29udGFjdC5jdHJsLmpzIiwiY29udGluZ3V0LnNydi5qcyIsImdlbmVyYWwuc3J2LmpzIiwibWVudS5kcnQuanMiLCJtZW51LnNydi5qcyIsIm5vcm1hbC5jdHJsLmpzIiwic3RhdGUuY2ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicsWyd1aS5yb3V0ZXInLCAneW91dHViZS1lbWJlZCcsICd1aUdtYXBnb29nbGUtbWFwcyddKVxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICAgICAgICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIH0pXG4gICAgLnJ1bihmdW5jdGlvbihHZW5lcmFsU3ZjLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcbiAgICAgICAgLy9HZW5lcmFsU3ZjLnNldExhbmcoKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKS5zdWJzdHIoMCwyKSk7XG4gICAgfSlcbiAgICAuY29uZmlnKFxuICAgIFsndWlHbWFwR29vZ2xlTWFwQXBpUHJvdmlkZXInLCBmdW5jdGlvbihHb29nbGVNYXBBcGlQcm92aWRlcnMpIHtcbiAgICAgICAgR29vZ2xlTWFwQXBpUHJvdmlkZXJzLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBjaGluYTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XVxuKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJyxmdW5jdGlvbigkc2NvcGUsJHN0YXRlLE1lbnVTdmMsR2VuZXJhbFN2Yyl7XG4gICAgICAgICRzY29wZS5tZW51SXRlbXMgPSBNZW51U3ZjLmdldE1lbnUoR2VuZXJhbFN2Yy5nZXRMYW5nKCkpO1xuICAgICAgICAkc2NvcGUubGFuZ3VhZ2UgPSBHZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgJHNjb3BlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obGFuZykge1xuICAgICAgICAgICAgLy9HZW5lcmFsU3ZjLnNldExhbmcobGFuZyk7XG4gICAgICAgICAgICAvLyRzdGF0ZS5nbyhsYW5nKTtcbiAgICAgICAgICAgIC8vJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGFuZyk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS4kb24oJ2NoYW5nZUxhbmd1YWdlJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5tZW51SXRlbXMgPSBNZW51U3ZjLmdldE1lbnUoR2VuZXJhbFN2Yy5nZXRMYW5nKCkpO1xuICAgICAgICAgICAgJHNjb3BlLmxhbmd1YWdlID0gR2VuZXJhbFN2Yy5nZXRMYW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvU3RhdGUpO1xuICAgICAgICAgICAgaWYgKHRvU3RhdGUuY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1lbnVDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWVudUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdDb250YWN0Q29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSxDb250ZW50U3ZjLCRzdGF0ZSkge1xuICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLnZhbHVlID0gQ29udGVudFN2Yy5nZXRWYWx1ZSgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLnR5cGUgPSBDb250ZW50U3ZjLmdldFR5cGUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS4kb24oJ2NoYW5nZUxhbmd1YWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgJHNjb3BlLm1hcDEgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDIuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogMy4xMzkzNjc0MDE1OTk4ODQgfSwgbWFyazogeyBsYXRpdHVkZTogNDIuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogMy4xMzkzNjc0MDE1OTk4ODQgfSwgem9vbTogMTAgfTtcbiAgICAgICAkc2NvcGUubWFwMiA9IHsgY2VudGVyOiB7IGxhdGl0dWRlOiA0NS4wMzg1ODgyMDcwMjAzNywgbG9uZ2l0dWRlOiA0LjEzOTM2NzQwMTU5OTg4NCB9LCBtYXJrOiB7IGxhdGl0dWRlOiA0NS4wMzg1ODgyMDcwMjAzNywgbG9uZ2l0dWRlOiA0LjEzOTM2NzQwMTU5OTg4NCB9LCB6b29tOiAxMCB9O1xuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuc2VydmljZSgnQ29udGVudFN2YycsIGZ1bmN0aW9uKEdlbmVyYWxTdmMpIHtcbiAgICAgICAgLy92YXIgbGFuZz1HZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBbe30seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6J3ZpZGVvJywgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzICAgOiAnLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnOiAnRnVuZGFkYSBlbCAxOTYyIGEgVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIHZhIG7DqWl4ZXIgYWxzIGluaWNpcyBkZSBsYSByZXZvbHVjacOzIGRlbCBwYWNrYWdpbmcgcGVyIGzigJlhbGltZW50YWNpw7MuIERlcyBkZSBsbGF2b3JzLCBsZXMgZXhpZ8OobmNpZXMgZGVsIG1lcmNhdCBpIGxhIHZvbHVudGF0IGRlIHNlcnZlaSBoYW4gc2lndXQgZWwgbW90b3IgcXVlIGVucyBoYSBmZXQgaW5ub3ZhciBpIHByb2dyZXNzYXIgcGVyIGEgZXN0YXIgc2VtcHJlIGVuIGVscyBsbG9jcyBkZSBsaWRlcmF0Z2UgZOKAmXVuIG1lcmNhdCBlbiBjb25zdGFudCBldm9sdWNpw7MuIEFsIGxsYXJnIGRlbHMgNTAgYW55cyBkZSBwcmVzZW5jaWEgZGlucyBkZWwgc2VjdG9yLCBlbnMgY2FyYWN0ZXJpdHplbSBwZXIgbGEgc2VyaWV0YXQgZW4gZWwgc2VydmVpIGkgbGEgcXVhbGl0YXQuRWwgbm9zdHJlIG1lcmNhdCBlcyBjZW50cmEgZW4gdW4gOTUlIGVuIGVsIHNlY3RvciBhbGltZW50YXJpIChwbGF0cyBwcmVwYXJhdHMsIHF1YXJ0YSBnYW1hLCBwcm9kdWN0ZXMgZnJlc2NvcywgYm9zc2VzIGRlIHBhIGRlIG1vdGxsbywgcGV0IGZvb2QsIGNhZsOoLOKApikgTOKAmWV4cG9ydGFjacOzIGEgcGHDr3NvcyBjb20gRnJhbsOnYSwgUGHDr3NvcyBCYWl4b3MsIFBhw69zb3MgTsOycmRpY3MsIFJlZ25lIFVuaXQgaSBQb3J0dWdhbCByZXByZXNlbnRhIHVuYSBwYXJ0IGltcG9ydGFudCBkZSBsYSBmYWN0dXJhY2nDsycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6ICdGdW5kYWRhIGVsIDE5NjIgZW4gVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIG5hY2nDsyBlbiBsb3MgaW5pY2lvcyBkZSBsYSByZXZvbHVjacOzbiBkZWwgcGFja2FnaW5nIHBhcmEgbGEgYWxpbWVudGFjacOzbi4gRGVzZGUgZW50b25jZXMsIGxhcyBleGlnZW5jaWFzIGRlbCBtZXJjYWRvIHkgbGEgdm9sdW50YWQgZGUgc2VydmljaW8gaGFuIHNpZG8gZWwgbW90b3IgcXVlIG5vcyBoYSBoZWNobyBpbm5vdmFyIHkgcHJvZ3Jlc2FyIHBhcmEgZXN0YXIgc2llbXByZSBlbiBsb3MgbHVnYXJlcyBkZSBsaWRlcmF6Z28gZGUgdW4gbWVyY2FkbyBlbiBjb25zdGFudGUgZXZvbHVjacOzbi4gQSBsbyBsYXJnbyBkZSBsb3MgNTAgYcOxb3MgZGUgcHJlc2VuY2lhIGVuIGVsIHNlY3Rvciwgbm9zIGNhcmFjdGVyaXphbW9zIHBvciBsYSBzZXJpZWRhZCBlbiBzZXJ2aWNpbyB5IGxhIGNhbGlkYWQuTnVlc3RybyBtZXJjYWRvIHNlIGNlbnRyYSBlbiB1biA5NSUgZW4gZWwgc2VjdG9yIGFsaW1lbnRhcmlvIChwbGF0b3MgcHJlcGFyYWRvcywgY3VhcnRhIGdhbWEsIHByb2R1Y3RvcyBmcmVzY29zLCBib2xzYXMgZGUgcGFuIGRlIG1vbGRlLCBwZXQgZm9vZCwgY2Fmw6ksIGV0Yy4pLkFjdHVhbG1lbnRlIGVzdGFtb3MgcHJlc2VudGVzIGVuIHRvZGEgRXVyb3BhIHkgZWwgbm9ydGUgZGUgw4FmcmljYS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInOiAnRm9uZMOpZSBlbiAxOTYyIMOgIFRvcnJvZWxsYSBkZSBNb250Z3LDrSAoR2lyb25hKSwgRW5wbGF0ZXIgUy5BLiBhIHNlcyBvcmlnaW5lcyBkYW5zIGxlcyBkw6lidXRzIGRlIGxhIHLDqXZvbHV0aW9uIGR1IHBhY2thZ2luZyBkYW5zIGxlIHNlY3RldXIgYWxpbWVudGFpcmUuIETDqHMgbG9ycywgbGVzIGV4aWdlbmNlcyBkdSBtYXJjaMOpIGV0IGxhIHZvbG9udMOpIGR1IHNlcnZpY2Ugb250IMOpdMOpIGxlcyBtb3RldXJzIHF1aSBub3VzIG9udCBjb25kdWl0cyB2ZXJzIGzigJlpbm5vdmF0aW9uIGV0IGxlIHByb2dyw6hzLCBhZmluIGRlIG5vdXMgbWFpbnRlbmlyIHRvdWpvdXJzIGRhbnMgbGUgcG9kaXVtIGR1IGxlYWRlcnNoaXAgZOKAmXVuIG1hcmNow6kgZW4gw6l2b2x1dGlvbiBjb25zdGFudGUuIEF1IGxvbmcgZGVzIDUwIGFubsOpZXMgZGUgcHLDqXNlbmNlIGRhbnMgbGUgc2VjdGV1ciwgbm91cyBzb21tZXMgY29ubnVlcyBwYXIgbm9zIHNlcnZpY2VzIGV0IHF1YWxpdMOpLk5vdHJlIG1hcmNow6kgc2UgY29uc2FjcmUgZW4gdW4gOTUlIGF1IHNlY3RldXIgYWxpbWVudGFpcmUgKHByw6p0LcOgLW1hbmdlciwgc2FsYWRlcywgcGFpbiBkZSBtaWUsIHBldCBmb29kLCBjYWbDqSwgZXRjLikuIEzigJlleHBvcnRhdGlvbiB2ZXJzIGxhIEZyYW5jZSwgbGVzIFBheXMtQmFzLCBsZXMgUGF5cyBOb3JkaXF1ZXMsIGxlIFJveWF1bWUgVW5pIGV0IGxlIFBvcnR1Z2FsIHJlcHLDqXNlbnRlbnQgdW5lIGltcG9ydGFudGUgcGFydGllIGRlIG5vcyByZXZlbnVzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbic6ICdFbnBsYXRlciB3YXMgZm91bmRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmb29kIHBhY2thZ2luZyByZXZvbHV0aW9uIGluIDE5NjIgYW5kIGl04oCZcyBsb2NhdGVkIGluIFRvcnJvZWxsYSBkZSBNb250Z3JpIGFuZCBTYXJpw7FlbmEgKFNwYWluKS4gU2luY2UgdGhlbiwgd2UgaGF2ZSBiZWVuIGdyb3dpbmcsIGlubm92YXRpbmcgYW5kIHByb2dyZXNzaW5nIHdpdGggb3VyIGN1c3RvbWVycy5XZSBleHBvcnQgdG8gY291bnRyaWVzIGxpa2UgRnJhbmNlLCBVbml0ZWQgS2luZ2RvbSwgVGhlIE5ldGhlcmxhbmRzLCBGaW5sYW5kLCBTd2VkZW4sIERlbm1hcmsgYW5kIFBvcnR1Z2FsLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMixcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogJ2ltYWdlJywgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJzogJ0EgRW5wbGF0ZXIgZmFicmlxdWVtIGVtYmFsYXRnZXMgZmxleGlibGVzIHBlbHMgc2V1cyBwcm9kdWN0ZXMgc2Vnb25zIGxlcyBjYXJhY3RlcsOtc3RpcXVlcyBpIHJlcXVpc2l0cywgYXNzZWd1cmFudCBsYSBpbWF0Z2UsIHByb3RlY2Npw7MgaSBtYXF1aW5hYmlsaXRhdC4gUG9zZW0gYWwgc2V1IGFiYXN0IGVsIHN1cG9ydCBkZWxzIG5vc3RyZXMgZXNwZWNpYWxpc3RlcyBpIGVsIHByb2R1Y3RlcyBtw6lzIGlubm92YWRvcnMgZGVsIG1lcmNhdCBwZXIgYSBxdWUgZXMgdHJvYmkgbGEgbWlsbG9yIHNvbHVjacOzIGEgbGVzIHNldmVzIG5lY2Vzc2l0YXRzLkxhIGRpc3BvbmliaWxpdGF0IGTigJl1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxzIGTigJnDumx0aW1hIHRlY25vbG9naWEgaSBsYSBpbmZpbml0YXQgZGUgY29tYmluYWNpb25zIHBvc3NpYmxlcywgYW1iIGxhIGdhcmFudGlhIGTigJl1bmEgaW1wcmVzc2nDsyBkZSBxdWFsaXRhdCBzb2JyZSBxdWFsc2V2b2wgc3VwZXJmw61jaWUsIGFzc2VndXJhIHVuIGFsdCB2YWxvciBhZmVnaXQgcGVscyBub3N0cmVzIGNsaWVudHMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzogJ0VuIEVucGxhdGVyIG9mcmVjZW1vcyBlbWJhbGFqZXMgZmxleGlibGUgcGFyYSBzdXMgcHJvZHVjdG9zIHNlZ8O6biBzdXMgY2FyYWN0ZXLDrXN0aWNhcyB5IHJlcXVpc2l0b3MsIGFzZWd1cmFuZG8gc3UgaW1hZ2VuLCBwcm90ZWNjacOzbiB5IG1hcXVpbmFiaWxpZGFkLkEgc3UgdmV6LCBwb25lbW9zIGEgc3UgYWxjYW5jZSwgZWwgc29wb3J0ZSBkZSBzdXMgZXNwZWNpYWxpc3RhcyB5IGxvcyBwcm9kdWN0b3MgbcOhcyBpbm5vdmFkb3JlcyBkZWwgbWVyY2FkbyBwYXJhIHF1ZSBlbmN1ZW50cmUgbGEgc29sdWNpw7NuIG3DoXMgYWRlY3VhZGEgYSBzdXMgbmVjZXNpZGFkZXMuTGEgZGlzcG9uaWJpbGlkYWQgZGUgdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFsZXMgZGUgw7psdGltYSB0ZWNub2xvZ8OtYSB5IGxhIGluZmluaWRhZCBkZSBjb21iaW5hY2lvbmVzIHBvc2libGVzLCBqdW50byBhIGxhIGdhcmFudMOtYSBkZSB1bmEgaW1wcmVzacOzbiBkZSBjYWxpZGFkIHNvYnJlIGN1YWxxdWllciBzdXBlcmZpY2llLCBhc2VndXJhIHVuIGFsdG8gdmFsb3IgYcOxYWRpZG8gcGFyYSBudWVzdHJvcyBjbGllbnRlcy4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInOiAnQ2hleiBFbnBsYXRlciBub3VzIHZvdXMgcHJvcG9zb25zIGRlcyBlbWJhbGxhZ2VzIGZsZXhpYmxlcyBlbiBmb25jdGlvbiBkZXMgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgcmVxdWlzIGRlIHZvdHJlIHByb2R1aXQsIGVuIGFzc3VyYW50IHVuZSBib25uZSBpbWFnZSwgcHJvdGVjdGlvbiBldCBtYWNoaW5hYmlsaXTDqWUuRGUgcGx1cywgbm91cyB2b3VzIHByb3Bvc29ucyBsZSBzb3V0aWVuIGRlIHNlcyBzcMOpY2lhbGlzdGVzIGFpbnNpIHF1ZSBsZXMgcHJvZHVpdHMgbGVzIHBsdXMgaW5ub3ZhdGV1cnMgZHUgbWFyY2jDqSBwb3VyIHF1ZSB2b3VzIHB1aXNzaWV6IHRyb3V2ZXogbGEgc29sdXRpb24gbGEgcGx1cyBzYXRpc2ZhaXNhbnRlIHBvdXIgdm9zIGJlc29pbnMuTGEgZGlzcG9uaWJpbGl0w6kgZOKAmXVuIHZhc3RlIMOpY2hhbnRpbGxvbiBkZSBtYXTDqXJpYXV4IGRlIHRlY2hub2xvZ2llIGRlIHBvaW50ZSBldCBkZSBs4oCZaW5maW5pdMOpIGRlIGNvbWJpbmFpc29ucyBwb3NzaWJsZXMsIHRvdXQgZW4gYWpvdXRhbnQgbGEgZ2FyYW50aWUgZOKAmXVuZSBpbXByZXNzaW9uIGRlIHF1YWxpdMOpIHN1ciBxdWVsY29ucXVlIHN1cGVyZmljaWUsIGFzc3VyZSB1bmUgaGF1dGUgdmFsZXVyIGFqb3V0w6llIHBvdXIgbm9zIGNsaWVudHMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzogJ1RoZXJlIGlzIG5vdCBlbmdsaXNoIGRlc2NyaXB0aW9uICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiAzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiAnaW1hZ2UnLCBcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnOiAnVGlwdXMgMyBjYXRhbMOgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzogJ1RpcG8gMyBjYXN0ZWxsYW5vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJzogJ1RpcGVlZSAzIGZyYW5jw6hzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzogJ0VuZ2xpc2ggMyB0eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogNCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDondmlkZW8nLCBcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnOiAnVGlwdXMgNCBjYXRhbMOgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzogJ1RpcG8gNCBjYXN0ZWxsYW5vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJzogJ1RpcGVlZSA0IGZyYW5jw6hzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzogJ0VuZ2xpc2ggNCB0eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiA1LFxuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOid2aWRlbycsIFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYSc6ICdUaXB1cyA1IGNhdGFsw6AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnOiAnVGlwbyA1IGNhc3RlbGxhbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInOiAnVGlwZWVlIDUgZnJhbmPDqHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nOiAnRW5nbGlzaCA1IHR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB0aGlzLmdldENvbnRlbnQgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS5jb250ZW50W0dlbmVyYWxTdmMuZ2V0TGFuZygpXTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2V0VHlwZSA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50W2NvZGVdLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5zZXJ2aWNlKCdHZW5lcmFsU3ZjJyxmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxhbmcgPVwicGF0YXRhXCI7XG4gICAgICAgIHRoaXMuc2V0TGFuZyA9IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIGxhbmcgPSBsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldExhbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBsYW5nO1xuICAgICAgICB9O1xuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuZGlyZWN0aXZlKCdtZW51RW5wbGF0ZXInLGZ1bmN0aW9uKCRyb290U2NvcGUsJHN0YXRlLE1lbnVTdmMsR2VuZXJhbFN2Yykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbWVudXM6ICc9aXRlbXMnLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnPWxhbmd1YWdlJyxcbiAgICAgICAgICAgICAgICBtZW51Q2xhc3M6ICc9bWVudUNsYXNzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbWVudS10ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLGVsZW1lbnQsYXR0cikge1xuICAgICAgICAgICAgICAgIC8vc2NvcGUubWVudUl0ZW1zID0gc2NvcGUubWVudXM7XG4gICAgICAgICAgICAgICAgc2NvcGUudHJhbnNsYXRlcyA9IHsgJ2xhbmd1YWdlJzogeydjYSc6J2lkaW9tZXMnLCdlcyc6J2lkaW9tYXMnLCdlbic6J2xhbmd1YWdlcycsJ2ZyJzonbGFuZ3Vlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYW5ndWFnZXMnOiB7ICdjYScgOiB7ICdjYSc6J0NhdGFsw6AnLCAgICAgJ2VzJyA6ICdDYXN0ZWxsw6AnICwgICAgICdmcicgOiAnRnJhbmPDqHMnLCAgICdlbicgOiAnQW5nbMOocycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogeyAnY2EnOidDYXRhbMOhbicsICAgICdlcycgOiAnQ2FzdGVsbGFubycgLCAgICdmcicgOiAnRnJhbmPDqXMnLCAgICdlbicgOiAnSW5nbMOpcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogeyAnY2EnOidDYXRhbGFuJywgICAgJ2VzJyA6ICdTcGFuaXNoJyAsICAgICAgJ2ZyJyA6ICdGcmVuY2gnLCAgICAnZW4nIDogJ0VuZ2xpc2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IHsgJ2NhJzonQ2F0YWxhbmUnLCAgICAnZXMnIDogJ0VzcGFnbm9sJyAsICAgJ2ZyJyA6ICdGcmFuw6dhaXMnLCAgICdlbicgOiAnQW5nbGFpcycgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5nKXtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKGxhbmcpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51cyA9IE1lbnVTdmMuZ2V0TWVudSgpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5sYW5ndWFnZSA9IGxhbmc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnXi5eLicrbGFuZyskc3RhdGUuY3VycmVudC5uYW1lLnN1YnN0cig2KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5zZXJ2aWNlKCdNZW51U3ZjJywgZnVuY3Rpb24oR2VuZXJhbFN2Yykge1xuICAgICAgIHZhciBtZW51ID0geyAndGlwdXMnOidNJywgICAvL006IG1haW5cbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2EnIDogW3snbGFiZWwnOidJbmljaScsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J0VtcHJlc2EnLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidBcGxpY2FjaW9ucycsJ2xpbmsnOidhcHBsaWNhdGlvbnMnfSx7J2xhYmVsJzonRmFicmljYWNpw7MnLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0YXQnLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0ZScsJ2xpbmsnOidjb250YWN0J31dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7J2xhYmVsJzonSW5pY2lvJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonRW1wcmVzYScsJ2xpbmsnOidlbXByZXNhJ30seydsYWJlbCc6J0FwbGljYWNpb25lcycsJ2xpbmsnOidhcHBsaWNhdGlvbnMnfSx7J2xhYmVsJzonRmFicmljYWNpw7NuJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J0NhbGlkYWQnLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0bycsJ2xpbmsnOidjb250YWN0J31dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IFt7J2xhYmVsJzonQWNjdWVpbCcsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J1NvY2nDqXTDqScsJ2xpbmsnOidlbXByZXNhJ30seydsYWJlbCc6J1BhY2thZ2luZyBwb3VyJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LHsnbGFiZWwnOidGYWJyaWNhdGlvbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidRdWFsaXTDqScsJ2xpbmsnOidxdWFsaXR5J30seydsYWJlbCc6J0NvbnRhY3QnLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiBbeydsYWJlbCc6J0hvbWUnLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidUaGUgQ29tcGFueScsJ2xpbmsnOidlbXByZXNhJ30seydsYWJlbCc6J0FwcGxpY2F0aW9ucycsJ2xpbmsnOidhcHBsaWNhdGlvbnMnfSx7J2xhYmVsJzonUHJvZHVjdGlvbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidRdWFsaXR5JywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdCcsJ2xpbmsnOidjb250YWN0J31dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVudS5jb250ZW50W0dlbmVyYWxTdmMuZ2V0TGFuZygpXTtcbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdOb3JtYWxDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLENvbnRlbnRTdmMsJHN0YXRlKSB7XG4gICAgICAgICRzY29wZS5jb250ZW50ID0gQ29udGVudFN2Yy5nZXRDb250ZW50KCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLndhcm4oJHN0YXRlKTtcbiAgICAgICAgJHNjb3BlLnZpZGVvPSAnMXYzczZ0Nk1UaDgnO1xuICAgICAgICAkc2NvcGUudmFsdWUgPSBDb250ZW50U3ZjLmdldFZhbHVlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUudHlwZSA9IENvbnRlbnRTdmMuZ2V0VHlwZSgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLiRvbignY2hhbmdlTGFuZ3VhZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gQ29udGVudFN2Yy5nZXRDb250ZW50KCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAkc2NvcGUubWFwID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQ1LCBsb25naXR1ZGU6IC03MyB9LCB6b29tOiA4IH07XG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcCcse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VzJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EnLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnY2EnKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mcicse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy9mcicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKCdmcicpO1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VuJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5hcHBsaWNhdGlvbnMnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZmFicmljYXRpb24nICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9mYWJyaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4ucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5jb250YWN0JyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1jb250YWN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycrKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKS5zdWJzdHIoMCwyKSsnL2hvbWUnKTtcbiAgICAgICAgLy8kdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4gICAgXG4gICAgLy9NaXJhciBhaXjDsiBwZWwgU0VPIGh0dHA6Ly9mYWRlaXQuZGsvYmxvZy9wb3N0L2FuZ3VsYXItdHJhbnNsYXRlLXVpLXJvdXRlci1zZW9cbiAgICAvL03DqXMgU0VPOiBodHRwOi8vd3d3Lm1pY2hhZWxicm9tbGV5LmNvLnVrL2Jsb2cvMTcxL2VuYWJsZS1yaWNoLXNvY2lhbC1zaGFyaW5nLWluLXlvdXItYW5ndWxhcmpzLWFwcFxuICAgIC8vcExVR0lOIHNlbyBodHRwczovL2dpdGh1Yi5jb20vanZhbmRlbW8vYW5ndWxhci11cGRhdGUtbWV0YVxuICAgIC8vaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1jYXRlZ29yaWVzL2Z1bGwtd2Vic2l0ZXMvIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9