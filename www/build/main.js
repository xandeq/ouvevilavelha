webpackJsonp([4],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventosProvider = (function () {
    //private API_URL = "http://dev.vilavelha.local/ouvidoriaapi";
    //private API_URL = "https://sistemas.vilavelha.es.gov.br/ouvidoriaapi";
    function EventosProvider(http) {
        this.http = http;
        //private API_URL = "http://localhost:50043";
        this.API_URL = "http://localhost:60406";
        console.log('Hello EventosProvider Provider');
    }
    EventosProvider.prototype.getTodosEventos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + "/api/Eventos/GetTodosEventos")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider.prototype.getEventos = function () {
        return this.http.get(this.API_URL + "/api/Eventos/GetTodosEventos");
    };
    EventosProvider.prototype.ConsultarEvento = function (protocolo, senha) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + "/api/Eventos/ConsultarEvento/" + protocolo + "/" + senha)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider.prototype.ObterTodosAssuntos = function (idtipo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + "/api/Assuntos/GetTodosAssuntos/" + idtipo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider.prototype.ObterTodosBairros = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + "/api/Bairros/GetTodosBairros")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider.prototype.ObterTodosTiposLogradouros = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_URL + "/api/TiposLogradouros/GetTodosTiposLogradouros")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider.prototype.RegistrarEvento = function (evento) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        //headers.append('Access-Control-Allow-Origin' , '*');
        //headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', '*');
        //headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.API_URL + "/api/Eventos/RegistrarEvento/", evento, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        }).catch(function (error) { console.log(error); });
    };
    EventosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], EventosProvider);
    return EventosProvider;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca_eventos_busca_eventos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_eventos_registrar_eventos__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, NavPrms) {
        this.navCtrl = navCtrl;
        this.NavPrms = NavPrms;
    }
    HomePage.prototype.goToFormulario = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrar_eventos_registrar_eventos__["a" /* RegistrarEventosPage */], { idevento: id });
    };
    HomePage.prototype.goToBuscaEventos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__busca_eventos_busca_eventos__["a" /* BuscaEventosPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\home\home.html"*/'<!-- <ion-header>\n    <ion-row>\n        <ion-col text-center>\n            <button menuToggle>\n                <ion-icon name="menu" class="iconemenu"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col text-center>\n            <img src="assets/imgs/logonovabranca.png" style="margin: 0px auto; width: 40%" />\n        </ion-col>\n    </ion-row>\n</ion-header> -->\n<ion-header>\n    <ion-toolbar>\n        <button class="botaoesquerda" menuToggle start left>\n            <ion-icon name="menu" class="iconemenu"></ion-icon>\n        </button>\n        <ion-title center text-center style="background: none !important">\n            <img src="assets/imgs/logonovabranca.png" style="width: 40%" />\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col width-50>\n                <img src="assets/imgs/botao_solicitacao.png" (click)="goToFormulario(\'1\')" class="img-responsive botoes" />\n            </ion-col>\n            <ion-col width-50>\n                <img src="assets/imgs/botao_elogiosugestao.png" (click)="goToFormulario(\'5\')" class="img-responsive botoes" />\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col width-50>\n                <img src="assets/imgs/botao_reclamacao.png" (click)="goToFormulario(\'2\')" class="img-responsive botoes" />\n            </ion-col>\n            <ion-col width-50>\n                <img src="assets/imgs/botao_denuncia.png" (click)="goToFormulario(\'4\')" class="img-responsive botoes" />\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col width-100>\n              <img src="assets/imgs/botao_aglomeracoes.png" (click)="goToFormulario(\'8\')" class="img-responsive botoes" />\n          </ion-col>\n      </ion-row>\n        <ion-row>\n            <ion-col width-100>\n                <img src="assets/imgs/botao_buscar.png" (click)="goToBuscaEventos()" class="img-responsive botoes" />\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div id="rodape" class="rodsis">\n        <div id="row">\n            <div id="col-md-2 text-center">\n                <img src="assets/imgs/logorodapebranca.png" (click)="goToBuscaEventos()" class="img-responsive col-md-2" />\n            </div>\n        </div>\n        <div id="row">\n            <div id="col-md-12">\n                <p>Telefone: (27) 3149-7200 | www.vilavelha.es.gov.br</p>\n                <p>Endereço: Avenida Santa Leopoldina, 840 - Coqueiral de Itaparica, Vila Velha, ES - CEP: 29.102-375</p>\n                <p>&nbsp;</p>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\sobre\sobre.html"*/'<ion-header>\n    <ion-toolbar>\n        <button class="botaoesquerda" menuToggle start left>\n            <ion-icon name="menu" class="iconemenu"></ion-icon>\n        </button>\n        <ion-title center text-center>\n            <img src="assets/imgs/logonovabranca.png" style="width: 20%" />\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class="row">\n    <div class="col-xs-12">\n      <div class="row">\n        <p>\n          <b>Missão:</b>\n          <br>\n          Servir ao morador e visitante da cidade de Vila Velha com um atendimento de qualidade e gerar controle social através de\n          métricas dos atendimentos.\n        <p>\n          <b>&nbsp;</b>\n        </p>\n        <p>\n          <b>Visão:</b>\n          <br /> \n          Transformar a ouvidoria da prefeitura de Vila Velha em um grande canal de relacionamento com o morador da cidade.\n        </p>\n        <p>\n          <b>&nbsp;</b>\n        </p>\n        <p>\n          <b>Valores:</b><br>\n          • Inteligência<br>\n          • Competência<br>\n          • Agilidade<br>\n          • Tecnologia<br>\n          • Resolutividade<br>\n          • Atendimento<br>\n          • Transparência<br>\n        </p>\n        <p>&nbsp;</p>\n        <p>\n          <b>Objetivos:</b><br />\n          <span>Algo parecido com o que hoje chamamos de Ouvidoria Pública surgiu, pela primeira vez em 1809, na Suécia, com o\n            objetivo de receber e encaminhar as queixas dos cidadãos contra os órgãos públicos. Nessa época, criou-se a palavra\n            ombudsman que, em sueco, significa “representante do povo”. Essa palavra surgiu para identificar o funcionário\n            responsável por receber críticas e sugestões da população sobre órgãos públicos na Suécia. Sua missão é agir\n            no interesse da população junto aos governos.</span>\n        </p>\n        <p>\n          <span>Posteriormente, vários países passaram a criar o cargo, chamando o ombudsman de maneiras diferentes. Em Portugal,\n            por exemplo, esse profissional é chamado de provedor; na França o termo é traduzido como médiateur; já nos países\n            de língua hispânica costuma-se denominar o cargo como defensor. &nbsp;</span>\n        </p>\n        <p>\n          <span>Nos Estados Unidos foram criadas, a partir da década de 1960, ombudsmen espalhados pela Administração Pública,\n            obedecendo a regulamentos próprios, diferentemente do modelo europeu, em que há apenas um ombudsman.</span>\n        </p>\n        <p>\n          <span>&nbsp;No Brasil, o surgimento da ouvidoria está relacionado à implantação da administração colonial. Em meados\n            do século XVI, foi nomeado o primeiro Ouvidor-Geral, para figurar como os “ouvidos do rei” e para garantir, como\n            órgão do sistema de justiça, a rigorosa aplicação das “leis da metrópole”. Com o processo de emancipação do país,\n            esse instituto português acabou por ser extinto após a declaração de independência do Brasil, em 1822. &nbsp;</span>\n        </p>\n        <p>\n          <span>Todavia, a velha palavra “Ouvidoria” viria a ressurgir no curso do movimento pela redemocratização do Brasil na\n            década de 1980, carregando em si um novo significado, inspirado na instituição sueca do ombudsman: dessa vez\n            o nome foi utilizado para caracterizar um órgão público responsável por acolher as expectativas sociais e tentar\n            introduzi-las junto ao Estado. &nbsp;</span>\n        </p>\n        <p>\n          <span>A primeira ouvidoria pública brasileira foi criada em 1986, no município de Curitiba. Desde então, e em especial\n            desde a promulgação da Constituição Federal de 1988, as ouvidorias evoluíram rapidamente, sob o impulso das reinvindicações\n            populares por participação nas deliberações do Estado. &nbsp;</span>\n        </p>\n        <p>\n          <span>Em 1995 foi criada a Ouvidoria-Geral da República, como parte da estrutura do Ministério da Justiça. Em 1999, o\n            Estado de São Paulo promulgou a lei de proteção ao usuário do serviço público, determinando a criação de Ouvidorias\n            em todos os órgãos públicos estaduais. &nbsp;</span>\n        </p>\n        <p>\n          <span>Em 2003, a Ouvidoria-Geral da República foi transferida para a estrutura da Controladoria-Geral da União (CGU),\n            e posteriormente teve seu nome alterado para Ouvidoria-Geral da União (OGU), com competência para exercer a coordenação\n            técnica do segmento de ouvidorias do Poder Executivo federal. &nbsp;</span>\n        </p>\n        <p>\n          <span>Em 2004 foi promulgada também a Emenda Constitucional nº 45, que determina a criação de Ouvidorias no Poder Judiciário\n            e no Ministério Público no âmbito da União, Estados, Distrito Federal e Territórios. &nbsp;</span>\n        </p>\n        <p>\n          <span>Esse processo de ampliação dos espaços de participação fez com que, hoje, a Ouvidoria esteja presente nos três\n            poderes da Nação, e também nos Estados, no Distrito Federal e nos Municípios, tendo se consolidado como uma instância\n            de controle e participação social, destinada ao aprimoramento da gestão pública.</span>\n        </p>\n        <p>\n          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            Fonte: Ministério da Transparência, Fiscalização e Controladoria Geral da União </span>\n        </p>\n        <p>&nbsp;</p>\n        <p>\n          <b>\n            <span>Vila Velha 162 – Ouvidoria Inteligente</span>\n          </b>\n        </p>\n        <p>\n          O projeto VILA VELHA 162 – Ouvidoria inteligente, surgiu da necessidade de ampliação dos canais de atendimento da PMVV ao\n          morador da cidade, dessa forma o projeto foi estruturado da seguinte forma:\n        </p>\n        <p class="auto-style1">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>A implantação do número 162 para o atendimento gratuito.\n        </p>\n        <p class="auto-style1">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Incorporação do serviço do atendimento DISQUE- SILÊNCIO.\n        </p>\n        <p class="auto-style1">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Atendimento 24 horas.\n        </p>\n        <p class="auto-style1">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Centralização dos atendimentos dos principais serviços\n          da PMVV.\n        </p>\n        <p class="auto-style1">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Geração de índices e gráficos em tempo real.\n        </p>\n        <p class="auto-style2">\n          <span>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Ampliação das plataformas de acesso a informação (App\n          mobile, mídias sociais, chat, presencial,162 e portal da ouvidoria).\n        </p>\n        <p>\n          Na estrutura de pessoal, cada secretária terá ouvidores setoriais, os mesmos além de cumprir suas atividades principais atenderão\n          também as demandas de ouvidoria de sua respectiva pasta.\n        </p>\n        <p>\n          A equipe da ouvidoria inteligente é treinada e atuará 24hs no atendimento à população.\n        </p>\n        <p>\n          <span>&nbsp;</span>O atendimento 162 será feito com uso de headset e computadores.\n        </p>\n        <p>\n          Os relatórios serão em tempo real e disponível a todos os secretários e ao prefeito da cidade para uma melhor visualização\n          das ocorrências pela ótica da ouvidoria.\n        </p>\n        <p>\n          Todos os índices estarão disponíveis no portal da ouvidoria, para consulta em tempo real para toda população.\n        </p>\n        <p>\n          Implantação da ouvidoria itinerante, a mesma passará atuar de forma preventiva, visitando comunidades e seus respectivos\n          líderes e moradores com registro de ocorrências e posterior encaminhamento a secretarias correspondentes.\n        </p>\n        <p>\n          Retorno das ligações para medição da satisfação do atendimento do serviço realizado junto a população da cidade.\n        </p>\n        <p>&nbsp;</p>\n        <p>&nbsp;</p>\n        <p class="text-center">\n          <img src="https://sistemas.vilavelha.es.gov.br/ouvidoria/img/organograma.JPG" class="text-center">\n        </p>\n        <p>\n          <span>Time de atendimento 162:</span>\n        </p>\n        <p>\n            <img src="assets/imgs/organograma.jpg" class="text-center img-responsive">\n        </p>\n        <p>\n          <span>&nbsp;</span>\n        </p>\n        <p>&nbsp;</p>\n        <p class="text-center">\n          <img src="assets/imgs/fluxograma.jpg" class="text-center img-responsive">\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busca-eventos/busca-eventos.module": [
		683,
		3
	],
	"../pages/formulario/formulario.module": [
		684,
		2
	],
	"../pages/registrar-eventos/registrar-eventos.module": [
		685,
		1
	],
	"../pages/sobre/sobre.module": [
		686,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioPage = (function () {
    function FormularioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navParams.get('idevento');
        if (this.navParams.get('idevento') == '1') {
            this.varTitulo = "Solicitação";
        }
        else if (this.navParams.get('idevento') == '2') {
            this.varTitulo = "Reclamação";
        }
        else if (this.navParams.get('idevento') == '4') {
            this.varTitulo = "Elogio/Sugestão";
        }
        else if (this.navParams.get('idevento') == '5') {
            this.varTitulo = "Denúncia";
        }
    }
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    FormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formulario',template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\formulario\formulario.html"*/'<ion-header>\n    <ion-navbar>\n        <button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <img src="assets/imgs/logo_ouvidoria.png" padding />\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="row">\n        <div class="col">\n            <div class="text-center">\n                <h3 class="text-center titulopagina">{{varTitulo}}</h3>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\formulario\formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], FormularioPage);
    return FormularioPage;
}());

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_eventos_eventos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_busca_eventos_busca_eventos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registrar_eventos_registrar_eventos__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_selectable__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { Transfer } from '@ionic-native/transfer';



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__["a" /* FormularioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_busca_eventos_busca_eventos__["a" /* BuscaEventosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registrar_eventos_registrar_eventos__["a" /* RegistrarEventosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__["a" /* SobrePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/busca-eventos/busca-eventos.module#BuscaEventosPageModule', name: 'BuscaEventosPage', segment: 'busca-eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar-eventos/registrar-eventos.module#RegistrarEventosPageModule', name: 'RegistrarEventosPage', segment: 'registrar-eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__["a" /* FormularioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_busca_eventos_busca_eventos__["a" /* BuscaEventosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registrar_eventos_registrar_eventos__["a" /* RegistrarEventosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__["a" /* SobrePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_eventos_eventos__["a" /* EventosProvider */],
                //File,
                //Transfer,
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_busca_eventos_busca_eventos__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registrar_eventos_registrar_eventos__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            splashScreen.hide();
            statusBar.styleDefault();
            _this.pages = [
                { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: "Sobre", component: __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */] },
                { title: "Registrar Evento", component: __WEBPACK_IMPORTED_MODULE_6__pages_registrar_eventos_registrar_eventos__["a" /* RegistrarEventosPage */] },
                { title: "Login/Consulta", component: __WEBPACK_IMPORTED_MODULE_5__pages_busca_eventos_busca_eventos__["a" /* BuscaEventosPage */] }
            ];
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\app\app.html"*/'<ion-menu [content]="content" side="left">\n    <ion-header>\n        <ion-toolbar color="primary" text-center>\n            <ion-title text-center>\n                <img src="assets/imgs/logonovabranca.png" style="width: 40%" />\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <!-- <div class="row text-center">\n        <div class="col-md-12 text-center">\n            <img src="assets/imgs/logonovabranca.png" style="width: 40%" />\n        </div>\n    </div> -->\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                ► {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the BuscaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscaEventosPage = (function () {
    //@ViewChild('input') myInput ;
    function BuscaEventosPage(navCtrl, navParams, eventosProvider, alertCtrl, loadingCtrl, storage, changeDetection) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventosProvider = eventosProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.changeDetection = changeDetection;
        this.buscaRespostas = new Array();
        this.show2 = false;
        this.varDadosLista = new Array();
        console.log("passo aqui 5");
    }
    BuscaEventosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("passo aqui 6");
        this.storage.get('protocolo').then(function (val) {
            console.log('PROTOCOLO BUSCA: ', val);
            _this.varProtocolo = val;
        });
        this.storage.get('senha').then(function (val2) {
            console.log('SENHA BUSCA: ', val2);
            _this.varSenha = val2;
        });
        setTimeout(function () {
            //   this.myInput.setFocus();
            _this.changeDetection.detectChanges();
        }, 1000);
        var protocolobuscado = window.localStorage.getItem('protocolobuscado');
        var senhabuscado = window.localStorage.getItem('senhabuscado');
        var showbuscado = window.localStorage.getItem('showbuscado');
        if (showbuscado == 'true') {
            console.log("passo aqui 4");
            //this.show = true;
        }
        if (protocolobuscado === 'undefined' && protocolobuscado != null &&
            senhabuscado === 'undefined' && senhabuscado != null) {
            this.buscarEvento(protocolobuscado, senhabuscado);
        }
    };
    BuscaEventosPage.prototype.showAlert = function (titulo, mensagem) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    BuscaEventosPage.prototype.ConsultarEvento = function (protocolo, senha) {
        this.show = true;
        //console.log("passo aqui 3");
        this.buscarEvento(protocolo, senha);
    };
    BuscaEventosPage.prototype.buscarEvento = function (protocolo, senha) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Buscando informações do evento para você...'
        });
        loader.present().then(function () {
            _this.eventosProvider.ConsultarEvento(protocolo, senha)
                .then(function (data) {
                var objeto_retorno = JSON.parse(JSON.stringify(data));
                _this.lista_acompanhamentos = objeto_retorno.acompanhamentos;
                if (objeto_retorno.id == "0" || objeto_retorno.id == null) {
                    _this.show = false;
                    console.log("passo aqui 2");
                    //this.show2 = true;
                    //this.showAcompanhamentos = false;
                    _this.showAlert('Evento não encontrado!', 'Favor, digitar novamente o protocolo e a senha corretamente.');
                    window.localStorage.setItem('show', 'false');
                }
                else {
                    console.log("" + objeto_retorno);
                    console.log("" + _this.objetoRetorno);
                    _this.objetoRetorno = objeto_retorno;
                    // window.localStorage.setItem('protocolobuscado', protocolo);
                    // window.localStorage.setItem('senhabuscado', senha);
                    // window.localStorage.setItem('showbuscado', 'true');
                    // window.localStorage.setItem('id', objeto_retorno.id);
                    _this.buscaId = objeto_retorno.id;
                    _this.buscaNome = objeto_retorno.nome;
                    _this.buscaProtocolo = objeto_retorno.protocolo;
                    _this.buscaDescricao = objeto_retorno.descricao;
                    _this.buscaSituacao = objeto_retorno.situacoes === undefined || objeto_retorno.situacoes === null ? "" : objeto_retorno.situacoes.descricao;
                    _this.buscaTipoEvento = objeto_retorno.tipo_eventos === undefined || objeto_retorno.tipo_eventos === null ? "" : objeto_retorno.tipo_eventos.descricao;
                    _this.buscaDataCriacao = objeto_retorno.created;
                    _this.buscaAssunto = objeto_retorno.assuntos === undefined || objeto_retorno.assuntos === null ? "" : objeto_retorno.assuntos.descricao;
                    _this.buscaRua = objeto_retorno.rua;
                    _this.buscaBairro = objeto_retorno.bairros === undefined || objeto_retorno.bairros === null ? "" : objeto_retorno.bairros.descricao;
                    //this.show = false;
                    _this.show = true;
                    _this.show2 = false;
                    _this.showAcompanhamentos = true;
                    console.log("passo aqui 1");
                }
                loader.dismiss();
            }).catch(function (error) {
                loader.dismiss();
                _this.showAlert('Erro!', error);
            });
        });
    };
    BuscaEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busca-eventos',template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\busca-eventos\busca-eventos.html"*/'<ion-header>\n    <ion-toolbar>\n        <button class="botaoesquerda" menuToggle start left>\n            <ion-icon name="menu" class="iconemenu"></ion-icon>\n        </button>\n        <ion-title center text-center>\n            <img src="assets/imgs/logonovabranca.png" style="width: 20%" />\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class="text-center">LOGIN/CONSULTA</h2>\n  <h3 class="text-center"> de Eventos</h3>\n  <ion-row>\n    <ion-col col-12>\n      <ion-label>Número do Protocolo:</ion-label>\n    </ion-col>\n    <ion-col col-12 class="bold">\n      <ion-input type="text" name="txtprotocolo" id="txtprotocolo" [(ngModel)]="protocolo" placeholder="Exemplo: EDVT238908902343890" value="{{varProtocolo}}"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-label>Senha:</ion-label>\n    </ion-col>\n    <ion-col col-12 class="bold">\n      <ion-input type="text" name="txtsenha" id="txtsenha" [(ngModel)]="senha" type="password" value="{{varSenha}}"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <button text-center large ion-button icon-start name="btnBuscar" id="btnBuscar" (click)=\'ConsultarEvento(protocolo, senha);\'>\n        <ion-icon name="search"></ion-icon>\n        Consultar\n      </button>\n    </ion-col>\n  </ion-row>\n  <div class="row" *ngIf="show" style="padding: 5px; background-color: lightgray; margin-top: 10px">\n    <div class="col-md-12">\n      <h2 style="color: #d9534f; text-align: center">RESULTADO</h2>\n      <ion-row>\n        <ion-col col-6>\n          Código:\n          <ion-col col-6 class="bold">{{buscaId}}</ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          NOME: </ion-col>\n        <ion-col col-6 class="bold">{{buscaNome}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          PROTOCOLO: </ion-col>\n        <ion-col col-6 class="bold">{{buscaProtocolo}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          DESCRIÇÃO:\n        </ion-col>\n        <ion-col col-6 class="bold">\n          {{buscaDescricao}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Situação: </ion-col>\n        <ion-col col-6 class="bold">{{buscaSituacao}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Tipo de Evento: </ion-col>\n        <ion-col col-6 class="bold">{{buscaTipoEvento}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Data de Criação: </ion-col>\n        <ion-col col-6 class="bold">{{buscaDataCriacao | date: \'dd/MM/yyyy H:mm\'}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Assunto: </ion-col>\n        <ion-col col-6 class="bold">{{buscaAssunto}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Rua: </ion-col>\n        <ion-col col-6 class="bold">{{buscaRua}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          Bairro: </ion-col>\n        <ion-col col-6 class="bold">{{buscaBairro}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class="row" *ngIf="show2">\n    <div class="col-md-12">\n      <h2>Evento não encontrado.</h2>\n    </div>\n  </div>\n  <fieldset *ngIf="showAcompanhamentos" style="margin-top: 10px; background-color: lightgray">\n    <legend style="font-weight: bold; text-align: center; background-color: lightgray; padding: 3px; color: #d9534f">ACOMPANHAMENTOS</legend>\n    <div class="row header" style="border-bottom: solid 1px gray">\n      <div class="col bold center">Descrição</div>\n      <div class="col bold center">Data Criação</div>\n    </div>\n    <div class="row" *ngFor="let ac of lista_acompanhamentos" style="border-bottom: solid 1px gray">\n      <div class="col">\n        <div [innerHtml]="ac.descricao" item-right></div>\n      </div>\n      <div class="col">\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm" [(ngModel)]="ac.created"></ion-datetime>\n      </div>\n    </div>\n  </fieldset>\n</ion-content>\n'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\busca-eventos\busca-eventos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__["a" /* EventosProvider */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__["a" /* EventosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], BuscaEventosPage);
    return BuscaEventosPage;
}());

//# sourceMappingURL=busca-eventos.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { File } from '@ionic-native/file';
//import { Transfer, TransferObject } from '@ionic-native/transfer';

var RegistrarEventosPage = (function () {
    function RegistrarEventosPage(navCtrl, navParams, eventosProvider, alertCtrl, loadingCtrl, storage, 
        //private camera: Camera, 
        //private transfer: Transfer, 
        //private file: File, 
        filePath, actionSheetCtrl, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventosProvider = eventosProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        //private API_URL = "http://dev.vilavelha.local/ouvidoriaapi";
        //private API_URL = "http://localhost:60406";
        this.evento = {};
        this.lastImage = null;
        this.navParams.get('idevento');
        if (this.navParams.get('idevento') == '1') {
            this.varTitulo = "Solicitação";
            this.varTipoEvento = '1';
        }
        else if (this.navParams.get('idevento') == '2') {
            this.varTitulo = "Reclamação";
            this.varTipoEvento = '2';
        }
        else if (this.navParams.get('idevento') == '4') {
            this.varTitulo = "Elogio/Sugestão";
            this.varTipoEvento = '4';
        }
        else if (this.navParams.get('idevento') == '5') {
            this.varTitulo = "Denúncia";
            this.varTipoEvento = '5';
        }
    }
    RegistrarEventosPage.prototype.ionViewDidLoad = function () {
        this.ObterTodosAssuntos();
        this.ObterTodosBairros();
        this.ObterTodosTiposLogradouros();
    };
    RegistrarEventosPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        //this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    RegistrarEventosPage.prototype.takePicture = function (sourceType) {
        // let options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.FILE_URI,
        //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        //   allowEdit: true,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   targetWidth: 500,
        //   targetHeight: 500,
        //   saveToPhotoAlbum: false
        // };
        // Get the data of an image
        // this.camera.getPicture(options).then((imagePath) => {
        //   // Special handling for Android library
        //   if (sourceType == 0) {
        //   //if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        //     this.filePath.resolveNativePath(imagePath)
        //       .then(filePath => {
        //         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
        //         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        //       });
        //   } else {
        //     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        //     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        //   }
        // }, (erro) => {
        //   this.presentToast('Error while selecting image. CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
        // });
    };
    // Create a new name for the image
    RegistrarEventosPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    RegistrarEventosPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        // this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
        //   this.lastImage = newFileName;
        // }, erro => {
        //   this.presentToast('Error while storing file.  CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
        // });
    };
    RegistrarEventosPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    RegistrarEventosPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    RegistrarEventosPage.prototype.uploadImage = function () {
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };
        //const fileTransfer: TransferObject = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Enviando imagem...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        // fileTransfer.upload(targetPath, this.API_URL + "/upload", options).then(data => {
        //   this.loading.dismissAll()
        //   this.presentToast('Image succesful uploaded.');
        // }, erro => {
        //   this.loading.dismissAll()
        //   this.presentToast('Error while uploading file. CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
        // });
    };
    RegistrarEventosPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: 'ATENÇÃO',
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    RegistrarEventosPage.prototype.ObterTodosAssuntos = function () {
        var _this = this;
        //this.navParams.get('idevento');
        this.varTipoEvento = this.navParams.get('idevento');
        this.eventosProvider.ObterTodosAssuntos(this.varTipoEvento)
            .then(function (data) {
            var response = data;
            _this.lista_assuntos = JSON.parse(JSON.stringify(response));
        });
    };
    RegistrarEventosPage.prototype.ObterTodosBairros = function () {
        var _this = this;
        this.eventosProvider.ObterTodosBairros()
            .then(function (data) {
            var response = data;
            _this.lista_bairros = JSON.parse(JSON.stringify(response));
        });
    };
    RegistrarEventosPage.prototype.ObterTodosTiposLogradouros = function () {
        var _this = this;
        this.eventosProvider.ObterTodosTiposLogradouros()
            .then(function (data) {
            var response = data;
            _this.lista_tiposlogradouros = JSON.parse(JSON.stringify(response));
        });
    };
    RegistrarEventosPage.prototype.onChange = function (CValue) {
        if (CValue == "1") {
            this.varTipoAnonimo = true;
        }
        else {
            this.varTipoAnonimo = false;
        }
    };
    RegistrarEventosPage.prototype.RegistrarEvento = function (evento) {
        var _this = this;
        if (evento === void 0) { evento = {}; }
        // var storage: Storage;
        var mensagemErro = "";
        if (!evento.nome && evento.tipo_cadastro_id != 1) {
            mensagemErro += "NOME, \n";
        }
        // if (!evento.cpf && evento.tipo_cadastro_id != 1) {
        //   mensagemErro += "CPF, \n";
        // }
        if (!evento.tipo_manifestante_id) {
            mensagemErro += "TIPO DE MANIFESTANTE, \n";
        }
        if (!evento.descricao) {
            mensagemErro += "DESCRIÇÃO, \n";
        }
        if (!evento.bairro_id) {
            mensagemErro += "BAIRRO, \n";
        }
        if (!evento.numero) {
            mensagemErro += "NÚMERO, \n";
        }
        if (!evento.assunto_id) {
            mensagemErro += "ASSUNTO, \n";
        }
        if (mensagemErro) {
            var msgErro = "Favor preencher o(s) campo(s): ";
            msgErro += mensagemErro;
            this.presentToast(msgErro);
            //this.showAlert(mensagemErro);
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
                duration: 5000
            });
            loader_1.present();
            //console.log("EVENTO " + evento);
            //console.log("EVENTO.ASSUNTO_ID " + evento.assunto_id);
            //console.log("JSON.parse(JSON.stringify(evento.assunto_id)) " + JSON.parse(JSON.stringify(evento.assunto_id)));
            // console.log("JSON.parse(evento.assunto_id) " + JSON.parse(evento.assunto_id));
            // console.log("JSON.parse(evento.assunto_id) " + JSON.stringify(evento.assunto_id));
            evento.assunto_id = this.assuntovalor;
            evento.bairro_id = this.bairrovalor;
            console.log("evento.assunto_id " + evento.assunto_id);
            console.log("evento.bairro_id " + evento.bairro_id);
            console.log("evento.bairro_id.id " + evento.bairro_id.id);
            evento.assunto_id = this.assuntovalor;
            this.eventosProvider.RegistrarEvento(evento)
                .then(function (data) {
                var objeto_retorno = JSON.parse(JSON.stringify(data));
                if (objeto_retorno.id > 0) {
                    _this.storage.set('protocolo', objeto_retorno.protocolo);
                    _this.storage.get('protocolo').then(function (val) {
                    });
                    _this.storage.set('senha', objeto_retorno.senha);
                    _this.storage.get('senha').then(function (val2) {
                    });
                    _this.showAlert("EVENTO SALVO COM SUCESSO! <br /><br /> PROTOCOLO: <b>" + objeto_retorno.protocolo + "</b> <br /><br /> SENHA: <b>" + objeto_retorno.senha + "</b>");
                    loader_1.dismiss();
                }
                evento = {};
            });
        }
    };
    RegistrarEventosPage.prototype.portChange = function (event) {
        this.assuntovalor = event.value.id;
    };
    RegistrarEventosPage.prototype.portChangeBairro = function (event) {
        this.bairrovalor = event.value.id;
    };
    RegistrarEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrar-eventos',template:/*ion-inline-start:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\registrar-eventos\registrar-eventos.html"*/'<ion-header>\n  <ion-toolbar>\n    <button class="botaoesquerda" menuToggle start left>\n      <ion-icon name="menu" class="iconemenu"></ion-icon>\n    </button>\n    <ion-title center text-center>\n      <img src="assets/imgs/logonovabranca.png" style="width: 20%" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class="col">\n      <ion-col>\n        <h3>{{varTipo}}</h3>\n      </ion-col>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="col-md-12">\n      <h2 text-center>+ NOVO EVENTO</h2>\n      <hr>\n      <h3 class="tituloazul" text-center>{{varTitulo}}</h3>\n      <hr />\n      <input type="hidden" ng-model="evento.tipo_evento_id" value="{{varTipoEvento}}">\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>ASSUNTO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <!-- <ion-select [(ngModel)]="evento.assunto_id" required>\n            <ion-option *ngFor="let city of lista_assuntos" value="{{city.id}}">{{city.descricao}}</ion-option>\n          </ion-select> -->\n          <ion-item style="border: solid 1px black">\n            <ionic-selectable item-content id="evento.assunto_id" [(ngModel)]="evento.assunto_id" [items]="lista_assuntos"\n              itemValueField="id" itemTextField="descricao" [canSearch]="true" (onChange)="portChange($event)">\n            </ionic-selectable>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          TIPO DE CADASTRO: </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-select [(ngModel)]="evento.tipo_cadastro_id" #C required (ionChange)="onChange(C.value)" cancelText="Cancelar">\n            <ion-option value="2">Sigiloso</ion-option>\n            <ion-option value="3">Normal</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          TIPO DE MANIFESTANTE:\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-select [(ngModel)]="evento.tipo_manifestante_id" required cancelText="Cancelar">\n            <!-- <ion-option value="...: Selecione :...">...: Selecione :...</ion-option> -->\n            <!-- <ion-option value="1">Líder Comunitário</ion-option> -->\n            <ion-option value="2">Pessoa Física</ion-option>\n            <ion-option value="3">Pessoa Jurídica</ion-option>\n            <!-- <ion-option value="4">Agente Político </ion-option> -->\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>NOME:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="text" name="txtnome" id="txtnome" [(ngModel)]="evento.nome" placeholder="Exemplo: Fulano da Silva"\n            [disabled]="varTipoAnonimo"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>CPF:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="number" maxlength="11" name="txtcpf" id="txtcpf" [(ngModel)]="evento.cpf" placeholder="CPF somente números" [disabled]="varTipoAnonimo"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>E-MAIL:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="text" name="txtemail" id="txtemail" [(ngModel)]="evento.email" placeholder="Exemplo: fulano@email.com.br"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>TELEFONE:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="text" name="txttelefone" id="txttelefone" [(ngModel)]="evento.telefone" placeholder="somente números, por exemplo: 2733330000"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>CELULAR:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="text" name="txtcelular" id="txtcelular" [(ngModel)]="evento.celular" placeholder="somente números, por exemplo: 2733330000"></ion-input>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col col-12>\n          <ion-buttons>\n            <button ion-button icon-left (click)="presentActionSheet()">\n              <ion-icon name="camera"></ion-icon>Selecione uma imagem\n            </button>\n            <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n              <ion-icon name="cloud-upload"></ion-icon>Enviar\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>BAIRRO DA MANIFESTAÇÃO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n            <ion-item style="border: solid 1px black">\n                <ionic-selectable\n                  item-content \n                  id="evento.bairro_id"\n                  [(ngModel)]="evento.bairro_id"\n                  [items]="lista_bairros"\n                  itemValueField="id"\n                  itemTextField="descricao"\n                  [canSearch]="true"\n                  (onChange)="portChangeBairro($event)">\n                </ionic-selectable>\n              </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>TIPO LOGRADOURO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-select [(ngModel)]="evento.tipo_manifestante_id">\n            <ion-option *ngFor="let tipos of lista_tiposlogradouros" value="{{tipos.id}}">{{tipos.descricao}}</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>LOGRADOURO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="text" name="txtlogradouro" id="txtlogradouro" [(ngModel)]="evento.logradouro"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>NÚMERO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-input type="number" name="txtnumero" id="txtnumero" [(ngModel)]="evento.numero"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-label>DESCRIÇÃO:</ion-label>\n        </ion-col>\n        <ion-col col-12 class="bold">\n          <ion-textarea type="text" name="txtdescricao" id="txtdescricao" [(ngModel)]="evento.descricao" rows="10"\n            required></ion-textarea>\n        </ion-col>\n      </ion-row>\n      <button large ion-button icon-start name="btnBuscar" id="btnBuscar" (click)=\'RegistrarEvento(evento)\'>\n        <ion-icon name="checkmark"></ion-icon>\n        Salvar\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\alexandre.queiroz\Desktop\Alexandre Queiroz\Projetos\App Ouvidoria\src\pages\registrar-eventos\registrar-eventos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__["a" /* EventosProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__["a" /* EventosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], RegistrarEventosPage);
    return RegistrarEventosPage;
}());

//# sourceMappingURL=registrar-eventos.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map