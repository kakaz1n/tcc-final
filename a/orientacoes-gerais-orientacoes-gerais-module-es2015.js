(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orientacoes-gerais-orientacoes-gerais-module"],{

/***/ "3Zpo":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orientacoes-gerais/orientacoes-gerais.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom: 5%;margin-left: 10%;\">\n      <ion-label style=\"font-size:xx-large;text-align: center;\">\n        Orientações Gerais\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"proxima_pagina()\">\n    <ion-item lines=\"none\" color=\"transparent\">\n      <div display=\"block\">\n        <h3 style=\"text-align: justify;\">\n          Aconselha-se a realização de todos os testes no mesmo dia. Entretanto, caso não tenha tempo disponível ou se canse muito durante a realização dos mesmos, você pode interromper e continuar em outro dia de onde parou.\n        </h3>\n        <h4 style=\"text-align: justify;text-justify: distribute\">\n          Preparação<br>\n          - Utilize roupas e calçados (tênis) confortáveis e adequadas para prática de atividade física;<br>\n          - Evitar fumar, comer e tomar café (ou qualquer bebida que contenha cafeína ou estimulante) nas duas horas que antecedem os testes;<br>\n          - Se alimentar pelo menos duas horas antes dos testes (não fazer os testes em jejum);<br>\n          - Não consuma bebidas alcóolicas no dia do teste, bem como no dia anterior;<br>\n          - Não realize atividade física vigorosa no dia do teste, bem como no dia anterior;<br>\n          - Caso utilize medicamentos de forma regular, TOME-OS NORMALMENTE e no horário de costume; e<br>\n          - Há testes que requerem a medida da sua pulsação, o que deve ser praticado com antecedência(veja vídeo de como medir a sua pulsação no video abaixo) .              <br>\n          <iframe width=\"100%\"  src=\"https://www.youtube.com/embed/QWw-6HqEU-w\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </h4>\n        </div>\n    </ion-item>\n\n    <div style=\" height: 50%;width:100%;margin-left: 25%;\">\n      <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"\n        fromControlName=\"termos\" class=\"form-controll\" color=\"transparent\" name=\"termos\"></ion-checkbox>\n\n      <h2 style=\"margin-left: 15%;font-size: x-large;\">Entendi</h2>\n    </div>\n    <div class=\"estado\">\n      <ion-button (click)=\"voltar()\" style=\"width: 70%;margin-left: 20%;\" color=\"danger\">\n        Voltar</ion-button>\n    </div>\n    <div class=\"cidade\">\n      <ion-button  style=\"width: 70%;margin-left: 10%;\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Continuar</ion-button>\n    </div>\n\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "5tn6":
/*!*****************************************************************!*\
  !*** ./src/app/orientacoes-gerais/orientacoes-gerais.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrientacoesGeraisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientacoesGeraisPageModule", function() { return OrientacoesGeraisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orientacoes_gerais_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orientacoes-gerais-routing.module */ "QQ5D");
/* harmony import */ var _orientacoes_gerais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orientacoes-gerais.page */ "ZqF2");








let OrientacoesGeraisPageModule = class OrientacoesGeraisPageModule {
};
OrientacoesGeraisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orientacoes_gerais_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrientacoesGeraisPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_orientacoes_gerais_page__WEBPACK_IMPORTED_MODULE_6__["OrientacoesGeraisPage"]]
    })
], OrientacoesGeraisPageModule);



/***/ }),

/***/ "KlVQ":
/*!*****************************************************************!*\
  !*** ./src/app/orientacoes-gerais/orientacoes-gerais.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\na {\n  background-color: transparent;\n  color: white;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yaWVudGFjb2VzLWdlcmFpcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRztFQUNDLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0ksNkJBQUE7RUFDRixZQUFBO0FBR0Y7O0FBREE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFQSTtFQUNFLGFBQUE7QUFTTiIsImZpbGUiOiJvcmllbnRhY29lcy1nZXJhaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lc3RhZG97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5jaWRhZGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "QQ5D":
/*!*************************************************************************!*\
  !*** ./src/app/orientacoes-gerais/orientacoes-gerais-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OrientacoesGeraisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientacoesGeraisPageRoutingModule", function() { return OrientacoesGeraisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orientacoes_gerais_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientacoes-gerais.page */ "ZqF2");




const routes = [
    {
        path: '',
        component: _orientacoes_gerais_page__WEBPACK_IMPORTED_MODULE_3__["OrientacoesGeraisPage"]
    }
];
let OrientacoesGeraisPageRoutingModule = class OrientacoesGeraisPageRoutingModule {
};
OrientacoesGeraisPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrientacoesGeraisPageRoutingModule);



/***/ }),

/***/ "ZqF2":
/*!***************************************************************!*\
  !*** ./src/app/orientacoes-gerais/orientacoes-gerais.page.ts ***!
  \***************************************************************/
/*! exports provided: OrientacoesGeraisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientacoesGeraisPage", function() { return OrientacoesGeraisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orientacoes_gerais_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orientacoes-gerais.page.html */ "3Zpo");
/* harmony import */ var _orientacoes_gerais_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orientacoes-gerais.page.scss */ "KlVQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");









let OrientacoesGeraisPage = class OrientacoesGeraisPage {
    constructor(navCtrl, authService, formBuilder, dadosserv, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'termos': [
                {
                    type: 'required', message: 'É necessário aceitar essa opção.'
                },
                {
                    type: 'pattern', message: 'É necessário aceitar essa opção.'
                }
            ],
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            termos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('true')
                ])]
        });
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
    onTermsChecked($event) {
        console.log($event.currentTarget.checked);
        this.validations_form.patchValue({ termos: $event.currentTarget.checked });
        console.log(this.validations_form);
    }
    proxima_pagina() {
        console.log(this.uid);
        this.authService.setOrientacoes_gerais(this.uid);
        this.navCtrl.navigateForward('/antropometria-introducao');
    }
    voltar() {
        this.navCtrl.navigateBack('/treino-iniciar');
    }
};
OrientacoesGeraisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
OrientacoesGeraisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orientacoes-gerais',
        template: _raw_loader_orientacoes_gerais_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orientacoes_gerais_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrientacoesGeraisPage);



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



/***/ })

}]);
//# sourceMappingURL=orientacoes-gerais-orientacoes-gerais-module-es2015.js.map