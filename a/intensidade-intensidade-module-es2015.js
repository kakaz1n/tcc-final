(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intensidade-intensidade-module"],{

/***/ "7qJN":
/*!***************************************************!*\
  !*** ./src/app/intensidade/intensidade.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlbnNpZGFkZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "KM/J":
/*!*************************************************!*\
  !*** ./src/app/intensidade/intensidade.page.ts ***!
  \*************************************************/
/*! exports provided: IntensidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntensidadePage", function() { return IntensidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intensidade_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intensidade.page.html */ "tSoZ");
/* harmony import */ var _intensidade_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intensidade.page.scss */ "7qJN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let IntensidadePage = class IntensidadePage {
    constructor() { }
    ngOnInit() {
    }
};
IntensidadePage.ctorParameters = () => [];
IntensidadePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intensidade',
        template: _raw_loader_intensidade_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intensidade_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntensidadePage);



/***/ }),

/***/ "Y8/t":
/*!***************************************************!*\
  !*** ./src/app/intensidade/intensidade.module.ts ***!
  \***************************************************/
/*! exports provided: IntensidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntensidadePageModule", function() { return IntensidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _intensidade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intensidade-routing.module */ "pWgM");
/* harmony import */ var _intensidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intensidade.page */ "KM/J");







let IntensidadePageModule = class IntensidadePageModule {
};
IntensidadePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intensidade_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntensidadePageRoutingModule"]
        ],
        declarations: [_intensidade_page__WEBPACK_IMPORTED_MODULE_6__["IntensidadePage"]]
    })
], IntensidadePageModule);



/***/ }),

/***/ "pWgM":
/*!***********************************************************!*\
  !*** ./src/app/intensidade/intensidade-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IntensidadePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntensidadePageRoutingModule", function() { return IntensidadePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intensidade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intensidade.page */ "KM/J");




const routes = [
    {
        path: '',
        component: _intensidade_page__WEBPACK_IMPORTED_MODULE_3__["IntensidadePage"]
    }
];
let IntensidadePageRoutingModule = class IntensidadePageRoutingModule {
};
IntensidadePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntensidadePageRoutingModule);



/***/ }),

/***/ "tSoZ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intensidade/intensidade.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\" style=\"text-align: center;font-size: xx-large;\">\n      <ion-buttons slot=\"start\">\n        <ion-button href=\"/dashboard\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-label>\n        Intensidade de Treinamento\n      </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <h2 style=\"margin: 2%;\">Durante os exercícios, utilize a Escala de Percepção Subjetiva de Esforço para monitorar a intensidade de seu treino!</h2>\n  <ion-img style=\"width:300px;background-color: transparent;margin: 3%;\" src=\"../../assets/fotos/intensidade.png\">\n  </ion-img>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=intensidade-intensidade-module-es2015.js.map