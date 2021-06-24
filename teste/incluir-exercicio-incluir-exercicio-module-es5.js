(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incluir-exercicio-incluir-exercicio-module"], {
    /***/
    "EyeZ":
    /*!***********************************************************************!*\
      !*** ./src/app/incluir-exercicio/incluir-exercicio-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: IncluirExercicioPageRoutingModule */

    /***/
    function EyeZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncluirExercicioPageRoutingModule", function () {
        return IncluirExercicioPageRoutingModule;
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


      var _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./incluir-exercicio.page */
      "VYka");

      var routes = [{
        path: '',
        component: _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_3__["IncluirExercicioPage"]
      }];

      var IncluirExercicioPageRoutingModule = function IncluirExercicioPageRoutingModule() {
        _classCallCheck(this, IncluirExercicioPageRoutingModule);
      };

      IncluirExercicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IncluirExercicioPageRoutingModule);
      /***/
    },

    /***/
    "KxvI":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incluir-exercicio/incluir-exercicio.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KxvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>incluir_exercicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "VYka":
    /*!*************************************************************!*\
      !*** ./src/app/incluir-exercicio/incluir-exercicio.page.ts ***!
      \*************************************************************/

    /*! exports provided: IncluirExercicioPage */

    /***/
    function VYka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncluirExercicioPage", function () {
        return IncluirExercicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_incluir_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./incluir-exercicio.page.html */
      "KxvI");
      /* harmony import */


      var _incluir_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./incluir-exercicio.page.scss */
      "iGg/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IncluirExercicioPage = /*#__PURE__*/function () {
        function IncluirExercicioPage() {
          _classCallCheck(this, IncluirExercicioPage);
        }

        _createClass(IncluirExercicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IncluirExercicioPage;
      }();

      IncluirExercicioPage.ctorParameters = function () {
        return [];
      };

      IncluirExercicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-incluir-exercicio',
        template: _raw_loader_incluir_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_incluir_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IncluirExercicioPage);
      /***/
    },

    /***/
    "iGg/":
    /*!***************************************************************!*\
      !*** ./src/app/incluir-exercicio/incluir-exercicio.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function iGg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNsdWlyLWV4ZXJjaWNpby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "m5uy":
    /*!***************************************************************!*\
      !*** ./src/app/incluir-exercicio/incluir-exercicio.module.ts ***!
      \***************************************************************/

    /*! exports provided: IncluirExercicioPageModule */

    /***/
    function m5uy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncluirExercicioPageModule", function () {
        return IncluirExercicioPageModule;
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


      var _incluir_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./incluir-exercicio-routing.module */
      "EyeZ");
      /* harmony import */


      var _incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./incluir-exercicio.page */
      "VYka");

      var IncluirExercicioPageModule = function IncluirExercicioPageModule() {
        _classCallCheck(this, IncluirExercicioPageModule);
      };

      IncluirExercicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _incluir_exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncluirExercicioPageRoutingModule"]],
        declarations: [_incluir_exercicio_page__WEBPACK_IMPORTED_MODULE_6__["IncluirExercicioPage"]]
      })], IncluirExercicioPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=incluir-exercicio-incluir-exercicio-module-es5.js.map