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
        

        $scope.social = { 'text'    : '© Copyright - Enplater',
                          'icons'   : [
                                    {'type' : 'twitter' ,   'url' : 'https://twitter.com/enplater'},
                                    {'type' : 'facebook' ,  'url' : 'https://www.facebook.com/enplater'},
                                    {'type' : 'youtube' ,   'url' : 'https://www.youtube.com/channel/UCv-dzNk_r_4rRukuMq1HW1w'},
                                    {'type' : 'google-plus','url' : 'https://plus.google.com/116589014532206686803'},
                                    {'type' : 'linkedin' ,  'url' : 'https://www.linkedin.com/company/enplater-s-a-'}
                              ]
                        };
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
                    'class' : '----', 
                    content :  {    'ca' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['A Enplater fabriquem embalatges flexibles pels seus productes segons les característiques i requisits, assegurant la imatge, protecció i maquinabilitat. Posem al seu abast el suport dels nostres especialistes i el productes més innovadors del mercat per a que es trobi la millor solució a les seves necessitats.', 'La disponibilitat d’una amplia gama de materials d’última tecnologia i la infinitat de combinacions possibles, amb la garantia d’una impressió de qualitat sobre qualsevol superfície, assegura un alt valor afegit pels nostres clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'es' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['En Enplater ofrecemos embalajes flexible para sus productos según sus características y requisitos, asegurando su imagen, protección y maquinabilidad.','A su vez, ponemos a su alcance, el soporte de sus especialistas y los productos más innovadores del mercado para que encuentre la solución más adecuada a sus necesidades.','La disponibilidad de una amplia gama de materiales de última tecnología y la infinidad de combinaciones posibles, junto a la garantía de una impresión de calidad sobre cualquier superficie, asegura un alto valor añadido para nuestros clientes.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'fr' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['Chez Enplater nous vous proposons des emballages flexibles en fonction des caractéristiques et requis de votre produit, en assurant une bonne image, protection et machinabilitée.','De plus, nous vous proposons le soutien de ses spécialistes ainsi que les produits les plus innovateurs du marché pour que vous puissiez trouvez la solution la plus satisfaisante pour vos besoins.','La disponibilité d’un vaste échantillon de matériaux de technologie de pointe et de l’infinité de combinaisons possibles, tout en ajoutant la garantie d’une impression de qualité sur quelconque superficie, assure une haute valeur ajoutée pour nos clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'en' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['English text','English text'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ]
                                }
                 },{ 
                    code    : 3,
                    'class' : '----', 
                    content :  {    'ca' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['A Enplater fabriquem embalatges flexibles pels seus productes segons les característiques i requisits, assegurant la imatge, protecció i maquinabilitat. Posem al seu abast el suport dels nostres especialistes i el productes més innovadors del mercat per a que es trobi la millor solució a les seves necessitats.', 'La disponibilitat d’una amplia gama de materials d’última tecnologia i la infinitat de combinacions possibles, amb la garantia d’una impressió de qualitat sobre qualsevol superfície, assegura un alt valor afegit pels nostres clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'es' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['En Enplater ofrecemos embalajes flexible para sus productos según sus características y requisitos, asegurando su imagen, protección y maquinabilidad.','A su vez, ponemos a su alcance, el soporte de sus especialistas y los productos más innovadores del mercado para que encuentre la solución más adecuada a sus necesidades.','La disponibilidad de una amplia gama de materiales de última tecnología y la infinidad de combinaciones posibles, junto a la garantía de una impresión de calidad sobre cualquier superficie, asegura un alto valor añadido para nuestros clientes.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'fr' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['Chez Enplater nous vous proposons des emballages flexibles en fonction des caractéristiques et requis de votre produit, en assurant une bonne image, protection et machinabilitée.','De plus, nous vous proposons le soutien de ses spécialistes ainsi que les produits les plus innovateurs du marché pour que vous puissiez trouvez la solution la plus satisfaisante pour vos besoins.','La disponibilité d’un vaste échantillon de matériaux de technologie de pointe et de l’infinité de combinaisons possibles, tout en ajoutant la garantie d’une impression de qualité sur quelconque superficie, assure une haute valeur ajoutée pour nos clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'en' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['English text','English text'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ]
                                }
                            
                 },{ 
                    code    : 4,
                    'class' : '----', 
                    content :  {    'ca' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['A Enplater fabriquem embalatges flexibles pels seus productes segons les característiques i requisits, assegurant la imatge, protecció i maquinabilitat. Posem al seu abast el suport dels nostres especialistes i el productes més innovadors del mercat per a que es trobi la millor solució a les seves necessitats.', 'La disponibilitat d’una amplia gama de materials d’última tecnologia i la infinitat de combinacions possibles, amb la garantia d’una impressió de qualitat sobre qualsevol superfície, assegura un alt valor afegit pels nostres clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'es' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['En Enplater ofrecemos embalajes flexible para sus productos según sus características y requisitos, asegurando su imagen, protección y maquinabilidad.','A su vez, ponemos a su alcance, el soporte de sus especialistas y los productos más innovadores del mercado para que encuentre la solución más adecuada a sus necesidades.','La disponibilidad de una amplia gama de materiales de última tecnología y la infinidad de combinaciones posibles, junto a la garantía de una impresión de calidad sobre cualquier superficie, asegura un alto valor añadido para nuestros clientes.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'fr' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['Chez Enplater nous vous proposons des emballages flexibles en fonction des caractéristiques et requis de votre produit, en assurant une bonne image, protection et machinabilitée.','De plus, nous vous proposons le soutien de ses spécialistes ainsi que les produits les plus innovateurs du marché pour que vous puissiez trouvez la solution la plus satisfaisante pour vos besoins.','La disponibilité d’un vaste échantillon de matériaux de technologie de pointe et de l’infinité de combinaisons possibles, tout en ajoutant la garantie d’une impression de qualité sur quelconque superficie, assure une haute valeur ajoutée pour nos clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'en' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['English text','English text'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ]
                                }
                            
                 },{ 
                    code    : 5, 
                    'class' : '----', 
                    content :  {    'ca' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['A Enplater fabriquem embalatges flexibles pels seus productes segons les característiques i requisits, assegurant la imatge, protecció i maquinabilitat. Posem al seu abast el suport dels nostres especialistes i el productes més innovadors del mercat per a que es trobi la millor solució a les seves necessitats.', 'La disponibilitat d’una amplia gama de materials d’última tecnologia i la infinitat de combinacions possibles, amb la garantia d’una impressió de qualitat sobre qualsevol superfície, assegura un alt valor afegit pels nostres clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'es' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['En Enplater ofrecemos embalajes flexible para sus productos según sus características y requisitos, asegurando su imagen, protección y maquinabilidad.','A su vez, ponemos a su alcance, el soporte de sus especialistas y los productos más innovadores del mercado para que encuentre la solución más adecuada a sus necesidades.','La disponibilidad de una amplia gama de materiales de última tecnología y la infinidad de combinaciones posibles, junto a la garantía de una impresión de calidad sobre cualquier superficie, asegura un alto valor añadido para nuestros clientes.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'fr' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['Chez Enplater nous vous proposons des emballages flexibles en fonction des caractéristiques et requis de votre produit, en assurant une bonne image, protection et machinabilitée.','De plus, nous vous proposons le soutien de ses spécialistes ainsi que les produits les plus innovateurs du marché pour que vous puissiez trouvez la solution la plus satisfaisante pour vos besoins.','La disponibilité d’un vaste échantillon de matériaux de technologie de pointe et de l’infinité de combinaisons possibles, tout en ajoutant la garantie d’une impression de qualité sur quelconque superficie, assure une haute valeur ajoutée pour nos clients.'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ],
                                    'en' : [{   type:'image',
                                                heading:{'principal' : "", 'second': ""},
                                                text : ['English text','English text'],
                                                value   : 'fabricacion.jpg'
                                            }
                                        ]
                                }
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
    .directive('appFooter', function() {
        return {
            restrict    :  'E',
            scope       : {
                social  : '=social'
            },
            templateUrl :   'footer-templater.html'
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
                
                scope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams){
                   console.log(toState); 
                });

                scope.changeItem = function(menu) {
                    if (this.menuItem.link == 'home') {
                        scope.menuClass = "menu";
                    } else {
                        scope.menuClass = "menu-top";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5jdHJsLmpzIiwiY2Fyb3VzZWwuZHJ0LmpzIiwiY29udGFjdC5jdHJsLmpzIiwiY29udGluZ3V0LnNydi5qcyIsImZvb3Rlci5kcnQuanMiLCJnZW5lcmFsLnNydi5qcyIsImhvbWUuY3RybC5qcyIsIm1lbnUuZHJ0LmpzIiwibWVudS5zcnYuanMiLCJub3JtYWwuY3RybC5qcyIsInN0YXRlLmNmZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInLFsndWkucm91dGVyJywgJ3lvdXR1YmUtZW1iZWQnLCAndWlHbWFwZ29vZ2xlLW1hcHMnXSlcbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB9KVxuICAgIC5ydW4oZnVuY3Rpb24oR2VuZXJhbFN2YywgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIC8qY29uc29sZS5sb2cobmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coJHN0YXRlUGFyYW1zKTsqL1xuICAgICAgICAvL0dlbmVyYWxTdmMuc2V0TGFuZygobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UpLnN1YnN0cigwLDIpKTtcbiAgICB9KVxuICAgIC5jb25maWcoXG4gICAgWyd1aUdtYXBHb29nbGVNYXBBcGlQcm92aWRlcicsIGZ1bmN0aW9uKEdvb2dsZU1hcEFwaVByb3ZpZGVycykge1xuICAgICAgICBHb29nbGVNYXBBcGlQcm92aWRlcnMuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGNoaW5hOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1dXG4pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLGZ1bmN0aW9uKCRzY29wZSwkc3RhdGUsTWVudVN2YyxHZW5lcmFsU3ZjKXtcbiAgICAgICAgJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudShHZW5lcmFsU3ZjLmdldExhbmcoKSk7XG4gICAgICAgICRzY29wZS5sYW5ndWFnZSA9IEdlbmVyYWxTdmMuZ2V0TGFuZygpO1xuICAgICAgICAkc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5nKSB7XG4gICAgICAgICAgICAvL0dlbmVyYWxTdmMuc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgIC8vJHN0YXRlLmdvKGxhbmcpO1xuICAgICAgICAgICAgLy8kc2NvcGUubWVudUl0ZW1zID0gTWVudVN2Yy5nZXRNZW51KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLiRvbignY2hhbmdlTGFuZ3VhZ2UnLGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLm1lbnVJdGVtcyA9IE1lbnVTdmMuZ2V0TWVudShHZW5lcmFsU3ZjLmdldExhbmcoKSk7XG4gICAgICAgICAgICAkc2NvcGUubGFuZ3VhZ2UgPSBHZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgICRzY29wZS5zb2NpYWwgPSB7ICd0ZXh0JyAgICA6ICfCqSBDb3B5cmlnaHQgLSBFbnBsYXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpY29ucycgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsndHlwZScgOiAndHdpdHRlcicgLCAgICd1cmwnIDogJ2h0dHBzOi8vdHdpdHRlci5jb20vZW5wbGF0ZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsndHlwZScgOiAnZmFjZWJvb2snICwgICd1cmwnIDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9lbnBsYXRlcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyd0eXBlJyA6ICd5b3V0dWJlJyAsICAgJ3VybCcgOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3YtZHpOa19yXzRyUnVrdU1xMUhXMXcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsndHlwZScgOiAnZ29vZ2xlLXBsdXMnLCd1cmwnIDogJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tLzExNjU4OTAxNDUzMjIwNjY4NjgwMyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyd0eXBlJyA6ICdsaW5rZWRpbicgLCAgJ3VybCcgOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZW5wbGF0ZXItcy1hLSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmRpcmVjdGl2ZSgnY2Fyb3VzZWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAgICByZXN0cmljdDogICAgJ0UnLFxuICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAnPWNvbnRlbnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Nhcm91c2VsLXRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtZW50LGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgLyokKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsOiA0MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFc3RpYyBhIGxhIGRpcmVjdGl2YScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnLmNhcm91c2VsIC5hY3RpdmUgLnJvdyBwLnUnKS50cmFuc2l0aW9uKHsgeTogLTIxMCB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwnKS5vbignc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IC0yMTAgfSw1MDAsJ3NuYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC5xJykudHJhbnNpdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWDogICczNjBkZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsJykub24oJ3NsaWRlLmJzLmNhcm91c2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsIC5hY3RpdmUgLnJvdyBwLnUnKS50cmFuc2l0aW9uKHsgeTogMjEwIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAucScpLnRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6ICAnLTM2MGRlZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSw1MDAsJ3NuYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICB9XG4gICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdDb250YWN0Q29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSxDb250ZW50U3ZjLCRzdGF0ZSkge1xuICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLnZhbHVlID0gQ29udGVudFN2Yy5nZXRWYWx1ZSgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLnR5cGUgPSBDb250ZW50U3ZjLmdldFR5cGUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS4kb24oJ2NoYW5nZUxhbmd1YWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgJHNjb3BlLm1hcDEgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDIuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogMy4xMzkzNjc0MDE1OTk4ODQgfSwgbWFyazogeyBsYXRpdHVkZTogNDIuMDM4NTg4MjA3MDIwMzcsIGxvbmdpdHVkZTogMy4xMzkzNjc0MDE1OTk4ODQgfSwgem9vbTogMTAgfTtcbiAgICAgICAkc2NvcGUubWFwMiA9IHsgY2VudGVyOiB7IGxhdGl0dWRlOiA0NS4wMzg1ODgyMDcwMjAzNywgbG9uZ2l0dWRlOiA0LjEzOTM2NzQwMTU5OTg4NCB9LCBtYXJrOiB7IGxhdGl0dWRlOiA0NS4wMzg1ODgyMDcwMjAzNywgbG9uZ2l0dWRlOiA0LjEzOTM2NzQwMTU5OTg4NCB9LCB6b29tOiAxMCB9O1xuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuc2VydmljZSgnQ29udGVudFN2YycsIGZ1bmN0aW9uKEdlbmVyYWxTdmMpIHtcbiAgICAgICAgLy92YXIgbGFuZz1HZW5lcmFsU3ZjLmdldExhbmcoKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBbe1xuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYSc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsICAgIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgY2F0YWxhbid9LGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IGNhdGFsYW4nfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IGNhdGFsYW4nfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IGNhdGFsYW4nfX0se3BpYzogJ2ZvdG8tNC5qcGcnLGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgY2F0YWxhbid9fSx7cGljOiAnZm90by01LmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IGNhdGFsYW4nfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IGNhdGFsYW4nfX1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaHMgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiB7dHlwZTogMiwgdGV4dDogJ0ltcHJlc2nDsyBkXFwnZW1iYWxhdGdlcyBmbGV4aWJsZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28xICAgOiAnaW1nL0VucGxhdGVyTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzIgICA6ICdpbWcvRVBBTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRXhwZXJ0b3MgZW4gcHJveWVjdG9zIGRlIGltcHJlc2nDs24gZGUgZW1iYWxhamUgZmxleGlibGUgY29uIHRvZG9zIGxvcyBwcm9jZXNvcyBpbnRlZ3JhZG9zIGVuIHRvZG8gdGlwbyBkZSBzb3BvcnRlczogY29tbyBPUFAsIFBFLCBQRVQsIFBBLCBQYXBlbCB5IEJPUFAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnaW1nL2hvbWUvcGFja2FnaW5nY2x1c3Rlci1sb2dvMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciDDqXMgbWVtYnJlIGZ1bmRhZG9yIGRlbCBDbMO6c3RlciBkZSBQYWNrYWdpbmcgLiBFbCBzZXUgcHJpbmNpcGFsIG9iamVjdGl1IMOpcyBjb21wYXJ0aXIgY29uZWl4ZW1lbnRzIGVudHJlIGVscyBzZXVzIG1lbWJyZXMgcGVyIGFmcm9udGFyIHJlcHRlcyBk4oCZdW4gbWVyY2F0IGNhZGEgdmVnYWRhIG3DqXMgZXhpZ2VudCBpIGNvbXBldGl0aXUgLCBpZGVudGlmaWNhbnQgbGVzIHRlbmTDqG5jaWVzIGkgbmVjZXNzaXRhdHMgZGVsIG1lcmNhdCBwZXIgbWlsbG9yYXIgbyByZWFsaXR6YXIgbm91cyBwcm9kdWN0ZXMgZGUgcGFja2FnaW5nLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6ICdSZXNwb25zYWJpbGlkYWQgU29jaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIGNvbnRyaWJ1eWUgZGUgZm9ybWEgYWN0aXZhIHkgdm9sdW50YXJpYSBhIGxhIG1lam9yYSBzb2NpYWwsIGVjb27Ds21pY2EgeSBhbWJpZW50YWwgY29uIGVsIG9iamV0aXZvIGRlIG1lam9yYXIgc3Ugc2l0dWFjacOzbiBjb21wZXRpdGl2YSB5IG9mcmVjZXIgdmFsb3IgYcOxYWRpZG8gYSBzdXMgY2xpZW50ZXMsIHRyYWJhamFkb3JlcyB5IGFjY2lvbmlzdGFzLiBMYXMgcHLDoWN0aWNhcywgZXN0cmF0ZWdpYXMgeSBzaXN0ZW1hcyBkZSBnZXN0acOzbiBkZSBFbnBsYXRlciBwZXJzaWd1ZW4gdW4gZXF1aWxpYnJpbyBlbnRyZSBsYXMgZGltZW5zaW9uZXMgZWNvbsOzbWljYSwgc29jaWFsIHkgYW1iaWVudGFsLicsJ0VucGxhdGVyIGZvcm1hIHBhcnRlIGRlIFNFREVYLCBTdXBwbGllciBFdGhpY2FsIERhdGEgRXhjaGFuZ2UsIHVuYSBvcmdhbml6YWNpw7NuIHNpbiDDoW5pbW8gZGUgbHVjcm8gY3V5byBvYmpldGl2byBlcyBwb3NpYmlsaXRhciBtZWpvcmFzIGVuIGxhcyBwcsOhY3RpY2FzIGNvbWVyY2lhbGVzIHJlc3BvbnNhYmxlcyB5IMOpdGljYXMgZGUgbGFzIGNhZGVuYXMgZGUgc3VtaW5pc3RybyBkZSB0b2RvIGVsIG11bmRvLiBTRURFWCBlcyB1bmEgc29sdWNpw7NuIGRlIGdlc3Rpw7NuIGRlIGNhZGVuYSBkZSBzdW1pbmlzdHJvIGVmaWNheiBlIGlubm92YWRvcmEgcXVlIHBlcm1pdGUgZ2FyYW50aXphciBsYSByZXB1dGFjacOzbiBkZSBudWVzdHJvcyBjbGllbnRlcyB5IG1lam9yYXIgbGFzIHByw6FjdGljYXMgZW1wbGVhZGFzIGVuIGxhIGNhZGVuYSBkZSBzdW1pbmlzdHJvLCBheXVkYW5kbyBhIGRpc21pbnVpciBlbCBuw7ptZXJvIGRlIGF1ZGl0b3LDrWFzIHkgY3Vlc3Rpb25hcmlvcy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlcyc6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgc3BhbmlzaCd9LGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IHNwYW5pc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IHNwYW5pc2gnfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IHNwYW5pc2gnfX0se3BpYzogJ2ZvdG8tNC5qcGcnLGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgc3BhbmlzaCd9fSx7cGljOiAnZm90by01LmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IHNwYW5pc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IHNwYW5pc2gnfX1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaHMgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IHt0eXBlOiAyLCB0ZXh0OiAnSW1wcmVzacOzbiBkZSBlbWJhbGFqZXMgZmxleGlibGVzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMSAgIDogJ2ltZy9FbnBsYXRlckxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28yICAgOiAnaW1nL0VQQUxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0V4cGVydG9zIGVuIHByb3llY3RvcyBkZSBpbXByZXNpw7NuIGRlIGVtYmFsYWplIGZsZXhpYmxlIGNvbiB0b2RvcyBsb3MgcHJvY2Vzb3MgaW50ZWdyYWRvcyBlbiB0b2RvIHRpcG8gZGUgc29wb3J0ZXM6IGNvbW8gT1BQLCBQRSwgUEVULCBQQSwgUGFwZWwgeSBCT1BQJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJ2ltZy9ob21lL3BhY2thZ2luZ2NsdXN0ZXItbG9nbzEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgw6lzIG1lbWJyZSBmdW5kYWRvciBkZWwgQ2zDunN0ZXIgZGUgUGFja2FnaW5nIC4gRWwgc2V1IHByaW5jaXBhbCBvYmplY3RpdSDDqXMgY29tcGFydGlyIGNvbmVpeGVtZW50cyBlbnRyZSBlbHMgc2V1cyBtZW1icmVzIHBlciBhZnJvbnRhciByZXB0ZXMgZOKAmXVuIG1lcmNhdCBjYWRhIHZlZ2FkYSBtw6lzIGV4aWdlbnQgaSBjb21wZXRpdGl1ICwgaWRlbnRpZmljYW50IGxlcyB0ZW5kw6huY2llcyBpIG5lY2Vzc2l0YXRzIGRlbCBtZXJjYXQgcGVyIG1pbGxvcmFyIG8gcmVhbGl0emFyIG5vdXMgcHJvZHVjdGVzIGRlIHBhY2thZ2luZy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiAnUmVzcG9uc2FiaWxpZGFkIFNvY2lhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciBjb250cmlidXllIGRlIGZvcm1hIGFjdGl2YSB5IHZvbHVudGFyaWEgYSBsYSBtZWpvcmEgc29jaWFsLCBlY29uw7NtaWNhIHkgYW1iaWVudGFsIGNvbiBlbCBvYmpldGl2byBkZSBtZWpvcmFyIHN1IHNpdHVhY2nDs24gY29tcGV0aXRpdmEgeSBvZnJlY2VyIHZhbG9yIGHDsWFkaWRvIGEgc3VzIGNsaWVudGVzLCB0cmFiYWphZG9yZXMgeSBhY2Npb25pc3Rhcy4gTGFzIHByw6FjdGljYXMsIGVzdHJhdGVnaWFzIHkgc2lzdGVtYXMgZGUgZ2VzdGnDs24gZGUgRW5wbGF0ZXIgcGVyc2lndWVuIHVuIGVxdWlsaWJyaW8gZW50cmUgbGFzIGRpbWVuc2lvbmVzIGVjb27Ds21pY2EsIHNvY2lhbCB5IGFtYmllbnRhbC4nLCdFbnBsYXRlciBmb3JtYSBwYXJ0ZSBkZSBTRURFWCwgU3VwcGxpZXIgRXRoaWNhbCBEYXRhIEV4Y2hhbmdlLCB1bmEgb3JnYW5pemFjacOzbiBzaW4gw6FuaW1vIGRlIGx1Y3JvIGN1eW8gb2JqZXRpdm8gZXMgcG9zaWJpbGl0YXIgbWVqb3JhcyBlbiBsYXMgcHLDoWN0aWNhcyBjb21lcmNpYWxlcyByZXNwb25zYWJsZXMgeSDDqXRpY2FzIGRlIGxhcyBjYWRlbmFzIGRlIHN1bWluaXN0cm8gZGUgdG9kbyBlbCBtdW5kby4gU0VERVggZXMgdW5hIHNvbHVjacOzbiBkZSBnZXN0acOzbiBkZSBjYWRlbmEgZGUgc3VtaW5pc3RybyBlZmljYXogZSBpbm5vdmFkb3JhIHF1ZSBwZXJtaXRlIGdhcmFudGl6YXIgbGEgcmVwdXRhY2nDs24gZGUgbnVlc3Ryb3MgY2xpZW50ZXMgeSBtZWpvcmFyIGxhcyBwcsOhY3RpY2FzIGVtcGxlYWRhcyBlbiBsYSBjYWRlbmEgZGUgc3VtaW5pc3RybywgYXl1ZGFuZG8gYSBkaXNtaW51aXIgZWwgbsO6bWVybyBkZSBhdWRpdG9yw61hcyB5IGN1ZXN0aW9uYXJpb3MuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcic6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRnJlbmNoJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRnJlbmNoJ30sbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBGcmVuY2gnfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IEZyZW5jaCd9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBGcmVuY2gnfX0se3BpYzogJ2ZvdG8tNS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBGcmVuY2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEZyZW5jaCd9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBocyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDoge3R5cGU6IDIsIHRleHQ6ICdJbXByZXNzaW9uIGVtYmFsbGFnZSBmbGV4aWJsZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzEgICA6ICdpbWcvRW5wbGF0ZXJMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMiAgIDogJ2ltZy9FUEFMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFeHBlcnRvcyBlbiBwcm95ZWN0b3MgZGUgaW1wcmVzacOzbiBkZSBlbWJhbGFqZSBmbGV4aWJsZSBjb24gdG9kb3MgbG9zIHByb2Nlc29zIGludGVncmFkb3MgZW4gdG9kbyB0aXBvIGRlIHNvcG9ydGVzOiBjb21vIE9QUCwgUEUsIFBFVCwgUEEsIFBhcGVsIHkgQk9QUCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICdpbWcvaG9tZS9wYWNrYWdpbmdjbHVzdGVyLWxvZ28xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIMOpcyBtZW1icmUgZnVuZGFkb3IgZGVsIENsw7pzdGVyIGRlIFBhY2thZ2luZyAuIEVsIHNldSBwcmluY2lwYWwgb2JqZWN0aXUgw6lzIGNvbXBhcnRpciBjb25laXhlbWVudHMgZW50cmUgZWxzIHNldXMgbWVtYnJlcyBwZXIgYWZyb250YXIgcmVwdGVzIGTigJl1biBtZXJjYXQgY2FkYSB2ZWdhZGEgbcOpcyBleGlnZW50IGkgY29tcGV0aXRpdSAsIGlkZW50aWZpY2FudCBsZXMgdGVuZMOobmNpZXMgaSBuZWNlc3NpdGF0cyBkZWwgbWVyY2F0IHBlciBtaWxsb3JhciBvIHJlYWxpdHphciBub3VzIHByb2R1Y3RlcyBkZSBwYWNrYWdpbmcuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogJ1Jlc3BvbnNhYmlsaWRhZCBTb2NpYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgY29udHJpYnV5ZSBkZSBmb3JtYSBhY3RpdmEgeSB2b2x1bnRhcmlhIGEgbGEgbWVqb3JhIHNvY2lhbCwgZWNvbsOzbWljYSB5IGFtYmllbnRhbCBjb24gZWwgb2JqZXRpdm8gZGUgbWVqb3JhciBzdSBzaXR1YWNpw7NuIGNvbXBldGl0aXZhIHkgb2ZyZWNlciB2YWxvciBhw7FhZGlkbyBhIHN1cyBjbGllbnRlcywgdHJhYmFqYWRvcmVzIHkgYWNjaW9uaXN0YXMuIExhcyBwcsOhY3RpY2FzLCBlc3RyYXRlZ2lhcyB5IHNpc3RlbWFzIGRlIGdlc3Rpw7NuIGRlIEVucGxhdGVyIHBlcnNpZ3VlbiB1biBlcXVpbGlicmlvIGVudHJlIGxhcyBkaW1lbnNpb25lcyBlY29uw7NtaWNhLCBzb2NpYWwgeSBhbWJpZW50YWwuJywnRW5wbGF0ZXIgZm9ybWEgcGFydGUgZGUgU0VERVgsIFN1cHBsaWVyIEV0aGljYWwgRGF0YSBFeGNoYW5nZSwgdW5hIG9yZ2FuaXphY2nDs24gc2luIMOhbmltbyBkZSBsdWNybyBjdXlvIG9iamV0aXZvIGVzIHBvc2liaWxpdGFyIG1lam9yYXMgZW4gbGFzIHByw6FjdGljYXMgY29tZXJjaWFsZXMgcmVzcG9uc2FibGVzIHkgw6l0aWNhcyBkZSBsYXMgY2FkZW5hcyBkZSBzdW1pbmlzdHJvIGRlIHRvZG8gZWwgbXVuZG8uIFNFREVYIGVzIHVuYSBzb2x1Y2nDs24gZGUgZ2VzdGnDs24gZGUgY2FkZW5hIGRlIHN1bWluaXN0cm8gZWZpY2F6IGUgaW5ub3ZhZG9yYSBxdWUgcGVybWl0ZSBnYXJhbnRpemFyIGxhIHJlcHV0YWNpw7NuIGRlIG51ZXN0cm9zIGNsaWVudGVzIHkgbWVqb3JhciBsYXMgcHLDoWN0aWNhcyBlbXBsZWFkYXMgZW4gbGEgY2FkZW5hIGRlIHN1bWluaXN0cm8sIGF5dWRhbmRvIGEgZGlzbWludWlyIGVsIG7Dum1lcm8gZGUgYXVkaXRvcsOtYXMgeSBjdWVzdGlvbmFyaW9zLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbic6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsIDogW3twaWM6ICdmb3RvLTEuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRW5nbGlzaCd9LGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IEVuZ2xpc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEVuZ2xpc2gnfX0se3BpYzogJ2ZvdG8tMi5qcGcnLGNlbnRlclRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0NlbnRlciB0ZXh0IEVuZ2xpc2gnfX0se3BpYzogJ2ZvdG8tNC5qcGcnLGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRW5nbGlzaCd9fSx7cGljOiAnZm90by01LmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IEVuZ2xpc2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEVuZ2xpc2gnfX1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaHMgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IHt0eXBlOiAyLCB0ZXh0OiAnUHJpbnRpbmcgZmxleGlibGUgcGFja2FnaW5nICd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzEgICA6ICdpbWcvRW5wbGF0ZXJMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMiAgIDogJ2ltZy9FUEFMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFeHBlcnRvcyBlbiBwcm95ZWN0b3MgZGUgaW1wcmVzacOzbiBkZSBlbWJhbGFqZSBmbGV4aWJsZSBjb24gdG9kb3MgbG9zIHByb2Nlc29zIGludGVncmFkb3MgZW4gdG9kbyB0aXBvIGRlIHNvcG9ydGVzOiBjb21vIE9QUCwgUEUsIFBFVCwgUEEsIFBhcGVsIHkgQk9QUCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICdpbWcvaG9tZS9wYWNrYWdpbmdjbHVzdGVyLWxvZ28xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIMOpcyBtZW1icmUgZnVuZGFkb3IgZGVsIENsw7pzdGVyIGRlIFBhY2thZ2luZyAuIEVsIHNldSBwcmluY2lwYWwgb2JqZWN0aXUgw6lzIGNvbXBhcnRpciBjb25laXhlbWVudHMgZW50cmUgZWxzIHNldXMgbWVtYnJlcyBwZXIgYWZyb250YXIgcmVwdGVzIGTigJl1biBtZXJjYXQgY2FkYSB2ZWdhZGEgbcOpcyBleGlnZW50IGkgY29tcGV0aXRpdSAsIGlkZW50aWZpY2FudCBsZXMgdGVuZMOobmNpZXMgaSBuZWNlc3NpdGF0cyBkZWwgbWVyY2F0IHBlciBtaWxsb3JhciBvIHJlYWxpdHphciBub3VzIHByb2R1Y3RlcyBkZSBwYWNrYWdpbmcuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogJ1Jlc3BvbnNhYmlsaWRhZCBTb2NpYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgY29udHJpYnV5ZSBkZSBmb3JtYSBhY3RpdmEgeSB2b2x1bnRhcmlhIGEgbGEgbWVqb3JhIHNvY2lhbCwgZWNvbsOzbWljYSB5IGFtYmllbnRhbCBjb24gZWwgb2JqZXRpdm8gZGUgbWVqb3JhciBzdSBzaXR1YWNpw7NuIGNvbXBldGl0aXZhIHkgb2ZyZWNlciB2YWxvciBhw7FhZGlkbyBhIHN1cyBjbGllbnRlcywgdHJhYmFqYWRvcmVzIHkgYWNjaW9uaXN0YXMuIExhcyBwcsOhY3RpY2FzLCBlc3RyYXRlZ2lhcyB5IHNpc3RlbWFzIGRlIGdlc3Rpw7NuIGRlIEVucGxhdGVyIHBlcnNpZ3VlbiB1biBlcXVpbGlicmlvIGVudHJlIGxhcyBkaW1lbnNpb25lcyBlY29uw7NtaWNhLCBzb2NpYWwgeSBhbWJpZW50YWwuJywnRW5wbGF0ZXIgZm9ybWEgcGFydGUgZGUgU0VERVgsIFN1cHBsaWVyIEV0aGljYWwgRGF0YSBFeGNoYW5nZSwgdW5hIG9yZ2FuaXphY2nDs24gc2luIMOhbmltbyBkZSBsdWNybyBjdXlvIG9iamV0aXZvIGVzIHBvc2liaWxpdGFyIG1lam9yYXMgZW4gbGFzIHByw6FjdGljYXMgY29tZXJjaWFsZXMgcmVzcG9uc2FibGVzIHkgw6l0aWNhcyBkZSBsYXMgY2FkZW5hcyBkZSBzdW1pbmlzdHJvIGRlIHRvZG8gZWwgbXVuZG8uIFNFREVYIGVzIHVuYSBzb2x1Y2nDs24gZGUgZ2VzdGnDs24gZGUgY2FkZW5hIGRlIHN1bWluaXN0cm8gZWZpY2F6IGUgaW5ub3ZhZG9yYSBxdWUgcGVybWl0ZSBnYXJhbnRpemFyIGxhIHJlcHV0YWNpw7NuIGRlIG51ZXN0cm9zIGNsaWVudGVzIHkgbWVqb3JhciBsYXMgcHLDoWN0aWNhcyBlbXBsZWFkYXMgZW4gbGEgY2FkZW5hIGRlIHN1bWluaXN0cm8sIGF5dWRhbmRvIGEgZGlzbWludWlyIGVsIG7Dum1lcm8gZGUgYXVkaXRvcsOtYXMgeSBjdWVzdGlvbmFyaW9zLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnICAgOiAnLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnIDogW3sgICB0eXBlOid2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiRW5wbGF0ZXIuXCIsICdzZWNvbmQnOiBcIkVudmFzb3MgUGzDoHN0aWMgZGVsIFRlclwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0Z1bmRhZGEgZWwgMTk2MiBhIFRvcnJvZWxsYSBkZSBNb250Z3LDrSAoR2lyb25hKSwgRW5wbGF0ZXIgUy5BLiB2YSBuw6lpeGVyIGFscyBpbmljaXMgZGUgbGEgcmV2b2x1Y2nDsyBkZWwgcGFja2FnaW5nIHBlciBs4oCZYWxpbWVudGFjacOzLiBEZXMgZGUgbGxhdm9ycywgbGVzIGV4aWfDqG5jaWVzIGRlbCBtZXJjYXQgaSBsYSB2b2x1bnRhdCBkZSBzZXJ2ZWkgaGFuIHNpZ3V0IGVsIG1vdG9yIHF1ZSBlbnMgaGEgZmV0IGlubm92YXIgaSBwcm9ncmVzc2FyIHBlciBhIGVzdGFyIHNlbXByZSBlbiBlbHMgbGxvY3MgZGUgbGlkZXJhdGdlIGTigJl1biBtZXJjYXQgZW4gY29uc3RhbnQgZXZvbHVjacOzLiBBbCBsbGFyZyBkZWxzIDUwIGFueXMgZGUgcHJlc2VuY2lhIGRpbnMgZGVsIHNlY3RvciwgZW5zIGNhcmFjdGVyaXR6ZW0gcGVyIGxhIHNlcmlldGF0IGVuIGVsIHNlcnZlaSBpIGxhIHF1YWxpdGF0LkVsIG5vc3RyZSBtZXJjYXQgZXMgY2VudHJhIGVuIHVuIDk1JSBlbiBlbCBzZWN0b3IgYWxpbWVudGFyaSAocGxhdHMgcHJlcGFyYXRzLCBxdWFydGEgZ2FtYSwgcHJvZHVjdGVzIGZyZXNjb3MsIGJvc3NlcyBkZSBwYSBkZSBtb3RsbG8sIHBldCBmb29kLCBjYWbDqCzigKYpIEzigJlleHBvcnRhY2nDsyBhIHBhw69zb3MgY29tIEZyYW7Dp2EsIFBhw69zb3MgQmFpeG9zLCBQYcOvc29zIE7DsnJkaWNzLCBSZWduZSBVbml0IGkgUG9ydHVnYWwgcmVwcmVzZW50YSB1bmEgcGFydCBpbXBvcnRhbnQgZGUgbGEgZmFjdHVyYWNpw7MnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0seyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJFUEEuXCIsICdzZWNvbmQnOiBcIkVudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnb25cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ8OzbiAoRVBBKSBlcyB2YSBmdW5kYXIgZWwgMjAwOCBhbWIgbOKAmcO6bHRpbWEgdGVjbm9sb2dpYSBwZXIgZW1iYWxhdGdlIGZsZXhpYmxlLicsJ1bDoHJlbSBkZWNpZGlyIGNvbnN0cnVpciB1bmEgcGxhbnRhIGRlIGJhY2sgdXAgcGVyIGEgZ2FyYW50aXIgZWxzIHN1bWluaXN0cmUgYWxzIG5vc3RyZXMgY2xpZW50cyBpIGRvbmFyIHJlc3Bvc3RhIGEgbGEgZGVtYW5hIGRlbCBtZXJjYXQgZXVyb3BldSBkZWwgcGFja2FnaW5nLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzYXJpbnllbmExLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogW3sgICB0eXBlOid2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOiB7J3ByaW5jaXBhbCcgOiBcIkVucGxhdGVyLlwiLCAnc2Vjb25kJzogXCJFbnZhc29zIFBsw6BzdGljIGRlbCBUZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydGdW5kYWRhIGVsIDE5NjIgZW4gVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIG5hY2nDsyBlbiBsb3MgaW5pY2lvcyBkZSBsYSByZXZvbHVjacOzbiBkZWwgcGFja2FnaW5nIHBhcmEgbGEgYWxpbWVudGFjacOzbi4gRGVzZGUgZW50b25jZXMsIGxhcyBleGlnZW5jaWFzIGRlbCBtZXJjYWRvIHkgbGEgdm9sdW50YWQgZGUgc2VydmljaW8gaGFuIHNpZG8gZWwgbW90b3IgcXVlIG5vcyBoYSBoZWNobyBpbm5vdmFyIHkgcHJvZ3Jlc2FyIHBhcmEgZXN0YXIgc2llbXByZSBlbiBsb3MgbHVnYXJlcyBkZSBsaWRlcmF6Z28gZGUgdW4gbWVyY2FkbyBlbiBjb25zdGFudGUgZXZvbHVjacOzbi4gQSBsbyBsYXJnbyBkZSBsb3MgNTAgYcOxb3MgZGUgcHJlc2VuY2lhIGVuIGVsIHNlY3Rvciwgbm9zIGNhcmFjdGVyaXphbW9zIHBvciBsYSBzZXJpZWRhZCBlbiBzZXJ2aWNpbyB5IGxhIGNhbGlkYWQuTnVlc3RybyBtZXJjYWRvIHNlIGNlbnRyYSBlbiB1biA5NSUgZW4gZWwgc2VjdG9yIGFsaW1lbnRhcmlvIChwbGF0b3MgcHJlcGFyYWRvcywgY3VhcnRhIGdhbWEsIHByb2R1Y3RvcyBmcmVzY29zLCBib2xzYXMgZGUgcGFuIGRlIG1vbGRlLCBwZXQgZm9vZCwgY2Fmw6ksIGV0Yy4pLkFjdHVhbG1lbnRlIGVzdGFtb3MgcHJlc2VudGVzIGVuIHRvZGEgRXVyb3BhIHkgZWwgbm9ydGUgZGUgw4FmcmljYS4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0seyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJFUEEuXCIsICdzZWNvbmQnOiBcIkVudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnb25cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ8OzbiAoRVBBKSBmdWUgZnVuZGFkYSBlbiBlbCBhw7FvIDIwMDggY29uIGxhIMO6bHRpbWEgdGVjbm9sb2fDrWEgcGFyYSBsYSBpbXByZXNpw7NuIGRlIGVtYmFsYWplIGZsZXhpYmxlJywnU3UgY29uc3RydWNjacOzbiByZXNwb25kZSBhbCBhdW1lbnRvIGRlIGxhIGRlbWFuZGEgZGVsIG1lcmNhZG8gZGVsIHBhY2thZ2luZyBlbiB0b2RhIEV1cm9wYSB5IGxhIG5lY2VzaWRhZCBkZSBkaXNwb25lciBkZSB1bmEgcGxhbnRhIGRlIGJhY2t1cCBwYXJhIGdhcmFudGl6YXIgZWwgc3VtaW5pc3RybyBhIG51ZXN0cm9zIGNsaWVudGVzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzYXJpbnllbmExLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogW3sgICB0eXBlOid2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOiB7J3ByaW5jaXBhbCcgOiBcIkVucGxhdGVyLlwiLCAnc2Vjb25kJzogXCJFbnZhc29zIFBsw6BzdGljIGRlbCBUZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydGb25kw6llIGVuIDE5NjIgw6AgVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIGEgc2VzIG9yaWdpbmVzIGRhbnMgbGVzIGTDqWJ1dHMgZGUgbGEgcsOpdm9sdXRpb24gZHUgcGFja2FnaW5nIGRhbnMgbGUgc2VjdGV1ciBhbGltZW50YWlyZS4gRMOocyBsb3JzLCBsZXMgZXhpZ2VuY2VzIGR1IG1hcmNow6kgZXQgbGEgdm9sb250w6kgZHUgc2VydmljZSBvbnQgw6l0w6kgbGVzIG1vdGV1cnMgcXVpIG5vdXMgb250IGNvbmR1aXRzIHZlcnMgbOKAmWlubm92YXRpb24gZXQgbGUgcHJvZ3LDqHMsIGFmaW4gZGUgbm91cyBtYWludGVuaXIgdG91am91cnMgZGFucyBsZSBwb2RpdW0gZHUgbGVhZGVyc2hpcCBk4oCZdW4gbWFyY2jDqSBlbiDDqXZvbHV0aW9uIGNvbnN0YW50ZS4gQXUgbG9uZyBkZXMgNTAgYW5uw6llcyBkZSBwcsOpc2VuY2UgZGFucyBsZSBzZWN0ZXVyLCBub3VzIHNvbW1lcyBjb25udWVzIHBhciBub3Mgc2VydmljZXMgZXQgcXVhbGl0w6kuTm90cmUgbWFyY2jDqSBzZSBjb25zYWNyZSBlbiB1biA5NSUgYXUgc2VjdGV1ciBhbGltZW50YWlyZSAocHLDqnQtw6AtbWFuZ2VyLCBzYWxhZGVzLCBwYWluIGRlIG1pZSwgcGV0IGZvb2QsIGNhZsOpLCBldGMuKS4gTOKAmWV4cG9ydGF0aW9uIHZlcnMgbGEgRnJhbmNlLCBsZXMgUGF5cy1CYXMsIGxlcyBQYXlzIE5vcmRpcXVlcywgbGUgUm95YXVtZSBVbmkgZXQgbGUgUG9ydHVnYWwgcmVwcsOpc2VudGVudCB1bmUgaW1wb3J0YW50ZSBwYXJ0aWUgZGUgbm9zIHJldmVudXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHsgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiRVBBLlwiLCAnc2Vjb25kJzogXCJFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ29uXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWfDs24gKEVQQSkgZnV0IGZvbmTDqWUgZW4gMjAwOC4gRWxsZSBlc3Qgw6lxdWlww6llIGF2ZWMgdW5lIHRlY2hub2xvZ2llIHBvaW50ZSBkYW5zIGxlIGRvbWFpbmUgZOKAmWltcHJlc3Npb24gZOKAmWVtYmFsbGFnZSBmbGV4aWJsZS4nLCdTYSBjb25zdHJ1Y3Rpb24gZXN0IGxhIHLDqXBvbnNlIMOgIGzigJlhdWdtZW50YXRpb24gZGUgbGEgZGVtYW5kZSBkYW5zIGxlIGRvbWFpbmUgZHUgcGFja2FnaW5nIGRhbnMgdG91dGUgbOKAmUV1cm9wZSBldCBsZSBiZXNvaW4gZGUgZGlzcG9zZXIgZOKAmXVuZSBpbnN0YWxsYXRpb24gZGUgYmFja3VwIGFmaW4gZGUgZ2FyYW50aXIgbOKAmWFwcHJvdmlzaW9ubmVtZW50IGRlIG5vcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzYXJpbnllbmExLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogW3sgICB0eXBlOid2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOiB7J3ByaW5jaXBhbCcgOiBcIkVucGxhdGVyLlwiLCAnc2Vjb25kJzogXCJFbnZhc29zIFBsw6BzdGljIGRlbCBUZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnBsYXRlciB3YXMgZm91bmRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmb29kIHBhY2thZ2luZyByZXZvbHV0aW9uIGluIDE5NjIgYW5kIGl04oCZcyBsb2NhdGVkIGluIFRvcnJvZWxsYSBkZSBNb250Z3JpIGFuZCBTYXJpw7FlbmEgKFNwYWluKS4gU2luY2UgdGhlbiwgd2UgaGF2ZSBiZWVuIGdyb3dpbmcsIGlubm92YXRpbmcgYW5kIHByb2dyZXNzaW5nIHdpdGggb3VyIGN1c3RvbWVycy5XZSBleHBvcnQgdG8gY291bnRyaWVzIGxpa2UgRnJhbmNlLCBVbml0ZWQgS2luZ2RvbSwgVGhlIE5ldGhlcmxhbmRzLCBGaW5sYW5kLCBTd2VkZW4sIERlbm1hcmsgYW5kIFBvcnR1Z2FsLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVQQS5cIiwgJ3NlY29uZCc6IFwiRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWdvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnw7NuIChFUEEpIHdhcyBmb3VuZGVkIGluIDIwMDggd2l0aCB0aGUgdXAtdG8tdGhlLW1pbnV0ZSBwcmludGluZyB0ZWNobm9sb2d5IGZvciBmbGV4aWJsZSBwYWNrYWdpbmcuJywnV2UgZGVjaWRlZCB0byBidWlsZCBpdCB0byBvZmZlciBhIGJhY2t1cCBwbGFudCB0byBvdXIgY3VzdG9tZXJzIGFuZCBpbmNyZWFzZSBvdXIgcHJvZHVjdGlvbiBjYXBhY2l0eS4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc2FyaW55ZW5hMS5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMixcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0EgRW5wbGF0ZXIgZmFicmlxdWVtIGVtYmFsYXRnZXMgZmxleGlibGVzIHBlbHMgc2V1cyBwcm9kdWN0ZXMgc2Vnb25zIGxlcyBjYXJhY3RlcsOtc3RpcXVlcyBpIHJlcXVpc2l0cywgYXNzZWd1cmFudCBsYSBpbWF0Z2UsIHByb3RlY2Npw7MgaSBtYXF1aW5hYmlsaXRhdC4gUG9zZW0gYWwgc2V1IGFiYXN0IGVsIHN1cG9ydCBkZWxzIG5vc3RyZXMgZXNwZWNpYWxpc3RlcyBpIGVsIHByb2R1Y3RlcyBtw6lzIGlubm92YWRvcnMgZGVsIG1lcmNhdCBwZXIgYSBxdWUgZXMgdHJvYmkgbGEgbWlsbG9yIHNvbHVjacOzIGEgbGVzIHNldmVzIG5lY2Vzc2l0YXRzLicsICdMYSBkaXNwb25pYmlsaXRhdCBk4oCZdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFscyBk4oCZw7psdGltYSB0ZWNub2xvZ2lhIGkgbGEgaW5maW5pdGF0IGRlIGNvbWJpbmFjaW9ucyBwb3NzaWJsZXMsIGFtYiBsYSBnYXJhbnRpYSBk4oCZdW5hIGltcHJlc3Npw7MgZGUgcXVhbGl0YXQgc29icmUgcXVhbHNldm9sIHN1cGVyZsOtY2llLCBhc3NlZ3VyYSB1biBhbHQgdmFsb3IgYWZlZ2l0IHBlbHMgbm9zdHJlcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbiBFbnBsYXRlciBvZnJlY2Vtb3MgZW1iYWxhamVzIGZsZXhpYmxlIHBhcmEgc3VzIHByb2R1Y3RvcyBzZWfDum4gc3VzIGNhcmFjdGVyw61zdGljYXMgeSByZXF1aXNpdG9zLCBhc2VndXJhbmRvIHN1IGltYWdlbiwgcHJvdGVjY2nDs24geSBtYXF1aW5hYmlsaWRhZC4nLCdBIHN1IHZleiwgcG9uZW1vcyBhIHN1IGFsY2FuY2UsIGVsIHNvcG9ydGUgZGUgc3VzIGVzcGVjaWFsaXN0YXMgeSBsb3MgcHJvZHVjdG9zIG3DoXMgaW5ub3ZhZG9yZXMgZGVsIG1lcmNhZG8gcGFyYSBxdWUgZW5jdWVudHJlIGxhIHNvbHVjacOzbiBtw6FzIGFkZWN1YWRhIGEgc3VzIG5lY2VzaWRhZGVzLicsJ0xhIGRpc3BvbmliaWxpZGFkIGRlIHVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbGVzIGRlIMO6bHRpbWEgdGVjbm9sb2fDrWEgeSBsYSBpbmZpbmlkYWQgZGUgY29tYmluYWNpb25lcyBwb3NpYmxlcywganVudG8gYSBsYSBnYXJhbnTDrWEgZGUgdW5hIGltcHJlc2nDs24gZGUgY2FsaWRhZCBzb2JyZSBjdWFscXVpZXIgc3VwZXJmaWNpZSwgYXNlZ3VyYSB1biBhbHRvIHZhbG9yIGHDsWFkaWRvIHBhcmEgbnVlc3Ryb3MgY2xpZW50ZXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0NoZXogRW5wbGF0ZXIgbm91cyB2b3VzIHByb3Bvc29ucyBkZXMgZW1iYWxsYWdlcyBmbGV4aWJsZXMgZW4gZm9uY3Rpb24gZGVzIGNhcmFjdMOpcmlzdGlxdWVzIGV0IHJlcXVpcyBkZSB2b3RyZSBwcm9kdWl0LCBlbiBhc3N1cmFudCB1bmUgYm9ubmUgaW1hZ2UsIHByb3RlY3Rpb24gZXQgbWFjaGluYWJpbGl0w6llLicsJ0RlIHBsdXMsIG5vdXMgdm91cyBwcm9wb3NvbnMgbGUgc291dGllbiBkZSBzZXMgc3DDqWNpYWxpc3RlcyBhaW5zaSBxdWUgbGVzIHByb2R1aXRzIGxlcyBwbHVzIGlubm92YXRldXJzIGR1IG1hcmNow6kgcG91ciBxdWUgdm91cyBwdWlzc2lleiB0cm91dmV6IGxhIHNvbHV0aW9uIGxhIHBsdXMgc2F0aXNmYWlzYW50ZSBwb3VyIHZvcyBiZXNvaW5zLicsJ0xhIGRpc3BvbmliaWxpdMOpIGTigJl1biB2YXN0ZSDDqWNoYW50aWxsb24gZGUgbWF0w6lyaWF1eCBkZSB0ZWNobm9sb2dpZSBkZSBwb2ludGUgZXQgZGUgbOKAmWluZmluaXTDqSBkZSBjb21iaW5haXNvbnMgcG9zc2libGVzLCB0b3V0IGVuIGFqb3V0YW50IGxhIGdhcmFudGllIGTigJl1bmUgaW1wcmVzc2lvbiBkZSBxdWFsaXTDqSBzdXIgcXVlbGNvbnF1ZSBzdXBlcmZpY2llLCBhc3N1cmUgdW5lIGhhdXRlIHZhbGV1ciBham91dMOpZSBwb3VyIG5vcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbmdsaXNoIHRleHQnLCdFbmdsaXNoIHRleHQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDMsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydBIEVucGxhdGVyIGZhYnJpcXVlbSBlbWJhbGF0Z2VzIGZsZXhpYmxlcyBwZWxzIHNldXMgcHJvZHVjdGVzIHNlZ29ucyBsZXMgY2FyYWN0ZXLDrXN0aXF1ZXMgaSByZXF1aXNpdHMsIGFzc2VndXJhbnQgbGEgaW1hdGdlLCBwcm90ZWNjacOzIGkgbWFxdWluYWJpbGl0YXQuIFBvc2VtIGFsIHNldSBhYmFzdCBlbCBzdXBvcnQgZGVscyBub3N0cmVzIGVzcGVjaWFsaXN0ZXMgaSBlbCBwcm9kdWN0ZXMgbcOpcyBpbm5vdmFkb3JzIGRlbCBtZXJjYXQgcGVyIGEgcXVlIGVzIHRyb2JpIGxhIG1pbGxvciBzb2x1Y2nDsyBhIGxlcyBzZXZlcyBuZWNlc3NpdGF0cy4nLCAnTGEgZGlzcG9uaWJpbGl0YXQgZOKAmXVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbHMgZOKAmcO6bHRpbWEgdGVjbm9sb2dpYSBpIGxhIGluZmluaXRhdCBkZSBjb21iaW5hY2lvbnMgcG9zc2libGVzLCBhbWIgbGEgZ2FyYW50aWEgZOKAmXVuYSBpbXByZXNzacOzIGRlIHF1YWxpdGF0IHNvYnJlIHF1YWxzZXZvbCBzdXBlcmbDrWNpZSwgYXNzZWd1cmEgdW4gYWx0IHZhbG9yIGFmZWdpdCBwZWxzIG5vc3RyZXMgY2xpZW50cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW4gRW5wbGF0ZXIgb2ZyZWNlbW9zIGVtYmFsYWplcyBmbGV4aWJsZSBwYXJhIHN1cyBwcm9kdWN0b3Mgc2Vnw7puIHN1cyBjYXJhY3RlcsOtc3RpY2FzIHkgcmVxdWlzaXRvcywgYXNlZ3VyYW5kbyBzdSBpbWFnZW4sIHByb3RlY2Npw7NuIHkgbWFxdWluYWJpbGlkYWQuJywnQSBzdSB2ZXosIHBvbmVtb3MgYSBzdSBhbGNhbmNlLCBlbCBzb3BvcnRlIGRlIHN1cyBlc3BlY2lhbGlzdGFzIHkgbG9zIHByb2R1Y3RvcyBtw6FzIGlubm92YWRvcmVzIGRlbCBtZXJjYWRvIHBhcmEgcXVlIGVuY3VlbnRyZSBsYSBzb2x1Y2nDs24gbcOhcyBhZGVjdWFkYSBhIHN1cyBuZWNlc2lkYWRlcy4nLCdMYSBkaXNwb25pYmlsaWRhZCBkZSB1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxlcyBkZSDDumx0aW1hIHRlY25vbG9nw61hIHkgbGEgaW5maW5pZGFkIGRlIGNvbWJpbmFjaW9uZXMgcG9zaWJsZXMsIGp1bnRvIGEgbGEgZ2FyYW50w61hIGRlIHVuYSBpbXByZXNpw7NuIGRlIGNhbGlkYWQgc29icmUgY3VhbHF1aWVyIHN1cGVyZmljaWUsIGFzZWd1cmEgdW4gYWx0byB2YWxvciBhw7FhZGlkbyBwYXJhIG51ZXN0cm9zIGNsaWVudGVzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydDaGV6IEVucGxhdGVyIG5vdXMgdm91cyBwcm9wb3NvbnMgZGVzIGVtYmFsbGFnZXMgZmxleGlibGVzIGVuIGZvbmN0aW9uIGRlcyBjYXJhY3TDqXJpc3RpcXVlcyBldCByZXF1aXMgZGUgdm90cmUgcHJvZHVpdCwgZW4gYXNzdXJhbnQgdW5lIGJvbm5lIGltYWdlLCBwcm90ZWN0aW9uIGV0IG1hY2hpbmFiaWxpdMOpZS4nLCdEZSBwbHVzLCBub3VzIHZvdXMgcHJvcG9zb25zIGxlIHNvdXRpZW4gZGUgc2VzIHNww6ljaWFsaXN0ZXMgYWluc2kgcXVlIGxlcyBwcm9kdWl0cyBsZXMgcGx1cyBpbm5vdmF0ZXVycyBkdSBtYXJjaMOpIHBvdXIgcXVlIHZvdXMgcHVpc3NpZXogdHJvdXZleiBsYSBzb2x1dGlvbiBsYSBwbHVzIHNhdGlzZmFpc2FudGUgcG91ciB2b3MgYmVzb2lucy4nLCdMYSBkaXNwb25pYmlsaXTDqSBk4oCZdW4gdmFzdGUgw6ljaGFudGlsbG9uIGRlIG1hdMOpcmlhdXggZGUgdGVjaG5vbG9naWUgZGUgcG9pbnRlIGV0IGRlIGzigJlpbmZpbml0w6kgZGUgY29tYmluYWlzb25zIHBvc3NpYmxlcywgdG91dCBlbiBham91dGFudCBsYSBnYXJhbnRpZSBk4oCZdW5lIGltcHJlc3Npb24gZGUgcXVhbGl0w6kgc3VyIHF1ZWxjb25xdWUgc3VwZXJmaWNpZSwgYXNzdXJlIHVuZSBoYXV0ZSB2YWxldXIgYWpvdXTDqWUgcG91ciBub3MgY2xpZW50cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW5nbGlzaCB0ZXh0JywnRW5nbGlzaCB0ZXh0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiA0LFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYScgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnQSBFbnBsYXRlciBmYWJyaXF1ZW0gZW1iYWxhdGdlcyBmbGV4aWJsZXMgcGVscyBzZXVzIHByb2R1Y3RlcyBzZWdvbnMgbGVzIGNhcmFjdGVyw61zdGlxdWVzIGkgcmVxdWlzaXRzLCBhc3NlZ3VyYW50IGxhIGltYXRnZSwgcHJvdGVjY2nDsyBpIG1hcXVpbmFiaWxpdGF0LiBQb3NlbSBhbCBzZXUgYWJhc3QgZWwgc3Vwb3J0IGRlbHMgbm9zdHJlcyBlc3BlY2lhbGlzdGVzIGkgZWwgcHJvZHVjdGVzIG3DqXMgaW5ub3ZhZG9ycyBkZWwgbWVyY2F0IHBlciBhIHF1ZSBlcyB0cm9iaSBsYSBtaWxsb3Igc29sdWNpw7MgYSBsZXMgc2V2ZXMgbmVjZXNzaXRhdHMuJywgJ0xhIGRpc3BvbmliaWxpdGF0IGTigJl1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxzIGTigJnDumx0aW1hIHRlY25vbG9naWEgaSBsYSBpbmZpbml0YXQgZGUgY29tYmluYWNpb25zIHBvc3NpYmxlcywgYW1iIGxhIGdhcmFudGlhIGTigJl1bmEgaW1wcmVzc2nDsyBkZSBxdWFsaXRhdCBzb2JyZSBxdWFsc2V2b2wgc3VwZXJmw61jaWUsIGFzc2VndXJhIHVuIGFsdCB2YWxvciBhZmVnaXQgcGVscyBub3N0cmVzIGNsaWVudHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VuIEVucGxhdGVyIG9mcmVjZW1vcyBlbWJhbGFqZXMgZmxleGlibGUgcGFyYSBzdXMgcHJvZHVjdG9zIHNlZ8O6biBzdXMgY2FyYWN0ZXLDrXN0aWNhcyB5IHJlcXVpc2l0b3MsIGFzZWd1cmFuZG8gc3UgaW1hZ2VuLCBwcm90ZWNjacOzbiB5IG1hcXVpbmFiaWxpZGFkLicsJ0Egc3UgdmV6LCBwb25lbW9zIGEgc3UgYWxjYW5jZSwgZWwgc29wb3J0ZSBkZSBzdXMgZXNwZWNpYWxpc3RhcyB5IGxvcyBwcm9kdWN0b3MgbcOhcyBpbm5vdmFkb3JlcyBkZWwgbWVyY2FkbyBwYXJhIHF1ZSBlbmN1ZW50cmUgbGEgc29sdWNpw7NuIG3DoXMgYWRlY3VhZGEgYSBzdXMgbmVjZXNpZGFkZXMuJywnTGEgZGlzcG9uaWJpbGlkYWQgZGUgdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFsZXMgZGUgw7psdGltYSB0ZWNub2xvZ8OtYSB5IGxhIGluZmluaWRhZCBkZSBjb21iaW5hY2lvbmVzIHBvc2libGVzLCBqdW50byBhIGxhIGdhcmFudMOtYSBkZSB1bmEgaW1wcmVzacOzbiBkZSBjYWxpZGFkIHNvYnJlIGN1YWxxdWllciBzdXBlcmZpY2llLCBhc2VndXJhIHVuIGFsdG8gdmFsb3IgYcOxYWRpZG8gcGFyYSBudWVzdHJvcyBjbGllbnRlcy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnQ2hleiBFbnBsYXRlciBub3VzIHZvdXMgcHJvcG9zb25zIGRlcyBlbWJhbGxhZ2VzIGZsZXhpYmxlcyBlbiBmb25jdGlvbiBkZXMgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgcmVxdWlzIGRlIHZvdHJlIHByb2R1aXQsIGVuIGFzc3VyYW50IHVuZSBib25uZSBpbWFnZSwgcHJvdGVjdGlvbiBldCBtYWNoaW5hYmlsaXTDqWUuJywnRGUgcGx1cywgbm91cyB2b3VzIHByb3Bvc29ucyBsZSBzb3V0aWVuIGRlIHNlcyBzcMOpY2lhbGlzdGVzIGFpbnNpIHF1ZSBsZXMgcHJvZHVpdHMgbGVzIHBsdXMgaW5ub3ZhdGV1cnMgZHUgbWFyY2jDqSBwb3VyIHF1ZSB2b3VzIHB1aXNzaWV6IHRyb3V2ZXogbGEgc29sdXRpb24gbGEgcGx1cyBzYXRpc2ZhaXNhbnRlIHBvdXIgdm9zIGJlc29pbnMuJywnTGEgZGlzcG9uaWJpbGl0w6kgZOKAmXVuIHZhc3RlIMOpY2hhbnRpbGxvbiBkZSBtYXTDqXJpYXV4IGRlIHRlY2hub2xvZ2llIGRlIHBvaW50ZSBldCBkZSBs4oCZaW5maW5pdMOpIGRlIGNvbWJpbmFpc29ucyBwb3NzaWJsZXMsIHRvdXQgZW4gYWpvdXRhbnQgbGEgZ2FyYW50aWUgZOKAmXVuZSBpbXByZXNzaW9uIGRlIHF1YWxpdMOpIHN1ciBxdWVsY29ucXVlIHN1cGVyZmljaWUsIGFzc3VyZSB1bmUgaGF1dGUgdmFsZXVyIGFqb3V0w6llIHBvdXIgbm9zIGNsaWVudHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VuZ2xpc2ggdGV4dCcsJ0VuZ2xpc2ggdGV4dCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogNSwgXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydBIEVucGxhdGVyIGZhYnJpcXVlbSBlbWJhbGF0Z2VzIGZsZXhpYmxlcyBwZWxzIHNldXMgcHJvZHVjdGVzIHNlZ29ucyBsZXMgY2FyYWN0ZXLDrXN0aXF1ZXMgaSByZXF1aXNpdHMsIGFzc2VndXJhbnQgbGEgaW1hdGdlLCBwcm90ZWNjacOzIGkgbWFxdWluYWJpbGl0YXQuIFBvc2VtIGFsIHNldSBhYmFzdCBlbCBzdXBvcnQgZGVscyBub3N0cmVzIGVzcGVjaWFsaXN0ZXMgaSBlbCBwcm9kdWN0ZXMgbcOpcyBpbm5vdmFkb3JzIGRlbCBtZXJjYXQgcGVyIGEgcXVlIGVzIHRyb2JpIGxhIG1pbGxvciBzb2x1Y2nDsyBhIGxlcyBzZXZlcyBuZWNlc3NpdGF0cy4nLCAnTGEgZGlzcG9uaWJpbGl0YXQgZOKAmXVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbHMgZOKAmcO6bHRpbWEgdGVjbm9sb2dpYSBpIGxhIGluZmluaXRhdCBkZSBjb21iaW5hY2lvbnMgcG9zc2libGVzLCBhbWIgbGEgZ2FyYW50aWEgZOKAmXVuYSBpbXByZXNzacOzIGRlIHF1YWxpdGF0IHNvYnJlIHF1YWxzZXZvbCBzdXBlcmbDrWNpZSwgYXNzZWd1cmEgdW4gYWx0IHZhbG9yIGFmZWdpdCBwZWxzIG5vc3RyZXMgY2xpZW50cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW4gRW5wbGF0ZXIgb2ZyZWNlbW9zIGVtYmFsYWplcyBmbGV4aWJsZSBwYXJhIHN1cyBwcm9kdWN0b3Mgc2Vnw7puIHN1cyBjYXJhY3RlcsOtc3RpY2FzIHkgcmVxdWlzaXRvcywgYXNlZ3VyYW5kbyBzdSBpbWFnZW4sIHByb3RlY2Npw7NuIHkgbWFxdWluYWJpbGlkYWQuJywnQSBzdSB2ZXosIHBvbmVtb3MgYSBzdSBhbGNhbmNlLCBlbCBzb3BvcnRlIGRlIHN1cyBlc3BlY2lhbGlzdGFzIHkgbG9zIHByb2R1Y3RvcyBtw6FzIGlubm92YWRvcmVzIGRlbCBtZXJjYWRvIHBhcmEgcXVlIGVuY3VlbnRyZSBsYSBzb2x1Y2nDs24gbcOhcyBhZGVjdWFkYSBhIHN1cyBuZWNlc2lkYWRlcy4nLCdMYSBkaXNwb25pYmlsaWRhZCBkZSB1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxlcyBkZSDDumx0aW1hIHRlY25vbG9nw61hIHkgbGEgaW5maW5pZGFkIGRlIGNvbWJpbmFjaW9uZXMgcG9zaWJsZXMsIGp1bnRvIGEgbGEgZ2FyYW50w61hIGRlIHVuYSBpbXByZXNpw7NuIGRlIGNhbGlkYWQgc29icmUgY3VhbHF1aWVyIHN1cGVyZmljaWUsIGFzZWd1cmEgdW4gYWx0byB2YWxvciBhw7FhZGlkbyBwYXJhIG51ZXN0cm9zIGNsaWVudGVzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydDaGV6IEVucGxhdGVyIG5vdXMgdm91cyBwcm9wb3NvbnMgZGVzIGVtYmFsbGFnZXMgZmxleGlibGVzIGVuIGZvbmN0aW9uIGRlcyBjYXJhY3TDqXJpc3RpcXVlcyBldCByZXF1aXMgZGUgdm90cmUgcHJvZHVpdCwgZW4gYXNzdXJhbnQgdW5lIGJvbm5lIGltYWdlLCBwcm90ZWN0aW9uIGV0IG1hY2hpbmFiaWxpdMOpZS4nLCdEZSBwbHVzLCBub3VzIHZvdXMgcHJvcG9zb25zIGxlIHNvdXRpZW4gZGUgc2VzIHNww6ljaWFsaXN0ZXMgYWluc2kgcXVlIGxlcyBwcm9kdWl0cyBsZXMgcGx1cyBpbm5vdmF0ZXVycyBkdSBtYXJjaMOpIHBvdXIgcXVlIHZvdXMgcHVpc3NpZXogdHJvdXZleiBsYSBzb2x1dGlvbiBsYSBwbHVzIHNhdGlzZmFpc2FudGUgcG91ciB2b3MgYmVzb2lucy4nLCdMYSBkaXNwb25pYmlsaXTDqSBk4oCZdW4gdmFzdGUgw6ljaGFudGlsbG9uIGRlIG1hdMOpcmlhdXggZGUgdGVjaG5vbG9naWUgZGUgcG9pbnRlIGV0IGRlIGzigJlpbmZpbml0w6kgZGUgY29tYmluYWlzb25zIHBvc3NpYmxlcywgdG91dCBlbiBham91dGFudCBsYSBnYXJhbnRpZSBk4oCZdW5lIGltcHJlc3Npb24gZGUgcXVhbGl0w6kgc3VyIHF1ZWxjb25xdWUgc3VwZXJmaWNpZSwgYXNzdXJlIHVuZSBoYXV0ZSB2YWxldXIgYWpvdXTDqWUgcG91ciBub3MgY2xpZW50cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW5nbGlzaCB0ZXh0JywnRW5nbGlzaCB0ZXh0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgdGhpcy5nZXRDb250ZW50ID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRbY29kZV0uY29udGVudFtHZW5lcmFsU3ZjLmdldExhbmcoKV07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFZhbHVlID0gZnVuY3Rpb24oY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRbY29kZV0udmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFR5cGUgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS50eXBlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmRpcmVjdGl2ZSgnYXBwRm9vdGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdCAgICA6ICAnRScsXG4gICAgICAgICAgICBzY29wZSAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBzb2NpYWwgIDogJz1zb2NpYWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiAgICdmb290ZXItdGVtcGxhdGVyLmh0bWwnXG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuc2VydmljZSgnR2VuZXJhbFN2YycsZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsYW5nID1cInBhdGF0YVwiO1xuICAgICAgICB0aGlzLnNldExhbmcgPSBmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICBsYW5nID0gbDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRMYW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFuZztcbiAgICAgICAgfTtcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLENvbnRlbnRTdmMsJHN0YXRlKSB7XG4gICAgICAgICRzY29wZS5jb250ZW50ID0gQ29udGVudFN2Yy5nZXRDb250ZW50KCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmNvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5kaXJlY3RpdmUoJ21lbnVFbnBsYXRlcicsZnVuY3Rpb24oJHJvb3RTY29wZSwkc3RhdGUsTWVudVN2YyxHZW5lcmFsU3ZjKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBtZW51czogJz1pdGVtcycsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICc9bGFuZ3VhZ2UnLFxuICAgICAgICAgICAgICAgIG1lbnVDbGFzczogJz1tZW51Q2xhc3MnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtZW51LXRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWxlbWVudCxhdHRyKSB7XG4gICAgICAgICAgICAgICAgLy9zY29wZS5tZW51SXRlbXMgPSBzY29wZS5tZW51cztcbiAgICAgICAgICAgICAgICBzY29wZS50cmFuc2xhdGVzID0geyAnbGFuZ3VhZ2UnOiB7J2NhJzonaWRpb21lcycsJ2VzJzonaWRpb21hcycsJ2VuJzonbGFuZ3VhZ2VzJywnZnInOidsYW5ndWVzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlcyc6IHsgJ2NhJyA6IHsgJ2NhJzonQ2F0YWzDoCcsICAgICAnZXMnIDogJ0Nhc3RlbGzDoCcgLCAgICAgJ2ZyJyA6ICdGcmFuY8OocycsICAgJ2VuJyA6ICdBbmdsw6hzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiB7ICdjYSc6J0NhdGFsw6FuJywgICAgJ2VzJyA6ICdDYXN0ZWxsYW5vJyAsICAgJ2ZyJyA6ICdGcmFuY8OpcycsICAgJ2VuJyA6ICdJbmdsw6lzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiB7ICdjYSc6J0NhdGFsYW4nLCAgICAnZXMnIDogJ1NwYW5pc2gnICwgICAgICAnZnInIDogJ0ZyZW5jaCcsICAgICdlbicgOiAnRW5nbGlzaCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogeyAnY2EnOidDYXRhbGFuZScsICAgICdlcycgOiAnRXNwYWdub2wnICwgICAnZnInIDogJ0ZyYW7Dp2FpcycsICAgJ2VuJyA6ICdBbmdsYWlzJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzY29wZS5tZW51Q2xhc3MgPSAnbmF2YmFyLXdyYXBwZXInO1xuICAgICAgICAgICAgICAgIHNjb3BlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obGFuZyl7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubWVudXMgPSBNZW51U3ZjLmdldE1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubGFuZ3VhZ2UgPSBsYW5nO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdeLl4uJytsYW5nKyRzdGF0ZS5jdXJyZW50Lm5hbWUuc3Vic3RyKDYpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNjb3BlLiRvbignJHZpZXdDb250ZW50TG9hZGVkJywgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpe1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvU3RhdGUpOyBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmNoYW5nZUl0ZW0gPSBmdW5jdGlvbihtZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbnVJdGVtLmxpbmsgPT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51Q2xhc3MgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVDbGFzcyA9IFwibWVudS10b3BcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuc2VydmljZSgnTWVudVN2YycsIGZ1bmN0aW9uKEdlbmVyYWxTdmMpIHtcbiAgICAgICB2YXIgbWVudSA9IHsgJ3RpcHVzJzonTScsICAgLy9NOiBtYWluXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhJyA6IFt7J2xhYmVsJzonSW5pY2knLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidFbXByZXNhJywnbGluayc6J2VtcHJlc2EnfSx7J2xhYmVsJzonQXBsaWNhY2lvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J0ZhYnJpY2FjacOzJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J1F1YWxpdGF0JywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdGUnLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiBbeydsYWJlbCc6J0luaWNpbycsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J0VtcHJlc2EnLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidBcGxpY2FjaW9uZXMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J0ZhYnJpY2FjacOzbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidDYWxpZGFkJywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdG8nLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeydsYWJlbCc6J0FjY3VlaWwnLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidTb2Npw6l0w6knLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidQYWNrYWdpbmcgcG91cicsJ2xpbmsnOidhcHBsaWNhdGlvbnMnfSx7J2xhYmVsJzonRmFicmljYXRpb24nLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0w6knLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0JywnbGluayc6J2NvbnRhY3QnfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogW3snbGFiZWwnOidIb21lJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonVGhlIENvbXBhbnknLCdsaW5rJzonZW1wcmVzYSd9LHsnbGFiZWwnOidBcHBsaWNhdGlvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30seydsYWJlbCc6J1Byb2R1Y3Rpb24nLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0eScsJ2xpbmsnOidxdWFsaXR5J30seydsYWJlbCc6J0NvbnRhY3QnLCdsaW5rJzonY29udGFjdCd9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnUuY29udGVudFtHZW5lcmFsU3ZjLmdldExhbmcoKV07XG4gICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignTm9ybWFsQ29udHJvbGxlcicsIGZ1bmN0aW9uKCRzY29wZSxDb250ZW50U3ZjLCRzdGF0ZSkge1xuICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcblxuICAgICAgICAkc2NvcGUudmlkZW89ICcxdjNzNnQ2TVRoOCc7XG4gICAgICAgICRzY29wZS52YWx1ZSA9IENvbnRlbnRTdmMuZ2V0VmFsdWUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS50eXBlID0gQ29udGVudFN2Yy5nZXRUeXBlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICRzY29wZS5tYXAgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDUsIGxvbmdpdHVkZTogLTczIH0sIHpvb206IDggfTtcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIsJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMnLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvZXMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYScse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy9jYScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKCdjYScpO1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZyJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2ZyJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4nLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvZW4nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mci5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuZW1wcmVzYScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VtcHJlc2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5hcHBsaWNhdGlvbnMnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuZmFicmljYXRpb24nICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9mYWJyaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4ucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIucXVhbGl0eScgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3F1YWxpdHknLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5jb250YWN0JyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1jb250YWN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycrKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmxhbmd1YWdlKS5zdWJzdHIoMCwyKSsnL2hvbWUnKTtcbiAgICAgICAgLy8kdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4gICAgXG4gICAgLy9NaXJhciBhaXjDsiBwZWwgU0VPIGh0dHA6Ly9mYWRlaXQuZGsvYmxvZy9wb3N0L2FuZ3VsYXItdHJhbnNsYXRlLXVpLXJvdXRlci1zZW9cbiAgICAvL03DqXMgU0VPOiBodHRwOi8vd3d3Lm1pY2hhZWxicm9tbGV5LmNvLnVrL2Jsb2cvMTcxL2VuYWJsZS1yaWNoLXNvY2lhbC1zaGFyaW5nLWluLXlvdXItYW5ndWxhcmpzLWFwcFxuICAgIC8vcExVR0lOIHNlbyBodHRwczovL2dpdGh1Yi5jb20vanZhbmRlbW8vYW5ndWxhci11cGRhdGUtbWV0YVxuICAgIC8vaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1jYXRlZ29yaWVzL2Z1bGwtd2Vic2l0ZXMvIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9