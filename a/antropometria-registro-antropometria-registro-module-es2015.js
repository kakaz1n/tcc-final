(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antropometria-registro-antropometria-registro-module"],{

/***/ "0CWk":
/*!***********************************************************************!*\
  !*** ./src/app/antropometria-registro/antropometria-registro.page.ts ***!
  \***********************************************************************/
/*! exports provided: AntropometriaRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntropometriaRegistroPage", function() { return AntropometriaRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_antropometria_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./antropometria-registro.page.html */ "s5p9");
/* harmony import */ var _antropometria_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antropometria-registro.page.scss */ "PeTp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");









let AntropometriaRegistroPage = class AntropometriaRegistroPage {
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
            peso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            altura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cintura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quadril: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
        this.navCtrl.navigateBack('/antropometria-introducao');
    }
    Registrar_antro(value) {
        this.authService.Registrar_antro(this.uid, value);
        this.goFlexibilidade();
    }
    goFlexibilidade() {
        this.navCtrl.navigateForward('/flexibilidade-introducao');
    }
};
AntropometriaRegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AntropometriaRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-antropometria-registro',
        template: _raw_loader_antropometria_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_antropometria_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AntropometriaRegistroPage);



/***/ }),

/***/ "1Zv8":
/*!*************************************************************************!*\
  !*** ./src/app/antropometria-registro/antropometria-registro.module.ts ***!
  \*************************************************************************/
/*! exports provided: AntropometriaRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntropometriaRegistroPageModule", function() { return AntropometriaRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _antropometria_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./antropometria-registro-routing.module */ "iM/H");
/* harmony import */ var _antropometria_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antropometria-registro.page */ "0CWk");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");









let AntropometriaRegistroPageModule = class AntropometriaRegistroPageModule {
};
AntropometriaRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _antropometria_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["AntropometriaRegistroPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_antropometria_registro_page__WEBPACK_IMPORTED_MODULE_6__["AntropometriaRegistroPage"]]
    })
], AntropometriaRegistroPageModule);



/***/ }),

/***/ "PeTp":
/*!*************************************************************************!*\
  !*** ./src/app/antropometria-registro/antropometria-registro.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15pt;\n  font-weight: bold;\n}\n\nion-input .text-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFudHJvcG9tZXRyaWEtcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVDO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUk7RUFBYSxrQkFBQTtBQUVqQiIsImZpbGUiOiJhbnRyb3BvbWV0cmlhLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24taW5wdXR7IFxyXG4gICAgLnRleHQtaW5wdXR7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "iM/H":
/*!*********************************************************************************!*\
  !*** ./src/app/antropometria-registro/antropometria-registro-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AntropometriaRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntropometriaRegistroPageRoutingModule", function() { return AntropometriaRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _antropometria_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./antropometria-registro.page */ "0CWk");




const routes = [
    {
        path: '',
        component: _antropometria_registro_page__WEBPACK_IMPORTED_MODULE_3__["AntropometriaRegistroPage"]
    }
];
let AntropometriaRegistroPageRoutingModule = class AntropometriaRegistroPageRoutingModule {
};
AntropometriaRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AntropometriaRegistroPageRoutingModule);



/***/ }),

/***/ "s5p9":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antropometria-registro/antropometria-registro.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-top: 2%;margin-left: 2%;\">\n      <ion-label style=\"font-size:xx-large;text-align: center;\">\n        Antropometria\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n\n    <ion-item lines=\"none\" color=\"transparent\">\n      <h2 style=\"text-align: center;\">\n        Índice de massa corpórea e proporção entre cintura e quadril\n      </h2>\n    </ion-item>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_antro(validations_form.value)\">\n      <h3>Peso em kg</h3>\n      <ion-input placeholder=\"94\" type=\"number\" style=\"font-size: xx-large;\"formControlName=\"peso\" class=\"form-controll\" required ></ion-input>\n      <h3>Altura em metros</h3>\n      <ion-input placeholder=\"1,60\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"altura\" class=\"form-controll\" required step=\"0.01\"></ion-input>\n      <h3>Medida da cintura</h3>\n      <ion-input placeholder=\"85\" type=\"number\" style=\"font-size: xx-large;\" step=\"0.1\"formControlName=\"cintura\" class=\"form-controll\" required></ion-input>\n      <h3>Medida do quadril</h3>\n      <ion-input placeholder=\"100\"  type=\"number\" style=\"font-size: xx-large;\" step=\"0.1\" formControlName=\"quadril\" class=\"form-controll\" required></ion-input>\n\n      <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Registrar</ion-button>\n    </form>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=antropometria-registro-antropometria-registro-module-es2015.js.map