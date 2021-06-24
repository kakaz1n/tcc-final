(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aerobica-registro-aerobica-registro-module"],{

/***/ "1w0S":
/*!***************************************************************!*\
  !*** ./src/app/aerobica-registro/aerobica-registro.module.ts ***!
  \***************************************************************/
/*! exports provided: AerobicaRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerobicaRegistroPageModule", function() { return AerobicaRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _aerobica_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aerobica-registro-routing.module */ "dCU0");
/* harmony import */ var _aerobica_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aerobica-registro.page */ "K8L9");








let AerobicaRegistroPageModule = class AerobicaRegistroPageModule {
};
AerobicaRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _aerobica_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["AerobicaRegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_aerobica_registro_page__WEBPACK_IMPORTED_MODULE_6__["AerobicaRegistroPage"]]
    })
], AerobicaRegistroPageModule);



/***/ }),

/***/ "EIdX":
/*!***************************************************************!*\
  !*** ./src/app/aerobica-registro/aerobica-registro.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15pt;\n  font-weight: bold;\n}\n\nion-input .text-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFlcm9iaWNhLXJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQWEsa0JBQUE7QUFFakIiLCJmaWxlIjoiYWVyb2JpY2EtcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuIC5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dHsgXHJcbiAgICAudGV4dC1pbnB1dHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "K8L9":
/*!*************************************************************!*\
  !*** ./src/app/aerobica-registro/aerobica-registro.page.ts ***!
  \*************************************************************/
/*! exports provided: AerobicaRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerobicaRegistroPage", function() { return AerobicaRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_aerobica_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./aerobica-registro.page.html */ "tQkZ");
/* harmony import */ var _aerobica_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aerobica-registro.page.scss */ "EIdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










let AerobicaRegistroPage = class AerobicaRegistroPage {
    constructor(navCtrl, formBuilder, authService, dadosserv, toastController, dadosService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.dadosService = dadosService;
        this.idade = 0;
        this.ciclismo = '';
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'batimentos': [
                {
                    type: 'required', message: 'É necessário preencher esse campo.'
                },
            ],
            'caminhada': [
                {
                    type: 'required', message: 'É necessário preencher esse campo.'
                },
            ]
        };
    }
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log("uid = " + this.uid);
                this.getIdade_sexo();
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
        this.validations_form = this.formBuilder.group({
            caminhada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            batimentos: [''],
        });
    }
    getIdade_sexo() {
        console.log(this.uid);
        console.log("a");
        let a = this.dadosService.getBooking(this.uid);
        console.log(a);
        a.snapshotChanges().subscribe(res => {
            const data = res.payload.toJSON();
            console.log(data);
            data['email'];
            console.log(Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date, 'yyyy/MM/dd', 'en'));
            let dob = new Date(data['dados']['dob']);
            let y = Math.abs(Date.now() - dob.getTime());
            this.idade = Math.floor((y / (1000 * 3600 * 24)) / 365);
            this.sexo = data['dados']['sexo'];
            console.log(this.idade);
            console.log(this.sexo);
        });
        let b = this.dadosService.pegarQuestionario(this.uid);
        b.snapshotChanges().subscribe(res => {
            const data = res.payload.toJSON();
            this.resposta = data['questionarios']['questionario3']['resposta'];
            this.ciclismo = data['questionarios']['questionario4']['ciclismo'];
            this.corrida = data['questionarios']['questionario4']['corrida'];
            console.log(this.resposta);
            console.log(this.ciclismo);
            console.log(this.corrida);
        });
        if (this.idade <= 50 && (this.resposta.toString() == 'nao' || (this.resposta.toString() == 'sim' && (!this.corrida && !this.ciclismo))))
            this.teste = "Rockport";
        else if (this.idade > 50)
            this.teste = "caminhada";
        else if (this.idade <= 50 && (this.resposta.toString() == 'sim' && (this.corrida || this.ciclismo)))
            this.teste = "Cooper";
    }
    Registrar_aero(value) {
        this.authService.Registrar_aero(this.uid, value, this.teste);
        this.goDashboard();
    }
    goDashboard() {
        this.navCtrl.navigateForward('/dashboard');
    }
    voltar() {
        this.navCtrl.navigateBack('aerobica-introducao');
    }
};
AerobicaRegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] }
];
AerobicaRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aerobica-registro',
        template: _raw_loader_aerobica_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aerobica_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AerobicaRegistroPage);



/***/ }),

/***/ "dCU0":
/*!***********************************************************************!*\
  !*** ./src/app/aerobica-registro/aerobica-registro-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AerobicaRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerobicaRegistroPageRoutingModule", function() { return AerobicaRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aerobica_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aerobica-registro.page */ "K8L9");




const routes = [
    {
        path: '',
        component: _aerobica_registro_page__WEBPACK_IMPORTED_MODULE_3__["AerobicaRegistroPage"]
    }
];
let AerobicaRegistroPageRoutingModule = class AerobicaRegistroPageRoutingModule {
};
AerobicaRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AerobicaRegistroPageRoutingModule);



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

/***/ "tQkZ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aerobica-registro/aerobica-registro.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 2%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Capacidade Aeróbica<br><br>\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollY=\"false\"\n fullscreen=\"true\" color=\"primary\" class=\"ion-content\">  \n\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n    <div *ngIf=\"idade > 50\">\n      <!-- homens < 50-->\n      <h2 style=\"text-align: center;\">\n        Teste de caminhada de 6 minutos\n      </h2>\n      <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_aero(validations_form.value)\">\n        <h3>Distância percorrida em metros</h3>\n        <ion-input placeholder=\"10\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"caminhada\" class=\"form-controll\" required ></ion-input>\n        <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n          Registrar</ion-button>\n      </form>    \n    </div>\n    <div display=\"block\" *ngIf=\"idade <= 50 && (resposta == 'nao' || (resposta =='sim' && (!corrida && !ciclismo)))\">\n      <!-- mulheres < 50-->\n      <h2 style=\"text-align: center;\">\n        Caminhada Rockport de 1.600 metros\n      </h2>\n      <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_aero(validations_form.value)\">\n        <h3>Tempo de caminhada em minutos</h3>\n        <ion-input placeholder=\"10\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"caminhada\" class=\"form-controll\" required ></ion-input>\n        <h3>Número de batimentos cardíacos (bpm)</h3>\n        <ion-input placeholder=\"88\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"batimentos\" class=\"form-controll\" required ></ion-input>\n        <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n          Registrar</ion-button>\n      </form>     \n    </div>\n    <div display=\"block\" *ngIf=\"idade <= 50 && (resposta == 'sim' && (corrida || ciclismo))\">\n      <!-- mulheres < 50-->\n      <h2 style=\"text-align: center;\">\n        Teste de Cooper\n      </h2> \n      <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_aero(validations_form.value)\">\n        <h3>Distância percorrida em metros</h3>\n        <ion-input placeholder=\"10\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"caminhada\" class=\"form-controll\" required ></ion-input>\n        <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n          Registrar</ion-button>\n      </form>   \n    </div>\n    \n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=aerobica-registro-aerobica-registro-module-es2015.js.map