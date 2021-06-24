(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloud-list-cloud-list-module"], {
    /***/
    "EF2o":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloud-list/cloud-list.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function EF2o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cloud Files</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let f of cloudFiles\">\n      <ion-button slot=\"start\" (click)=\"openExternal(f.url)\">\n        <ion-icon name=\"open\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      \n      <ion-label class=\"ion-text-wrap\">\n        {{ f.name }}\n        <p>{{ f.full }}</p>\n      </ion-label>\n \n      <ion-button slot=\"end\" (click)=\"deleteFile(f.ref)\" color=\"danger\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "K2eC":
    /*!*************************************************!*\
      !*** ./src/app/cloud-list/cloud-list.module.ts ***!
      \*************************************************/

    /*! exports provided: CloudListPageModule */

    /***/
    function K2eC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloudListPageModule", function () {
        return CloudListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cloud-list-routing.module */
      "zRBi");
      /* harmony import */


      var _cloud_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cloud-list.page */
      "z1Go");

      var CloudListPageModule = function CloudListPageModule() {
        _classCallCheck(this, CloudListPageModule);
      };

      CloudListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloudListPageRoutingModule"]],
        declarations: [_cloud_list_page__WEBPACK_IMPORTED_MODULE_6__["CloudListPage"]]
      })], CloudListPageModule);
      /***/
    },

    /***/
    "ef5Z":
    /*!*************************************************!*\
      !*** ./src/app/cloud-list/cloud-list.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ef5Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG91ZC1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "z1Go":
    /*!***********************************************!*\
      !*** ./src/app/cloud-list/cloud-list.page.ts ***!
      \***********************************************/

    /*! exports provided: CloudListPage */

    /***/
    function z1Go(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloudListPage", function () {
        return CloudListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cloud-list.page.html */
      "EF2o");
      /* harmony import */


      var _cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cloud-list.page.scss */
      "ef5Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");

      var CloudListPage = /*#__PURE__*/function () {
        function CloudListPage(iab) {
          _classCallCheck(this, CloudListPage);

          this.iab = iab;
          this.cloudFiles = [];
        }

        _createClass(CloudListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFiles();
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            var _this = this;

            this.cloudFiles = [];
            var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].storage().ref();
            storageRef.listAll().then(function (result) {
              result.items.forEach(function (ref) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.t0 = this.cloudFiles;
                          _context.t1 = ref.name;
                          _context.t2 = ref.fullPath;
                          _context.next = 5;
                          return ref.getDownloadURL();

                        case 5:
                          _context.t3 = _context.sent;
                          _context.t4 = ref;
                          _context.t5 = {
                            name: _context.t1,
                            full: _context.t2,
                            url: _context.t3,
                            ref: _context.t4
                          };

                          _context.t0.push.call(_context.t0, _context.t5);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }, {
          key: "openExternal",
          value: function openExternal(url) {
            this.iab.create(url);
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(ref) {
            var _this2 = this;

            ref["delete"]().then(function () {
              _this2.loadFiles();
            });
          }
        }]);

        return CloudListPage;
      }();

      CloudListPage.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]
        }];
      };

      CloudListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cloud-list',
        template: _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CloudListPage);
      /***/
    },

    /***/
    "zRBi":
    /*!*********************************************************!*\
      !*** ./src/app/cloud-list/cloud-list-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CloudListPageRoutingModule */

    /***/
    function zRBi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloudListPageRoutingModule", function () {
        return CloudListPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cloud-list.page */
      "z1Go");

      var routes = [{
        path: '',
        component: _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__["CloudListPage"]
      }];

      var CloudListPageRoutingModule = function CloudListPageRoutingModule() {
        _classCallCheck(this, CloudListPageRoutingModule);
      };

      CloudListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CloudListPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cloud-list-cloud-list-module-es5.js.map