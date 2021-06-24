(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flexibilidade-introducao-flexibilidade-introducao-module"],{

/***/ "7/d5":
/*!*****************************************************************************!*\
  !*** ./src/app/flexibilidade-introducao/flexibilidade-introducao.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZsZXhpYmlsaWRhZGUtaW50cm9kdWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUc7RUFDQywyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUxJO0VBQ0UsYUFBQTtBQU9OOztBQUFHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUdGIiwiZmlsZSI6ImZsZXhpYmlsaWRhZGUtaW50cm9kdWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pb24tY29udGVudCB7ICAgIFxyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICAuY2VudHJhbGl6YWRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcbi55b3VyLWNsYXNzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "AhqA":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flexibilidade-introducao/flexibilidade-introducao.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-top: 2%;margin-left: 2%;\">\n      <ion-label style=\"font-size:xx-large;text-align: center;\">\n        Flexibilidade\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <ion-item lines=\"none\" color=\"transparent\">\n    <div display=\"block\">\n      <h2 style=\"text-align: center;\">\n        Sentar e alcançar <ion-button color=\"warning\"*ngIf=\"idade<50\" (click)=\"pular()\">Pular exercício</ion-button>\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Régua graduada de 1 metro. <br>\n        • Fita adesiva<br>\n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Fixe a régua no chão colocando um pedaço de fita adesiva de 30,5 centímetros na régua na altura dos 38\n        centímetros.<br>\n        • Aquecer-se, certificando-se de incluir o exercício de tocar os dedos dos pés na posição sentada.<br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n\n        1. Sentar-se no chão com a régua graduada de um metro entre as pernas ( o zero na sua direção ) e as plantas dos\n        pés separadas cerca\n        de 30,5 centímetros e niveladas de acordo com a fita adesiva que está na altura dos 38 centímetros da régua.<br>\n        2. Peça para um (a) amigo (a) colocar as mãos nos seus joelhos, fazendo uma leve pressão para mantê-los\n        abaixados quando você se\n        curvar para a frente.<br>\n\n        3. Coloque uma mão sobre a outra de forma que os dedos médios de ambas as mãos fiquem nivelados.<br>\n        4. Incline-se lentamente sobre a régua, alcançando o mais longe que puder. Fique nessa posição por dois\n        segundos.<br>\n        5. Anote a distância alcançada.<br>\n        6. Relaxe. Repita o movimento mais duas vezes.<br>\n        7. Anote a pontuação mais alta .<br>\n      </h4>\n    </div>\n  </ion-item>\n  <div class=\"centralizado\">\n    <ion-button full color=\"tertiary\" (click)=\"proxima_pagina()\">\n      Continuar</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "MF17":
/*!***************************************************************************!*\
  !*** ./src/app/flexibilidade-introducao/flexibilidade-introducao.page.ts ***!
  \***************************************************************************/
/*! exports provided: FlexibilidadeIntroducaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibilidadeIntroducaoPage", function() { return FlexibilidadeIntroducaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_flexibilidade_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./flexibilidade-introducao.page.html */ "AhqA");
/* harmony import */ var _flexibilidade_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flexibilidade-introducao.page.scss */ "7/d5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");









let FlexibilidadeIntroducaoPage = class FlexibilidadeIntroducaoPage {
    constructor(navCtrl, authService, dadosserv, toastController, db) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.db = db;
    }
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log("uid = " + this.uid);
                let a = this.db.object('usuarios/' + this.uid + "/dados");
                a.snapshotChanges().subscribe(res => {
                    const dados = res.payload.toJSON();
                    let now = Date.now().toString();
                    let dob = new Date(dados['dob']);
                    let a = Math.abs(Date.now() - dob.getTime());
                    this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
                    console.log(this.valor);
                });
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
        this.authService.setFlexibilidade1(this.uid);
        this.navCtrl.navigateForward('flexibilidade-registro');
    }
    pular() {
        this.authService.setFlexibilidade1(this.uid);
        this.authService.Registrar_Flexibilidade(this.uid, "pulado");
        this.navCtrl.navigateForward('dashboard');
    }
    voltar() {
        this.navCtrl.navigateBack('dashboard');
    }
};
FlexibilidadeIntroducaoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] }
];
FlexibilidadeIntroducaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flexibilidade-introducao',
        template: _raw_loader_flexibilidade_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_flexibilidade_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FlexibilidadeIntroducaoPage);



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

/***/ "mVKX":
/*!*****************************************************************************!*\
  !*** ./src/app/flexibilidade-introducao/flexibilidade-introducao.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FlexibilidadeIntroducaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibilidadeIntroducaoPageModule", function() { return FlexibilidadeIntroducaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _flexibilidade_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flexibilidade-introducao-routing.module */ "tDt2");
/* harmony import */ var _flexibilidade_introducao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flexibilidade-introducao.page */ "MF17");







let FlexibilidadeIntroducaoPageModule = class FlexibilidadeIntroducaoPageModule {
};
FlexibilidadeIntroducaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _flexibilidade_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__["FlexibilidadeIntroducaoPageRoutingModule"]
        ],
        declarations: [_flexibilidade_introducao_page__WEBPACK_IMPORTED_MODULE_6__["FlexibilidadeIntroducaoPage"]]
    })
], FlexibilidadeIntroducaoPageModule);



/***/ }),

/***/ "tDt2":
/*!*************************************************************************************!*\
  !*** ./src/app/flexibilidade-introducao/flexibilidade-introducao-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FlexibilidadeIntroducaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibilidadeIntroducaoPageRoutingModule", function() { return FlexibilidadeIntroducaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _flexibilidade_introducao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flexibilidade-introducao.page */ "MF17");




const routes = [
    {
        path: '',
        component: _flexibilidade_introducao_page__WEBPACK_IMPORTED_MODULE_3__["FlexibilidadeIntroducaoPage"]
    }
];
let FlexibilidadeIntroducaoPageRoutingModule = class FlexibilidadeIntroducaoPageRoutingModule {
};
FlexibilidadeIntroducaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FlexibilidadeIntroducaoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=flexibilidade-introducao-flexibilidade-introducao-module-es2015.js.map