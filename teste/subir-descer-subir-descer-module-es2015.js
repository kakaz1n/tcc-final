(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subir-descer-subir-descer-module"],{

/***/ "EMOU":
/*!*****************************************************!*\
  !*** ./src/app/subir-descer/subir-descer.module.ts ***!
  \*****************************************************/
/*! exports provided: SubirDescerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerPageModule", function() { return SubirDescerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subir_descer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subir-descer-routing.module */ "shGQ");
/* harmony import */ var _subir_descer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subir-descer.page */ "YftW");







let SubirDescerPageModule = class SubirDescerPageModule {
};
SubirDescerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subir_descer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubirDescerPageRoutingModule"]
        ],
        declarations: [_subir_descer_page__WEBPACK_IMPORTED_MODULE_6__["SubirDescerPage"]]
    })
], SubirDescerPageModule);



/***/ }),

/***/ "YftW":
/*!***************************************************!*\
  !*** ./src/app/subir-descer/subir-descer.page.ts ***!
  \***************************************************/
/*! exports provided: SubirDescerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerPage", function() { return SubirDescerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subir_descer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subir-descer.page.html */ "pXSv");
/* harmony import */ var _subir_descer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subir-descer.page.scss */ "aLAi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");








let SubirDescerPage = class SubirDescerPage {
    constructor(navCtrl, authService, dadosserv, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log("uid = " + this.uid);
                //console.log(res.uid)
                // console.log(this.authService.lerDados(res.uid))
            }
            else {
                this.navCtrl.navigateBack('');
            }
            console.log(this.authService.userDetails);
        }, err => {
            console.log('err', err);
        });
    }
    proxima_pagina() {
        console.log(this.uid);
        this.authService.setSubirDescer1(this.uid);
        this.navCtrl.navigateForward('subir-descer-registro');
    }
    voltar() {
        this.navCtrl.navigateBack('dashboard');
    }
};
SubirDescerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
SubirDescerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subir-descer',
        template: _raw_loader_subir_descer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subir_descer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubirDescerPage);



/***/ }),

/***/ "aLAi":
/*!*****************************************************!*\
  !*** ./src/app/subir-descer/subir-descer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YmlyLWRlc2Nlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUxJO0VBQ0UsYUFBQTtBQU9OOztBQUFHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUdGIiwiZmlsZSI6InN1YmlyLWRlc2Nlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pb24tY29udGVudCB7ICAgIFxyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICAuY2VudHJhbGl6YWRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcbi55b3VyLWNsYXNzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "gMzz":
/*!*******************************************!*\
  !*** ./src/app/services/dados.service.ts ***!
  \*******************************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



let DadosService = class DadosService {
    constructor(db) {
        this.db = db;
    }
    // Create
    createBooking(dados) {
        return this.UsuariosListRef.push({
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone,
            estado: dados.estado,
            cidade: dados.cidade,
            senha: dados.senha,
        });
    }
    // Get Single
    getBooking(id) {
        this.usuarioRef = this.db.object('/usuarios/' + id);
        return this.usuarioRef;
    }
    pegarQuestionario(id) {
        this.usuarioRef = this.db.object('/questionario/' + id);
        return this.usuarioRef;
    }
    // Get List
    getBookingList() {
        this.UsuariosListRef = this.db.list('/usuarios');
        return this.UsuariosListRef;
    }
};
DadosService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
DadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DadosService);



/***/ }),

/***/ "pXSv":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subir-descer/subir-descer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-left: 2%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Capacidade aeróbica\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <ion-item lines=\"none\" color=\"transparent\">\n    <div display=\"block\">\n      <h2 style=\"text-align: center;\">\n        Subir e descer um degrau\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Degrau. <br>\n        • Cronômetro<br>\n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Vá até um local que tenha um degrau de aproximadamente 20 centímetros para mulheres\n        e 40 centímetros para homens. <br>\n        • Chame alguém para marcar o tempo no cronômetro.<br>\n        • Use roupas largas e confortáveis, e sapatos apropriados para a caminhada.<br>\n        • Faça um aquecimento, certificando-se de alongar bem as pernas. <br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        1. Você deve subir e desceu do degrau, o mais rápido que conseguir, por 30 segundos.<br>\n2. Certifique-se de alternar as pernas ao subir e descer, e de colocar o calcanhar<br>\ncompletamente no degrau e no chão. Não se esqueça de deixar a sua postura correta.<br>\n3. Suba e desça sem apoiar-se em lugar algum. Tome cuidado para não se desequilibrar.<br>\nPara garantir, peça que alguém fique ao seu lado em caso de desequilíbrios.<br>\n4. Peça para uma pessoa soltar o cronômetro assim que você começar o teste, ou seja, na\nprimeira vez que subir no degrau.<br>\n5. Conte o número de vezes que você sobe e desce. A contagem deverá ser realizada após\no movimento completo, ou seja, suba e desça, e depois conte. Faça isso sucessivamente.<br>\n6. Peça para a pessoa que está com o cronômetro lhe avisar quando chegar nos 30\nsegundos para que você encerre o teste e a contagem.<br>\n7. Marque quantas vezes você subiu e desceu (fazendo o movimento completo) por 30\nsegundos e registre no seu perfil pessoal de condicionamento físico.<br>\n      </h4>\n    </div>\n  </ion-item>\n  <div class=\"centralizado\">\n    <ion-button full color=\"tertiary\" (click)=\"proxima_pagina()\">\n      Continuar</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "shGQ":
/*!*************************************************************!*\
  !*** ./src/app/subir-descer/subir-descer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubirDescerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerPageRoutingModule", function() { return SubirDescerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subir_descer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subir-descer.page */ "YftW");




const routes = [
    {
        path: '',
        component: _subir_descer_page__WEBPACK_IMPORTED_MODULE_3__["SubirDescerPage"]
    }
];
let SubirDescerPageRoutingModule = class SubirDescerPageRoutingModule {
};
SubirDescerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubirDescerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=subir-descer-subir-descer-module-es2015.js.map