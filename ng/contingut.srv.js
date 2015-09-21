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
