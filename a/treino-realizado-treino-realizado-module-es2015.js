(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treino-realizado-treino-realizado-module"],{

/***/ "9DK6":
/*!*********************************************************************!*\
  !*** ./src/app/treino-realizado/treino-realizado-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TreinoRealizadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinoRealizadoPageRoutingModule", function() { return TreinoRealizadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _treino_realizado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treino-realizado.page */ "KuZU");




const routes = [
    {
        path: '',
        component: _treino_realizado_page__WEBPACK_IMPORTED_MODULE_3__["TreinoRealizadoPage"]
    }
];
let TreinoRealizadoPageRoutingModule = class TreinoRealizadoPageRoutingModule {
};
TreinoRealizadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TreinoRealizadoPageRoutingModule);



/***/ }),

/***/ "KuZU":
/*!***********************************************************!*\
  !*** ./src/app/treino-realizado/treino-realizado.page.ts ***!
  \***********************************************************/
/*! exports provided: TreinoRealizadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinoRealizadoPage", function() { return TreinoRealizadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_treino_realizado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./treino-realizado.page.html */ "ixFu");
/* harmony import */ var _treino_realizado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treino-realizado.page.scss */ "oNvR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let TreinoRealizadoPage = class TreinoRealizadoPage {
    constructor(actRoute, authService, navCtrl, datePipe) {
        this.actRoute = actRoute;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        this.data3 = new Date(this.actRoute.snapshot.paramMap.get('data'));
        this.data2 = (this.datePipe.transform(this.data3, "dd/MM/yyyy")).toString();
        this.data = this.actRoute.snapshot.paramMap.get('data');
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log(this.uid);
                console.log(this.data);
                let a = this.authService.getTreino_realizado2(this.uid, this.data);
                a.snapshotChanges().subscribe(res => {
                    const data = res.payload.toJSON();
                    console.log(data);
                    this.semana = data['semana'];
                    this.atual_aero = data['atual_aero'];
                    this.max_aero = data['max_aero'];
                    this.atual_resis = data['atual_resis'];
                    this.max_resis = data['max_resis'];
                    this.atual_along = data['atual_along'];
                    this.max_along = data['max_along'];
                    this.atual_along_final = data['atual_along_final'];
                    this.max_along_final = data['max_along_final'];
                    this.etapa = data['etapa'];
                    if (this.atual_aero == 0)
                        this.cor_aero = 'medium';
                    else if (this.atual_aero < this.max_aero)
                        this.cor_aero = 'warning';
                    else
                        this.cor_aero = 'tertiary';
                    if (this.atual_along == 0)
                        this.cor_along = "medium";
                    else if (this.atual_along < this.max_along)
                        this.cor_along = "warning";
                    else
                        this.cor_along = "tertiary";
                    if (this.atual_along_final == 0)
                        this.cor_along_final = "medium";
                    else if (this.atual_along_final < this.max_along_final)
                        this.cor_along_final = "warning";
                    else
                        this.cor_along_final = "tertiary";
                    if (this.atual_resis == 0)
                        this.cor_resis = "medium";
                    else if (this.atual_resis < this.max_resis)
                        this.cor_resis = "warning";
                    else
                        this.cor_resis = "tertiary";
                });
            }
        });
    }
    ngOnInit() {
    }
    voltar() {
        this.navCtrl.navigateBack('treinos-realizados');
    }
};
TreinoRealizadoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
TreinoRealizadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-treino-realizado',
        template: _raw_loader_treino_realizado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_treino_realizado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TreinoRealizadoPage);



/***/ }),

/***/ "Ube8":
/*!*************************************************************!*\
  !*** ./src/app/treino-realizado/treino-realizado.module.ts ***!
  \*************************************************************/
/*! exports provided: TreinoRealizadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinoRealizadoPageModule", function() { return TreinoRealizadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _treino_realizado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treino-realizado-routing.module */ "9DK6");
/* harmony import */ var _treino_realizado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treino-realizado.page */ "KuZU");







let TreinoRealizadoPageModule = class TreinoRealizadoPageModule {
};
TreinoRealizadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _treino_realizado_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreinoRealizadoPageRoutingModule"]
        ],
        declarations: [_treino_realizado_page__WEBPACK_IMPORTED_MODULE_6__["TreinoRealizadoPage"]]
    })
], TreinoRealizadoPageModule);



/***/ }),

/***/ "ixFu":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treino-realizado/treino-realizado.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;font-size: Xx-large;width:100%;\">\n      <ion-label>\n        Treino Realizado\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"no-scroll\" style=\"display: block;text-align: center;\">\n  <h3>Semana {{this.semana}}</h3>\n  <h4>Data {{this.data2}}</h4>\n  <ion-button     style=\"border-radius: 36.5pt; width: 80%;height: 80px;text-align: center;margin:5%; font-size:larger\"\n    [color]=\"cor_along\"  [routerLink]=\"['/treino/','Alongamento',semana,data]\" [disabled]=\"false\">\n    Alongamento Inicial<br>\n    ({{this.atual_along}}/{{this.max_along}})</ion-button>\n    \n  <ion-button style=\"border-radius: 36.5pt; width: 80%;height: 80px;text-align: center;margin:5%;font-size: xx-large;\"\n  [color]=\"cor_aero\"  [routerLink]=\"['/treino/','Aerobico',semana,data]\" [disabled]=\"false\">\n  Aeróbio<br>\n  ({{this.atual_aero}}/{{this.max_aero}})</ion-button>\n  <ion-button style=\"border-radius: 36.5pt; width: 80%;height: 80px;text-align: center;margin:5%;font-size: xx-large;\"\n    [color]=\"cor_resis\"  [routerLink]=\"['/treino/','Resistido',semana,data]\" [disabled]=\"false\">\n    Resistido<br>\n    ({{this.atual_resis}}/{{this.max_resis}})</ion-button>\n  <ion-button\n    style=\"border-radius: 36.5pt; width: 80%;height: 80px;text-align: center;margin:5%; font-size:larger\"\n    [color]=\"cor_along_final\"  [routerLink]=\"['/treino/', 'Alongamento final',semana,data]\" [disabled]=\"false\">\n    Alongamento Final<br>\n    ({{this.atual_along_final}}/{{this.max_along_final}})</ion-button>\n\n\n</ion-content>");

/***/ }),

/***/ "oNvR":
/*!*************************************************************!*\
  !*** ./src/app/treino-realizado/treino-realizado.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-scroll {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyZWluby1yZWFsaXphZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSiIsImZpbGUiOiJ0cmVpbm8tcmVhbGl6YWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5uby1zY3JvbGwge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=treino-realizado-treino-realizado-module-es2015.js.map