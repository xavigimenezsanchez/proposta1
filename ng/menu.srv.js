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