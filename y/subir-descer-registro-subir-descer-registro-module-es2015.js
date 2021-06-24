(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subir-descer-registro-subir-descer-registro-module"],{

/***/ "2HNV":
/*!***********************************************************************!*\
  !*** ./src/app/subir-descer-registro/subir-descer-registro.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15pt;\n  font-weight: bold;\n}\n\nion-input .text-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YmlyLWRlc2Nlci1yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUM7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFSTtFQUFhLGtCQUFBO0FBRWpCIiwiZmlsZSI6InN1YmlyLWRlc2Nlci1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW9uLWlucHV0eyBcclxuICAgIC50ZXh0LWlucHV0eyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "8FIx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subir-descer-registro/subir-descer-registro.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 2%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Capacidade Aeróbica\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n\n      <h2 style=\"text-align: center;\">\n        Subir e descer um degrau \n      </h2>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_subir_descer(validations_form.value)\">\n      <h3>Número de vezes</h3>\n      <ion-input placeholder=\"50\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"subir_descer\" class=\"form-controll\" required ></ion-input>\n      <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Registrar</ion-button>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "elDg":
/*!*********************************************************************!*\
  !*** ./src/app/subir-descer-registro/subir-descer-registro.page.ts ***!
  \*********************************************************************/
/*! exports provided: SubirDescerRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerRegistroPage", function() { return SubirDescerRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subir_descer_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subir-descer-registro.page.html */ "8FIx");
/* harmony import */ var _subir_descer_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subir-descer-registro.page.scss */ "2HNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");









let SubirDescerRegistroPage = class SubirDescerRegistroPage {
    constructor(navCtrl, authService, formBuilder, dadosserv, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'flexoes': [
                {
                    type: 'required', message: 'É necessário aceitar essa opção.'
                },
            ],
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            subir_descer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
        this.navCtrl.navigateBack('/subir-descer');
    }
    Registrar_subir_descer(value) {
        this.authService.RegistrarSubirDescer(this.uid, value);
        this.goDashboard();
    }
    goDashboard() {
        this.navCtrl.navigateForward('/dashboard');
    }
};
SubirDescerRegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
SubirDescerRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subir-descer-registro',
        template: _raw_loader_subir_descer_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subir_descer_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubirDescerRegistroPage);



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

/***/ "j39Z":
/*!*******************************************************************************!*\
  !*** ./src/app/subir-descer-registro/subir-descer-registro-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SubirDescerRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerRegistroPageRoutingModule", function() { return SubirDescerRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subir_descer_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subir-descer-registro.page */ "elDg");




const routes = [
    {
        path: '',
        component: _subir_descer_registro_page__WEBPACK_IMPORTED_MODULE_3__["SubirDescerRegistroPage"]
    }
];
let SubirDescerRegistroPageRoutingModule = class SubirDescerRegistroPageRoutingModule {
};
SubirDescerRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubirDescerRegistroPageRoutingModule);



/***/ }),

/***/ "vWBW":
/*!***********************************************************************!*\
  !*** ./src/app/subir-descer-registro/subir-descer-registro.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubirDescerRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirDescerRegistroPageModule", function() { return SubirDescerRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subir_descer_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subir-descer-registro-routing.module */ "j39Z");
/* harmony import */ var _subir_descer_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subir-descer-registro.page */ "elDg");








let SubirDescerRegistroPageModule = class SubirDescerRegistroPageModule {
};
SubirDescerRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subir_descer_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubirDescerRegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_subir_descer_registro_page__WEBPACK_IMPORTED_MODULE_6__["SubirDescerRegistroPage"]]
    })
], SubirDescerRegistroPageModule);



/***/ })

}]);
//# sourceMappingURL=subir-descer-registro-subir-descer-registro-module-es2015.js.map