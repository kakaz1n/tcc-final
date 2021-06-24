(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sentar-levantar-registro-sentar-levantar-registro-module"],{

/***/ "5eC4":
/*!*****************************************************************************!*\
  !*** ./src/app/sentar-levantar-registro/sentar-levantar-registro.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW50YXItbGV2YW50YXItcmVnaXN0cm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YUVS":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sentar-levantar-registro/sentar-levantar-registro.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 5%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Funcional\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n\n      <h2 style=\"text-align: center;\">\n        Sentar e Levantar\n      </h2>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_func1(validations_form.value)\">\n      <h3>Número de repetições</h3>\n      <ion-input placeholder=\"50\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"tempo\" class=\"form-controll\" required ></ion-input>\n      <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Registrar</ion-button>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Yfg5":
/*!*****************************************************************************!*\
  !*** ./src/app/sentar-levantar-registro/sentar-levantar-registro.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SentarLevantarRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentarLevantarRegistroPageModule", function() { return SentarLevantarRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sentar_levantar_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sentar-levantar-registro-routing.module */ "dxWy");
/* harmony import */ var _sentar_levantar_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sentar-levantar-registro.page */ "vd/U");








let SentarLevantarRegistroPageModule = class SentarLevantarRegistroPageModule {
};
SentarLevantarRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sentar_levantar_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["SentarLevantarRegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_sentar_levantar_registro_page__WEBPACK_IMPORTED_MODULE_6__["SentarLevantarRegistroPage"]]
    })
], SentarLevantarRegistroPageModule);



/***/ }),

/***/ "dxWy":
/*!*************************************************************************************!*\
  !*** ./src/app/sentar-levantar-registro/sentar-levantar-registro-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SentarLevantarRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentarLevantarRegistroPageRoutingModule", function() { return SentarLevantarRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sentar_levantar_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sentar-levantar-registro.page */ "vd/U");




const routes = [
    {
        path: '',
        component: _sentar_levantar_registro_page__WEBPACK_IMPORTED_MODULE_3__["SentarLevantarRegistroPage"]
    }
];
let SentarLevantarRegistroPageRoutingModule = class SentarLevantarRegistroPageRoutingModule {
};
SentarLevantarRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SentarLevantarRegistroPageRoutingModule);



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

/***/ "vd/U":
/*!***************************************************************************!*\
  !*** ./src/app/sentar-levantar-registro/sentar-levantar-registro.page.ts ***!
  \***************************************************************************/
/*! exports provided: SentarLevantarRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentarLevantarRegistroPage", function() { return SentarLevantarRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sentar_levantar_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sentar-levantar-registro.page.html */ "YUVS");
/* harmony import */ var _sentar_levantar_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sentar-levantar-registro.page.scss */ "5eC4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");









let SentarLevantarRegistroPage = class SentarLevantarRegistroPage {
    constructor(navCtrl, authService, formBuilder, dadosserv, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'tempo': [
                {
                    type: 'required', message: 'É necessário aceitar essa opção.'
                },
            ],
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            tempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
    voltar() {
        this.navCtrl.navigateBack('/sentar-levantar-introducao');
    }
    Registrar_func1(value) {
        this.authService.RegistrarFunc4(this.uid, value);
        this.goDashboard();
    }
    goDashboard() {
        this.navCtrl.navigateForward('/dashboard');
    }
};
SentarLevantarRegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
SentarLevantarRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sentar-levantar-registro',
        template: _raw_loader_sentar_levantar_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sentar_levantar_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SentarLevantarRegistroPage);



/***/ })

}]);
//# sourceMappingURL=sentar-levantar-registro-sentar-levantar-registro-module-es2015.js.map