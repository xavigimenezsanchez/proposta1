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
        $scope.menuClass = 'navbar-wrapper';
        
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.log(toState);
            if (toState.code == 0) {
                $scope.menuClass = 'navbar-wrapper';
            } else {
                $scope.menuClass = 'navbar';
            }
        });
        
    });
angular.module('appEnplater')
    .directive('carousel', function() {
       return {
           restrict:    'E',
           scope: {
                content : '=content'
            },
           templateUrl: 'carousel-template.html',
           link: function(scope,element,attr) {
                    carousel();
                    /*$('.carousel').carousel({
                          interval: 4000
                        });
                    console.log('-----------------------------------');
                    console.log('Estic a la directiva');
                    console.log('-.----------------------------------');
                    //$('.carousel .active .row p.u').transition({ y: -210 },500,'snap');
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
               */
           }
       };
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
        var content = [{
                    code    : 0,
                    content : {
                        'ca':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text catalan'},centerText:{efect:'',content:'Center text catalan'},leftText:{efect:'',content:'Left text catalan'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text catalan'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text catalan'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text catalan'},leftText:{efect:'',content:'Left text catalan'}}],
                            paragraph : []
                        },
                        'es':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text spanish'},centerText:{efect:'',content:'Center text spanish'},leftText:{efect:'',content:'Left text spanish'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text spanish'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text spanish'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text spanish'},leftText:{efect:'',content:'Left text spanish'}}],
                            paragraph : []},
                        'fr':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text French'},centerText:{efect:'',content:'Center text French'},leftText:{efect:'',content:'Left text French'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text French'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text French'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text French'},leftText:{efect:'',content:'Left text French'}}],
                            paragraph : []},
                        'en':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text English'},centerText:{efect:'',content:'Center text English'},leftText:{efect:'',content:'Left text English'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text English'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text English'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text English'},leftText:{efect:'',content:'Left text English'}}],
                            paragraph : []}
                    }
                        },{ 
                    code    : 1,
                    type   :'video', 
                    'class'   : '---', 
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
        };
        
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
    .controller('HomeController', function($scope,ContentSvc,$state) {
        $scope.content = ContentSvc.getContent($state.current.code);
        
    });
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
                scope.menuClass = 'navbar-wrapper';
                scope.changeLanguage = function(lang){
                    GeneralSvc.setLang(lang);
                    scope.menus = MenuSvc.getMenu();
                    scope.language = lang;
                    
                    $rootScope.$broadcast('changeLanguage');
                    $state.go('^.^.'+lang+$state.current.name.substr(6));
                };
                scope.changeItem = function(menu) {
                    if (this.menuItem.link == 'home') {
                        scope.menuClass = "navbar-wrapper";
                        $('#menuContainer').addClass('container');
                    } else {
                        scope.menuClass = "navbar";
                        $('#menuContainer').removeClass('container');
                    }
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
                templateUrl: 'template-home.html',
                controller: 'HomeController',
                code: 0
            })
            .state('app.ca.home', {
                url: '/home',
                templateUrl: 'template-home.html',
                controller: 'HomeController',
                code: 0
            })
            .state('app.en.home', {
                url: '/home',
                templateUrl: 'template-home.html',
                controller: 'HomeController',
                code: 0
            })
            .state('app.fr.home', {
                url: '/home',
                templateUrl: 'template-home.html',
                controller: 'HomeController',
                code: 0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5jdHJsLmpzIiwiY2Fyb3VzZWwuZHJ0LmpzIiwiY29udGFjdC5jdHJsLmpzIiwiY29udGluZ3V0LnNydi5qcyIsImdlbmVyYWwuc3J2LmpzIiwiaG9tZS5jdHJsLmpzIiwibWVudS5kcnQuanMiLCJtZW51LnNydi5qcyIsIm5vcm1hbC5jdHJsLmpzIiwic3RhdGUuY2ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicsWyd1aS5yb3V0ZXInLCAneW91dHViZS1lbWJlZCcsICd1aUdtYXBnb29nbGUtbWFwcyddKVxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICAgICAgICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIH0pXG4gICAgLnJ1bihmdW5jdGlvbihHZW5lcmFsU3ZjLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTtcbiAgICAgICAgLy9HZW5lcmFsU3ZjLnNldExhbmcoKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKS5zdWJzdHIoMCwyKSk7XG4gICAgfSlcbiAgICAuY29uZmlnKFxuICAgIFsndWlHbWFwR29vZ2xlTWFwQXBpUHJvdmlkZXInLCBmdW5jdGlvbihHb29nbGVNYXBBcGlQcm92aWRlcnMpIHtcbiAgICAgICAgR29vZ2xlTWFwQXBpUHJvdmlkZXJzLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBjaGluYTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XVxuKTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJyxmdW5jdGlvbigkc2NvcGUsJHN0YXRlLE1lbnVTdmMsR2VuZXJhbFN2Yyl7XG4gICAgICAgICRzY29wZS5tZW51SXRlbXMgPSBNZW51U3ZjLmdldE1lbnUoR2VuZXJhbFN2Yy5nZXRMYW5nKCkpO1xuICAgICAgICAkc2NvcGUubGFuZ3VhZ2UgPSBHZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgJHNjb3BlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obGFuZykge1xuICAgICAgICAgICAgLy9HZW5lcmFsU3ZjLnNldExhbmcobGFuZyk7XG4gICAgICAgICAgICAvLyRzdGF0ZS5nbyhsYW5nKTtcbiAgICAgICAgICAgIC8vJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGFuZyk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS4kb24oJ2NoYW5nZUxhbmd1YWdlJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5tZW51SXRlbXMgPSBNZW51U3ZjLmdldE1lbnUoR2VuZXJhbFN2Yy5nZXRMYW5nKCkpO1xuICAgICAgICAgICAgJHNjb3BlLmxhbmd1YWdlID0gR2VuZXJhbFN2Yy5nZXRMYW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkc2NvcGUubWVudUNsYXNzID0gJ25hdmJhci13cmFwcGVyJztcbiAgICAgICAgXG4gICAgICAgICRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b1N0YXRlKTtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5tZW51Q2xhc3MgPSAnbmF2YmFyLXdyYXBwZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWVudUNsYXNzID0gJ25hdmJhcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgcmVzdHJpY3Q6ICAgICdFJyxcbiAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50IDogJz1jb250ZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC10ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWxlbWVudCxhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogNDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXN0aWMgYSBsYSBkaXJlY3RpdmEnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAvLyQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IC0yMTAgfSw1MDAsJ3NuYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsJykub24oJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAudScpLnRyYW5zaXRpb24oeyB5OiAtMjEwIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAucScpLnRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6ICAnMzYwZGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCcpLm9uKCdzbGlkZS5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IDIxMCB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsIC5hY3RpdmUgLnJvdyBwLnEnKS50cmFuc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiAgJy0zNjBkZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgfVxuICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignQ29udGFjdENvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS52YWx1ZSA9IENvbnRlbnRTdmMuZ2V0VmFsdWUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS50eXBlID0gQ29udGVudFN2Yy5nZXRUeXBlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICRzY29wZS5tYXAxID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIG1hcms6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIHpvb206IDEwIH07XG4gICAgICAgJHNjb3BlLm1hcDIgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDUuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogNC4xMzkzNjc0MDE1OTk4ODQgfSwgbWFyazogeyBsYXRpdHVkZTogNDUuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogNC4xMzkzNjc0MDE1OTk4ODQgfSwgem9vbTogMTAgfTtcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLnNlcnZpY2UoJ0NvbnRlbnRTdmMnLCBmdW5jdGlvbihHZW5lcmFsU3ZjKSB7XG4gICAgICAgIC8vdmFyIGxhbmc9R2VuZXJhbFN2Yy5nZXRMYW5nKCk7XG4gICAgICAgIHZhciBjb250ZW50ID0gW3tcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY2EnOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCA6IFt7cGljOiAnZm90by0xLmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IGNhdGFsYW4nfSxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBjYXRhbGFuJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBjYXRhbGFuJ319LHtwaWM6ICdmb3RvLTIuanBnJyxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBjYXRhbGFuJ319LHtwaWM6ICdmb3RvLTQuanBnJyxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IGNhdGFsYW4nfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBjYXRhbGFuJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBjYXRhbGFuJ319XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGggOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgc3BhbmlzaCd9LGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IHNwYW5pc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IHNwYW5pc2gnfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IHNwYW5pc2gnfX0se3BpYzogJ2ZvdG8tNC5qcGcnLGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgc3BhbmlzaCd9fSx7cGljOiAnZm90by01LmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IHNwYW5pc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IHNwYW5pc2gnfX1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaCA6IFtdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcic6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRnJlbmNoJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRnJlbmNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBGcmVuY2gnfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IEZyZW5jaCd9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBGcmVuY2gnfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBGcmVuY2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEZyZW5jaCd9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoIDogW119LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwgOiBbe3BpYzogJ2ZvdG8tMS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBFbmdsaXNoJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRW5nbGlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRW5nbGlzaCd9fSx7cGljOiAnZm90by0yLmpwZycsY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRW5nbGlzaCd9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBFbmdsaXNoJ319LHtwaWM6ICdmb3RvLTUuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRW5nbGlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRW5nbGlzaCd9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoIDogW119XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6J3ZpZGVvJywgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgICA6ICctLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYSc6ICdGdW5kYWRhIGVsIDE5NjIgYSBUb3Jyb2VsbGEgZGUgTW9udGdyw60gKEdpcm9uYSksIEVucGxhdGVyIFMuQS4gdmEgbsOpaXhlciBhbHMgaW5pY2lzIGRlIGxhIHJldm9sdWNpw7MgZGVsIHBhY2thZ2luZyBwZXIgbOKAmWFsaW1lbnRhY2nDsy4gRGVzIGRlIGxsYXZvcnMsIGxlcyBleGlnw6huY2llcyBkZWwgbWVyY2F0IGkgbGEgdm9sdW50YXQgZGUgc2VydmVpIGhhbiBzaWd1dCBlbCBtb3RvciBxdWUgZW5zIGhhIGZldCBpbm5vdmFyIGkgcHJvZ3Jlc3NhciBwZXIgYSBlc3RhciBzZW1wcmUgZW4gZWxzIGxsb2NzIGRlIGxpZGVyYXRnZSBk4oCZdW4gbWVyY2F0IGVuIGNvbnN0YW50IGV2b2x1Y2nDsy4gQWwgbGxhcmcgZGVscyA1MCBhbnlzIGRlIHByZXNlbmNpYSBkaW5zIGRlbCBzZWN0b3IsIGVucyBjYXJhY3Rlcml0emVtIHBlciBsYSBzZXJpZXRhdCBlbiBlbCBzZXJ2ZWkgaSBsYSBxdWFsaXRhdC5FbCBub3N0cmUgbWVyY2F0IGVzIGNlbnRyYSBlbiB1biA5NSUgZW4gZWwgc2VjdG9yIGFsaW1lbnRhcmkgKHBsYXRzIHByZXBhcmF0cywgcXVhcnRhIGdhbWEsIHByb2R1Y3RlcyBmcmVzY29zLCBib3NzZXMgZGUgcGEgZGUgbW90bGxvLCBwZXQgZm9vZCwgY2Fmw6gs4oCmKSBM4oCZZXhwb3J0YWNpw7MgYSBwYcOvc29zIGNvbSBGcmFuw6dhLCBQYcOvc29zIEJhaXhvcywgUGHDr3NvcyBOw7JyZGljcywgUmVnbmUgVW5pdCBpIFBvcnR1Z2FsIHJlcHJlc2VudGEgdW5hIHBhcnQgaW1wb3J0YW50IGRlIGxhIGZhY3R1cmFjacOzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzogJ0Z1bmRhZGEgZWwgMTk2MiBlbiBUb3Jyb2VsbGEgZGUgTW9udGdyw60gKEdpcm9uYSksIEVucGxhdGVyIFMuQS4gbmFjacOzIGVuIGxvcyBpbmljaW9zIGRlIGxhIHJldm9sdWNpw7NuIGRlbCBwYWNrYWdpbmcgcGFyYSBsYSBhbGltZW50YWNpw7NuLiBEZXNkZSBlbnRvbmNlcywgbGFzIGV4aWdlbmNpYXMgZGVsIG1lcmNhZG8geSBsYSB2b2x1bnRhZCBkZSBzZXJ2aWNpbyBoYW4gc2lkbyBlbCBtb3RvciBxdWUgbm9zIGhhIGhlY2hvIGlubm92YXIgeSBwcm9ncmVzYXIgcGFyYSBlc3RhciBzaWVtcHJlIGVuIGxvcyBsdWdhcmVzIGRlIGxpZGVyYXpnbyBkZSB1biBtZXJjYWRvIGVuIGNvbnN0YW50ZSBldm9sdWNpw7NuLiBBIGxvIGxhcmdvIGRlIGxvcyA1MCBhw7FvcyBkZSBwcmVzZW5jaWEgZW4gZWwgc2VjdG9yLCBub3MgY2FyYWN0ZXJpemFtb3MgcG9yIGxhIHNlcmllZGFkIGVuIHNlcnZpY2lvIHkgbGEgY2FsaWRhZC5OdWVzdHJvIG1lcmNhZG8gc2UgY2VudHJhIGVuIHVuIDk1JSBlbiBlbCBzZWN0b3IgYWxpbWVudGFyaW8gKHBsYXRvcyBwcmVwYXJhZG9zLCBjdWFydGEgZ2FtYSwgcHJvZHVjdG9zIGZyZXNjb3MsIGJvbHNhcyBkZSBwYW4gZGUgbW9sZGUsIHBldCBmb29kLCBjYWbDqSwgZXRjLikuQWN0dWFsbWVudGUgZXN0YW1vcyBwcmVzZW50ZXMgZW4gdG9kYSBFdXJvcGEgeSBlbCBub3J0ZSBkZSDDgWZyaWNhLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcic6ICdGb25kw6llIGVuIDE5NjIgw6AgVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIGEgc2VzIG9yaWdpbmVzIGRhbnMgbGVzIGTDqWJ1dHMgZGUgbGEgcsOpdm9sdXRpb24gZHUgcGFja2FnaW5nIGRhbnMgbGUgc2VjdGV1ciBhbGltZW50YWlyZS4gRMOocyBsb3JzLCBsZXMgZXhpZ2VuY2VzIGR1IG1hcmNow6kgZXQgbGEgdm9sb250w6kgZHUgc2VydmljZSBvbnQgw6l0w6kgbGVzIG1vdGV1cnMgcXVpIG5vdXMgb250IGNvbmR1aXRzIHZlcnMgbOKAmWlubm92YXRpb24gZXQgbGUgcHJvZ3LDqHMsIGFmaW4gZGUgbm91cyBtYWludGVuaXIgdG91am91cnMgZGFucyBsZSBwb2RpdW0gZHUgbGVhZGVyc2hpcCBk4oCZdW4gbWFyY2jDqSBlbiDDqXZvbHV0aW9uIGNvbnN0YW50ZS4gQXUgbG9uZyBkZXMgNTAgYW5uw6llcyBkZSBwcsOpc2VuY2UgZGFucyBsZSBzZWN0ZXVyLCBub3VzIHNvbW1lcyBjb25udWVzIHBhciBub3Mgc2VydmljZXMgZXQgcXVhbGl0w6kuTm90cmUgbWFyY2jDqSBzZSBjb25zYWNyZSBlbiB1biA5NSUgYXUgc2VjdGV1ciBhbGltZW50YWlyZSAocHLDqnQtw6AtbWFuZ2VyLCBzYWxhZGVzLCBwYWluIGRlIG1pZSwgcGV0IGZvb2QsIGNhZsOpLCBldGMuKS4gTOKAmWV4cG9ydGF0aW9uIHZlcnMgbGEgRnJhbmNlLCBsZXMgUGF5cy1CYXMsIGxlcyBQYXlzIE5vcmRpcXVlcywgbGUgUm95YXVtZSBVbmkgZXQgbGUgUG9ydHVnYWwgcmVwcsOpc2VudGVudCB1bmUgaW1wb3J0YW50ZSBwYXJ0aWUgZGUgbm9zIHJldmVudXMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzogJ0VucGxhdGVyIHdhcyBmb3VuZGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGZvb2QgcGFja2FnaW5nIHJldm9sdXRpb24gaW4gMTk2MiBhbmQgaXTigJlzIGxvY2F0ZWQgaW4gVG9ycm9lbGxhIGRlIE1vbnRncmkgYW5kIFNhcmnDsWVuYSAoU3BhaW4pLiBTaW5jZSB0aGVuLCB3ZSBoYXZlIGJlZW4gZ3Jvd2luZywgaW5ub3ZhdGluZyBhbmQgcHJvZ3Jlc3Npbmcgd2l0aCBvdXIgY3VzdG9tZXJzLldlIGV4cG9ydCB0byBjb3VudHJpZXMgbGlrZSBGcmFuY2UsIFVuaXRlZCBLaW5nZG9tLCBUaGUgTmV0aGVybGFuZHMsIEZpbmxhbmQsIFN3ZWRlbiwgRGVubWFyayBhbmQgUG9ydHVnYWwuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiAyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiAnaW1hZ2UnLCBcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnOiAnQSBFbnBsYXRlciBmYWJyaXF1ZW0gZW1iYWxhdGdlcyBmbGV4aWJsZXMgcGVscyBzZXVzIHByb2R1Y3RlcyBzZWdvbnMgbGVzIGNhcmFjdGVyw61zdGlxdWVzIGkgcmVxdWlzaXRzLCBhc3NlZ3VyYW50IGxhIGltYXRnZSwgcHJvdGVjY2nDsyBpIG1hcXVpbmFiaWxpdGF0LiBQb3NlbSBhbCBzZXUgYWJhc3QgZWwgc3Vwb3J0IGRlbHMgbm9zdHJlcyBlc3BlY2lhbGlzdGVzIGkgZWwgcHJvZHVjdGVzIG3DqXMgaW5ub3ZhZG9ycyBkZWwgbWVyY2F0IHBlciBhIHF1ZSBlcyB0cm9iaSBsYSBtaWxsb3Igc29sdWNpw7MgYSBsZXMgc2V2ZXMgbmVjZXNzaXRhdHMuTGEgZGlzcG9uaWJpbGl0YXQgZOKAmXVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbHMgZOKAmcO6bHRpbWEgdGVjbm9sb2dpYSBpIGxhIGluZmluaXRhdCBkZSBjb21iaW5hY2lvbnMgcG9zc2libGVzLCBhbWIgbGEgZ2FyYW50aWEgZOKAmXVuYSBpbXByZXNzacOzIGRlIHF1YWxpdGF0IHNvYnJlIHF1YWxzZXZvbCBzdXBlcmbDrWNpZSwgYXNzZWd1cmEgdW4gYWx0IHZhbG9yIGFmZWdpdCBwZWxzIG5vc3RyZXMgY2xpZW50cy4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnOiAnRW4gRW5wbGF0ZXIgb2ZyZWNlbW9zIGVtYmFsYWplcyBmbGV4aWJsZSBwYXJhIHN1cyBwcm9kdWN0b3Mgc2Vnw7puIHN1cyBjYXJhY3RlcsOtc3RpY2FzIHkgcmVxdWlzaXRvcywgYXNlZ3VyYW5kbyBzdSBpbWFnZW4sIHByb3RlY2Npw7NuIHkgbWFxdWluYWJpbGlkYWQuQSBzdSB2ZXosIHBvbmVtb3MgYSBzdSBhbGNhbmNlLCBlbCBzb3BvcnRlIGRlIHN1cyBlc3BlY2lhbGlzdGFzIHkgbG9zIHByb2R1Y3RvcyBtw6FzIGlubm92YWRvcmVzIGRlbCBtZXJjYWRvIHBhcmEgcXVlIGVuY3VlbnRyZSBsYSBzb2x1Y2nDs24gbcOhcyBhZGVjdWFkYSBhIHN1cyBuZWNlc2lkYWRlcy5MYSBkaXNwb25pYmlsaWRhZCBkZSB1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxlcyBkZSDDumx0aW1hIHRlY25vbG9nw61hIHkgbGEgaW5maW5pZGFkIGRlIGNvbWJpbmFjaW9uZXMgcG9zaWJsZXMsIGp1bnRvIGEgbGEgZ2FyYW50w61hIGRlIHVuYSBpbXByZXNpw7NuIGRlIGNhbGlkYWQgc29icmUgY3VhbHF1aWVyIHN1cGVyZmljaWUsIGFzZWd1cmEgdW4gYWx0byB2YWxvciBhw7FhZGlkbyBwYXJhIG51ZXN0cm9zIGNsaWVudGVzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcic6ICdDaGV6IEVucGxhdGVyIG5vdXMgdm91cyBwcm9wb3NvbnMgZGVzIGVtYmFsbGFnZXMgZmxleGlibGVzIGVuIGZvbmN0aW9uIGRlcyBjYXJhY3TDqXJpc3RpcXVlcyBldCByZXF1aXMgZGUgdm90cmUgcHJvZHVpdCwgZW4gYXNzdXJhbnQgdW5lIGJvbm5lIGltYWdlLCBwcm90ZWN0aW9uIGV0IG1hY2hpbmFiaWxpdMOpZS5EZSBwbHVzLCBub3VzIHZvdXMgcHJvcG9zb25zIGxlIHNvdXRpZW4gZGUgc2VzIHNww6ljaWFsaXN0ZXMgYWluc2kgcXVlIGxlcyBwcm9kdWl0cyBsZXMgcGx1cyBpbm5vdmF0ZXVycyBkdSBtYXJjaMOpIHBvdXIgcXVlIHZvdXMgcHVpc3NpZXogdHJvdXZleiBsYSBzb2x1dGlvbiBsYSBwbHVzIHNhdGlzZmFpc2FudGUgcG91ciB2b3MgYmVzb2lucy5MYSBkaXNwb25pYmlsaXTDqSBk4oCZdW4gdmFzdGUgw6ljaGFudGlsbG9uIGRlIG1hdMOpcmlhdXggZGUgdGVjaG5vbG9naWUgZGUgcG9pbnRlIGV0IGRlIGzigJlpbmZpbml0w6kgZGUgY29tYmluYWlzb25zIHBvc3NpYmxlcywgdG91dCBlbiBham91dGFudCBsYSBnYXJhbnRpZSBk4oCZdW5lIGltcHJlc3Npb24gZGUgcXVhbGl0w6kgc3VyIHF1ZWxjb25xdWUgc3VwZXJmaWNpZSwgYXNzdXJlIHVuZSBoYXV0ZSB2YWxldXIgYWpvdXTDqWUgcG91ciBub3MgY2xpZW50cy4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nOiAnVGhlcmUgaXMgbm90IGVuZ2xpc2ggZGVzY3JpcHRpb24gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDMsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6ICdpbWFnZScsIFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYSc6ICdUaXB1cyAzIGNhdGFsw6AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnOiAnVGlwbyAzIGNhc3RlbGxhbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInOiAnVGlwZWVlIDMgZnJhbmPDqHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nOiAnRW5nbGlzaCAzIHR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiA0LFxuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOid2aWRlbycsIFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYSc6ICdUaXB1cyA0IGNhdGFsw6AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnOiAnVGlwbyA0IGNhc3RlbGxhbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInOiAnVGlwZWVlIDQgZnJhbmPDqHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nOiAnRW5nbGlzaCA0IHR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6J3ZpZGVvJywgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJzogJ1RpcHVzIDUgY2F0YWzDoCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6ICdUaXBvIDUgY2FzdGVsbGFubycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcic6ICdUaXBlZWUgNSBmcmFuY8OocycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbic6ICdFbmdsaXNoIDUgdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgIHRoaXMuZ2V0Q29udGVudCA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50W2NvZGVdLmNvbnRlbnRbR2VuZXJhbFN2Yy5nZXRMYW5nKCldO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50W2NvZGVdLnZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRbY29kZV0udHlwZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5zZXJ2aWNlKCdHZW5lcmFsU3ZjJyxmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxhbmcgPVwicGF0YXRhXCI7XG4gICAgICAgIHRoaXMuc2V0TGFuZyA9IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIGxhbmcgPSBsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldExhbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBsYW5nO1xuICAgICAgICB9O1xuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIFxuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmRpcmVjdGl2ZSgnbWVudUVucGxhdGVyJyxmdW5jdGlvbigkcm9vdFNjb3BlLCRzdGF0ZSxNZW51U3ZjLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIG1lbnVzOiAnPWl0ZW1zJyxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogJz1sYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgbWVudUNsYXNzOiAnPW1lbnVDbGFzcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21lbnUtdGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtZW50LGF0dHIpIHtcbiAgICAgICAgICAgICAgICAvL3Njb3BlLm1lbnVJdGVtcyA9IHNjb3BlLm1lbnVzO1xuICAgICAgICAgICAgICAgIHNjb3BlLnRyYW5zbGF0ZXMgPSB7ICdsYW5ndWFnZSc6IHsnY2EnOidpZGlvbWVzJywnZXMnOidpZGlvbWFzJywnZW4nOidsYW5ndWFnZXMnLCdmcic6J2xhbmd1ZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2VzJzogeyAnY2EnIDogeyAnY2EnOidDYXRhbMOgJywgICAgICdlcycgOiAnQ2FzdGVsbMOgJyAsICAgICAnZnInIDogJ0ZyYW5jw6hzJywgICAnZW4nIDogJ0FuZ2zDqHMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IHsgJ2NhJzonQ2F0YWzDoW4nLCAgICAnZXMnIDogJ0Nhc3RlbGxhbm8nICwgICAnZnInIDogJ0ZyYW5jw6lzJywgICAnZW4nIDogJ0luZ2zDqXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IHsgJ2NhJzonQ2F0YWxhbicsICAgICdlcycgOiAnU3BhbmlzaCcgLCAgICAgICdmcicgOiAnRnJlbmNoJywgICAgJ2VuJyA6ICdFbmdsaXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiB7ICdjYSc6J0NhdGFsYW5lJywgICAgJ2VzJyA6ICdFc3BhZ25vbCcgLCAgICdmcicgOiAnRnJhbsOnYWlzJywgICAnZW4nIDogJ0FuZ2xhaXMnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVDbGFzcyA9ICduYXZiYXItd3JhcHBlcic7XG4gICAgICAgICAgICAgICAgc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5nKXtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKGxhbmcpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51cyA9IE1lbnVTdmMuZ2V0TWVudSgpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5sYW5ndWFnZSA9IGxhbmc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygnXi5eLicrbGFuZyskc3RhdGUuY3VycmVudC5uYW1lLnN1YnN0cig2KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzY29wZS5jaGFuZ2VJdGVtID0gZnVuY3Rpb24obWVudSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tZW51SXRlbS5saW5rID09ICdob21lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUubWVudUNsYXNzID0gXCJuYXZiYXItd3JhcHBlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVDb250YWluZXInKS5hZGRDbGFzcygnY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51Q2xhc3MgPSBcIm5hdmJhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVDb250YWluZXInKS5yZW1vdmVDbGFzcygnY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLnNlcnZpY2UoJ01lbnVTdmMnLCBmdW5jdGlvbihHZW5lcmFsU3ZjKSB7XG4gICAgICAgdmFyIG1lbnUgPSB7ICd0aXB1cyc6J00nLCAgIC8vTTogbWFpblxuICAgICAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYScgOiBbeydsYWJlbCc6J0luaWNpJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonRW1wcmVzYScsJ2xpbmsnOidlbXByZXNhJ30seydsYWJlbCc6J0FwbGljYWNpb25zJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LHsnbGFiZWwnOidGYWJyaWNhY2nDsycsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidRdWFsaXRhdCcsJ2xpbmsnOidxdWFsaXR5J30seydsYWJlbCc6J0NvbnRhY3RlJywnbGluayc6J2NvbnRhY3QnfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogW3snbGFiZWwnOidJbmljaW8nLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidFbXByZXNhJywnbGluayc6J2VtcHJlc2EnfSx7J2xhYmVsJzonQXBsaWNhY2lvbmVzJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LHsnbGFiZWwnOidGYWJyaWNhY2nDs24nLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonQ2FsaWRhZCcsJ2xpbmsnOidxdWFsaXR5J30seydsYWJlbCc6J0NvbnRhY3RvJywnbGluayc6J2NvbnRhY3QnfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogW3snbGFiZWwnOidBY2N1ZWlsJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonU29jacOpdMOpJywnbGluayc6J2VtcHJlc2EnfSx7J2xhYmVsJzonUGFja2FnaW5nIHBvdXInLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J0ZhYnJpY2F0aW9uJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J1F1YWxpdMOpJywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdCcsJ2xpbmsnOidjb250YWN0J31dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7J2xhYmVsJzonSG9tZScsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J1RoZSBDb21wYW55JywnbGluayc6J2VtcHJlc2EnfSx7J2xhYmVsJzonQXBwbGljYXRpb25zJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LHsnbGFiZWwnOidQcm9kdWN0aW9uJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J1F1YWxpdHknLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0JywnbGluayc6J2NvbnRhY3QnfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldE1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW51LmNvbnRlbnRbR2VuZXJhbFN2Yy5nZXRMYW5nKCldO1xuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbnRyb2xsZXIoJ05vcm1hbENvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG5cbiAgICAgICAgJHNjb3BlLnZpZGVvPSAnMXYzczZ0Nk1UaDgnO1xuICAgICAgICAkc2NvcGUudmFsdWUgPSBDb250ZW50U3ZjLmdldFZhbHVlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUudHlwZSA9IENvbnRlbnRTdmMuZ2V0VHlwZSgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLiRvbignY2hhbmdlTGFuZ3VhZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gQ29udGVudFN2Yy5nZXRDb250ZW50KCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAkc2NvcGUubWFwID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQ1LCBsb25naXR1ZGU6IC03MyB9LCB6b29tOiA4IH07XG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcCcse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VzJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EnLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnY2EnKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mcicse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy9mcicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKCdmcicpO1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VuJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5hcHBsaWNhdGlvbnMnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYS5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uZmFicmljYXRpb24nICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9mYWJyaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mci5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5jb250YWN0JyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1jb250YWN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKyhuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IG5hdmlnYXRvci5sYW5ndWFnZSkuc3Vic3RyKDAsMikrJy9ob21lJyk7XG4gICAgICAgIC8vJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vTWlyYXIgYWl4w7IgcGVsIFNFTyBodHRwOi8vZmFkZWl0LmRrL2Jsb2cvcG9zdC9hbmd1bGFyLXRyYW5zbGF0ZS11aS1yb3V0ZXItc2VvXG4gICAgLy9Nw6lzIFNFTzogaHR0cDovL3d3dy5taWNoYWVsYnJvbWxleS5jby51ay9ibG9nLzE3MS9lbmFibGUtcmljaC1zb2NpYWwtc2hhcmluZy1pbi15b3VyLWFuZ3VsYXJqcy1hcHBcbiAgICAvL3BMVUdJTiBzZW8gaHR0cHM6Ly9naXRodWIuY29tL2p2YW5kZW1vL2FuZ3VsYXItdXBkYXRlLW1ldGFcbiAgICAvL2h0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtY2F0ZWdvcmllcy9mdWxsLXdlYnNpdGVzLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==