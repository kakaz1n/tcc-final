(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloud-list-cloud-list-module"],{

/***/ "EF2o":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloud-list/cloud-list.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cloud Files</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let f of cloudFiles\">\n      <ion-button slot=\"start\" (click)=\"openExternal(f.url)\">\n        <ion-icon name=\"open\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      \n      <ion-label class=\"ion-text-wrap\">\n        {{ f.name }}\n        <p>{{ f.full }}</p>\n      </ion-label>\n \n      <ion-button slot=\"end\" (click)=\"deleteFile(f.ref)\" color=\"danger\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "K2eC":
/*!*************************************************!*\
  !*** ./src/app/cloud-list/cloud-list.module.ts ***!
  \*************************************************/
/*! exports provided: CloudListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPageModule", function() { return CloudListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-list-routing.module */ "zRBi");
/* harmony import */ var _cloud_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloud-list.page */ "z1Go");







let CloudListPageModule = class CloudListPageModule {
};
CloudListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloudListPageRoutingModule"]
        ],
        declarations: [_cloud_list_page__WEBPACK_IMPORTED_MODULE_6__["CloudListPage"]]
    })
], CloudListPageModule);



/***/ }),

/***/ "ef5Z":
/*!*************************************************!*\
  !*** ./src/app/cloud-list/cloud-list.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG91ZC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "z1Go":
/*!***********************************************!*\
  !*** ./src/app/cloud-list/cloud-list.page.ts ***!
  \***********************************************/
/*! exports provided: CloudListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPage", function() { return CloudListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cloud-list.page.html */ "EF2o");
/* harmony import */ var _cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-list.page.scss */ "ef5Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Jgta");






let CloudListPage = class CloudListPage {
    constructor(iab) {
        this.iab = iab;
        this.cloudFiles = [];
    }
    ngOnInit() {
        this.loadFiles();
    }
    loadFiles() {
        this.cloudFiles = [];
        const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].storage().ref();
        storageRef.listAll().then(result => {
            result.items.forEach((ref) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.cloudFiles.push({
                    name: ref.name,
                    full: ref.fullPath,
                    url: yield ref.getDownloadURL(),
                    ref: ref
                });
            }));
        });
    }
    openExternal(url) {
        this.iab.create(url);
    }
    deleteFile(ref) {
        ref.delete().then(() => {
            this.loadFiles();
        });
    }
};
CloudListPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
CloudListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cloud-list',
        template: _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CloudListPage);



/***/ }),

/***/ "zRBi":
/*!*********************************************************!*\
  !*** ./src/app/cloud-list/cloud-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CloudListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPageRoutingModule", function() { return CloudListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud-list.page */ "z1Go");




const routes = [
    {
        path: '',
        component: _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__["CloudListPage"]
    }
];
let CloudListPageRoutingModule = class CloudListPageRoutingModule {
};
CloudListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CloudListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=cloud-list-cloud-list-module-es2015.js.map