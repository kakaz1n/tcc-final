(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atividades-fisicas-realizadas-atividades-fisicas-realizadas-module"],{

/***/ "6ojn":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atividades-fisicas-realizadas/atividades-fisicas-realizadas.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goAtividadefisica()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\"\n      style=\"text-align: left;float: left;margin-top: 5%;margin-left: 5%; font-size: xx-large;font-weight: bold;\">\n      <ion-label>\n        Atividade Física\n      </ion-label>\n    </div>\n    <div style=\"float: left; text-align: justify;font-size: large;\">\n      Selecione a(s) atividade(s) física(s) que você realiza:\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" class=\"ion-content\" color=\"primary\">\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"caminhada\" (ionChange)=\"onTermsChecked($event)\"\n      color=\"secondary\">\n    </ion-checkbox>\n    <h3>Caminhada</h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;border-radius: 10%;margin-right: 5%;\"\n      (ionChange)=\"onTermsChecked($event)\" name=\"corrida\"color=\"secondary\">\n    </ion-checkbox>\n    <h3>Corrida </h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox class=\"checkbox-square\" style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\"\n      (ionChange)=\"onTermsChecked($event)\" color=\"secondary\" name=\"ciclismo\">\n    </ion-checkbox>\n    <h3>Ciclismo</h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"natacao\" (ionChange)=\"onTermsChecked($event)\"\n      color=\"secondary\">\n    </ion-checkbox>\n    <h3>Natação </h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"hidro\" (ionChange)=\"onTermsChecked($event)\"\n      color=\"secondary\">\n    </ion-checkbox>\n    <h3>Hidroginástica </h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"musculacao\" (ionChange)=\"onTermsChecked($event)\"\n      isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Musculação</h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"funcional\" (ionChange)=\"onTermsChecked($event)\"\n      isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Treinamento funcional</h3>\n  </div>\n  <div style=\"text-align: left;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;margin-right: 5%;\" name=\"pillates\" (ionChange)=\"onTermsChecked($event)\"\n      isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Pillates</h3>\n  </div>\n  <ion-item  color=\"transparent\">\n    <ion-label position=\"floating\" style=\"font-size:xx-large;\">Outra atividade</ion-label>\n    <ion-input type=\"text\"  placeholder=\"Alpinismo\" name=\"outra\" (ionChange)=\"onTermsChecked($event)\" ></ion-input>\n  </ion-item>\n  <ion-button full class=\"your-class\" color=\"secondary\" (click)=\"somar()\" [disabled]=\"!clicavel\">\n    Continuar\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "GRHD":
/*!*************************************************************************************!*\
  !*** ./src/app/atividades-fisicas-realizadas/atividades-fisicas-realizadas.page.ts ***!
  \*************************************************************************************/
/*! exports provided: AtividadesFisicasRealizadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesFisicasRealizadasPage", function() { return AtividadesFisicasRealizadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_atividades_fisicas_realizadas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./atividades-fisicas-realizadas.page.html */ "6ojn");
/* harmony import */ var _atividades_fisicas_realizadas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atividades-fisicas-realizadas.page.scss */ "crJf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dados.service */ "gMzz");







let AtividadesFisicasRealizadasPage = class AtividadesFisicasRealizadasPage {
    constructor(navCtrl, authService, dadosService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dadosService = dadosService;
        this.caminhada = false;
        this.corrida = false;
        this.ciclismo = false;
        this.natacao = false;
        this.hidro = false;
        this.musculacao = false;
        this.funcional = false;
        this.pillates = false;
        this.outra = '';
        this.clicavel = false;
        this.cont = 0;
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
    onTermsChecked($event) {
        if (($event.currentTarget.name) == "caminhada")
            this.caminhada = !this.caminhada;
        if (($event.currentTarget.name) == "corrida")
            this.corrida = !this.corrida;
        if (($event.currentTarget.name) == "ciclismo")
            this.ciclismo = !this.ciclismo;
        if (($event.currentTarget.name) == "natacao")
            this.natacao = !this.natacao;
        if (($event.currentTarget.name) == "hidro")
            this.hidro = !this.hidro;
        if (($event.currentTarget.name) == "musculacao")
            this.musculacao = !this.musculacao;
        if (($event.currentTarget.name) == "funcional")
            this.funcional = !this.funcional;
        if (($event.currentTarget.name) == "pillates")
            this.pillates = !this.pillates;
        if (($event.currentTarget.name) == "outra")
            this.outra = $event.currentTarget.value;
        if ($event.currentTarget.checked)
            this.cont++;
        else
            this.cont--;
        if (this.cont == 0 && this.outra != '')
            this.cont = 1;
        if (this.cont == 0 && this.outra != ' ')
            this.cont = 0;
        if (this.cont > 0)
            this.clicavel = true;
        else
            this.clicavel = false;
        if (this.cont < 0)
            this.cont = 0;
        console.log(this.cont);
    }
    somar() {
        if (this.cont) {
            //vai pra prox
            this.authService.setQuestionario4(this.uid, this.caminhada, this.ciclismo, this.corrida, this.natacao, this.hidro, this.musculacao, this.funcional, this.pillates, this.outra);
            this.goEstado_historico();
        }
    }
    goEstado_historico() {
        this.navCtrl.navigateForward('/estado-historico');
    }
    goAtividadefisica() {
        this.navCtrl.navigateForward('/atividade-fisica');
    }
};
AtividadesFisicasRealizadasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] }
];
AtividadesFisicasRealizadasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-atividades-fisicas-realizadas',
        template: _raw_loader_atividades_fisicas_realizadas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_atividades_fisicas_realizadas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AtividadesFisicasRealizadasPage);



/***/ }),

/***/ "aJx1":
/*!***********************************************************************************************!*\
  !*** ./src/app/atividades-fisicas-realizadas/atividades-fisicas-realizadas-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AtividadesFisicasRealizadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesFisicasRealizadasPageRoutingModule", function() { return AtividadesFisicasRealizadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _atividades_fisicas_realizadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atividades-fisicas-realizadas.page */ "GRHD");




const routes = [
    {
        path: '',
        component: _atividades_fisicas_realizadas_page__WEBPACK_IMPORTED_MODULE_3__["AtividadesFisicasRealizadasPage"]
    }
];
let AtividadesFisicasRealizadasPageRoutingModule = class AtividadesFisicasRealizadasPageRoutingModule {
};
AtividadesFisicasRealizadasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AtividadesFisicasRealizadasPageRoutingModule);



/***/ }),

/***/ "c0Xa":
/*!***************************************************************************************!*\
  !*** ./src/app/atividades-fisicas-realizadas/atividades-fisicas-realizadas.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AtividadesFisicasRealizadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadesFisicasRealizadasPageModule", function() { return AtividadesFisicasRealizadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _atividades_fisicas_realizadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atividades-fisicas-realizadas-routing.module */ "aJx1");
/* harmony import */ var _atividades_fisicas_realizadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atividades-fisicas-realizadas.page */ "GRHD");







let AtividadesFisicasRealizadasPageModule = class AtividadesFisicasRealizadasPageModule {
};
AtividadesFisicasRealizadasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _atividades_fisicas_realizadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtividadesFisicasRealizadasPageRoutingModule"]
        ],
        declarations: [_atividades_fisicas_realizadas_page__WEBPACK_IMPORTED_MODULE_6__["AtividadesFisicasRealizadasPage"]]
    })
], AtividadesFisicasRealizadasPageModule);



/***/ }),

/***/ "crJf":
/*!***************************************************************************************!*\
  !*** ./src/app/atividades-fisicas-realizadas/atividades-fisicas-realizadas.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\n.your-class {\n  position: static;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGF0aXZpZGFkZXMtZmlzaWNhcy1yZWFsaXphZGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFBd0IsYUFBQTtFQUN4QixtQkFBQTtBQU1GOztBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBT0oiLCJmaWxlIjoiYXRpdmlkYWRlcy1maXNpY2FzLXJlYWxpemFkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmVzdGFkb3tcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jaWRhZGV7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uZG9ie1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5idXR0b24uY2VudHJhbGl6YWRve1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzYuNXB4O2Rpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9IFxyXG4gIC55b3VyLWNsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

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
//# sourceMappingURL=atividades-fisicas-realizadas-atividades-fisicas-realizadas-module-es2015.js.map