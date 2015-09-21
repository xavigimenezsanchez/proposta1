angular.module('appEnplater',['ui.router', 'youtube-embed', 'uiGmapgoogle-maps'])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })
    .run(function(GeneralSvc, $stateParams) {
        /*console.log(navigator.language.substr(0,2));
        console.log($stateParams);*/
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
                            carousel    : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text catalan'},centerText:{efect:'',content:'Center text catalan'},leftText:{efect:'',content:'Left text catalan'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text catalan'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text catalan'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text catalan'},leftText:{efect:'',content:'Left text catalan'}}],
                            paragraphs  : [
                                {
                                    type    : 0,
                                    heading : {type: 2, text: 'Impresió d\'embalatges flexibles'},
                                    logo1   : 'img/EnplaterLogo.png',
                                    logo2   : 'img/EPALogo.png',
                                    text    : ['Expertos en proyectos de impresión de embalaje flexible con todos los procesos integrados en todo tipo de soportes: como OPP, PE, PET, PA, Papel y BOPP']
                                }, {
                                    type    : 1,
                                    logo    : 'img/home/packagingcluster-logo1.jpg',
                                    heading : null,
                                    text    : ['Enplater és membre fundador del Clúster de Packaging . El seu principal objectiu és compartir coneixements entre els seus membres per afrontar reptes d’un mercat cada vegada més exigent i competitiu , identificant les tendències i necessitats del mercat per millorar o realitzar nous productes de packaging.']
                                }, {
                                    type    : 1,
                                    logo    : '',
                                    heading : 'Responsabilidad Social',
                                    text    : ['Enplater contribuye de forma activa y voluntaria a la mejora social, económica y ambiental con el objetivo de mejorar su situación competitiva y ofrecer valor añadido a sus clientes, trabajadores y accionistas. Las prácticas, estrategias y sistemas de gestión de Enplater persiguen un equilibrio entre las dimensiones económica, social y ambiental.','Enplater forma parte de SEDEX, Supplier Ethical Data Exchange, una organización sin ánimo de lucro cuyo objetivo es posibilitar mejoras en las prácticas comerciales responsables y éticas de las cadenas de suministro de todo el mundo. SEDEX es una solución de gestión de cadena de suministro eficaz e innovadora que permite garantizar la reputación de nuestros clientes y mejorar las prácticas empleadas en la cadena de suministro, ayudando a disminuir el número de auditorías y cuestionarios.']
                                }]
                        },
                        'es':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text spanish'},centerText:{efect:'',content:'Center text spanish'},leftText:{efect:'',content:'Left text spanish'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text spanish'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text spanish'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text spanish'},leftText:{efect:'',content:'Left text spanish'}}],
                            paragraphs : [
                                {
                                    type    : 0,
                                    heading : {type: 2, text: 'Impresión de embalajes flexibles'},
                                    logo1   : 'img/EnplaterLogo.png',
                                    logo2   : 'img/EPALogo.png',
                                    text    : ['Expertos en proyectos de impresión de embalaje flexible con todos los procesos integrados en todo tipo de soportes: como OPP, PE, PET, PA, Papel y BOPP']
                                }, {
                                    type    : 1,
                                    logo    : 'img/home/packagingcluster-logo1.jpg',
                                    heading : null,
                                    text    : ['Enplater és membre fundador del Clúster de Packaging . El seu principal objectiu és compartir coneixements entre els seus membres per afrontar reptes d’un mercat cada vegada més exigent i competitiu , identificant les tendències i necessitats del mercat per millorar o realitzar nous productes de packaging.']
                                }, {
                                    type    : 1,
                                    logo    : '',
                                    heading : 'Responsabilidad Social',
                                    text    : ['Enplater contribuye de forma activa y voluntaria a la mejora social, económica y ambiental con el objetivo de mejorar su situación competitiva y ofrecer valor añadido a sus clientes, trabajadores y accionistas. Las prácticas, estrategias y sistemas de gestión de Enplater persiguen un equilibrio entre las dimensiones económica, social y ambiental.','Enplater forma parte de SEDEX, Supplier Ethical Data Exchange, una organización sin ánimo de lucro cuyo objetivo es posibilitar mejoras en las prácticas comerciales responsables y éticas de las cadenas de suministro de todo el mundo. SEDEX es una solución de gestión de cadena de suministro eficaz e innovadora que permite garantizar la reputación de nuestros clientes y mejorar las prácticas empleadas en la cadena de suministro, ayudando a disminuir el número de auditorías y cuestionarios.']
                                }
                                ]},
                        'fr':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text French'},centerText:{efect:'',content:'Center text French'},leftText:{efect:'',content:'Left text French'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text French'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text French'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text French'},leftText:{efect:'',content:'Left text French'}}],
                            paragraphs : [
                                {
                                    type    : 0,
                                    heading : {type: 2, text: 'Impression emballage flexible'},
                                    logo1   : 'img/EnplaterLogo.png',
                                    logo2   : 'img/EPALogo.png',
                                    text    : ['Expertos en proyectos de impresión de embalaje flexible con todos los procesos integrados en todo tipo de soportes: como OPP, PE, PET, PA, Papel y BOPP']
                                }, {
                                    type    : 1,
                                    logo    : 'img/home/packagingcluster-logo1.jpg',
                                    heading : null,
                                    text    : ['Enplater és membre fundador del Clúster de Packaging . El seu principal objectiu és compartir coneixements entre els seus membres per afrontar reptes d’un mercat cada vegada més exigent i competitiu , identificant les tendències i necessitats del mercat per millorar o realitzar nous productes de packaging.']
                                }, {
                                    type    : 1,
                                    logo    : '',
                                    heading : 'Responsabilidad Social',
                                    text    : ['Enplater contribuye de forma activa y voluntaria a la mejora social, económica y ambiental con el objetivo de mejorar su situación competitiva y ofrecer valor añadido a sus clientes, trabajadores y accionistas. Las prácticas, estrategias y sistemas de gestión de Enplater persiguen un equilibrio entre las dimensiones económica, social y ambiental.','Enplater forma parte de SEDEX, Supplier Ethical Data Exchange, una organización sin ánimo de lucro cuyo objetivo es posibilitar mejoras en las prácticas comerciales responsables y éticas de las cadenas de suministro de todo el mundo. SEDEX es una solución de gestión de cadena de suministro eficaz e innovadora que permite garantizar la reputación de nuestros clientes y mejorar las prácticas empleadas en la cadena de suministro, ayudando a disminuir el número de auditorías y cuestionarios.']
                                }]},
                        'en':{
                            carousel : [{pic: 'foto-1.jpg',rightText:{efect:'',content:'Right text English'},centerText:{efect:'',content:'Center text English'},leftText:{efect:'',content:'Left text English'}},{pic: 'foto-2.jpg',centerText:{efect:'',content:'Center text English'}},{pic: 'foto-4.jpg',leftText:{efect:'',content:'Left text English'}},{pic: 'foto-5.jpg',rightText:{efect:'',content:'Right text English'},leftText:{efect:'',content:'Left text English'}}],
                            paragraphs : [
                                {
                                    type    : 0,
                                    heading : {type: 2, text: 'Printing flexible packaging '},
                                    logo1   : 'img/EnplaterLogo.png',
                                    logo2   : 'img/EPALogo.png',
                                    text    : ['Expertos en proyectos de impresión de embalaje flexible con todos los procesos integrados en todo tipo de soportes: como OPP, PE, PET, PA, Papel y BOPP']
                                }, {
                                    type    : 1,
                                    logo    : 'img/home/packagingcluster-logo1.jpg',
                                    heading : null,
                                    text    : ['Enplater és membre fundador del Clúster de Packaging . El seu principal objectiu és compartir coneixements entre els seus membres per afrontar reptes d’un mercat cada vegada més exigent i competitiu , identificant les tendències i necessitats del mercat per millorar o realitzar nous productes de packaging.']
                                }, {
                                    type    : 1,
                                    logo    : '',
                                    heading : 'Responsabilidad Social',
                                    text    : ['Enplater contribuye de forma activa y voluntaria a la mejora social, económica y ambiental con el objetivo de mejorar su situación competitiva y ofrecer valor añadido a sus clientes, trabajadores y accionistas. Las prácticas, estrategias y sistemas de gestión de Enplater persiguen un equilibrio entre las dimensiones económica, social y ambiental.','Enplater forma parte de SEDEX, Supplier Ethical Data Exchange, una organización sin ánimo de lucro cuyo objetivo es posibilitar mejoras en las prácticas comerciales responsables y éticas de las cadenas de suministro de todo el mundo. SEDEX es una solución de gestión de cadena de suministro eficaz e innovadora que permite garantizar la reputación de nuestros clientes y mejorar las prácticas empleadas en la cadena de suministro, ayudando a disminuir el número de auditorías y cuestionarios.']
                                }]}
                    }
                        },{ 
                    code    : 1,
                    'class'   : '---', 
                    content :  {    'ca' : [{   type:'video',
                                                heading:{'principal' : "Enplater.", 'second': "Envasos Plàstic del Ter"},
                                                text : ['Fundada el 1962 a Torroella de Montgrí (Girona), Enplater S.A. va néixer als inicis de la revolució del packaging per l’alimentació. Des de llavors, les exigències del mercat i la voluntat de servei han sigut el motor que ens ha fet innovar i progressar per a estar sempre en els llocs de lideratge d’un mercat en constant evolució. Al llarg dels 50 anys de presencia dins del sector, ens caracteritzem per la serietat en el servei i la qualitat.El nostre mercat es centra en un 95% en el sector alimentari (plats preparats, quarta gama, productes frescos, bosses de pa de motllo, pet food, cafè,…) L’exportació a països com França, Països Baixos, Països Nòrdics, Regne Unit i Portugal representa una part important de la facturació'],
                                                value   : '1v3s6t6MTh8'
                                            },{   type:'image',
                                                heading:{'principal' : "EPA.", 'second': "Envases Plásticos de Aragon"},
                                                text : ['Envases Plásticos de Aragón (EPA) es va fundar el 2008 amb l’última tecnologia per embalatge flexible.','Vàrem decidir construir una planta de back up per a garantir els suministre als nostres clients i donar resposta a la demana del mercat europeu del packaging.'],
                                                value   : 'sarinyena1.png'
                                            }
                                        ],
                                    'es' : [{   type:'video',
                                                heading: {'principal' : "Enplater.", 'second': "Envasos Plàstic del Ter"},
                                                text : ['Fundada el 1962 en Torroella de Montgrí (Girona), Enplater S.A. nació en los inicios de la revolución del packaging para la alimentación. Desde entonces, las exigencias del mercado y la voluntad de servicio han sido el motor que nos ha hecho innovar y progresar para estar siempre en los lugares de liderazgo de un mercado en constante evolución. A lo largo de los 50 años de presencia en el sector, nos caracterizamos por la seriedad en servicio y la calidad.Nuestro mercado se centra en un 95% en el sector alimentario (platos preparados, cuarta gama, productos frescos, bolsas de pan de molde, pet food, café, etc.).Actualmente estamos presentes en toda Europa y el norte de África.'],
                                                value   : '1v3s6t6MTh8'
                                            },{   type:'image',
                                                heading:{'principal' : "EPA.", 'second': "Envases Plásticos de Aragon"},
                                                text : ['Envases Plásticos de Aragón (EPA) fue fundada en el año 2008 con la última tecnología para la impresión de embalaje flexible','Su construcción responde al aumento de la demanda del mercado del packaging en toda Europa y la necesidad de disponer de una planta de backup para garantizar el suministro a nuestros clientes.'],
                                                value   : 'sarinyena1.png'
                                            }
                                        ],
                                    'fr' : [{   type:'video',
                                                heading: {'principal' : "Enplater.", 'second': "Envasos Plàstic del Ter"},
                                                text : ['Fondée en 1962 à Torroella de Montgrí (Girona), Enplater S.A. a ses origines dans les débuts de la révolution du packaging dans le secteur alimentaire. Dès lors, les exigences du marché et la volonté du service ont été les moteurs qui nous ont conduits vers l’innovation et le progrès, afin de nous maintenir toujours dans le podium du leadership d’un marché en évolution constante. Au long des 50 années de présence dans le secteur, nous sommes connues par nos services et qualité.Notre marché se consacre en un 95% au secteur alimentaire (prêt-à-manger, salades, pain de mie, pet food, café, etc.). L’exportation vers la France, les Pays-Bas, les Pays Nordiques, le Royaume Uni et le Portugal représentent une importante partie de nos revenus.'],
                                                value   : '1v3s6t6MTh8'
                                            },{   type:'image',
                                                heading:{'principal' : "EPA.", 'second': "Envases Plásticos de Aragon"},
                                                text : ['Envases Plásticos de Aragón (EPA) fut fondée en 2008. Elle est équipée avec une technologie pointe dans le domaine d’impression d’emballage flexible.','Sa construction est la réponse à l’augmentation de la demande dans le domaine du packaging dans toute l’Europe et le besoin de disposer d’une installation de backup afin de garantir l’approvisionnement de nos clients.'],
                                                value   : 'sarinyena1.png'
                                            }
                                        ],
                                    'en' : [{   type:'video',
                                                heading: {'principal' : "Enplater.", 'second': "Envasos Plàstic del Ter"},
                                                text : ['Enplater was founded at the beginning of the food packaging revolution in 1962 and it’s located in Torroella de Montgri and Sariñena (Spain). Since then, we have been growing, innovating and progressing with our customers.We export to countries like France, United Kingdom, The Netherlands, Finland, Sweden, Denmark and Portugal.'],
                                                value   : '1v3s6t6MTh8'
                                            },{   type:'image',
                                                heading:{'principal' : "EPA.", 'second': "Envases Plásticos de Aragon"},
                                                text : ['Envases Plásticos de Aragón (EPA) was founded in 2008 with the up-to-the-minute printing technology for flexible packaging.','We decided to build it to offer a backup plant to our customers and increase our production capacity.'],
                                                value   : 'sarinyena1.png'
                                            }
                                        ]
                                }
                            
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
        
        console.log($scope.content);
        
        
        
        
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5jdHJsLmpzIiwiY2Fyb3VzZWwuZHJ0LmpzIiwiY29udGFjdC5jdHJsLmpzIiwiY29udGluZ3V0LnNydi5qcyIsImdlbmVyYWwuc3J2LmpzIiwiaG9tZS5jdHJsLmpzIiwibWVudS5kcnQuanMiLCJtZW51LnNydi5qcyIsIm5vcm1hbC5jdHJsLmpzIiwic3RhdGUuY2ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInLFsndWkucm91dGVyJywgJ3lvdXR1YmUtZW1iZWQnLCAndWlHbWFwZ29vZ2xlLW1hcHMnXSlcbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB9KVxuICAgIC5ydW4oZnVuY3Rpb24oR2VuZXJhbFN2YywgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIC8qY29uc29sZS5sb2cobmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTsqL1xuICAgICAgICAvL0dlbmVyYWxTdmMuc2V0TGFuZygobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UpLnN1YnN0cigwLDIpKTtcbiAgICB9KVxuICAgIC5jb25maWcoXG4gICAgWyd1aUdtYXBHb29nbGVNYXBBcGlQcm92aWRlcicsIGZ1bmN0aW9uKEdvb2dsZU1hcEFwaVByb3ZpZGVycykge1xuICAgICAgICBHb29nbGVNYXBBcGlQcm92aWRlcnMuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGNoaW5hOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1dXG4pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLGZ1bmN0aW9uKCRzY29wZSwkc3RhdGUsTWVudVN2YyxHZW5lcmFsU3ZjKXtcbiAgICAgICAgJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudShHZW5lcmFsU3ZjLmdldExhbmcoKSk7XG4gICAgICAgICRzY29wZS5sYW5ndWFnZSA9IEdlbmVyYWxTdmMuZ2V0TGFuZygpO1xuICAgICAgICAkc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5nKSB7XG4gICAgICAgICAgICAvL0dlbmVyYWxTdmMuc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgIC8vJHN0YXRlLmdvKGxhbmcpO1xuICAgICAgICAgICAgLy8kc2NvcGUubWVudUl0ZW1zID0gTWVudVN2Yy5nZXRNZW51KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLiRvbignY2hhbmdlTGFuZ3VhZ2UnLGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudShHZW5lcmFsU3ZjLmdldExhbmcoKSk7XG4gICAgICAgICAgICAkc2NvcGUubGFuZ3VhZ2UgPSBHZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS5tZW51Q2xhc3MgPSAnbmF2YmFyLXdyYXBwZXInO1xuICAgICAgICBcbiAgICAgICAgJHNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKXtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5tZW51Q2xhc3MgPSAnbmF2YmFyLXdyYXBwZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWVudUNsYXNzID0gJ25hdmJhcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgcmVzdHJpY3Q6ICAgICdFJyxcbiAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50IDogJz1jb250ZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC10ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWxlbWVudCxhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogNDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXN0aWMgYSBsYSBkaXJlY3RpdmEnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAvLyQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IC0yMTAgfSw1MDAsJ3NuYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsJykub24oJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAudScpLnRyYW5zaXRpb24oeyB5OiAtMjEwIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAucScpLnRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6ICAnMzYwZGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCcpLm9uKCdzbGlkZS5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IDIxMCB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsIC5hY3RpdmUgLnJvdyBwLnEnKS50cmFuc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiAgJy0zNjBkZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgfVxuICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignQ29udGFjdENvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS52YWx1ZSA9IENvbnRlbnRTdmMuZ2V0VmFsdWUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS50eXBlID0gQ29udGVudFN2Yy5nZXRUeXBlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICRzY29wZS5tYXAxID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIG1hcms6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIHpvb206IDEwIH07XG4gICAgICAgJHNjb3BlLm1hcDIgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDUuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogNC4xMzkzNjc0MDE1OTk4ODQgfSwgbWFyazogeyBsYXRpdHVkZTogNDUuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogNC4xMzkzNjc0MDE1OTk4ODQgfSwgem9vbTogMTAgfTtcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLnNlcnZpY2UoJ0NvbnRlbnRTdmMnLCBmdW5jdGlvbihHZW5lcmFsU3ZjKSB7XG4gICAgICAgIC8vdmFyIGxhbmc9R2VuZXJhbFN2Yy5nZXRMYW5nKCk7XG4gICAgICAgIHZhciBjb250ZW50ID0gW3tcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY2EnOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCAgICA6IFt7cGljOiAnZm90by0xLmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IGNhdGFsYW4nfSxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBjYXRhbGFuJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBjYXRhbGFuJ319LHtwaWM6ICdmb3RvLTIuanBnJyxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBjYXRhbGFuJ319LHtwaWM6ICdmb3RvLTQuanBnJyxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IGNhdGFsYW4nfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBjYXRhbGFuJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBjYXRhbGFuJ319XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDoge3R5cGU6IDIsIHRleHQ6ICdJbXByZXNpw7MgZFxcJ2VtYmFsYXRnZXMgZmxleGlibGVzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMSAgIDogJ2ltZy9FbnBsYXRlckxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28yICAgOiAnaW1nL0VQQUxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0V4cGVydG9zIGVuIHByb3llY3RvcyBkZSBpbXByZXNpw7NuIGRlIGVtYmFsYWplIGZsZXhpYmxlIGNvbiB0b2RvcyBsb3MgcHJvY2Vzb3MgaW50ZWdyYWRvcyBlbiB0b2RvIHRpcG8gZGUgc29wb3J0ZXM6IGNvbW8gT1BQLCBQRSwgUEVULCBQQSwgUGFwZWwgeSBCT1BQJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJ2ltZy9ob21lL3BhY2thZ2luZ2NsdXN0ZXItbG9nbzEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgw6lzIG1lbWJyZSBmdW5kYWRvciBkZWwgQ2zDunN0ZXIgZGUgUGFja2FnaW5nIC4gRWwgc2V1IHByaW5jaXBhbCBvYmplY3RpdSDDqXMgY29tcGFydGlyIGNvbmVpeGVtZW50cyBlbnRyZSBlbHMgc2V1cyBtZW1icmVzIHBlciBhZnJvbnRhciByZXB0ZXMgZOKAmXVuIG1lcmNhdCBjYWRhIHZlZ2FkYSBtw6lzIGV4aWdlbnQgaSBjb21wZXRpdGl1ICwgaWRlbnRpZmljYW50IGxlcyB0ZW5kw6huY2llcyBpIG5lY2Vzc2l0YXRzIGRlbCBtZXJjYXQgcGVyIG1pbGxvcmFyIG8gcmVhbGl0emFyIG5vdXMgcHJvZHVjdGVzIGRlIHBhY2thZ2luZy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiAnUmVzcG9uc2FiaWxpZGFkIFNvY2lhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciBjb250cmlidXllIGRlIGZvcm1hIGFjdGl2YSB5IHZvbHVudGFyaWEgYSBsYSBtZWpvcmEgc29jaWFsLCBlY29uw7NtaWNhIHkgYW1iaWVudGFsIGNvbiBlbCBvYmpldGl2byBkZSBtZWpvcmFyIHN1IHNpdHVhY2nDs24gY29tcGV0aXRpdmEgeSBvZnJlY2VyIHZhbG9yIGHDsWFkaWRvIGEgc3VzIGNsaWVudGVzLCB0cmFiYWphZG9yZXMgeSBhY2Npb25pc3Rhcy4gTGFzIHByw6FjdGljYXMsIGVzdHJhdGVnaWFzIHkgc2lzdGVtYXMgZGUgZ2VzdGnDs24gZGUgRW5wbGF0ZXIgcGVyc2lndWVuIHVuIGVxdWlsaWJyaW8gZW50cmUgbGFzIGRpbWVuc2lvbmVzIGVjb27Ds21pY2EsIHNvY2lhbCB5IGFtYmllbnRhbC4nLCdFbnBsYXRlciBmb3JtYSBwYXJ0ZSBkZSBTRURFWCwgU3VwcGxpZXIgRXRoaWNhbCBEYXRhIEV4Y2hhbmdlLCB1bmEgb3JnYW5pemFjacOzbiBzaW4gw6FuaW1vIGRlIGx1Y3JvIGN1eW8gb2JqZXRpdm8gZXMgcG9zaWJpbGl0YXIgbWVqb3JhcyBlbiBsYXMgcHLDoWN0aWNhcyBjb21lcmNpYWxlcyByZXNwb25zYWJsZXMgeSDDqXRpY2FzIGRlIGxhcyBjYWRlbmFzIGRlIHN1bWluaXN0cm8gZGUgdG9kbyBlbCBtdW5kby4gU0VERVggZXMgdW5hIHNvbHVjacOzbiBkZSBnZXN0acOzbiBkZSBjYWRlbmEgZGUgc3VtaW5pc3RybyBlZmljYXogZSBpbm5vdmFkb3JhIHF1ZSBwZXJtaXRlIGdhcmFudGl6YXIgbGEgcmVwdXRhY2nDs24gZGUgbnVlc3Ryb3MgY2xpZW50ZXMgeSBtZWpvcmFyIGxhcyBwcsOhY3RpY2FzIGVtcGxlYWRhcyBlbiBsYSBjYWRlbmEgZGUgc3VtaW5pc3RybywgYXl1ZGFuZG8gYSBkaXNtaW51aXIgZWwgbsO6bWVybyBkZSBhdWRpdG9yw61hcyB5IGN1ZXN0aW9uYXJpb3MuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXMnOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCA6IFt7cGljOiAnZm90by0xLmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IHNwYW5pc2gnfSxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBzcGFuaXNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBzcGFuaXNoJ319LHtwaWM6ICdmb3RvLTIuanBnJyxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBzcGFuaXNoJ319LHtwaWM6ICdmb3RvLTQuanBnJyxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IHNwYW5pc2gnfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBzcGFuaXNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBzcGFuaXNoJ319XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiB7dHlwZTogMiwgdGV4dDogJ0ltcHJlc2nDs24gZGUgZW1iYWxhamVzIGZsZXhpYmxlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzEgICA6ICdpbWcvRW5wbGF0ZXJMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMiAgIDogJ2ltZy9FUEFMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFeHBlcnRvcyBlbiBwcm95ZWN0b3MgZGUgaW1wcmVzacOzbiBkZSBlbWJhbGFqZSBmbGV4aWJsZSBjb24gdG9kb3MgbG9zIHByb2Nlc29zIGludGVncmFkb3MgZW4gdG9kbyB0aXBvIGRlIHNvcG9ydGVzOiBjb21vIE9QUCwgUEUsIFBFVCwgUEEsIFBhcGVsIHkgQk9QUCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICdpbWcvaG9tZS9wYWNrYWdpbmdjbHVzdGVyLWxvZ28xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIMOpcyBtZW1icmUgZnVuZGFkb3IgZGVsIENsw7pzdGVyIGRlIFBhY2thZ2luZyAuIEVsIHNldSBwcmluY2lwYWwgb2JqZWN0aXUgw6lzIGNvbXBhcnRpciBjb25laXhlbWVudHMgZW50cmUgZWxzIHNldXMgbWVtYnJlcyBwZXIgYWZyb250YXIgcmVwdGVzIGTigJl1biBtZXJjYXQgY2FkYSB2ZWdhZGEgbcOpcyBleGlnZW50IGkgY29tcGV0aXRpdSAsIGlkZW50aWZpY2FudCBsZXMgdGVuZMOobmNpZXMgaSBuZWNlc3NpdGF0cyBkZWwgbWVyY2F0IHBlciBtaWxsb3JhciBvIHJlYWxpdHphciBub3VzIHByb2R1Y3RlcyBkZSBwYWNrYWdpbmcuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogJ1Jlc3BvbnNhYmlsaWRhZCBTb2NpYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgY29udHJpYnV5ZSBkZSBmb3JtYSBhY3RpdmEgeSB2b2x1bnRhcmlhIGEgbGEgbWVqb3JhIHNvY2lhbCwgZWNvbsOzbWljYSB5IGFtYmllbnRhbCBjb24gZWwgb2JqZXRpdm8gZGUgbWVqb3JhciBzdSBzaXR1YWNpw7NuIGNvbXBldGl0aXZhIHkgb2ZyZWNlciB2YWxvciBhw7FhZGlkbyBhIHN1cyBjbGllbnRlcywgdHJhYmFqYWRvcmVzIHkgYWNjaW9uaXN0YXMuIExhcyBwcsOhY3RpY2FzLCBlc3RyYXRlZ2lhcyB5IHNpc3RlbWFzIGRlIGdlc3Rpw7NuIGRlIEVucGxhdGVyIHBlcnNpZ3VlbiB1biBlcXVpbGlicmlvIGVudHJlIGxhcyBkaW1lbnNpb25lcyBlY29uw7NtaWNhLCBzb2NpYWwgeSBhbWJpZW50YWwuJywnRW5wbGF0ZXIgZm9ybWEgcGFydGUgZGUgU0VERVgsIFN1cHBsaWVyIEV0aGljYWwgRGF0YSBFeGNoYW5nZSwgdW5hIG9yZ2FuaXphY2nDs24gc2luIMOhbmltbyBkZSBsdWNybyBjdXlvIG9iamV0aXZvIGVzIHBvc2liaWxpdGFyIG1lam9yYXMgZW4gbGFzIHByw6FjdGljYXMgY29tZXJjaWFsZXMgcmVzcG9uc2FibGVzIHkgw6l0aWNhcyBkZSBsYXMgY2FkZW5hcyBkZSBzdW1pbmlzdHJvIGRlIHRvZG8gZWwgbXVuZG8uIFNFREVYIGVzIHVuYSBzb2x1Y2nDs24gZGUgZ2VzdGnDs24gZGUgY2FkZW5hIGRlIHN1bWluaXN0cm8gZWZpY2F6IGUgaW5ub3ZhZG9yYSBxdWUgcGVybWl0ZSBnYXJhbnRpemFyIGxhIHJlcHV0YWNpw7NuIGRlIG51ZXN0cm9zIGNsaWVudGVzIHkgbWVqb3JhciBsYXMgcHLDoWN0aWNhcyBlbXBsZWFkYXMgZW4gbGEgY2FkZW5hIGRlIHN1bWluaXN0cm8sIGF5dWRhbmRvIGEgZGlzbWludWlyIGVsIG7Dum1lcm8gZGUgYXVkaXRvcsOtYXMgeSBjdWVzdGlvbmFyaW9zLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnInOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCA6IFt7cGljOiAnZm90by0xLmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IEZyZW5jaCd9LGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IEZyZW5jaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRnJlbmNoJ319LHtwaWM6ICdmb3RvLTIuanBnJyxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBGcmVuY2gnfX0se3BpYzogJ2ZvdG8tNC5qcGcnLGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRnJlbmNoJ319LHtwaWM6ICdmb3RvLTUuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRnJlbmNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBGcmVuY2gnfX1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaHMgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IHt0eXBlOiAyLCB0ZXh0OiAnSW1wcmVzc2lvbiBlbWJhbGxhZ2UgZmxleGlibGUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28xICAgOiAnaW1nL0VucGxhdGVyTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzIgICA6ICdpbWcvRVBBTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRXhwZXJ0b3MgZW4gcHJveWVjdG9zIGRlIGltcHJlc2nDs24gZGUgZW1iYWxhamUgZmxleGlibGUgY29uIHRvZG9zIGxvcyBwcm9jZXNvcyBpbnRlZ3JhZG9zIGVuIHRvZG8gdGlwbyBkZSBzb3BvcnRlczogY29tbyBPUFAsIFBFLCBQRVQsIFBBLCBQYXBlbCB5IEJPUFAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnaW1nL2hvbWUvcGFja2FnaW5nY2x1c3Rlci1sb2dvMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciDDqXMgbWVtYnJlIGZ1bmRhZG9yIGRlbCBDbMO6c3RlciBkZSBQYWNrYWdpbmcgLiBFbCBzZXUgcHJpbmNpcGFsIG9iamVjdGl1IMOpcyBjb21wYXJ0aXIgY29uZWl4ZW1lbnRzIGVudHJlIGVscyBzZXVzIG1lbWJyZXMgcGVyIGFmcm9udGFyIHJlcHRlcyBk4oCZdW4gbWVyY2F0IGNhZGEgdmVnYWRhIG3DqXMgZXhpZ2VudCBpIGNvbXBldGl0aXUgLCBpZGVudGlmaWNhbnQgbGVzIHRlbmTDqG5jaWVzIGkgbmVjZXNzaXRhdHMgZGVsIG1lcmNhdCBwZXIgbWlsbG9yYXIgbyByZWFsaXR6YXIgbm91cyBwcm9kdWN0ZXMgZGUgcGFja2FnaW5nLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6ICdSZXNwb25zYWJpbGlkYWQgU29jaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIGNvbnRyaWJ1eWUgZGUgZm9ybWEgYWN0aXZhIHkgdm9sdW50YXJpYSBhIGxhIG1lam9yYSBzb2NpYWwsIGVjb27Ds21pY2EgeSBhbWJpZW50YWwgY29uIGVsIG9iamV0aXZvIGRlIG1lam9yYXIgc3Ugc2l0dWFjacOzbiBjb21wZXRpdGl2YSB5IG9mcmVjZXIgdmFsb3IgYcOxYWRpZG8gYSBzdXMgY2xpZW50ZXMsIHRyYWJhamFkb3JlcyB5IGFjY2lvbmlzdGFzLiBMYXMgcHLDoWN0aWNhcywgZXN0cmF0ZWdpYXMgeSBzaXN0ZW1hcyBkZSBnZXN0acOzbiBkZSBFbnBsYXRlciBwZXJzaWd1ZW4gdW4gZXF1aWxpYnJpbyBlbnRyZSBsYXMgZGltZW5zaW9uZXMgZWNvbsOzbWljYSwgc29jaWFsIHkgYW1iaWVudGFsLicsJ0VucGxhdGVyIGZvcm1hIHBhcnRlIGRlIFNFREVYLCBTdXBwbGllciBFdGhpY2FsIERhdGEgRXhjaGFuZ2UsIHVuYSBvcmdhbml6YWNpw7NuIHNpbiDDoW5pbW8gZGUgbHVjcm8gY3V5byBvYmpldGl2byBlcyBwb3NpYmlsaXRhciBtZWpvcmFzIGVuIGxhcyBwcsOhY3RpY2FzIGNvbWVyY2lhbGVzIHJlc3BvbnNhYmxlcyB5IMOpdGljYXMgZGUgbGFzIGNhZGVuYXMgZGUgc3VtaW5pc3RybyBkZSB0b2RvIGVsIG11bmRvLiBTRURFWCBlcyB1bmEgc29sdWNpw7NuIGRlIGdlc3Rpw7NuIGRlIGNhZGVuYSBkZSBzdW1pbmlzdHJvIGVmaWNheiBlIGlubm92YWRvcmEgcXVlIHBlcm1pdGUgZ2FyYW50aXphciBsYSByZXB1dGFjacOzbiBkZSBudWVzdHJvcyBjbGllbnRlcyB5IG1lam9yYXIgbGFzIHByw6FjdGljYXMgZW1wbGVhZGFzIGVuIGxhIGNhZGVuYSBkZSBzdW1pbmlzdHJvLCBheXVkYW5kbyBhIGRpc21pbnVpciBlbCBuw7ptZXJvIGRlIGF1ZGl0b3LDrWFzIHkgY3Vlc3Rpb25hcmlvcy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW4nOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCA6IFt7cGljOiAnZm90by0xLmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IEVuZ2xpc2gnfSxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBFbmdsaXNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBFbmdsaXNoJ319LHtwaWM6ICdmb3RvLTIuanBnJyxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBFbmdsaXNoJ319LHtwaWM6ICdmb3RvLTQuanBnJyxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEVuZ2xpc2gnfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBFbmdsaXNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBFbmdsaXNoJ319XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiB7dHlwZTogMiwgdGV4dDogJ1ByaW50aW5nIGZsZXhpYmxlIHBhY2thZ2luZyAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28xICAgOiAnaW1nL0VucGxhdGVyTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzIgICA6ICdpbWcvRVBBTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRXhwZXJ0b3MgZW4gcHJveWVjdG9zIGRlIGltcHJlc2nDs24gZGUgZW1iYWxhamUgZmxleGlibGUgY29uIHRvZG9zIGxvcyBwcm9jZXNvcyBpbnRlZ3JhZG9zIGVuIHRvZG8gdGlwbyBkZSBzb3BvcnRlczogY29tbyBPUFAsIFBFLCBQRVQsIFBBLCBQYXBlbCB5IEJPUFAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnaW1nL2hvbWUvcGFja2FnaW5nY2x1c3Rlci1sb2dvMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciDDqXMgbWVtYnJlIGZ1bmRhZG9yIGRlbCBDbMO6c3RlciBkZSBQYWNrYWdpbmcgLiBFbCBzZXUgcHJpbmNpcGFsIG9iamVjdGl1IMOpcyBjb21wYXJ0aXIgY29uZWl4ZW1lbnRzIGVudHJlIGVscyBzZXVzIG1lbWJyZXMgcGVyIGFmcm9udGFyIHJlcHRlcyBk4oCZdW4gbWVyY2F0IGNhZGEgdmVnYWRhIG3DqXMgZXhpZ2VudCBpIGNvbXBldGl0aXUgLCBpZGVudGlmaWNhbnQgbGVzIHRlbmTDqG5jaWVzIGkgbmVjZXNzaXRhdHMgZGVsIG1lcmNhdCBwZXIgbWlsbG9yYXIgbyByZWFsaXR6YXIgbm91cyBwcm9kdWN0ZXMgZGUgcGFja2FnaW5nLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6ICdSZXNwb25zYWJpbGlkYWQgU29jaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIGNvbnRyaWJ1eWUgZGUgZm9ybWEgYWN0aXZhIHkgdm9sdW50YXJpYSBhIGxhIG1lam9yYSBzb2NpYWwsIGVjb27Ds21pY2EgeSBhbWJpZW50YWwgY29uIGVsIG9iamV0aXZvIGRlIG1lam9yYXIgc3Ugc2l0dWFjacOzbiBjb21wZXRpdGl2YSB5IG9mcmVjZXIgdmFsb3IgYcOxYWRpZG8gYSBzdXMgY2xpZW50ZXMsIHRyYWJhamFkb3JlcyB5IGFjY2lvbmlzdGFzLiBMYXMgcHLDoWN0aWNhcywgZXN0cmF0ZWdpYXMgeSBzaXN0ZW1hcyBkZSBnZXN0acOzbiBkZSBFbnBsYXRlciBwZXJzaWd1ZW4gdW4gZXF1aWxpYnJpbyBlbnRyZSBsYXMgZGltZW5zaW9uZXMgZWNvbsOzbWljYSwgc29jaWFsIHkgYW1iaWVudGFsLicsJ0VucGxhdGVyIGZvcm1hIHBhcnRlIGRlIFNFREVYLCBTdXBwbGllciBFdGhpY2FsIERhdGEgRXhjaGFuZ2UsIHVuYSBvcmdhbml6YWNpw7NuIHNpbiDDoW5pbW8gZGUgbHVjcm8gY3V5byBvYmpldGl2byBlcyBwb3NpYmlsaXRhciBtZWpvcmFzIGVuIGxhcyBwcsOhY3RpY2FzIGNvbWVyY2lhbGVzIHJlc3BvbnNhYmxlcyB5IMOpdGljYXMgZGUgbGFzIGNhZGVuYXMgZGUgc3VtaW5pc3RybyBkZSB0b2RvIGVsIG11bmRvLiBTRURFWCBlcyB1bmEgc29sdWNpw7NuIGRlIGdlc3Rpw7NuIGRlIGNhZGVuYSBkZSBzdW1pbmlzdHJvIGVmaWNheiBlIGlubm92YWRvcmEgcXVlIHBlcm1pdGUgZ2FyYW50aXphciBsYSByZXB1dGFjacOzbiBkZSBudWVzdHJvcyBjbGllbnRlcyB5IG1lam9yYXIgbGFzIHByw6FjdGljYXMgZW1wbGVhZGFzIGVuIGxhIGNhZGVuYSBkZSBzdW1pbmlzdHJvLCBheXVkYW5kbyBhIGRpc21pbnVpciBlbCBuw7ptZXJvIGRlIGF1ZGl0b3LDrWFzIHkgY3Vlc3Rpb25hcmlvcy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyAgIDogJy0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJyA6IFt7ICAgdHlwZTondmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVucGxhdGVyLlwiLCAnc2Vjb25kJzogXCJFbnZhc29zIFBsw6BzdGljIGRlbCBUZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydGdW5kYWRhIGVsIDE5NjIgYSBUb3Jyb2VsbGEgZGUgTW9udGdyw60gKEdpcm9uYSksIEVucGxhdGVyIFMuQS4gdmEgbsOpaXhlciBhbHMgaW5pY2lzIGRlIGxhIHJldm9sdWNpw7MgZGVsIHBhY2thZ2luZyBwZXIgbOKAmWFsaW1lbnRhY2nDsy4gRGVzIGRlIGxsYXZvcnMsIGxlcyBleGlnw6huY2llcyBkZWwgbWVyY2F0IGkgbGEgdm9sdW50YXQgZGUgc2VydmVpIGhhbiBzaWd1dCBlbCBtb3RvciBxdWUgZW5zIGhhIGZldCBpbm5vdmFyIGkgcHJvZ3Jlc3NhciBwZXIgYSBlc3RhciBzZW1wcmUgZW4gZWxzIGxsb2NzIGRlIGxpZGVyYXRnZSBk4oCZdW4gbWVyY2F0IGVuIGNvbnN0YW50IGV2b2x1Y2nDsy4gQWwgbGxhcmcgZGVscyA1MCBhbnlzIGRlIHByZXNlbmNpYSBkaW5zIGRlbCBzZWN0b3IsIGVucyBjYXJhY3Rlcml0emVtIHBlciBsYSBzZXJpZXRhdCBlbiBlbCBzZXJ2ZWkgaSBsYSBxdWFsaXRhdC5FbCBub3N0cmUgbWVyY2F0IGVzIGNlbnRyYSBlbiB1biA5NSUgZW4gZWwgc2VjdG9yIGFsaW1lbnRhcmkgKHBsYXRzIHByZXBhcmF0cywgcXVhcnRhIGdhbWEsIHByb2R1Y3RlcyBmcmVzY29zLCBib3NzZXMgZGUgcGEgZGUgbW90bGxvLCBwZXQgZm9vZCwgY2Fmw6gs4oCmKSBM4oCZZXhwb3J0YWNpw7MgYSBwYcOvc29zIGNvbSBGcmFuw6dhLCBQYcOvc29zIEJhaXhvcywgUGHDr3NvcyBOw7JyZGljcywgUmVnbmUgVW5pdCBpIFBvcnR1Z2FsIHJlcHJlc2VudGEgdW5hIHBhcnQgaW1wb3J0YW50IGRlIGxhIGZhY3R1cmFjacOzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHsgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiRVBBLlwiLCAnc2Vjb25kJzogXCJFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ29uXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWfDs24gKEVQQSkgZXMgdmEgZnVuZGFyIGVsIDIwMDggYW1iIGzigJnDumx0aW1hIHRlY25vbG9naWEgcGVyIGVtYmFsYXRnZSBmbGV4aWJsZS4nLCdWw6ByZW0gZGVjaWRpciBjb25zdHJ1aXIgdW5hIHBsYW50YSBkZSBiYWNrIHVwIHBlciBhIGdhcmFudGlyIGVscyBzdW1pbmlzdHJlIGFscyBub3N0cmVzIGNsaWVudHMgaSBkb25hciByZXNwb3N0YSBhIGxhIGRlbWFuYSBkZWwgbWVyY2F0IGV1cm9wZXUgZGVsIHBhY2thZ2luZy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc2FyaW55ZW5hMS5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7ICAgdHlwZTondmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogeydwcmluY2lwYWwnIDogXCJFbnBsYXRlci5cIiwgJ3NlY29uZCc6IFwiRW52YXNvcyBQbMOgc3RpYyBkZWwgVGVyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRnVuZGFkYSBlbCAxOTYyIGVuIFRvcnJvZWxsYSBkZSBNb250Z3LDrSAoR2lyb25hKSwgRW5wbGF0ZXIgUy5BLiBuYWNpw7MgZW4gbG9zIGluaWNpb3MgZGUgbGEgcmV2b2x1Y2nDs24gZGVsIHBhY2thZ2luZyBwYXJhIGxhIGFsaW1lbnRhY2nDs24uIERlc2RlIGVudG9uY2VzLCBsYXMgZXhpZ2VuY2lhcyBkZWwgbWVyY2FkbyB5IGxhIHZvbHVudGFkIGRlIHNlcnZpY2lvIGhhbiBzaWRvIGVsIG1vdG9yIHF1ZSBub3MgaGEgaGVjaG8gaW5ub3ZhciB5IHByb2dyZXNhciBwYXJhIGVzdGFyIHNpZW1wcmUgZW4gbG9zIGx1Z2FyZXMgZGUgbGlkZXJhemdvIGRlIHVuIG1lcmNhZG8gZW4gY29uc3RhbnRlIGV2b2x1Y2nDs24uIEEgbG8gbGFyZ28gZGUgbG9zIDUwIGHDsW9zIGRlIHByZXNlbmNpYSBlbiBlbCBzZWN0b3IsIG5vcyBjYXJhY3Rlcml6YW1vcyBwb3IgbGEgc2VyaWVkYWQgZW4gc2VydmljaW8geSBsYSBjYWxpZGFkLk51ZXN0cm8gbWVyY2FkbyBzZSBjZW50cmEgZW4gdW4gOTUlIGVuIGVsIHNlY3RvciBhbGltZW50YXJpbyAocGxhdG9zIHByZXBhcmFkb3MsIGN1YXJ0YSBnYW1hLCBwcm9kdWN0b3MgZnJlc2NvcywgYm9sc2FzIGRlIHBhbiBkZSBtb2xkZSwgcGV0IGZvb2QsIGNhZsOpLCBldGMuKS5BY3R1YWxtZW50ZSBlc3RhbW9zIHByZXNlbnRlcyBlbiB0b2RhIEV1cm9wYSB5IGVsIG5vcnRlIGRlIMOBZnJpY2EuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHsgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiRVBBLlwiLCAnc2Vjb25kJzogXCJFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ29uXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWfDs24gKEVQQSkgZnVlIGZ1bmRhZGEgZW4gZWwgYcOxbyAyMDA4IGNvbiBsYSDDumx0aW1hIHRlY25vbG9nw61hIHBhcmEgbGEgaW1wcmVzacOzbiBkZSBlbWJhbGFqZSBmbGV4aWJsZScsJ1N1IGNvbnN0cnVjY2nDs24gcmVzcG9uZGUgYWwgYXVtZW50byBkZSBsYSBkZW1hbmRhIGRlbCBtZXJjYWRvIGRlbCBwYWNrYWdpbmcgZW4gdG9kYSBFdXJvcGEgeSBsYSBuZWNlc2lkYWQgZGUgZGlzcG9uZXIgZGUgdW5hIHBsYW50YSBkZSBiYWNrdXAgcGFyYSBnYXJhbnRpemFyIGVsIHN1bWluaXN0cm8gYSBudWVzdHJvcyBjbGllbnRlcy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc2FyaW55ZW5hMS5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IFt7ICAgdHlwZTondmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogeydwcmluY2lwYWwnIDogXCJFbnBsYXRlci5cIiwgJ3NlY29uZCc6IFwiRW52YXNvcyBQbMOgc3RpYyBkZWwgVGVyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRm9uZMOpZSBlbiAxOTYyIMOgIFRvcnJvZWxsYSBkZSBNb250Z3LDrSAoR2lyb25hKSwgRW5wbGF0ZXIgUy5BLiBhIHNlcyBvcmlnaW5lcyBkYW5zIGxlcyBkw6lidXRzIGRlIGxhIHLDqXZvbHV0aW9uIGR1IHBhY2thZ2luZyBkYW5zIGxlIHNlY3RldXIgYWxpbWVudGFpcmUuIETDqHMgbG9ycywgbGVzIGV4aWdlbmNlcyBkdSBtYXJjaMOpIGV0IGxhIHZvbG9udMOpIGR1IHNlcnZpY2Ugb250IMOpdMOpIGxlcyBtb3RldXJzIHF1aSBub3VzIG9udCBjb25kdWl0cyB2ZXJzIGzigJlpbm5vdmF0aW9uIGV0IGxlIHByb2dyw6hzLCBhZmluIGRlIG5vdXMgbWFpbnRlbmlyIHRvdWpvdXJzIGRhbnMgbGUgcG9kaXVtIGR1IGxlYWRlcnNoaXAgZOKAmXVuIG1hcmNow6kgZW4gw6l2b2x1dGlvbiBjb25zdGFudGUuIEF1IGxvbmcgZGVzIDUwIGFubsOpZXMgZGUgcHLDqXNlbmNlIGRhbnMgbGUgc2VjdGV1ciwgbm91cyBzb21tZXMgY29ubnVlcyBwYXIgbm9zIHNlcnZpY2VzIGV0IHF1YWxpdMOpLk5vdHJlIG1hcmNow6kgc2UgY29uc2FjcmUgZW4gdW4gOTUlIGF1IHNlY3RldXIgYWxpbWVudGFpcmUgKHByw6p0LcOgLW1hbmdlciwgc2FsYWRlcywgcGFpbiBkZSBtaWUsIHBldCBmb29kLCBjYWbDqSwgZXRjLikuIEzigJlleHBvcnRhdGlvbiB2ZXJzIGxhIEZyYW5jZSwgbGVzIFBheXMtQmFzLCBsZXMgUGF5cyBOb3JkaXF1ZXMsIGxlIFJveWF1bWUgVW5pIGV0IGxlIFBvcnR1Z2FsIHJlcHLDqXNlbnRlbnQgdW5lIGltcG9ydGFudGUgcGFydGllIGRlIG5vcyByZXZlbnVzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVQQS5cIiwgJ3NlY29uZCc6IFwiRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWdvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnw7NuIChFUEEpIGZ1dCBmb25kw6llIGVuIDIwMDguIEVsbGUgZXN0IMOpcXVpcMOpZSBhdmVjIHVuZSB0ZWNobm9sb2dpZSBwb2ludGUgZGFucyBsZSBkb21haW5lIGTigJlpbXByZXNzaW9uIGTigJllbWJhbGxhZ2UgZmxleGlibGUuJywnU2EgY29uc3RydWN0aW9uIGVzdCBsYSByw6lwb25zZSDDoCBs4oCZYXVnbWVudGF0aW9uIGRlIGxhIGRlbWFuZGUgZGFucyBsZSBkb21haW5lIGR1IHBhY2thZ2luZyBkYW5zIHRvdXRlIGzigJlFdXJvcGUgZXQgbGUgYmVzb2luIGRlIGRpc3Bvc2VyIGTigJl1bmUgaW5zdGFsbGF0aW9uIGRlIGJhY2t1cCBhZmluIGRlIGdhcmFudGlyIGzigJlhcHByb3Zpc2lvbm5lbWVudCBkZSBub3MgY2xpZW50cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc2FyaW55ZW5hMS5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7ICAgdHlwZTondmlkZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogeydwcmluY2lwYWwnIDogXCJFbnBsYXRlci5cIiwgJ3NlY29uZCc6IFwiRW52YXNvcyBQbMOgc3RpYyBkZWwgVGVyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW5wbGF0ZXIgd2FzIGZvdW5kZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZm9vZCBwYWNrYWdpbmcgcmV2b2x1dGlvbiBpbiAxOTYyIGFuZCBpdOKAmXMgbG9jYXRlZCBpbiBUb3Jyb2VsbGEgZGUgTW9udGdyaSBhbmQgU2FyacOxZW5hIChTcGFpbikuIFNpbmNlIHRoZW4sIHdlIGhhdmUgYmVlbiBncm93aW5nLCBpbm5vdmF0aW5nIGFuZCBwcm9ncmVzc2luZyB3aXRoIG91ciBjdXN0b21lcnMuV2UgZXhwb3J0IHRvIGNvdW50cmllcyBsaWtlIEZyYW5jZSwgVW5pdGVkIEtpbmdkb20sIFRoZSBOZXRoZXJsYW5kcywgRmlubGFuZCwgU3dlZGVuLCBEZW5tYXJrIGFuZCBQb3J0dWdhbC4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0seyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJFUEEuXCIsICdzZWNvbmQnOiBcIkVudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnb25cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ8OzbiAoRVBBKSB3YXMgZm91bmRlZCBpbiAyMDA4IHdpdGggdGhlIHVwLXRvLXRoZS1taW51dGUgcHJpbnRpbmcgdGVjaG5vbG9neSBmb3IgZmxleGlibGUgcGFja2FnaW5nLicsJ1dlIGRlY2lkZWQgdG8gYnVpbGQgaXQgdG8gb2ZmZXIgYSBiYWNrdXAgcGxhbnQgdG8gb3VyIGN1c3RvbWVycyBhbmQgaW5jcmVhc2Ugb3VyIHByb2R1Y3Rpb24gY2FwYWNpdHkuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3NhcmlueWVuYTEucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6ICdpbWFnZScsIFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYSc6ICdBIEVucGxhdGVyIGZhYnJpcXVlbSBlbWJhbGF0Z2VzIGZsZXhpYmxlcyBwZWxzIHNldXMgcHJvZHVjdGVzIHNlZ29ucyBsZXMgY2FyYWN0ZXLDrXN0aXF1ZXMgaSByZXF1aXNpdHMsIGFzc2VndXJhbnQgbGEgaW1hdGdlLCBwcm90ZWNjacOzIGkgbWFxdWluYWJpbGl0YXQuIFBvc2VtIGFsIHNldSBhYmFzdCBlbCBzdXBvcnQgZGVscyBub3N0cmVzIGVzcGVjaWFsaXN0ZXMgaSBlbCBwcm9kdWN0ZXMgbcOpcyBpbm5vdmFkb3JzIGRlbCBtZXJjYXQgcGVyIGEgcXVlIGVzIHRyb2JpIGxhIG1pbGxvciBzb2x1Y2nDsyBhIGxlcyBzZXZlcyBuZWNlc3NpdGF0cy5MYSBkaXNwb25pYmlsaXRhdCBk4oCZdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFscyBk4oCZw7psdGltYSB0ZWNub2xvZ2lhIGkgbGEgaW5maW5pdGF0IGRlIGNvbWJpbmFjaW9ucyBwb3NzaWJsZXMsIGFtYiBsYSBnYXJhbnRpYSBk4oCZdW5hIGltcHJlc3Npw7MgZGUgcXVhbGl0YXQgc29icmUgcXVhbHNldm9sIHN1cGVyZsOtY2llLCBhc3NlZ3VyYSB1biBhbHQgdmFsb3IgYWZlZ2l0IHBlbHMgbm9zdHJlcyBjbGllbnRzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6ICdFbiBFbnBsYXRlciBvZnJlY2Vtb3MgZW1iYWxhamVzIGZsZXhpYmxlIHBhcmEgc3VzIHByb2R1Y3RvcyBzZWfDum4gc3VzIGNhcmFjdGVyw61zdGljYXMgeSByZXF1aXNpdG9zLCBhc2VndXJhbmRvIHN1IGltYWdlbiwgcHJvdGVjY2nDs24geSBtYXF1aW5hYmlsaWRhZC5BIHN1IHZleiwgcG9uZW1vcyBhIHN1IGFsY2FuY2UsIGVsIHNvcG9ydGUgZGUgc3VzIGVzcGVjaWFsaXN0YXMgeSBsb3MgcHJvZHVjdG9zIG3DoXMgaW5ub3ZhZG9yZXMgZGVsIG1lcmNhZG8gcGFyYSBxdWUgZW5jdWVudHJlIGxhIHNvbHVjacOzbiBtw6FzIGFkZWN1YWRhIGEgc3VzIG5lY2VzaWRhZGVzLkxhIGRpc3BvbmliaWxpZGFkIGRlIHVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbGVzIGRlIMO6bHRpbWEgdGVjbm9sb2fDrWEgeSBsYSBpbmZpbmlkYWQgZGUgY29tYmluYWNpb25lcyBwb3NpYmxlcywganVudG8gYSBsYSBnYXJhbnTDrWEgZGUgdW5hIGltcHJlc2nDs24gZGUgY2FsaWRhZCBzb2JyZSBjdWFscXVpZXIgc3VwZXJmaWNpZSwgYXNlZ3VyYSB1biBhbHRvIHZhbG9yIGHDsWFkaWRvIHBhcmEgbnVlc3Ryb3MgY2xpZW50ZXMuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJzogJ0NoZXogRW5wbGF0ZXIgbm91cyB2b3VzIHByb3Bvc29ucyBkZXMgZW1iYWxsYWdlcyBmbGV4aWJsZXMgZW4gZm9uY3Rpb24gZGVzIGNhcmFjdMOpcmlzdGlxdWVzIGV0IHJlcXVpcyBkZSB2b3RyZSBwcm9kdWl0LCBlbiBhc3N1cmFudCB1bmUgYm9ubmUgaW1hZ2UsIHByb3RlY3Rpb24gZXQgbWFjaGluYWJpbGl0w6llLkRlIHBsdXMsIG5vdXMgdm91cyBwcm9wb3NvbnMgbGUgc291dGllbiBkZSBzZXMgc3DDqWNpYWxpc3RlcyBhaW5zaSBxdWUgbGVzIHByb2R1aXRzIGxlcyBwbHVzIGlubm92YXRldXJzIGR1IG1hcmNow6kgcG91ciBxdWUgdm91cyBwdWlzc2lleiB0cm91dmV6IGxhIHNvbHV0aW9uIGxhIHBsdXMgc2F0aXNmYWlzYW50ZSBwb3VyIHZvcyBiZXNvaW5zLkxhIGRpc3BvbmliaWxpdMOpIGTigJl1biB2YXN0ZSDDqWNoYW50aWxsb24gZGUgbWF0w6lyaWF1eCBkZSB0ZWNobm9sb2dpZSBkZSBwb2ludGUgZXQgZGUgbOKAmWluZmluaXTDqSBkZSBjb21iaW5haXNvbnMgcG9zc2libGVzLCB0b3V0IGVuIGFqb3V0YW50IGxhIGdhcmFudGllIGTigJl1bmUgaW1wcmVzc2lvbiBkZSBxdWFsaXTDqSBzdXIgcXVlbGNvbnF1ZSBzdXBlcmZpY2llLCBhc3N1cmUgdW5lIGhhdXRlIHZhbGV1ciBham91dMOpZSBwb3VyIG5vcyBjbGllbnRzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbic6ICdUaGVyZSBpcyBub3QgZW5nbGlzaCBkZXNjcmlwdGlvbiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDogJ2ltYWdlJywgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJzogJ1RpcHVzIDMgY2F0YWzDoCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6ICdUaXBvIDMgY2FzdGVsbGFubycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcic6ICdUaXBlZWUgMyBmcmFuY8OocycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbic6ICdFbmdsaXNoIDMgdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6J3ZpZGVvJywgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJzogJ1RpcHVzIDQgY2F0YWzDoCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6ICdUaXBvIDQgY2FzdGVsbGFubycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcic6ICdUaXBlZWUgNCBmcmFuY8OocycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbic6ICdFbmdsaXNoIDQgdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogNSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgIDondmlkZW8nLCBcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnOiAnVGlwdXMgNSBjYXRhbMOgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzogJ1RpcG8gNSBjYXN0ZWxsYW5vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJzogJ1RpcGVlZSA1IGZyYW5jw6hzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzogJ0VuZ2xpc2ggNSB0eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5nZXRDb250ZW50ID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRbY29kZV0uY29udGVudFtHZW5lcmFsU3ZjLmdldExhbmcoKV07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFZhbHVlID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRbY29kZV0udmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFR5cGUgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS50eXBlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLnNlcnZpY2UoJ0dlbmVyYWxTdmMnLGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGFuZyA9XCJwYXRhdGFcIjtcbiAgICAgICAgdGhpcy5zZXRMYW5nID0gZnVuY3Rpb24obCkge1xuICAgICAgICAgICAgbGFuZyA9IGw7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0TGFuZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgICAgIH07XG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSxDb250ZW50U3ZjLCRzdGF0ZSkge1xuICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5jb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuZGlyZWN0aXZlKCdtZW51RW5wbGF0ZXInLGZ1bmN0aW9uKCRyb290U2NvcGUsJHN0YXRlLE1lbnVTdmMsR2VuZXJhbFN2Yykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgbWVudXM6ICc9aXRlbXMnLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnPWxhbmd1YWdlJyxcbiAgICAgICAgICAgICAgICBtZW51Q2xhc3M6ICc9bWVudUNsYXNzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbWVudS10ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLGVsZW1lbnQsYXR0cikge1xuICAgICAgICAgICAgICAgIC8vc2NvcGUubWVudUl0ZW1zID0gc2NvcGUubWVudXM7XG4gICAgICAgICAgICAgICAgc2NvcGUudHJhbnNsYXRlcyA9IHsgJ2xhbmd1YWdlJzogeydjYSc6J2lkaW9tZXMnLCdlcyc6J2lkaW9tYXMnLCdlbic6J2xhbmd1YWdlcycsJ2ZyJzonbGFuZ3Vlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYW5ndWFnZXMnOiB7ICdjYScgOiB7ICdjYSc6J0NhdGFsw6AnLCAgICAgJ2VzJyA6ICdDYXN0ZWxsw6AnICwgICAgICdmcicgOiAnRnJhbmPDqHMnLCAgICdlbicgOiAnQW5nbMOocycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogeyAnY2EnOidDYXRhbMOhbicsICAgICdlcycgOiAnQ2FzdGVsbGFubycgLCAgICdmcicgOiAnRnJhbmPDqXMnLCAgICdlbicgOiAnSW5nbMOpcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogeyAnY2EnOidDYXRhbGFuJywgICAgJ2VzJyA6ICdTcGFuaXNoJyAsICAgICAgJ2ZyJyA6ICdGcmVuY2gnLCAgICAnZW4nIDogJ0VuZ2xpc2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IHsgJ2NhJzonQ2F0YWxhbmUnLCAgICAnZXMnIDogJ0VzcGFnbm9sJyAsICAgJ2ZyJyA6ICdGcmFuw6dhaXMnLCAgICdlbicgOiAnQW5nbGFpcycgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2NvcGUubWVudUNsYXNzID0gJ25hdmJhci13cmFwcGVyJztcbiAgICAgICAgICAgICAgICBzY29wZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKGxhbmcpe1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcobGFuZyk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVzID0gTWVudVN2Yy5nZXRNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmxhbmd1YWdlID0gbGFuZztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdeLl4uJytsYW5nKyRzdGF0ZS5jdXJyZW50Lm5hbWUuc3Vic3RyKDYpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNjb3BlLmNoYW5nZUl0ZW0gPSBmdW5jdGlvbihtZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbnVJdGVtLmxpbmsgPT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51Q2xhc3MgPSBcIm5hdmJhci13cmFwcGVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbWVudUNvbnRhaW5lcicpLmFkZENsYXNzKCdjb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVDbGFzcyA9IFwibmF2YmFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbWVudUNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuc2VydmljZSgnTWVudVN2YycsIGZ1bmN0aW9uKEdlbmVyYWxTdmMpIHtcbiAgICAgICB2YXIgbWVudSA9IHsgJ3RpcHVzJzonTScsICAgLy9NOiBtYWluXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhJyA6IFt7J2xhYmVsJzonSW5pY2knLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidFbXByZXNhJywnbGluayc6J2VtcHJlc2EnfSx7J2xhYmVsJzonQXBsaWNhY2lvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J0ZhYnJpY2FjacOzJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J1F1YWxpdGF0JywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdGUnLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiBbeydsYWJlbCc6J0luaWNpbycsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J0VtcHJlc2EnLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidBcGxpY2FjaW9uZXMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J0ZhYnJpY2FjacOzbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidDYWxpZGFkJywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdG8nLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeydsYWJlbCc6J0FjY3VlaWwnLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidTb2Npw6l0w6knLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidQYWNrYWdpbmcgcG91cicsJ2xpbmsnOidhcHBsaWNhdGlvbnMnfSx7J2xhYmVsJzonRmFicmljYXRpb24nLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0w6knLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0JywnbGluayc6J2NvbnRhY3QnfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogW3snbGFiZWwnOidIb21lJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonVGhlIENvbXBhbnknLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidBcHBsaWNhdGlvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J1Byb2R1Y3Rpb24nLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0eScsJ2xpbmsnOidxdWFsaXR5J30seydsYWJlbCc6J0NvbnRhY3QnLCdsaW5rJzonY29udGFjdCd9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnUuY29udGVudFtHZW5lcmFsU3ZjLmdldExhbmcoKV07XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignTm9ybWFsQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSxDb250ZW50U3ZjLCRzdGF0ZSkge1xuICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcblxuICAgICAgICAkc2NvcGUudmlkZW89ICcxdjNzNnQ2TVRoOCc7XG4gICAgICAgICRzY29wZS52YWx1ZSA9IENvbnRlbnRTdmMuZ2V0VmFsdWUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS50eXBlID0gQ29udGVudFN2Yy5nZXRUeXBlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICRzY29wZS5tYXAgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDUsIGxvbmdpdHVkZTogLTczIH0sIHpvb206IDggfTtcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIsJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMnLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvZXMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYScse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy9jYScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKCdjYScpO1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZyJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2ZyJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4nLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvZW4nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mci5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5hcHBsaWNhdGlvbnMnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZmFicmljYXRpb24nICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9mYWJyaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4ucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5jb250YWN0JyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1jb250YWN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycrKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKS5zdWJzdHIoMCwyKSsnL2hvbWUnKTtcbiAgICAgICAgLy8kdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4gICAgXG4gICAgLy9NaXJhciBhaXjDsiBwZWwgU0VPIGh0dHA6Ly9mYWRlaXQuZGsvYmxvZy9wb3N0L2FuZ3VsYXItdHJhbnNsYXRlLXVpLXJvdXRlci1zZW9cbiAgICAvL03DqXMgU0VPOiBodHRwOi8vd3d3Lm1pY2hhZWxicm9tbGV5LmNvLnVrL2Jsb2cvMTcxL2VuYWJsZS1yaWNoLXNvY2lhbC1zaGFyaW5nLWluLXlvdXItYW5ndWxhcmpzLWFwcFxuICAgIC8vcExVR0lOIHNlbyBodHRwczovL2dpdGh1Yi5jb20vanZhbmRlbW8vYW5ndWxhci11cGRhdGUtbWV0YVxuICAgIC8vaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1jYXRlZ29yaWVzL2Z1bGwtd2Vic2l0ZXMvIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9