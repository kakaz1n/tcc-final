(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incluir-exercicio-incluir-exercicio-module"],{

/***/ "EyeZ":
/*!***********************************************************************!*\
  !*** ./src/app/incluir-exercicio/incluir-exercicio-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: IncluirExercicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncluirExercicioPageRoutingModule", function() { return IncluirExercicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incluir-exercicio.page */ "VYka");




const routes = [
    {
        path: '',
        component: _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_3__["IncluirExercicioPage"]
    }
];
let IncluirExercicioPageRoutingModule = class IncluirExercicioPageRoutingModule {
};
IncluirExercicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncluirExercicioPageRoutingModule);



/***/ }),

/***/ "KxvI":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incluir-exercicio/incluir-exercicio.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>incluir_exercicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "VYka":
/*!*************************************************************!*\
  !*** ./src/app/incluir-exercicio/incluir-exercicio.page.ts ***!
  \*************************************************************/
/*! exports provided: IncluirExercicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncluirExercicioPage", function() { return IncluirExercicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_incluir_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./incluir-exercicio.page.html */ "KxvI");
/* harmony import */ var _incluir_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incluir-exercicio.page.scss */ "iGg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let IncluirExercicioPage = class IncluirExercicioPage {
    constructor() { }
    ngOnInit() {
    }
};
IncluirExercicioPage.ctorParameters = () => [];
IncluirExercicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-incluir-exercicio',
        template: _raw_loader_incluir_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_incluir_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IncluirExercicioPage);



/***/ }),

/***/ "iGg/":
/*!***************************************************************!*\
  !*** ./src/app/incluir-exercicio/incluir-exercicio.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNsdWlyLWV4ZXJjaWNpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "m5uy":
/*!***************************************************************!*\
  !*** ./src/app/incluir-exercicio/incluir-exercicio.module.ts ***!
  \***************************************************************/
/*! exports provided: IncluirExercicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncluirExercicioPageModule", function() { return IncluirExercicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _incluir_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incluir-exercicio-routing.module */ "EyeZ");
/* harmony import */ var _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incluir-exercicio.page */ "VYka");







let IncluirExercicioPageModule = class IncluirExercicioPageModule {
};
IncluirExercicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _incluir_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncluirExercicioPageRoutingModule"]
        ],
        declarations: [_incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_6__["IncluirExercicioPage"]]
    })
], IncluirExercicioPageModule);



/***/ })

}]);
//# sourceMappingURL=incluir-exercicio-incluir-exercicio-module-es2015.js.map