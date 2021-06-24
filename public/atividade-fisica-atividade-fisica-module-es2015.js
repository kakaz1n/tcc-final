(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atividade-fisica-atividade-fisica-module"],{

/***/ "98lN":
/*!***********************************************************!*\
  !*** ./src/app/atividade-fisica/atividade-fisica.page.ts ***!
  \***********************************************************/
/*! exports provided: AtividadeFisicaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeFisicaPage", function() { return AtividadeFisicaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_atividade_fisica_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./atividade-fisica.page.html */ "aTpq");
/* harmony import */ var _atividade_fisica_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atividade-fisica.page.scss */ "YcdE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let AtividadeFisicaPage = class AtividadeFisicaPage {
    constructor(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
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
    goSinais() {
        this.navCtrl.navigateBack('/sinais-sintomas');
    }
    resposta(res) {
        console.log(this.uid);
        console.log(res);
        this.authService.setQuestionario3(this.uid, res);
        if (res == 'nao')
            this.goEstado_historico();
        if (res == 'sim')
            this.goAtividades_fisicas_realizadas();
    }
    goEstado_historico() {
        this.navCtrl.navigateForward('/estado-historico');
    }
    goAtividades_fisicas_realizadas() {
        this.navCtrl.navigateForward('/atividades-fisicas-realizadas');
    }
};
AtividadeFisicaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] }
];
AtividadeFisicaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-atividade-fisica',
        template: _raw_loader_atividade_fisica_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_atividade_fisica_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AtividadeFisicaPage);



/***/ }),

/***/ "KMGX":
/*!*********************************************************************!*\
  !*** ./src/app/atividade-fisica/atividade-fisica-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AtividadeFisicaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeFisicaPageRoutingModule", function() { return AtividadeFisicaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _atividade_fisica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atividade-fisica.page */ "98lN");




const routes = [
    {
        path: '',
        component: _atividade_fisica_page__WEBPACK_IMPORTED_MODULE_3__["AtividadeFisicaPage"]
    }
];
let AtividadeFisicaPageRoutingModule = class AtividadeFisicaPageRoutingModule {
};
AtividadeFisicaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AtividadeFisicaPageRoutingModule);



/***/ }),

/***/ "YcdE":
/*!*************************************************************!*\
  !*** ./src/app/atividade-fisica/atividade-fisica.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGF0aXZpZGFkZS1maXNpY2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0c7RUFDQywyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJhdGl2aWRhZGUtZmlzaWNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXN0YWRve1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuY2lkYWRle1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAgLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "aTpq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atividade-fisica/atividade-fisica.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goSinais()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: left;float: left;margin-top: 5%; font-size: x-large;font-weight: bold;\">\n      <ion-label>\n        Nível de Atividade Física\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\" >\n  <div style=\"height: 25%;\">\n\n  </div>\n    <ion-item lines=\"none\" color=\"transparent\">\n      <div display=\"block\">\n        <h4 style=\"text-align: justify;font-weight: bolder;font-size: larger;\">\n          Você realiza atividade física planejada, estruturada, de intensidade no mínimo moderada, por ao menos 30 minutos, em 3 dias da semana, há pelo menos 3 meses?\n        </h4>\n      </div>\n    </ion-item>\n    <div class=\"estado\">\n      <ion-button (click)=\"resposta('nao')\" style=\"width: 70%;margin-left: 20%;\" color=\"secondary\">\n        Não</ion-button>\n    </div>\n    <div class=\"cidade\">\n      <ion-button  style=\"width: 70%;margin-left: 10%;\" color=\"secondary\" (click)=\"resposta('sim')\" >\n        Sim</ion-button>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "n7YT":
/*!*************************************************************!*\
  !*** ./src/app/atividade-fisica/atividade-fisica.module.ts ***!
  \*************************************************************/
/*! exports provided: AtividadeFisicaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeFisicaPageModule", function() { return AtividadeFisicaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _atividade_fisica_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atividade-fisica-routing.module */ "KMGX");
/* harmony import */ var _atividade_fisica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atividade-fisica.page */ "98lN");







let AtividadeFisicaPageModule = class AtividadeFisicaPageModule {
};
AtividadeFisicaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _atividade_fisica_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtividadeFisicaPageRoutingModule"]
        ],
        declarations: [_atividade_fisica_page__WEBPACK_IMPORTED_MODULE_6__["AtividadeFisicaPage"]]
    })
], AtividadeFisicaPageModule);



/***/ })

}]);
//# sourceMappingURL=atividade-fisica-atividade-fisica-module-es2015.js.map