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
        
      $scope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams){
                   if ($state.current.code == 0) {
                       $scope.menuClass = 'menu';
                   } else {
                       $scope.menuClass = 'menu-top';
                   }
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
       $scope.map1 = { center: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, mark: { latitude: 42.03858820702037, longitude: 3.139367401599884 }, zoom: 13 };
       $scope.map2 = { center: { latitude: 41.7719806, longitude: -0.17225277777777775 }, mark: { latitude: 41.7719806, longitude: -0.17225277777777775 }, zoom: 13 };
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
                                                heading:{'principal' : "BCR", 'second': ""},
                                                text : ['La BRC és un sistema de seguretat alimentaria desenvolupat per l’Associació de Minoristes Britànics, British Retail Consortium (BRC) i específic per l’industria agroalimentària reconegut internacionalment.','Enplater ha pres la determinació de complir amb els requeriments per a garantir als seus clients que acompleix amb els objectius dela Norma BRC, entre els que destaca, fixar els nivells d’acompliment respecte a les exigències higièniques i sanitàries. Aquestes exigències s’han acceptat a nivell global com a plec d’obligat acompliment per a poder subministrar producte de marca del distribuïdor, encara que no sempre de forma exclusiva.','L’estàndar BRC considera els principis i les pràctiques més apropiades dirigides a minimitzar els riscos de contaminació dels aliments.','L’acompliment estàndard de la BRC implicar disposar d’un sistema eficaç de seguretat alimentaria, fonamentat així com us sistema de control del producte i del procés, treballant amb personal qualificat i en unes instal•lacions adequades.'],
                                                value   : 'BRC.jpg'
                                            }, {type:'normal',
                                                heading:{'principal' : "Medi Ambient", 'second': ""},
                                                text : ['Totes les fases de producció disposen de controls de qualitat per assegurar la conformitat del producte.','Els controls i anàlisi de productes es realitzen al laboratori d’ambdós centres de producció mitjançant instruments i personal qualificat per obtenir productes amb la màxima qualitat.'],
                                                value   : ''
                                            }
                                        ],
                                    'es' : [{   type:'image',
                                                heading:{'principal' : "BCR", 'second': ""},
                                                text : ['La BRC IoP, es un sistema de seguridad alimentaria desarrollado por la Asociación de Minoristas Británicos, British Retail Consortium (BRC) Institut of Packaging (IoP) y específico para la industria agroalimentaria reconocido a nivel internacional.','Enplater ha decidido cumplir con sus requerimientos para garantizar a sus clientes que cumple con los objetivos de la Norma BRC, entre los que destaca, fijar los niveles de cumplimiento respecto a las exigencias de seguridad alimentarias. Globalmente aceptadas como válidas y tomadas por las grandes superficies como pliego particular de obligado cumplimiento para poder suministrar producto de marca del distribuidor (fundamentalmente aunque no exclusivo).','El estándar BRC considera los principios y prácticas más apropiadas dirigidas a minimizar los riesgos de contaminación de los alimentos.','El cumplimiento del estándar BRC implica disponer de un eficaz sistema de seguridad alimentaria, así como un completo sistema de control del producto y del proceso, trabajando con personal formado y en unas instalaciones adecuadas.','Enplater se cerfico en el año 2006.'],
                                                value   : 'BRC.jpg'
                                            },{   type:'normal',
                                                heading:{'principal' : "Medio ambiente", 'second': ""},
                                                text : ['En Enplater establecemos controles de calidad en todas las fases de producción para asegurar la conformidad del producto y el cumplimiento de los requisitos.','Los controles y análisis de productos se realizan en el laboratorio, ubicado en las instalaciones de ambos centros de producción, mediante instrumentos y personal cualificado para obtener la máxima fiabilidad de los resultados.'],
                                                value   : ''
                                            }
                                        ],
                                    'fr' : [{   type:'image',
                                                heading:{'principal' : "BCR", 'second': ""},
                                                text : ['Enplater établir des contrôles de qualité dans tous les processus de production afin de s’assurer que le produit respecte toutes les exigences de qualité.','Le contrôle et l’analyse des produits sont effectuées dans les locaux de Enplater, utilisant les meilleurs instruments et de personnel qualifié pour obtenir la plus grande fiabilité des résultats.'],
                                                value   : 'BRC.jpg'
                                            },{   type:'image',
                                                heading:{'principal' : "Environnement", 'second': ""},
                                                text : ['IoP est un système de sécurité alimentaire développé par la Brisith Retail Consortium (BRC) et l’Institut of Packaging (IoP), système spécifique par l’industrie agroalimentaire reconnu internationalement.','Enplater a décidé d’exécuter les requis afin de garantir à ses clients que la société accompli les objectifs de la norme BRC, soit l’accomplissement des taux d’émission fixés par rapport aux exigences de sécurité alimentaire, entre d’autres.','Globalement acceptées en tant que normes valides et prises par les grandes sociétés comme pli particulier d’accomplissement obligé pour pouvoir fournir des produits de marque distributeur (quoi que fondamental, pas exclusif).','Le standard BRC prend en compte les principes et les pratiques les plus appropriés qui visent à minimiser les risques de pollution des aliments.','Le respect du standard BRC implique disposer d’un efficace système de sécurité alimentaire, ainsi que d’un système complet de contrôle du produit et du processus, en travaillant avec du personnel formé et dans des installations adéquates.'],
                                                value   : ''
                                            }
                                        ],
                                    'en' : [{   type:'image',
                                                heading:{'principal' : "BCR", 'second': ""},
                                                text : ['BRC IoP, is a food security system developed by the British Retail Consortium (BRC) and the Institute of Packaging (IoP), specific for the food industry and recognized all along the world.','Enplater has decided to accomplish the requirements to guarantee to its customers that follows the BRC rules.','The BRC is accepted globally and it’s used by the biggest supermarket chains, asking it to all the suppliers that want to sell to them.','Enplater was certified on 2006'],
                                                value   : 'BRC.jpg'
                                            },{   type:'image',
                                                heading:{'principal' : "Environment", 'second': ""},
                                                text : ['Enplater establish quality controls in all the production processes to assure the product follows all the quality requirements.','The product control and analysis are done in Enplater premises, using the best qualified instruments and staff to obtain the maximum reliability on the results.'],
                                                value   : ''
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
                language: '=language'
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
                                    'ca' : [{'label':'Inici','link':'home'},{'label':'Empresa','link':'empresa'},/*{'label':'Aplicacions','link':'applications'},*/{'label':'Fabricació','link':'fabrication'},{'label':'Qualitat','link':'quality'},{'label':'Contacte','link':'contact'}],
                                    'es' : [{'label':'Inicio','link':'home'},{'label':'Empresa','link':'empresa'},/*{'label':'Aplicaciones','link':'applications'},*/{'label':'Fabricación','link':'fabrication'},{'label':'Calidad','link':'quality'},{'label':'Contacto','link':'contact'}],
                                    'fr' : [{'label':'Accueil','link':'home'},{'label':'Société','link':'empresa'},/*{'label':'Packaging pour','link':'applications'},*/{'label':'Fabrication','link':'fabrication'},{'label':'Qualité','link':'quality'},{'label':'Contact','link':'contact'}],
                                    'en' : [{'label':'Home','link':'home'},{'label':'The Company','link':'empresa'},/*{'label':'Applications','link':'applications'},*/{'label':'Production','link':'fabrication'},{'label':'Quality','link':'quality'},{'label':'Contact','link':'contact'}]
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
        /*
        $scope.$on('changeLanguage', function() {
            $scope.content = ContentSvc.getContent($state.current.code);
        });*/
          
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcC5jdHJsLmpzIiwiY2Fyb3VzZWwuZHJ0LmpzIiwiY29udGFjdC5jdHJsLmpzIiwiY29udGluZ3V0LnNydi5qcyIsImZvb3Rlci5kcnQuanMiLCJnZW5lcmFsLnNydi5qcyIsImhvbWUuY3RybC5qcyIsIm1lbnUuZHJ0LmpzIiwibWVudS5zcnYuanMiLCJub3JtYWwuY3RybC5qcyIsInN0YXRlLmNmZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicsWyd1aS5yb3V0ZXInLCAneW91dHViZS1lbWJlZCcsICd1aUdtYXBnb29nbGUtbWFwcyddKVxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICAgICAgICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIH0pXG4gICAgLnJ1bihmdW5jdGlvbihHZW5lcmFsU3ZjLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgLypjb25zb2xlLmxvZyhuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyKDAsMikpO1xuICAgICAgICBjb25zb2xlLmxvZygkc3RhdGVQYXJhbXMpOyovXG4gICAgICAgIC8vR2VuZXJhbFN2Yy5zZXRMYW5nKChuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IG5hdmlnYXRvci5sYW5ndWFnZSkuc3Vic3RyKDAsMikpO1xuICAgIH0pXG4gICAgLmNvbmZpZyhcbiAgICBbJ3VpR21hcEdvb2dsZU1hcEFwaVByb3ZpZGVyJywgZnVuY3Rpb24oR29vZ2xlTWFwQXBpUHJvdmlkZXJzKSB7XG4gICAgICAgIEdvb2dsZU1hcEFwaVByb3ZpZGVycy5jb25maWd1cmUoe1xuICAgICAgICAgICAgY2hpbmE6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfV1cbik7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsZnVuY3Rpb24oJHNjb3BlLCRzdGF0ZSxNZW51U3ZjLEdlbmVyYWxTdmMpe1xuICAgICAgICAkc2NvcGUubWVudUl0ZW1zID0gTWVudVN2Yy5nZXRNZW51KEdlbmVyYWxTdmMuZ2V0TGFuZygpKTtcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlID0gR2VuZXJhbFN2Yy5nZXRMYW5nKCk7XG4gICAgICAgICRzY29wZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgICAgICAgIC8vR2VuZXJhbFN2Yy5zZXRMYW5nKGxhbmcpO1xuICAgICAgICAgICAgLy8kc3RhdGUuZ28obGFuZyk7XG4gICAgICAgICAgICAvLyRzY29wZS5tZW51SXRlbXMgPSBNZW51U3ZjLmdldE1lbnUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhbmcpO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUubWVudUl0ZW1zID0gTWVudVN2Yy5nZXRNZW51KEdlbmVyYWxTdmMuZ2V0TGFuZygpKTtcbiAgICAgICAgICAgICRzY29wZS5sYW5ndWFnZSA9IEdlbmVyYWxTdmMuZ2V0TGFuZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAkc2NvcGUuJG9uKCckdmlld0NvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcyl7XG4gICAgICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5jdXJyZW50LmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubWVudUNsYXNzID0gJ21lbnUnO1xuICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5tZW51Q2xhc3MgPSAnbWVudS10b3AnO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAkc2NvcGUuc29jaWFsID0geyAndGV4dCcgICAgOiAnwqkgQ29weXJpZ2h0IC0gRW5wbGF0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaWNvbnMnICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3R5cGUnIDogJ3R3aXR0ZXInICwgICAndXJsJyA6ICdodHRwczovL3R3aXR0ZXIuY29tL2VucGxhdGVyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3R5cGUnIDogJ2ZhY2Vib29rJyAsICAndXJsJyA6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZW5wbGF0ZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsndHlwZScgOiAneW91dHViZScgLCAgICd1cmwnIDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUN2LWR6Tmtfcl80clJ1a3VNcTFIVzF3J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J3R5cGUnIDogJ2dvb2dsZS1wbHVzJywndXJsJyA6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8xMTY1ODkwMTQ1MzIyMDY2ODY4MDMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsndHlwZScgOiAnbGlua2VkaW4nICwgICd1cmwnIDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2VucGxhdGVyLXMtYS0nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgcmVzdHJpY3Q6ICAgICdFJyxcbiAgICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50IDogJz1jb250ZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC10ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsZWxlbWVudCxhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogNDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXN0aWMgYSBsYSBkaXJlY3RpdmEnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAvLyQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IC0yMTAgfSw1MDAsJ3NuYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsJykub24oJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAudScpLnRyYW5zaXRpb24oeyB5OiAtMjEwIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2Fyb3VzZWwgLmFjdGl2ZSAucm93IHAucScpLnRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6ICAnMzYwZGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCcpLm9uKCdzbGlkZS5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXJvdXNlbCAuYWN0aXZlIC5yb3cgcC51JykudHJhbnNpdGlvbih7IHk6IDIxMCB9LDUwMCwnc25hcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNhcm91c2VsIC5hY3RpdmUgLnJvdyBwLnEnKS50cmFuc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiAgJy0zNjBkZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sNTAwLCdzbmFwJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgfVxuICAgICAgIH07XG4gICAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignQ29udGFjdENvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS52YWx1ZSA9IENvbnRlbnRTdmMuZ2V0VmFsdWUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgICRzY29wZS50eXBlID0gQ29udGVudFN2Yy5nZXRUeXBlKCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuICAgICAgICAkc2NvcGUuJG9uKCdjaGFuZ2VMYW5ndWFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICRzY29wZS5tYXAxID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIG1hcms6IHsgbGF0aXR1ZGU6IDQyLjAzODU4ODIwNzAyMDM3LCBsb25naXR1ZGU6IDMuMTM5MzY3NDAxNTk5ODg0IH0sIHpvb206IDEzIH07XG4gICAgICAgJHNjb3BlLm1hcDIgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDEuNzcxOTgwNiwgbG9uZ2l0dWRlOiAtMC4xNzIyNTI3Nzc3Nzc3Nzc3NSB9LCBtYXJrOiB7IGxhdGl0dWRlOiA0MS43NzE5ODA2LCBsb25naXR1ZGU6IC0wLjE3MjI1Mjc3Nzc3Nzc3Nzc1IH0sIHpvb206IDEzIH07XG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5zZXJ2aWNlKCdDb250ZW50U3ZjJywgZnVuY3Rpb24oR2VuZXJhbFN2Yykge1xuICAgICAgICAvL3ZhciBsYW5nPUdlbmVyYWxTdmMuZ2V0TGFuZygpO1xuICAgICAgICB2YXIgY29udGVudCA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwgICAgOiBbe3BpYzogJ2ZvdG8tMS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBjYXRhbGFuJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgY2F0YWxhbid9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgY2F0YWxhbid9fSx7cGljOiAnZm90by0yLmpwZycsY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgY2F0YWxhbid9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBjYXRhbGFuJ319LHtwaWM6ICdmb3RvLTUuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgY2F0YWxhbid9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgY2F0YWxhbid9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBocyAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IHt0eXBlOiAyLCB0ZXh0OiAnSW1wcmVzacOzIGRcXCdlbWJhbGF0Z2VzIGZsZXhpYmxlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzEgICA6ICdpbWcvRW5wbGF0ZXJMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMiAgIDogJ2ltZy9FUEFMb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFeHBlcnRvcyBlbiBwcm95ZWN0b3MgZGUgaW1wcmVzacOzbiBkZSBlbWJhbGFqZSBmbGV4aWJsZSBjb24gdG9kb3MgbG9zIHByb2Nlc29zIGludGVncmFkb3MgZW4gdG9kbyB0aXBvIGRlIHNvcG9ydGVzOiBjb21vIE9QUCwgUEUsIFBFVCwgUEEsIFBhcGVsIHkgQk9QUCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICdpbWcvaG9tZS9wYWNrYWdpbmdjbHVzdGVyLWxvZ28xLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIMOpcyBtZW1icmUgZnVuZGFkb3IgZGVsIENsw7pzdGVyIGRlIFBhY2thZ2luZyAuIEVsIHNldSBwcmluY2lwYWwgb2JqZWN0aXUgw6lzIGNvbXBhcnRpciBjb25laXhlbWVudHMgZW50cmUgZWxzIHNldXMgbWVtYnJlcyBwZXIgYWZyb250YXIgcmVwdGVzIGTigJl1biBtZXJjYXQgY2FkYSB2ZWdhZGEgbcOpcyBleGlnZW50IGkgY29tcGV0aXRpdSAsIGlkZW50aWZpY2FudCBsZXMgdGVuZMOobmNpZXMgaSBuZWNlc3NpdGF0cyBkZWwgbWVyY2F0IHBlciBtaWxsb3JhciBvIHJlYWxpdHphciBub3VzIHByb2R1Y3RlcyBkZSBwYWNrYWdpbmcuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDogJ1Jlc3BvbnNhYmlsaWRhZCBTb2NpYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgY29udHJpYnV5ZSBkZSBmb3JtYSBhY3RpdmEgeSB2b2x1bnRhcmlhIGEgbGEgbWVqb3JhIHNvY2lhbCwgZWNvbsOzbWljYSB5IGFtYmllbnRhbCBjb24gZWwgb2JqZXRpdm8gZGUgbWVqb3JhciBzdSBzaXR1YWNpw7NuIGNvbXBldGl0aXZhIHkgb2ZyZWNlciB2YWxvciBhw7FhZGlkbyBhIHN1cyBjbGllbnRlcywgdHJhYmFqYWRvcmVzIHkgYWNjaW9uaXN0YXMuIExhcyBwcsOhY3RpY2FzLCBlc3RyYXRlZ2lhcyB5IHNpc3RlbWFzIGRlIGdlc3Rpw7NuIGRlIEVucGxhdGVyIHBlcnNpZ3VlbiB1biBlcXVpbGlicmlvIGVudHJlIGxhcyBkaW1lbnNpb25lcyBlY29uw7NtaWNhLCBzb2NpYWwgeSBhbWJpZW50YWwuJywnRW5wbGF0ZXIgZm9ybWEgcGFydGUgZGUgU0VERVgsIFN1cHBsaWVyIEV0aGljYWwgRGF0YSBFeGNoYW5nZSwgdW5hIG9yZ2FuaXphY2nDs24gc2luIMOhbmltbyBkZSBsdWNybyBjdXlvIG9iamV0aXZvIGVzIHBvc2liaWxpdGFyIG1lam9yYXMgZW4gbGFzIHByw6FjdGljYXMgY29tZXJjaWFsZXMgcmVzcG9uc2FibGVzIHkgw6l0aWNhcyBkZSBsYXMgY2FkZW5hcyBkZSBzdW1pbmlzdHJvIGRlIHRvZG8gZWwgbXVuZG8uIFNFREVYIGVzIHVuYSBzb2x1Y2nDs24gZGUgZ2VzdGnDs24gZGUgY2FkZW5hIGRlIHN1bWluaXN0cm8gZWZpY2F6IGUgaW5ub3ZhZG9yYSBxdWUgcGVybWl0ZSBnYXJhbnRpemFyIGxhIHJlcHV0YWNpw7NuIGRlIG51ZXN0cm9zIGNsaWVudGVzIHkgbWVqb3JhciBsYXMgcHLDoWN0aWNhcyBlbXBsZWFkYXMgZW4gbGEgY2FkZW5hIGRlIHN1bWluaXN0cm8sIGF5dWRhbmRvIGEgZGlzbWludWlyIGVsIG7Dum1lcm8gZGUgYXVkaXRvcsOtYXMgeSBjdWVzdGlvbmFyaW9zLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwgOiBbe3BpYzogJ2ZvdG8tMS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBzcGFuaXNoJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgc3BhbmlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgc3BhbmlzaCd9fSx7cGljOiAnZm90by0yLmpwZycsY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgc3BhbmlzaCd9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBzcGFuaXNoJ319LHtwaWM6ICdmb3RvLTUuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgc3BhbmlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgc3BhbmlzaCd9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBocyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDoge3R5cGU6IDIsIHRleHQ6ICdJbXByZXNpw7NuIGRlIGVtYmFsYWplcyBmbGV4aWJsZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28xICAgOiAnaW1nL0VucGxhdGVyTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzIgICA6ICdpbWcvRVBBTG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRXhwZXJ0b3MgZW4gcHJveWVjdG9zIGRlIGltcHJlc2nDs24gZGUgZW1iYWxhamUgZmxleGlibGUgY29uIHRvZG9zIGxvcyBwcm9jZXNvcyBpbnRlZ3JhZG9zIGVuIHRvZG8gdGlwbyBkZSBzb3BvcnRlczogY29tbyBPUFAsIFBFLCBQRVQsIFBBLCBQYXBlbCB5IEJPUFAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnaW1nL2hvbWUvcGFja2FnaW5nY2x1c3Rlci1sb2dvMS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciDDqXMgbWVtYnJlIGZ1bmRhZG9yIGRlbCBDbMO6c3RlciBkZSBQYWNrYWdpbmcgLiBFbCBzZXUgcHJpbmNpcGFsIG9iamVjdGl1IMOpcyBjb21wYXJ0aXIgY29uZWl4ZW1lbnRzIGVudHJlIGVscyBzZXVzIG1lbWJyZXMgcGVyIGFmcm9udGFyIHJlcHRlcyBk4oCZdW4gbWVyY2F0IGNhZGEgdmVnYWRhIG3DqXMgZXhpZ2VudCBpIGNvbXBldGl0aXUgLCBpZGVudGlmaWNhbnQgbGVzIHRlbmTDqG5jaWVzIGkgbmVjZXNzaXRhdHMgZGVsIG1lcmNhdCBwZXIgbWlsbG9yYXIgbyByZWFsaXR6YXIgbm91cyBwcm9kdWN0ZXMgZGUgcGFja2FnaW5nLiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbyAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZyA6ICdSZXNwb25zYWJpbGlkYWQgU29jaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0VucGxhdGVyIGNvbnRyaWJ1eWUgZGUgZm9ybWEgYWN0aXZhIHkgdm9sdW50YXJpYSBhIGxhIG1lam9yYSBzb2NpYWwsIGVjb27Ds21pY2EgeSBhbWJpZW50YWwgY29uIGVsIG9iamV0aXZvIGRlIG1lam9yYXIgc3Ugc2l0dWFjacOzbiBjb21wZXRpdGl2YSB5IG9mcmVjZXIgdmFsb3IgYcOxYWRpZG8gYSBzdXMgY2xpZW50ZXMsIHRyYWJhamFkb3JlcyB5IGFjY2lvbmlzdGFzLiBMYXMgcHLDoWN0aWNhcywgZXN0cmF0ZWdpYXMgeSBzaXN0ZW1hcyBkZSBnZXN0acOzbiBkZSBFbnBsYXRlciBwZXJzaWd1ZW4gdW4gZXF1aWxpYnJpbyBlbnRyZSBsYXMgZGltZW5zaW9uZXMgZWNvbsOzbWljYSwgc29jaWFsIHkgYW1iaWVudGFsLicsJ0VucGxhdGVyIGZvcm1hIHBhcnRlIGRlIFNFREVYLCBTdXBwbGllciBFdGhpY2FsIERhdGEgRXhjaGFuZ2UsIHVuYSBvcmdhbml6YWNpw7NuIHNpbiDDoW5pbW8gZGUgbHVjcm8gY3V5byBvYmpldGl2byBlcyBwb3NpYmlsaXRhciBtZWpvcmFzIGVuIGxhcyBwcsOhY3RpY2FzIGNvbWVyY2lhbGVzIHJlc3BvbnNhYmxlcyB5IMOpdGljYXMgZGUgbGFzIGNhZGVuYXMgZGUgc3VtaW5pc3RybyBkZSB0b2RvIGVsIG11bmRvLiBTRURFWCBlcyB1bmEgc29sdWNpw7NuIGRlIGdlc3Rpw7NuIGRlIGNhZGVuYSBkZSBzdW1pbmlzdHJvIGVmaWNheiBlIGlubm92YWRvcmEgcXVlIHBlcm1pdGUgZ2FyYW50aXphciBsYSByZXB1dGFjacOzbiBkZSBudWVzdHJvcyBjbGllbnRlcyB5IG1lam9yYXIgbGFzIHByw6FjdGljYXMgZW1wbGVhZGFzIGVuIGxhIGNhZGVuYSBkZSBzdW1pbmlzdHJvLCBheXVkYW5kbyBhIGRpc21pbnVpciBlbCBuw7ptZXJvIGRlIGF1ZGl0b3LDrWFzIHkgY3Vlc3Rpb25hcmlvcy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwgOiBbe3BpYzogJ2ZvdG8tMS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBGcmVuY2gnfSxjZW50ZXJUZXh0OntlZmVjdDonJyxjb250ZW50OidDZW50ZXIgdGV4dCBGcmVuY2gnfSxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEZyZW5jaCd9fSx7cGljOiAnZm90by0yLmpwZycsY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRnJlbmNoJ319LHtwaWM6ICdmb3RvLTQuanBnJyxsZWZ0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonTGVmdCB0ZXh0IEZyZW5jaCd9fSx7cGljOiAnZm90by01LmpwZycscmlnaHRUZXh0OntlZmVjdDonJyxjb250ZW50OidSaWdodCB0ZXh0IEZyZW5jaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRnJlbmNoJ319XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGhzIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiB7dHlwZTogMiwgdGV4dDogJ0ltcHJlc3Npb24gZW1iYWxsYWdlIGZsZXhpYmxlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMSAgIDogJ2ltZy9FbnBsYXRlckxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28yICAgOiAnaW1nL0VQQUxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0V4cGVydG9zIGVuIHByb3llY3RvcyBkZSBpbXByZXNpw7NuIGRlIGVtYmFsYWplIGZsZXhpYmxlIGNvbiB0b2RvcyBsb3MgcHJvY2Vzb3MgaW50ZWdyYWRvcyBlbiB0b2RvIHRpcG8gZGUgc29wb3J0ZXM6IGNvbW8gT1BQLCBQRSwgUEVULCBQQSwgUGFwZWwgeSBCT1BQJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJ2ltZy9ob21lL3BhY2thZ2luZ2NsdXN0ZXItbG9nbzEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgw6lzIG1lbWJyZSBmdW5kYWRvciBkZWwgQ2zDunN0ZXIgZGUgUGFja2FnaW5nIC4gRWwgc2V1IHByaW5jaXBhbCBvYmplY3RpdSDDqXMgY29tcGFydGlyIGNvbmVpeGVtZW50cyBlbnRyZSBlbHMgc2V1cyBtZW1icmVzIHBlciBhZnJvbnRhciByZXB0ZXMgZOKAmXVuIG1lcmNhdCBjYWRhIHZlZ2FkYSBtw6lzIGV4aWdlbnQgaSBjb21wZXRpdGl1ICwgaWRlbnRpZmljYW50IGxlcyB0ZW5kw6huY2llcyBpIG5lY2Vzc2l0YXRzIGRlbCBtZXJjYXQgcGVyIG1pbGxvcmFyIG8gcmVhbGl0emFyIG5vdXMgcHJvZHVjdGVzIGRlIHBhY2thZ2luZy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiAnUmVzcG9uc2FiaWxpZGFkIFNvY2lhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciBjb250cmlidXllIGRlIGZvcm1hIGFjdGl2YSB5IHZvbHVudGFyaWEgYSBsYSBtZWpvcmEgc29jaWFsLCBlY29uw7NtaWNhIHkgYW1iaWVudGFsIGNvbiBlbCBvYmpldGl2byBkZSBtZWpvcmFyIHN1IHNpdHVhY2nDs24gY29tcGV0aXRpdmEgeSBvZnJlY2VyIHZhbG9yIGHDsWFkaWRvIGEgc3VzIGNsaWVudGVzLCB0cmFiYWphZG9yZXMgeSBhY2Npb25pc3Rhcy4gTGFzIHByw6FjdGljYXMsIGVzdHJhdGVnaWFzIHkgc2lzdGVtYXMgZGUgZ2VzdGnDs24gZGUgRW5wbGF0ZXIgcGVyc2lndWVuIHVuIGVxdWlsaWJyaW8gZW50cmUgbGFzIGRpbWVuc2lvbmVzIGVjb27Ds21pY2EsIHNvY2lhbCB5IGFtYmllbnRhbC4nLCdFbnBsYXRlciBmb3JtYSBwYXJ0ZSBkZSBTRURFWCwgU3VwcGxpZXIgRXRoaWNhbCBEYXRhIEV4Y2hhbmdlLCB1bmEgb3JnYW5pemFjacOzbiBzaW4gw6FuaW1vIGRlIGx1Y3JvIGN1eW8gb2JqZXRpdm8gZXMgcG9zaWJpbGl0YXIgbWVqb3JhcyBlbiBsYXMgcHLDoWN0aWNhcyBjb21lcmNpYWxlcyByZXNwb25zYWJsZXMgeSDDqXRpY2FzIGRlIGxhcyBjYWRlbmFzIGRlIHN1bWluaXN0cm8gZGUgdG9kbyBlbCBtdW5kby4gU0VERVggZXMgdW5hIHNvbHVjacOzbiBkZSBnZXN0acOzbiBkZSBjYWRlbmEgZGUgc3VtaW5pc3RybyBlZmljYXogZSBpbm5vdmFkb3JhIHF1ZSBwZXJtaXRlIGdhcmFudGl6YXIgbGEgcmVwdXRhY2nDs24gZGUgbnVlc3Ryb3MgY2xpZW50ZXMgeSBtZWpvcmFyIGxhcyBwcsOhY3RpY2FzIGVtcGxlYWRhcyBlbiBsYSBjYWRlbmEgZGUgc3VtaW5pc3RybywgYXl1ZGFuZG8gYSBkaXNtaW51aXIgZWwgbsO6bWVybyBkZSBhdWRpdG9yw61hcyB5IGN1ZXN0aW9uYXJpb3MuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV19LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJzp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwgOiBbe3BpYzogJ2ZvdG8tMS5qcGcnLHJpZ2h0VGV4dDp7ZWZlY3Q6JycsY29udGVudDonUmlnaHQgdGV4dCBFbmdsaXNoJ30sY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRW5nbGlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRW5nbGlzaCd9fSx7cGljOiAnZm90by0yLmpwZycsY2VudGVyVGV4dDp7ZWZlY3Q6JycsY29udGVudDonQ2VudGVyIHRleHQgRW5nbGlzaCd9fSx7cGljOiAnZm90by00LmpwZycsbGVmdFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J0xlZnQgdGV4dCBFbmdsaXNoJ319LHtwaWM6ICdmb3RvLTUuanBnJyxyaWdodFRleHQ6e2VmZWN0OicnLGNvbnRlbnQ6J1JpZ2h0IHRleHQgRW5nbGlzaCd9LGxlZnRUZXh0OntlZmVjdDonJyxjb250ZW50OidMZWZ0IHRleHQgRW5nbGlzaCd9fV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBocyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nIDoge3R5cGU6IDIsIHRleHQ6ICdQcmludGluZyBmbGV4aWJsZSBwYWNrYWdpbmcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvMSAgIDogJ2ltZy9FbnBsYXRlckxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28yICAgOiAnaW1nL0VQQUxvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgOiBbJ0V4cGVydG9zIGVuIHByb3llY3RvcyBkZSBpbXByZXNpw7NuIGRlIGVtYmFsYWplIGZsZXhpYmxlIGNvbiB0b2RvcyBsb3MgcHJvY2Vzb3MgaW50ZWdyYWRvcyBlbiB0b2RvIHRpcG8gZGUgc29wb3J0ZXM6IGNvbW8gT1BQLCBQRSwgUEVULCBQQSwgUGFwZWwgeSBCT1BQJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvICAgIDogJ2ltZy9ob21lL3BhY2thZ2luZ2NsdXN0ZXItbG9nbzEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICA6IFsnRW5wbGF0ZXIgw6lzIG1lbWJyZSBmdW5kYWRvciBkZWwgQ2zDunN0ZXIgZGUgUGFja2FnaW5nIC4gRWwgc2V1IHByaW5jaXBhbCBvYmplY3RpdSDDqXMgY29tcGFydGlyIGNvbmVpeGVtZW50cyBlbnRyZSBlbHMgc2V1cyBtZW1icmVzIHBlciBhZnJvbnRhciByZXB0ZXMgZOKAmXVuIG1lcmNhdCBjYWRhIHZlZ2FkYSBtw6lzIGV4aWdlbnQgaSBjb21wZXRpdGl1ICwgaWRlbnRpZmljYW50IGxlcyB0ZW5kw6huY2llcyBpIG5lY2Vzc2l0YXRzIGRlbCBtZXJjYXQgcGVyIG1pbGxvcmFyIG8gcmVhbGl0emFyIG5vdXMgcHJvZHVjdGVzIGRlIHBhY2thZ2luZy4nXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28gICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgOiAnUmVzcG9uc2FiaWxpZGFkIFNvY2lhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgIDogWydFbnBsYXRlciBjb250cmlidXllIGRlIGZvcm1hIGFjdGl2YSB5IHZvbHVudGFyaWEgYSBsYSBtZWpvcmEgc29jaWFsLCBlY29uw7NtaWNhIHkgYW1iaWVudGFsIGNvbiBlbCBvYmpldGl2byBkZSBtZWpvcmFyIHN1IHNpdHVhY2nDs24gY29tcGV0aXRpdmEgeSBvZnJlY2VyIHZhbG9yIGHDsWFkaWRvIGEgc3VzIGNsaWVudGVzLCB0cmFiYWphZG9yZXMgeSBhY2Npb25pc3Rhcy4gTGFzIHByw6FjdGljYXMsIGVzdHJhdGVnaWFzIHkgc2lzdGVtYXMgZGUgZ2VzdGnDs24gZGUgRW5wbGF0ZXIgcGVyc2lndWVuIHVuIGVxdWlsaWJyaW8gZW50cmUgbGFzIGRpbWVuc2lvbmVzIGVjb27Ds21pY2EsIHNvY2lhbCB5IGFtYmllbnRhbC4nLCdFbnBsYXRlciBmb3JtYSBwYXJ0ZSBkZSBTRURFWCwgU3VwcGxpZXIgRXRoaWNhbCBEYXRhIEV4Y2hhbmdlLCB1bmEgb3JnYW5pemFjacOzbiBzaW4gw6FuaW1vIGRlIGx1Y3JvIGN1eW8gb2JqZXRpdm8gZXMgcG9zaWJpbGl0YXIgbWVqb3JhcyBlbiBsYXMgcHLDoWN0aWNhcyBjb21lcmNpYWxlcyByZXNwb25zYWJsZXMgeSDDqXRpY2FzIGRlIGxhcyBjYWRlbmFzIGRlIHN1bWluaXN0cm8gZGUgdG9kbyBlbCBtdW5kby4gU0VERVggZXMgdW5hIHNvbHVjacOzbiBkZSBnZXN0acOzbiBkZSBjYWRlbmEgZGUgc3VtaW5pc3RybyBlZmljYXogZSBpbm5vdmFkb3JhIHF1ZSBwZXJtaXRlIGdhcmFudGl6YXIgbGEgcmVwdXRhY2nDs24gZGUgbnVlc3Ryb3MgY2xpZW50ZXMgeSBtZWpvcmFyIGxhcyBwcsOhY3RpY2FzIGVtcGxlYWRhcyBlbiBsYSBjYWRlbmEgZGUgc3VtaW5pc3RybywgYXl1ZGFuZG8gYSBkaXNtaW51aXIgZWwgbsO6bWVybyBkZSBhdWRpdG9yw61hcyB5IGN1ZXN0aW9uYXJpb3MuJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgICA6ICctLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYScgOiBbeyAgIHR5cGU6J3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJFbnBsYXRlci5cIiwgJ3NlY29uZCc6IFwiRW52YXNvcyBQbMOgc3RpYyBkZWwgVGVyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRnVuZGFkYSBlbCAxOTYyIGEgVG9ycm9lbGxhIGRlIE1vbnRncsOtIChHaXJvbmEpLCBFbnBsYXRlciBTLkEuIHZhIG7DqWl4ZXIgYWxzIGluaWNpcyBkZSBsYSByZXZvbHVjacOzIGRlbCBwYWNrYWdpbmcgcGVyIGzigJlhbGltZW50YWNpw7MuIERlcyBkZSBsbGF2b3JzLCBsZXMgZXhpZ8OobmNpZXMgZGVsIG1lcmNhdCBpIGxhIHZvbHVudGF0IGRlIHNlcnZlaSBoYW4gc2lndXQgZWwgbW90b3IgcXVlIGVucyBoYSBmZXQgaW5ub3ZhciBpIHByb2dyZXNzYXIgcGVyIGEgZXN0YXIgc2VtcHJlIGVuIGVscyBsbG9jcyBkZSBsaWRlcmF0Z2UgZOKAmXVuIG1lcmNhdCBlbiBjb25zdGFudCBldm9sdWNpw7MuIEFsIGxsYXJnIGRlbHMgNTAgYW55cyBkZSBwcmVzZW5jaWEgZGlucyBkZWwgc2VjdG9yLCBlbnMgY2FyYWN0ZXJpdHplbSBwZXIgbGEgc2VyaWV0YXQgZW4gZWwgc2VydmVpIGkgbGEgcXVhbGl0YXQuRWwgbm9zdHJlIG1lcmNhdCBlcyBjZW50cmEgZW4gdW4gOTUlIGVuIGVsIHNlY3RvciBhbGltZW50YXJpIChwbGF0cyBwcmVwYXJhdHMsIHF1YXJ0YSBnYW1hLCBwcm9kdWN0ZXMgZnJlc2NvcywgYm9zc2VzIGRlIHBhIGRlIG1vdGxsbywgcGV0IGZvb2QsIGNhZsOoLOKApikgTOKAmWV4cG9ydGFjacOzIGEgcGHDr3NvcyBjb20gRnJhbsOnYSwgUGHDr3NvcyBCYWl4b3MsIFBhw69zb3MgTsOycmRpY3MsIFJlZ25lIFVuaXQgaSBQb3J0dWdhbCByZXByZXNlbnRhIHVuYSBwYXJ0IGltcG9ydGFudCBkZSBsYSBmYWN0dXJhY2nDsyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVQQS5cIiwgJ3NlY29uZCc6IFwiRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWdvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnw7NuIChFUEEpIGVzIHZhIGZ1bmRhciBlbCAyMDA4IGFtYiBs4oCZw7psdGltYSB0ZWNub2xvZ2lhIHBlciBlbWJhbGF0Z2UgZmxleGlibGUuJywnVsOgcmVtIGRlY2lkaXIgY29uc3RydWlyIHVuYSBwbGFudGEgZGUgYmFjayB1cCBwZXIgYSBnYXJhbnRpciBlbHMgc3VtaW5pc3RyZSBhbHMgbm9zdHJlcyBjbGllbnRzIGkgZG9uYXIgcmVzcG9zdGEgYSBsYSBkZW1hbmEgZGVsIG1lcmNhdCBldXJvcGV1IGRlbCBwYWNrYWdpbmcuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3NhcmlueWVuYTEucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcycgOiBbeyAgIHR5cGU6J3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHsncHJpbmNpcGFsJyA6IFwiRW5wbGF0ZXIuXCIsICdzZWNvbmQnOiBcIkVudmFzb3MgUGzDoHN0aWMgZGVsIFRlclwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0Z1bmRhZGEgZWwgMTk2MiBlbiBUb3Jyb2VsbGEgZGUgTW9udGdyw60gKEdpcm9uYSksIEVucGxhdGVyIFMuQS4gbmFjacOzIGVuIGxvcyBpbmljaW9zIGRlIGxhIHJldm9sdWNpw7NuIGRlbCBwYWNrYWdpbmcgcGFyYSBsYSBhbGltZW50YWNpw7NuLiBEZXNkZSBlbnRvbmNlcywgbGFzIGV4aWdlbmNpYXMgZGVsIG1lcmNhZG8geSBsYSB2b2x1bnRhZCBkZSBzZXJ2aWNpbyBoYW4gc2lkbyBlbCBtb3RvciBxdWUgbm9zIGhhIGhlY2hvIGlubm92YXIgeSBwcm9ncmVzYXIgcGFyYSBlc3RhciBzaWVtcHJlIGVuIGxvcyBsdWdhcmVzIGRlIGxpZGVyYXpnbyBkZSB1biBtZXJjYWRvIGVuIGNvbnN0YW50ZSBldm9sdWNpw7NuLiBBIGxvIGxhcmdvIGRlIGxvcyA1MCBhw7FvcyBkZSBwcmVzZW5jaWEgZW4gZWwgc2VjdG9yLCBub3MgY2FyYWN0ZXJpemFtb3MgcG9yIGxhIHNlcmllZGFkIGVuIHNlcnZpY2lvIHkgbGEgY2FsaWRhZC5OdWVzdHJvIG1lcmNhZG8gc2UgY2VudHJhIGVuIHVuIDk1JSBlbiBlbCBzZWN0b3IgYWxpbWVudGFyaW8gKHBsYXRvcyBwcmVwYXJhZG9zLCBjdWFydGEgZ2FtYSwgcHJvZHVjdG9zIGZyZXNjb3MsIGJvbHNhcyBkZSBwYW4gZGUgbW9sZGUsIHBldCBmb29kLCBjYWbDqSwgZXRjLikuQWN0dWFsbWVudGUgZXN0YW1vcyBwcmVzZW50ZXMgZW4gdG9kYSBFdXJvcGEgeSBlbCBub3J0ZSBkZSDDgWZyaWNhLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcxdjNzNnQ2TVRoOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVQQS5cIiwgJ3NlY29uZCc6IFwiRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWdvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnw7NuIChFUEEpIGZ1ZSBmdW5kYWRhIGVuIGVsIGHDsW8gMjAwOCBjb24gbGEgw7psdGltYSB0ZWNub2xvZ8OtYSBwYXJhIGxhIGltcHJlc2nDs24gZGUgZW1iYWxhamUgZmxleGlibGUnLCdTdSBjb25zdHJ1Y2Npw7NuIHJlc3BvbmRlIGFsIGF1bWVudG8gZGUgbGEgZGVtYW5kYSBkZWwgbWVyY2FkbyBkZWwgcGFja2FnaW5nIGVuIHRvZGEgRXVyb3BhIHkgbGEgbmVjZXNpZGFkIGRlIGRpc3BvbmVyIGRlIHVuYSBwbGFudGEgZGUgYmFja3VwIHBhcmEgZ2FyYW50aXphciBlbCBzdW1pbmlzdHJvIGEgbnVlc3Ryb3MgY2xpZW50ZXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3NhcmlueWVuYTEucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeyAgIHR5cGU6J3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHsncHJpbmNpcGFsJyA6IFwiRW5wbGF0ZXIuXCIsICdzZWNvbmQnOiBcIkVudmFzb3MgUGzDoHN0aWMgZGVsIFRlclwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0ZvbmTDqWUgZW4gMTk2MiDDoCBUb3Jyb2VsbGEgZGUgTW9udGdyw60gKEdpcm9uYSksIEVucGxhdGVyIFMuQS4gYSBzZXMgb3JpZ2luZXMgZGFucyBsZXMgZMOpYnV0cyBkZSBsYSByw6l2b2x1dGlvbiBkdSBwYWNrYWdpbmcgZGFucyBsZSBzZWN0ZXVyIGFsaW1lbnRhaXJlLiBEw6hzIGxvcnMsIGxlcyBleGlnZW5jZXMgZHUgbWFyY2jDqSBldCBsYSB2b2xvbnTDqSBkdSBzZXJ2aWNlIG9udCDDqXTDqSBsZXMgbW90ZXVycyBxdWkgbm91cyBvbnQgY29uZHVpdHMgdmVycyBs4oCZaW5ub3ZhdGlvbiBldCBsZSBwcm9ncsOocywgYWZpbiBkZSBub3VzIG1haW50ZW5pciB0b3Vqb3VycyBkYW5zIGxlIHBvZGl1bSBkdSBsZWFkZXJzaGlwIGTigJl1biBtYXJjaMOpIGVuIMOpdm9sdXRpb24gY29uc3RhbnRlLiBBdSBsb25nIGRlcyA1MCBhbm7DqWVzIGRlIHByw6lzZW5jZSBkYW5zIGxlIHNlY3RldXIsIG5vdXMgc29tbWVzIGNvbm51ZXMgcGFyIG5vcyBzZXJ2aWNlcyBldCBxdWFsaXTDqS5Ob3RyZSBtYXJjaMOpIHNlIGNvbnNhY3JlIGVuIHVuIDk1JSBhdSBzZWN0ZXVyIGFsaW1lbnRhaXJlIChwcsOqdC3DoC1tYW5nZXIsIHNhbGFkZXMsIHBhaW4gZGUgbWllLCBwZXQgZm9vZCwgY2Fmw6ksIGV0Yy4pLiBM4oCZZXhwb3J0YXRpb24gdmVycyBsYSBGcmFuY2UsIGxlcyBQYXlzLUJhcywgbGVzIFBheXMgTm9yZGlxdWVzLCBsZSBSb3lhdW1lIFVuaSBldCBsZSBQb3J0dWdhbCByZXByw6lzZW50ZW50IHVuZSBpbXBvcnRhbnRlIHBhcnRpZSBkZSBub3MgcmV2ZW51cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnMXYzczZ0Nk1UaDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0seyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJFUEEuXCIsICdzZWNvbmQnOiBcIkVudmFzZXMgUGzDoXN0aWNvcyBkZSBBcmFnb25cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ8OzbiAoRVBBKSBmdXQgZm9uZMOpZSBlbiAyMDA4LiBFbGxlIGVzdCDDqXF1aXDDqWUgYXZlYyB1bmUgdGVjaG5vbG9naWUgcG9pbnRlIGRhbnMgbGUgZG9tYWluZSBk4oCZaW1wcmVzc2lvbiBk4oCZZW1iYWxsYWdlIGZsZXhpYmxlLicsJ1NhIGNvbnN0cnVjdGlvbiBlc3QgbGEgcsOpcG9uc2Ugw6AgbOKAmWF1Z21lbnRhdGlvbiBkZSBsYSBkZW1hbmRlIGRhbnMgbGUgZG9tYWluZSBkdSBwYWNrYWdpbmcgZGFucyB0b3V0ZSBs4oCZRXVyb3BlIGV0IGxlIGJlc29pbiBkZSBkaXNwb3NlciBk4oCZdW5lIGluc3RhbGxhdGlvbiBkZSBiYWNrdXAgYWZpbiBkZSBnYXJhbnRpciBs4oCZYXBwcm92aXNpb25uZW1lbnQgZGUgbm9zIGNsaWVudHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3NhcmlueWVuYTEucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiBbeyAgIHR5cGU6J3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHsncHJpbmNpcGFsJyA6IFwiRW5wbGF0ZXIuXCIsICdzZWNvbmQnOiBcIkVudmFzb3MgUGzDoHN0aWMgZGVsIFRlclwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VucGxhdGVyIHdhcyBmb3VuZGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGZvb2QgcGFja2FnaW5nIHJldm9sdXRpb24gaW4gMTk2MiBhbmQgaXTigJlzIGxvY2F0ZWQgaW4gVG9ycm9lbGxhIGRlIE1vbnRncmkgYW5kIFNhcmnDsWVuYSAoU3BhaW4pLiBTaW5jZSB0aGVuLCB3ZSBoYXZlIGJlZW4gZ3Jvd2luZywgaW5ub3ZhdGluZyBhbmQgcHJvZ3Jlc3Npbmcgd2l0aCBvdXIgY3VzdG9tZXJzLldlIGV4cG9ydCB0byBjb3VudHJpZXMgbGlrZSBGcmFuY2UsIFVuaXRlZCBLaW5nZG9tLCBUaGUgTmV0aGVybGFuZHMsIEZpbmxhbmQsIFN3ZWRlbiwgRGVubWFyayBhbmQgUG9ydHVnYWwuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJzF2M3M2dDZNVGg4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHsgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiRVBBLlwiLCAnc2Vjb25kJzogXCJFbnZhc2VzIFBsw6FzdGljb3MgZGUgQXJhZ29uXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW52YXNlcyBQbMOhc3RpY29zIGRlIEFyYWfDs24gKEVQQSkgd2FzIGZvdW5kZWQgaW4gMjAwOCB3aXRoIHRoZSB1cC10by10aGUtbWludXRlIHByaW50aW5nIHRlY2hub2xvZ3kgZm9yIGZsZXhpYmxlIHBhY2thZ2luZy4nLCdXZSBkZWNpZGVkIHRvIGJ1aWxkIGl0IHRvIG9mZmVyIGEgYmFja3VwIHBsYW50IHRvIG91ciBjdXN0b21lcnMgYW5kIGluY3JlYXNlIG91ciBwcm9kdWN0aW9uIGNhcGFjaXR5LiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzYXJpbnllbmExLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiAyLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnIDogJy0tLS0nLCBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6ICB7ICAgICdjYScgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnQSBFbnBsYXRlciBmYWJyaXF1ZW0gZW1iYWxhdGdlcyBmbGV4aWJsZXMgcGVscyBzZXVzIHByb2R1Y3RlcyBzZWdvbnMgbGVzIGNhcmFjdGVyw61zdGlxdWVzIGkgcmVxdWlzaXRzLCBhc3NlZ3VyYW50IGxhIGltYXRnZSwgcHJvdGVjY2nDsyBpIG1hcXVpbmFiaWxpdGF0LiBQb3NlbSBhbCBzZXUgYWJhc3QgZWwgc3Vwb3J0IGRlbHMgbm9zdHJlcyBlc3BlY2lhbGlzdGVzIGkgZWwgcHJvZHVjdGVzIG3DqXMgaW5ub3ZhZG9ycyBkZWwgbWVyY2F0IHBlciBhIHF1ZSBlcyB0cm9iaSBsYSBtaWxsb3Igc29sdWNpw7MgYSBsZXMgc2V2ZXMgbmVjZXNzaXRhdHMuJywgJ0xhIGRpc3BvbmliaWxpdGF0IGTigJl1bmEgYW1wbGlhIGdhbWEgZGUgbWF0ZXJpYWxzIGTigJnDumx0aW1hIHRlY25vbG9naWEgaSBsYSBpbmZpbml0YXQgZGUgY29tYmluYWNpb25zIHBvc3NpYmxlcywgYW1iIGxhIGdhcmFudGlhIGTigJl1bmEgaW1wcmVzc2nDsyBkZSBxdWFsaXRhdCBzb2JyZSBxdWFsc2V2b2wgc3VwZXJmw61jaWUsIGFzc2VndXJhIHVuIGFsdCB2YWxvciBhZmVnaXQgcGVscyBub3N0cmVzIGNsaWVudHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VuIEVucGxhdGVyIG9mcmVjZW1vcyBlbWJhbGFqZXMgZmxleGlibGUgcGFyYSBzdXMgcHJvZHVjdG9zIHNlZ8O6biBzdXMgY2FyYWN0ZXLDrXN0aWNhcyB5IHJlcXVpc2l0b3MsIGFzZWd1cmFuZG8gc3UgaW1hZ2VuLCBwcm90ZWNjacOzbiB5IG1hcXVpbmFiaWxpZGFkLicsJ0Egc3UgdmV6LCBwb25lbW9zIGEgc3UgYWxjYW5jZSwgZWwgc29wb3J0ZSBkZSBzdXMgZXNwZWNpYWxpc3RhcyB5IGxvcyBwcm9kdWN0b3MgbcOhcyBpbm5vdmFkb3JlcyBkZWwgbWVyY2FkbyBwYXJhIHF1ZSBlbmN1ZW50cmUgbGEgc29sdWNpw7NuIG3DoXMgYWRlY3VhZGEgYSBzdXMgbmVjZXNpZGFkZXMuJywnTGEgZGlzcG9uaWJpbGlkYWQgZGUgdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFsZXMgZGUgw7psdGltYSB0ZWNub2xvZ8OtYSB5IGxhIGluZmluaWRhZCBkZSBjb21iaW5hY2lvbmVzIHBvc2libGVzLCBqdW50byBhIGxhIGdhcmFudMOtYSBkZSB1bmEgaW1wcmVzacOzbiBkZSBjYWxpZGFkIHNvYnJlIGN1YWxxdWllciBzdXBlcmZpY2llLCBhc2VndXJhIHVuIGFsdG8gdmFsb3IgYcOxYWRpZG8gcGFyYSBudWVzdHJvcyBjbGllbnRlcy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnQ2hleiBFbnBsYXRlciBub3VzIHZvdXMgcHJvcG9zb25zIGRlcyBlbWJhbGxhZ2VzIGZsZXhpYmxlcyBlbiBmb25jdGlvbiBkZXMgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgcmVxdWlzIGRlIHZvdHJlIHByb2R1aXQsIGVuIGFzc3VyYW50IHVuZSBib25uZSBpbWFnZSwgcHJvdGVjdGlvbiBldCBtYWNoaW5hYmlsaXTDqWUuJywnRGUgcGx1cywgbm91cyB2b3VzIHByb3Bvc29ucyBsZSBzb3V0aWVuIGRlIHNlcyBzcMOpY2lhbGlzdGVzIGFpbnNpIHF1ZSBsZXMgcHJvZHVpdHMgbGVzIHBsdXMgaW5ub3ZhdGV1cnMgZHUgbWFyY2jDqSBwb3VyIHF1ZSB2b3VzIHB1aXNzaWV6IHRyb3V2ZXogbGEgc29sdXRpb24gbGEgcGx1cyBzYXRpc2ZhaXNhbnRlIHBvdXIgdm9zIGJlc29pbnMuJywnTGEgZGlzcG9uaWJpbGl0w6kgZOKAmXVuIHZhc3RlIMOpY2hhbnRpbGxvbiBkZSBtYXTDqXJpYXV4IGRlIHRlY2hub2xvZ2llIGRlIHBvaW50ZSBldCBkZSBs4oCZaW5maW5pdMOpIGRlIGNvbWJpbmFpc29ucyBwb3NzaWJsZXMsIHRvdXQgZW4gYWpvdXRhbnQgbGEgZ2FyYW50aWUgZOKAmXVuZSBpbXByZXNzaW9uIGRlIHF1YWxpdMOpIHN1ciBxdWVsY29ucXVlIHN1cGVyZmljaWUsIGFzc3VyZSB1bmUgaGF1dGUgdmFsZXVyIGFqb3V0w6llIHBvdXIgbm9zIGNsaWVudHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW4nIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VuZ2xpc2ggdGV4dCcsJ0VuZ2xpc2ggdGV4dCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfSx7IFxuICAgICAgICAgICAgICAgICAgICBjb2RlICAgIDogMyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0EgRW5wbGF0ZXIgZmFicmlxdWVtIGVtYmFsYXRnZXMgZmxleGlibGVzIHBlbHMgc2V1cyBwcm9kdWN0ZXMgc2Vnb25zIGxlcyBjYXJhY3RlcsOtc3RpcXVlcyBpIHJlcXVpc2l0cywgYXNzZWd1cmFudCBsYSBpbWF0Z2UsIHByb3RlY2Npw7MgaSBtYXF1aW5hYmlsaXRhdC4gUG9zZW0gYWwgc2V1IGFiYXN0IGVsIHN1cG9ydCBkZWxzIG5vc3RyZXMgZXNwZWNpYWxpc3RlcyBpIGVsIHByb2R1Y3RlcyBtw6lzIGlubm92YWRvcnMgZGVsIG1lcmNhdCBwZXIgYSBxdWUgZXMgdHJvYmkgbGEgbWlsbG9yIHNvbHVjacOzIGEgbGVzIHNldmVzIG5lY2Vzc2l0YXRzLicsICdMYSBkaXNwb25pYmlsaXRhdCBk4oCZdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFscyBk4oCZw7psdGltYSB0ZWNub2xvZ2lhIGkgbGEgaW5maW5pdGF0IGRlIGNvbWJpbmFjaW9ucyBwb3NzaWJsZXMsIGFtYiBsYSBnYXJhbnRpYSBk4oCZdW5hIGltcHJlc3Npw7MgZGUgcXVhbGl0YXQgc29icmUgcXVhbHNldm9sIHN1cGVyZsOtY2llLCBhc3NlZ3VyYSB1biBhbHQgdmFsb3IgYWZlZ2l0IHBlbHMgbm9zdHJlcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbiBFbnBsYXRlciBvZnJlY2Vtb3MgZW1iYWxhamVzIGZsZXhpYmxlIHBhcmEgc3VzIHByb2R1Y3RvcyBzZWfDum4gc3VzIGNhcmFjdGVyw61zdGljYXMgeSByZXF1aXNpdG9zLCBhc2VndXJhbmRvIHN1IGltYWdlbiwgcHJvdGVjY2nDs24geSBtYXF1aW5hYmlsaWRhZC4nLCdBIHN1IHZleiwgcG9uZW1vcyBhIHN1IGFsY2FuY2UsIGVsIHNvcG9ydGUgZGUgc3VzIGVzcGVjaWFsaXN0YXMgeSBsb3MgcHJvZHVjdG9zIG3DoXMgaW5ub3ZhZG9yZXMgZGVsIG1lcmNhZG8gcGFyYSBxdWUgZW5jdWVudHJlIGxhIHNvbHVjacOzbiBtw6FzIGFkZWN1YWRhIGEgc3VzIG5lY2VzaWRhZGVzLicsJ0xhIGRpc3BvbmliaWxpZGFkIGRlIHVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbGVzIGRlIMO6bHRpbWEgdGVjbm9sb2fDrWEgeSBsYSBpbmZpbmlkYWQgZGUgY29tYmluYWNpb25lcyBwb3NpYmxlcywganVudG8gYSBsYSBnYXJhbnTDrWEgZGUgdW5hIGltcHJlc2nDs24gZGUgY2FsaWRhZCBzb2JyZSBjdWFscXVpZXIgc3VwZXJmaWNpZSwgYXNlZ3VyYSB1biBhbHRvIHZhbG9yIGHDsWFkaWRvIHBhcmEgbnVlc3Ryb3MgY2xpZW50ZXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0NoZXogRW5wbGF0ZXIgbm91cyB2b3VzIHByb3Bvc29ucyBkZXMgZW1iYWxsYWdlcyBmbGV4aWJsZXMgZW4gZm9uY3Rpb24gZGVzIGNhcmFjdMOpcmlzdGlxdWVzIGV0IHJlcXVpcyBkZSB2b3RyZSBwcm9kdWl0LCBlbiBhc3N1cmFudCB1bmUgYm9ubmUgaW1hZ2UsIHByb3RlY3Rpb24gZXQgbWFjaGluYWJpbGl0w6llLicsJ0RlIHBsdXMsIG5vdXMgdm91cyBwcm9wb3NvbnMgbGUgc291dGllbiBkZSBzZXMgc3DDqWNpYWxpc3RlcyBhaW5zaSBxdWUgbGVzIHByb2R1aXRzIGxlcyBwbHVzIGlubm92YXRldXJzIGR1IG1hcmNow6kgcG91ciBxdWUgdm91cyBwdWlzc2lleiB0cm91dmV6IGxhIHNvbHV0aW9uIGxhIHBsdXMgc2F0aXNmYWlzYW50ZSBwb3VyIHZvcyBiZXNvaW5zLicsJ0xhIGRpc3BvbmliaWxpdMOpIGTigJl1biB2YXN0ZSDDqWNoYW50aWxsb24gZGUgbWF0w6lyaWF1eCBkZSB0ZWNobm9sb2dpZSBkZSBwb2ludGUgZXQgZGUgbOKAmWluZmluaXTDqSBkZSBjb21iaW5haXNvbnMgcG9zc2libGVzLCB0b3V0IGVuIGFqb3V0YW50IGxhIGdhcmFudGllIGTigJl1bmUgaW1wcmVzc2lvbiBkZSBxdWFsaXTDqSBzdXIgcXVlbGNvbnF1ZSBzdXBlcmZpY2llLCBhc3N1cmUgdW5lIGhhdXRlIHZhbGV1ciBham91dMOpZSBwb3VyIG5vcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbmdsaXNoIHRleHQnLCdFbmdsaXNoIHRleHQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0seyBcbiAgICAgICAgICAgICAgICAgICAgY29kZSAgICA6IDQsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcycgOiAnLS0tLScsIFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogIHsgICAgJ2NhJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkJDUlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydMYSBCUkMgw6lzIHVuIHNpc3RlbWEgZGUgc2VndXJldGF0IGFsaW1lbnRhcmlhIGRlc2Vudm9sdXBhdCBwZXIgbOKAmUFzc29jaWFjacOzIGRlIE1pbm9yaXN0ZXMgQnJpdMOgbmljcywgQnJpdGlzaCBSZXRhaWwgQ29uc29ydGl1bSAoQlJDKSBpIGVzcGVjw61maWMgcGVyIGzigJlpbmR1c3RyaWEgYWdyb2FsaW1lbnTDoHJpYSByZWNvbmVndXQgaW50ZXJuYWNpb25hbG1lbnQuJywnRW5wbGF0ZXIgaGEgcHJlcyBsYSBkZXRlcm1pbmFjacOzIGRlIGNvbXBsaXIgYW1iIGVscyByZXF1ZXJpbWVudHMgcGVyIGEgZ2FyYW50aXIgYWxzIHNldXMgY2xpZW50cyBxdWUgYWNvbXBsZWl4IGFtYiBlbHMgb2JqZWN0aXVzIGRlbGEgTm9ybWEgQlJDLCBlbnRyZSBlbHMgcXVlIGRlc3RhY2EsIGZpeGFyIGVscyBuaXZlbGxzIGTigJlhY29tcGxpbWVudCByZXNwZWN0ZSBhIGxlcyBleGlnw6huY2llcyBoaWdpw6huaXF1ZXMgaSBzYW5pdMOgcmllcy4gQXF1ZXN0ZXMgZXhpZ8OobmNpZXMgc+KAmWhhbiBhY2NlcHRhdCBhIG5pdmVsbCBnbG9iYWwgY29tIGEgcGxlYyBk4oCZb2JsaWdhdCBhY29tcGxpbWVudCBwZXIgYSBwb2RlciBzdWJtaW5pc3RyYXIgcHJvZHVjdGUgZGUgbWFyY2EgZGVsIGRpc3RyaWJ1w69kb3IsIGVuY2FyYSBxdWUgbm8gc2VtcHJlIGRlIGZvcm1hIGV4Y2x1c2l2YS4nLCdM4oCZZXN0w6BuZGFyIEJSQyBjb25zaWRlcmEgZWxzIHByaW5jaXBpcyBpIGxlcyBwcsOgY3RpcXVlcyBtw6lzIGFwcm9waWFkZXMgZGlyaWdpZGVzIGEgbWluaW1pdHphciBlbHMgcmlzY29zIGRlIGNvbnRhbWluYWNpw7MgZGVscyBhbGltZW50cy4nLCdM4oCZYWNvbXBsaW1lbnQgZXN0w6BuZGFyZCBkZSBsYSBCUkMgaW1wbGljYXIgZGlzcG9zYXIgZOKAmXVuIHNpc3RlbWEgZWZpY2HDpyBkZSBzZWd1cmV0YXQgYWxpbWVudGFyaWEsIGZvbmFtZW50YXQgYWl4w60gY29tIHVzIHNpc3RlbWEgZGUgY29udHJvbCBkZWwgcHJvZHVjdGUgaSBkZWwgcHJvY8OpcywgdHJlYmFsbGFudCBhbWIgcGVyc29uYWwgcXVhbGlmaWNhdCBpIGVuIHVuZXMgaW5zdGFs4oCibGFjaW9ucyBhZGVxdWFkZXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ0JSQy5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt0eXBlOidub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIk1lZGkgQW1iaWVudFwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydUb3RlcyBsZXMgZmFzZXMgZGUgcHJvZHVjY2nDsyBkaXNwb3NlbiBkZSBjb250cm9scyBkZSBxdWFsaXRhdCBwZXIgYXNzZWd1cmFyIGxhIGNvbmZvcm1pdGF0IGRlbCBwcm9kdWN0ZS4nLCdFbHMgY29udHJvbHMgaSBhbsOgbGlzaSBkZSBwcm9kdWN0ZXMgZXMgcmVhbGl0emVuIGFsIGxhYm9yYXRvcmkgZOKAmWFtYmTDs3MgY2VudHJlcyBkZSBwcm9kdWNjacOzIG1pdGphbsOnYW50IGluc3RydW1lbnRzIGkgcGVyc29uYWwgcXVhbGlmaWNhdCBwZXIgb2J0ZW5pciBwcm9kdWN0ZXMgYW1iIGxhIG3DoHhpbWEgcXVhbGl0YXQuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXMnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiQkNSXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0xhIEJSQyBJb1AsIGVzIHVuIHNpc3RlbWEgZGUgc2VndXJpZGFkIGFsaW1lbnRhcmlhIGRlc2Fycm9sbGFkbyBwb3IgbGEgQXNvY2lhY2nDs24gZGUgTWlub3Jpc3RhcyBCcml0w6FuaWNvcywgQnJpdGlzaCBSZXRhaWwgQ29uc29ydGl1bSAoQlJDKSBJbnN0aXR1dCBvZiBQYWNrYWdpbmcgKElvUCkgeSBlc3BlY8OtZmljbyBwYXJhIGxhIGluZHVzdHJpYSBhZ3JvYWxpbWVudGFyaWEgcmVjb25vY2lkbyBhIG5pdmVsIGludGVybmFjaW9uYWwuJywnRW5wbGF0ZXIgaGEgZGVjaWRpZG8gY3VtcGxpciBjb24gc3VzIHJlcXVlcmltaWVudG9zIHBhcmEgZ2FyYW50aXphciBhIHN1cyBjbGllbnRlcyBxdWUgY3VtcGxlIGNvbiBsb3Mgb2JqZXRpdm9zIGRlIGxhIE5vcm1hIEJSQywgZW50cmUgbG9zIHF1ZSBkZXN0YWNhLCBmaWphciBsb3Mgbml2ZWxlcyBkZSBjdW1wbGltaWVudG8gcmVzcGVjdG8gYSBsYXMgZXhpZ2VuY2lhcyBkZSBzZWd1cmlkYWQgYWxpbWVudGFyaWFzLiBHbG9iYWxtZW50ZSBhY2VwdGFkYXMgY29tbyB2w6FsaWRhcyB5IHRvbWFkYXMgcG9yIGxhcyBncmFuZGVzIHN1cGVyZmljaWVzIGNvbW8gcGxpZWdvIHBhcnRpY3VsYXIgZGUgb2JsaWdhZG8gY3VtcGxpbWllbnRvIHBhcmEgcG9kZXIgc3VtaW5pc3RyYXIgcHJvZHVjdG8gZGUgbWFyY2EgZGVsIGRpc3RyaWJ1aWRvciAoZnVuZGFtZW50YWxtZW50ZSBhdW5xdWUgbm8gZXhjbHVzaXZvKS4nLCdFbCBlc3TDoW5kYXIgQlJDIGNvbnNpZGVyYSBsb3MgcHJpbmNpcGlvcyB5IHByw6FjdGljYXMgbcOhcyBhcHJvcGlhZGFzIGRpcmlnaWRhcyBhIG1pbmltaXphciBsb3Mgcmllc2dvcyBkZSBjb250YW1pbmFjacOzbiBkZSBsb3MgYWxpbWVudG9zLicsJ0VsIGN1bXBsaW1pZW50byBkZWwgZXN0w6FuZGFyIEJSQyBpbXBsaWNhIGRpc3BvbmVyIGRlIHVuIGVmaWNheiBzaXN0ZW1hIGRlIHNlZ3VyaWRhZCBhbGltZW50YXJpYSwgYXPDrSBjb21vIHVuIGNvbXBsZXRvIHNpc3RlbWEgZGUgY29udHJvbCBkZWwgcHJvZHVjdG8geSBkZWwgcHJvY2VzbywgdHJhYmFqYW5kbyBjb24gcGVyc29uYWwgZm9ybWFkbyB5IGVuIHVuYXMgaW5zdGFsYWNpb25lcyBhZGVjdWFkYXMuJywnRW5wbGF0ZXIgc2UgY2VyZmljbyBlbiBlbCBhw7FvIDIwMDYuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ0JSQy5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0seyAgIHR5cGU6J25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiTWVkaW8gYW1iaWVudGVcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnRW4gRW5wbGF0ZXIgZXN0YWJsZWNlbW9zIGNvbnRyb2xlcyBkZSBjYWxpZGFkIGVuIHRvZGFzIGxhcyBmYXNlcyBkZSBwcm9kdWNjacOzbiBwYXJhIGFzZWd1cmFyIGxhIGNvbmZvcm1pZGFkIGRlbCBwcm9kdWN0byB5IGVsIGN1bXBsaW1pZW50byBkZSBsb3MgcmVxdWlzaXRvcy4nLCdMb3MgY29udHJvbGVzIHkgYW7DoWxpc2lzIGRlIHByb2R1Y3RvcyBzZSByZWFsaXphbiBlbiBlbCBsYWJvcmF0b3JpbywgdWJpY2FkbyBlbiBsYXMgaW5zdGFsYWNpb25lcyBkZSBhbWJvcyBjZW50cm9zIGRlIHByb2R1Y2Npw7NuLCBtZWRpYW50ZSBpbnN0cnVtZW50b3MgeSBwZXJzb25hbCBjdWFsaWZpY2FkbyBwYXJhIG9idGVuZXIgbGEgbcOheGltYSBmaWFiaWxpZGFkIGRlIGxvcyByZXN1bHRhZG9zLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkJDUlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbnBsYXRlciDDqXRhYmxpciBkZXMgY29udHLDtGxlcyBkZSBxdWFsaXTDqSBkYW5zIHRvdXMgbGVzIHByb2Nlc3N1cyBkZSBwcm9kdWN0aW9uIGFmaW4gZGUgc+KAmWFzc3VyZXIgcXVlIGxlIHByb2R1aXQgcmVzcGVjdGUgdG91dGVzIGxlcyBleGlnZW5jZXMgZGUgcXVhbGl0w6kuJywnTGUgY29udHLDtGxlIGV0IGzigJlhbmFseXNlIGRlcyBwcm9kdWl0cyBzb250IGVmZmVjdHXDqWVzIGRhbnMgbGVzIGxvY2F1eCBkZSBFbnBsYXRlciwgdXRpbGlzYW50IGxlcyBtZWlsbGV1cnMgaW5zdHJ1bWVudHMgZXQgZGUgcGVyc29ubmVsIHF1YWxpZmnDqSBwb3VyIG9idGVuaXIgbGEgcGx1cyBncmFuZGUgZmlhYmlsaXTDqSBkZXMgcsOpc3VsdGF0cy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnQlJDLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVudmlyb25uZW1lbnRcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnSW9QIGVzdCB1biBzeXN0w6htZSBkZSBzw6ljdXJpdMOpIGFsaW1lbnRhaXJlIGTDqXZlbG9wcMOpIHBhciBsYSBCcmlzaXRoIFJldGFpbCBDb25zb3J0aXVtIChCUkMpIGV0IGzigJlJbnN0aXR1dCBvZiBQYWNrYWdpbmcgKElvUCksIHN5c3TDqG1lIHNww6ljaWZpcXVlIHBhciBs4oCZaW5kdXN0cmllIGFncm9hbGltZW50YWlyZSByZWNvbm51IGludGVybmF0aW9uYWxlbWVudC4nLCdFbnBsYXRlciBhIGTDqWNpZMOpIGTigJlleMOpY3V0ZXIgbGVzIHJlcXVpcyBhZmluIGRlIGdhcmFudGlyIMOgIHNlcyBjbGllbnRzIHF1ZSBsYSBzb2Npw6l0w6kgYWNjb21wbGkgbGVzIG9iamVjdGlmcyBkZSBsYSBub3JtZSBCUkMsIHNvaXQgbOKAmWFjY29tcGxpc3NlbWVudCBkZXMgdGF1eCBk4oCZw6ltaXNzaW9uIGZpeMOpcyBwYXIgcmFwcG9ydCBhdXggZXhpZ2VuY2VzIGRlIHPDqWN1cml0w6kgYWxpbWVudGFpcmUsIGVudHJlIGTigJlhdXRyZXMuJywnR2xvYmFsZW1lbnQgYWNjZXB0w6llcyBlbiB0YW50IHF1ZSBub3JtZXMgdmFsaWRlcyBldCBwcmlzZXMgcGFyIGxlcyBncmFuZGVzIHNvY2nDqXTDqXMgY29tbWUgcGxpIHBhcnRpY3VsaWVyIGTigJlhY2NvbXBsaXNzZW1lbnQgb2JsaWfDqSBwb3VyIHBvdXZvaXIgZm91cm5pciBkZXMgcHJvZHVpdHMgZGUgbWFycXVlIGRpc3RyaWJ1dGV1ciAocXVvaSBxdWUgZm9uZGFtZW50YWwsIHBhcyBleGNsdXNpZikuJywnTGUgc3RhbmRhcmQgQlJDIHByZW5kIGVuIGNvbXB0ZSBsZXMgcHJpbmNpcGVzIGV0IGxlcyBwcmF0aXF1ZXMgbGVzIHBsdXMgYXBwcm9wcmnDqXMgcXVpIHZpc2VudCDDoCBtaW5pbWlzZXIgbGVzIHJpc3F1ZXMgZGUgcG9sbHV0aW9uIGRlcyBhbGltZW50cy4nLCdMZSByZXNwZWN0IGR1IHN0YW5kYXJkIEJSQyBpbXBsaXF1ZSBkaXNwb3NlciBk4oCZdW4gZWZmaWNhY2Ugc3lzdMOobWUgZGUgc8OpY3VyaXTDqSBhbGltZW50YWlyZSwgYWluc2kgcXVlIGTigJl1biBzeXN0w6htZSBjb21wbGV0IGRlIGNvbnRyw7RsZSBkdSBwcm9kdWl0IGV0IGR1IHByb2Nlc3N1cywgZW4gdHJhdmFpbGxhbnQgYXZlYyBkdSBwZXJzb25uZWwgZm9ybcOpIGV0IGRhbnMgZGVzIGluc3RhbGxhdGlvbnMgYWTDqXF1YXRlcy4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbicgOiBbeyAgIHR5cGU6J2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6eydwcmluY2lwYWwnIDogXCJCQ1JcIiwgJ3NlY29uZCc6IFwiXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6IFsnQlJDIElvUCwgaXMgYSBmb29kIHNlY3VyaXR5IHN5c3RlbSBkZXZlbG9wZWQgYnkgdGhlIEJyaXRpc2ggUmV0YWlsIENvbnNvcnRpdW0gKEJSQykgYW5kIHRoZSBJbnN0aXR1dGUgb2YgUGFja2FnaW5nIChJb1ApLCBzcGVjaWZpYyBmb3IgdGhlIGZvb2QgaW5kdXN0cnkgYW5kIHJlY29nbml6ZWQgYWxsIGFsb25nIHRoZSB3b3JsZC4nLCdFbnBsYXRlciBoYXMgZGVjaWRlZCB0byBhY2NvbXBsaXNoIHRoZSByZXF1aXJlbWVudHMgdG8gZ3VhcmFudGVlIHRvIGl0cyBjdXN0b21lcnMgdGhhdCBmb2xsb3dzIHRoZSBCUkMgcnVsZXMuJywnVGhlIEJSQyBpcyBhY2NlcHRlZCBnbG9iYWxseSBhbmQgaXTigJlzIHVzZWQgYnkgdGhlIGJpZ2dlc3Qgc3VwZXJtYXJrZXQgY2hhaW5zLCBhc2tpbmcgaXQgdG8gYWxsIHRoZSBzdXBwbGllcnMgdGhhdCB3YW50IHRvIHNlbGwgdG8gdGhlbS4nLCdFbnBsYXRlciB3YXMgY2VydGlmaWVkIG9uIDIwMDYnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnQlJDLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIkVudmlyb25tZW50XCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0VucGxhdGVyIGVzdGFibGlzaCBxdWFsaXR5IGNvbnRyb2xzIGluIGFsbCB0aGUgcHJvZHVjdGlvbiBwcm9jZXNzZXMgdG8gYXNzdXJlIHRoZSBwcm9kdWN0IGZvbGxvd3MgYWxsIHRoZSBxdWFsaXR5IHJlcXVpcmVtZW50cy4nLCdUaGUgcHJvZHVjdCBjb250cm9sIGFuZCBhbmFseXNpcyBhcmUgZG9uZSBpbiBFbnBsYXRlciBwcmVtaXNlcywgdXNpbmcgdGhlIGJlc3QgcXVhbGlmaWVkIGluc3RydW1lbnRzIGFuZCBzdGFmZiB0byBvYnRhaW4gdGhlIG1heGltdW0gcmVsaWFiaWxpdHkgb24gdGhlIHJlc3VsdHMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9LHsgXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgICAgOiA1LCBcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJyA6ICctLS0tJywgXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiAgeyAgICAnY2EnIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0EgRW5wbGF0ZXIgZmFicmlxdWVtIGVtYmFsYXRnZXMgZmxleGlibGVzIHBlbHMgc2V1cyBwcm9kdWN0ZXMgc2Vnb25zIGxlcyBjYXJhY3RlcsOtc3RpcXVlcyBpIHJlcXVpc2l0cywgYXNzZWd1cmFudCBsYSBpbWF0Z2UsIHByb3RlY2Npw7MgaSBtYXF1aW5hYmlsaXRhdC4gUG9zZW0gYWwgc2V1IGFiYXN0IGVsIHN1cG9ydCBkZWxzIG5vc3RyZXMgZXNwZWNpYWxpc3RlcyBpIGVsIHByb2R1Y3RlcyBtw6lzIGlubm92YWRvcnMgZGVsIG1lcmNhdCBwZXIgYSBxdWUgZXMgdHJvYmkgbGEgbWlsbG9yIHNvbHVjacOzIGEgbGVzIHNldmVzIG5lY2Vzc2l0YXRzLicsICdMYSBkaXNwb25pYmlsaXRhdCBk4oCZdW5hIGFtcGxpYSBnYW1hIGRlIG1hdGVyaWFscyBk4oCZw7psdGltYSB0ZWNub2xvZ2lhIGkgbGEgaW5maW5pdGF0IGRlIGNvbWJpbmFjaW9ucyBwb3NzaWJsZXMsIGFtYiBsYSBnYXJhbnRpYSBk4oCZdW5hIGltcHJlc3Npw7MgZGUgcXVhbGl0YXQgc29icmUgcXVhbHNldm9sIHN1cGVyZsOtY2llLCBhc3NlZ3VyYSB1biBhbHQgdmFsb3IgYWZlZ2l0IHBlbHMgbm9zdHJlcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbiBFbnBsYXRlciBvZnJlY2Vtb3MgZW1iYWxhamVzIGZsZXhpYmxlIHBhcmEgc3VzIHByb2R1Y3RvcyBzZWfDum4gc3VzIGNhcmFjdGVyw61zdGljYXMgeSByZXF1aXNpdG9zLCBhc2VndXJhbmRvIHN1IGltYWdlbiwgcHJvdGVjY2nDs24geSBtYXF1aW5hYmlsaWRhZC4nLCdBIHN1IHZleiwgcG9uZW1vcyBhIHN1IGFsY2FuY2UsIGVsIHNvcG9ydGUgZGUgc3VzIGVzcGVjaWFsaXN0YXMgeSBsb3MgcHJvZHVjdG9zIG3DoXMgaW5ub3ZhZG9yZXMgZGVsIG1lcmNhZG8gcGFyYSBxdWUgZW5jdWVudHJlIGxhIHNvbHVjacOzbiBtw6FzIGFkZWN1YWRhIGEgc3VzIG5lY2VzaWRhZGVzLicsJ0xhIGRpc3BvbmliaWxpZGFkIGRlIHVuYSBhbXBsaWEgZ2FtYSBkZSBtYXRlcmlhbGVzIGRlIMO6bHRpbWEgdGVjbm9sb2fDrWEgeSBsYSBpbmZpbmlkYWQgZGUgY29tYmluYWNpb25lcyBwb3NpYmxlcywganVudG8gYSBsYSBnYXJhbnTDrWEgZGUgdW5hIGltcHJlc2nDs24gZGUgY2FsaWRhZCBzb2JyZSBjdWFscXVpZXIgc3VwZXJmaWNpZSwgYXNlZ3VyYSB1biBhbHRvIHZhbG9yIGHDsWFkaWRvIHBhcmEgbnVlc3Ryb3MgY2xpZW50ZXMuJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ2ZhYnJpY2FjaW9uLmpwZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnInIDogW3sgICB0eXBlOidpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOnsncHJpbmNpcGFsJyA6IFwiXCIsICdzZWNvbmQnOiBcIlwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiBbJ0NoZXogRW5wbGF0ZXIgbm91cyB2b3VzIHByb3Bvc29ucyBkZXMgZW1iYWxsYWdlcyBmbGV4aWJsZXMgZW4gZm9uY3Rpb24gZGVzIGNhcmFjdMOpcmlzdGlxdWVzIGV0IHJlcXVpcyBkZSB2b3RyZSBwcm9kdWl0LCBlbiBhc3N1cmFudCB1bmUgYm9ubmUgaW1hZ2UsIHByb3RlY3Rpb24gZXQgbWFjaGluYWJpbGl0w6llLicsJ0RlIHBsdXMsIG5vdXMgdm91cyBwcm9wb3NvbnMgbGUgc291dGllbiBkZSBzZXMgc3DDqWNpYWxpc3RlcyBhaW5zaSBxdWUgbGVzIHByb2R1aXRzIGxlcyBwbHVzIGlubm92YXRldXJzIGR1IG1hcmNow6kgcG91ciBxdWUgdm91cyBwdWlzc2lleiB0cm91dmV6IGxhIHNvbHV0aW9uIGxhIHBsdXMgc2F0aXNmYWlzYW50ZSBwb3VyIHZvcyBiZXNvaW5zLicsJ0xhIGRpc3BvbmliaWxpdMOpIGTigJl1biB2YXN0ZSDDqWNoYW50aWxsb24gZGUgbWF0w6lyaWF1eCBkZSB0ZWNobm9sb2dpZSBkZSBwb2ludGUgZXQgZGUgbOKAmWluZmluaXTDqSBkZSBjb21iaW5haXNvbnMgcG9zc2libGVzLCB0b3V0IGVuIGFqb3V0YW50IGxhIGdhcmFudGllIGTigJl1bmUgaW1wcmVzc2lvbiBkZSBxdWFsaXTDqSBzdXIgcXVlbGNvbnF1ZSBzdXBlcmZpY2llLCBhc3N1cmUgdW5lIGhhdXRlIHZhbGV1ciBham91dMOpZSBwb3VyIG5vcyBjbGllbnRzLiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6ICdmYWJyaWNhY2lvbi5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7ICAgdHlwZTonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzp7J3ByaW5jaXBhbCcgOiBcIlwiLCAnc2Vjb25kJzogXCJcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogWydFbmdsaXNoIHRleHQnLCdFbmdsaXNoIHRleHQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnZmFicmljYWNpb24uanBnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB0aGlzLmdldENvbnRlbnQgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS5jb250ZW50W0dlbmVyYWxTdmMuZ2V0TGFuZygpXTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFtjb2RlXS52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2V0VHlwZSA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50W2NvZGVdLnR5cGU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuZGlyZWN0aXZlKCdhcHBGb290ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0ICAgIDogICdFJyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHNvY2lhbCAgOiAnPXNvY2lhbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA6ICAgJ2Zvb3Rlci10ZW1wbGF0ZXIuaHRtbCdcbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5zZXJ2aWNlKCdHZW5lcmFsU3ZjJyxmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxhbmcgPVwicGF0YXRhXCI7XG4gICAgICAgIHRoaXMuc2V0TGFuZyA9IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIGxhbmcgPSBsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldExhbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBsYW5nO1xuICAgICAgICB9O1xuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcEVucGxhdGVyJylcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsQ29udGVudFN2Yywkc3RhdGUpIHtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBDb250ZW50U3ZjLmdldENvbnRlbnQoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuY29udGVudCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLmRpcmVjdGl2ZSgnbWVudUVucGxhdGVyJyxmdW5jdGlvbigkcm9vdFNjb3BlLCRzdGF0ZSxNZW51U3ZjLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIG1lbnVzOiAnPWl0ZW1zJyxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogJz1sYW5ndWFnZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21lbnUtdGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtZW50LGF0dHIpIHtcbiAgICAgICAgICAgICAgICAvL3Njb3BlLm1lbnVJdGVtcyA9IHNjb3BlLm1lbnVzO1xuICAgICAgICAgICAgICAgIHNjb3BlLnRyYW5zbGF0ZXMgPSB7ICdsYW5ndWFnZSc6IHsnY2EnOidpZGlvbWVzJywnZXMnOidpZGlvbWFzJywnZW4nOidsYW5ndWFnZXMnLCdmcic6J2xhbmd1ZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2VzJzogeyAnY2EnIDogeyAnY2EnOidDYXRhbMOgJywgICAgICdlcycgOiAnQ2FzdGVsbMOgJyAsICAgICAnZnInIDogJ0ZyYW5jw6hzJywgICAnZW4nIDogJ0FuZ2zDqHMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IHsgJ2NhJzonQ2F0YWzDoW4nLCAgICAnZXMnIDogJ0Nhc3RlbGxhbm8nICwgICAnZnInIDogJ0ZyYW5jw6lzJywgICAnZW4nIDogJ0luZ2zDqXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IHsgJ2NhJzonQ2F0YWxhbicsICAgICdlcycgOiAnU3BhbmlzaCcgLCAgICAgICdmcicgOiAnRnJlbmNoJywgICAgJ2VuJyA6ICdFbmdsaXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiB7ICdjYSc6J0NhdGFsYW5lJywgICAgJ2VzJyA6ICdFc3BhZ25vbCcgLCAgICdmcicgOiAnRnJhbsOnYWlzJywgICAnZW4nIDogJ0FuZ2xhaXMnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5nKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubWVudXMgPSBNZW51U3ZjLmdldE1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubGFuZ3VhZ2UgPSBsYW5nO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdeLl4uJytsYW5nKyRzdGF0ZS5jdXJyZW50Lm5hbWUuc3Vic3RyKDYpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgc2NvcGUuY2hhbmdlSXRlbSA9IGZ1bmN0aW9uKG1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbnVJdGVtLmxpbmsgPT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5tZW51Q2xhc3MgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVDbGFzcyA9IFwibWVudS10b3BcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHBFbnBsYXRlcicpXG4gICAgLnNlcnZpY2UoJ01lbnVTdmMnLCBmdW5jdGlvbihHZW5lcmFsU3ZjKSB7XG4gICAgICAgdmFyIG1lbnUgPSB7ICd0aXB1cyc6J00nLCAgIC8vTTogbWFpblxuICAgICAgICAgICAgICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYScgOiBbeydsYWJlbCc6J0luaWNpJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonRW1wcmVzYScsJ2xpbmsnOidlbXByZXNhJ30sLyp7J2xhYmVsJzonQXBsaWNhY2lvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30sKi97J2xhYmVsJzonRmFicmljYWNpw7MnLCdsaW5rJzonZmFicmljYXRpb24nfSx7J2xhYmVsJzonUXVhbGl0YXQnLCdsaW5rJzoncXVhbGl0eSd9LHsnbGFiZWwnOidDb250YWN0ZScsJ2xpbmsnOidjb250YWN0J31dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VzJyA6IFt7J2xhYmVsJzonSW5pY2lvJywnbGluayc6J2hvbWUnfSx7J2xhYmVsJzonRW1wcmVzYScsJ2xpbmsnOidlbXByZXNhJ30sLyp7J2xhYmVsJzonQXBsaWNhY2lvbmVzJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LCoveydsYWJlbCc6J0ZhYnJpY2FjacOzbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidDYWxpZGFkJywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdG8nLCdsaW5rJzonY29udGFjdCd9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcicgOiBbeydsYWJlbCc6J0FjY3VlaWwnLCdsaW5rJzonaG9tZSd9LHsnbGFiZWwnOidTb2Npw6l0w6knLCdsaW5rJzonZW1wcmVzYSd9LC8qeydsYWJlbCc6J1BhY2thZ2luZyBwb3VyJywnbGluayc6J2FwcGxpY2F0aW9ucyd9LCoveydsYWJlbCc6J0ZhYnJpY2F0aW9uJywnbGluayc6J2ZhYnJpY2F0aW9uJ30seydsYWJlbCc6J1F1YWxpdMOpJywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdCcsJ2xpbmsnOidjb250YWN0J31dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VuJyA6IFt7J2xhYmVsJzonSG9tZScsJ2xpbmsnOidob21lJ30seydsYWJlbCc6J1RoZSBDb21wYW55JywnbGluayc6J2VtcHJlc2EnfSwvKnsnbGFiZWwnOidBcHBsaWNhdGlvbnMnLCdsaW5rJzonYXBwbGljYXRpb25zJ30sKi97J2xhYmVsJzonUHJvZHVjdGlvbicsJ2xpbmsnOidmYWJyaWNhdGlvbid9LHsnbGFiZWwnOidRdWFsaXR5JywnbGluayc6J3F1YWxpdHknfSx7J2xhYmVsJzonQ29udGFjdCcsJ2xpbmsnOidjb250YWN0J31dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVudS5jb250ZW50W0dlbmVyYWxTdmMuZ2V0TGFuZygpXTtcbiAgICAgICAgfTtcbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb250cm9sbGVyKCdOb3JtYWxDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLENvbnRlbnRTdmMsJHN0YXRlKSB7XG4gICAgICAgICRzY29wZS5jb250ZW50ID0gQ29udGVudFN2Yy5nZXRDb250ZW50KCRzdGF0ZS5jdXJyZW50LmNvZGUpO1xuXG4gICAgICAgICRzY29wZS52aWRlbz0gJzF2M3M2dDZNVGg4JztcbiAgICAgICAgJHNjb3BlLnZhbHVlID0gQ29udGVudFN2Yy5nZXRWYWx1ZSgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgJHNjb3BlLnR5cGUgPSBDb250ZW50U3ZjLmdldFR5cGUoJHN0YXRlLmN1cnJlbnQuY29kZSk7XG4gICAgICAgIC8qXG4gICAgICAgICRzY29wZS4kb24oJ2NoYW5nZUxhbmd1YWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IENvbnRlbnRTdmMuZ2V0Q29udGVudCgkc3RhdGUuY3VycmVudC5jb2RlKTtcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgICBcbiAgICAgICAkc2NvcGUubWFwID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IDQ1LCBsb25naXR1ZGU6IC03MyB9LCB6b29tOiA4IH07XG4gICAgfSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwRW5wbGF0ZXInKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcCcse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VzJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuY2EnLHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2EnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHJvb3RTY29wZSxHZW5lcmFsU3ZjKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbmVyYWxTdmMuc2V0TGFuZygnY2EnKTtcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjaGFuZ2VMYW5ndWFnZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mcicse1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy9mcicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkcm9vdFNjb3BlLEdlbmVyYWxTdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhbFN2Yy5zZXRMYW5nKCdmcicpO1xuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NoYW5nZUxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuJyx7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnL2VuJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzx1aS12aWV3Lz4nLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsR2VuZXJhbFN2Yykge1xuICAgICAgICAgICAgICAgICAgICBHZW5lcmFsU3ZjLnNldExhbmcoJ2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2hhbmdlTGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWhvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZnIuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmVtcHJlc2EnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9lbXByZXNhJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lcy5hcHBsaWNhdGlvbnMnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9hcHBsaWNhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uYXBwbGljYXRpb25zJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBwbGljYXRpb25zJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmFwcGxpY2F0aW9ucycgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwcGxpY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5jYS5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLmZhYnJpY2F0aW9uJyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZmFicmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtbm9ybWFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOb3JtYWxDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZW4uZmFicmljYXRpb24nICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9mYWJyaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1ub3JtYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ05vcm1hbENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5mci5mYWJyaWNhdGlvbicgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2ZhYnJpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogM1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVzLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmVuLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLnF1YWxpdHknICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9xdWFsaXR5JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLW5vcm1hbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTm9ybWFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmNhLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhcHAuZXMuY29udGFjdCcgLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGUtY29udGFjdC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGNvZGU6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5lbi5jb250YWN0JyAsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS1jb250YWN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29kZTogNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmZyLmNvbnRhY3QnICwge1xuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlLWNvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBjb2RlOiA1XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKyhuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IG5hdmlnYXRvci5sYW5ndWFnZSkuc3Vic3RyKDAsMikrJy9ob21lJyk7XG4gICAgICAgIC8vJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vTWlyYXIgYWl4w7IgcGVsIFNFTyBodHRwOi8vZmFkZWl0LmRrL2Jsb2cvcG9zdC9hbmd1bGFyLXRyYW5zbGF0ZS11aS1yb3V0ZXItc2VvXG4gICAgLy9Nw6lzIFNFTzogaHR0cDovL3d3dy5taWNoYWVsYnJvbWxleS5jby51ay9ibG9nLzE3MS9lbmFibGUtcmljaC1zb2NpYWwtc2hhcmluZy1pbi15b3VyLWFuZ3VsYXJqcy1hcHBcbiAgICAvL3BMVUdJTiBzZW8gaHR0cHM6Ly9naXRodWIuY29tL2p2YW5kZW1vL2FuZ3VsYXItdXBkYXRlLW1ldGFcbiAgICAvL2h0dHA6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtY2F0ZWdvcmllcy9mdWxsLXdlYnNpdGVzLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==