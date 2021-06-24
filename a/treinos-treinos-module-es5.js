(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treinos-treinos-module"], {
    /***/
    "PDYz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treinos/treinos.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function PDYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>treinos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "clxo":
    /*!*****************************************!*\
      !*** ./src/app/treinos/treinos.page.ts ***!
      \*****************************************/

    /*! exports provided: TreinosPage */

    /***/
    function clxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosPage", function () {
        return TreinosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treinos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treinos.page.html */
      "PDYz");
      /* harmony import */


      var _treinos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./treinos.page.scss */
      "y+m4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TreinosPage = /*#__PURE__*/function () {
        function TreinosPage() {
          _classCallCheck(this, TreinosPage);
        }

        _createClass(TreinosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TreinosPage;
      }();

      TreinosPage.ctorParameters = function () {
        return [];
      };

      TreinosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-treinos',
        template: _raw_loader_treinos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_treinos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TreinosPage);
      /***/
    },

    /***/
    "p1KT":
    /*!***************************************************!*\
      !*** ./src/app/treinos/treinos-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TreinosPageRoutingModule */

    /***/
    function p1KT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosPageRoutingModule", function () {
        return TreinosPageRoutingModule;
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


      var _treinos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./treinos.page */
      "clxo");

      var routes = [{
        path: '',
        component: _treinos_page__WEBPACK_IMPORTED_MODULE_3__["TreinosPage"]
      }];

      var TreinosPageRoutingModule = function TreinosPageRoutingModule() {
        _classCallCheck(this, TreinosPageRoutingModule);
      };

      TreinosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TreinosPageRoutingModule);
      /***/
    },

    /***/
    "tjnZ":
    /*!*******************************************!*\
      !*** ./src/app/treinos/treinos.module.ts ***!
      \*******************************************/

    /*! exports provided: TreinosPageModule */

    /***/
    function tjnZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosPageModule", function () {
        return TreinosPageModule;
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


      var _treinos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./treinos-routing.module */
      "p1KT");
      /* harmony import */


      var _treinos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./treinos.page */
      "clxo");

      var TreinosPageModule = function TreinosPageModule() {
        _classCallCheck(this, TreinosPageModule);
      };

      TreinosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _treinos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreinosPageRoutingModule"]],
        declarations: [_treinos_page__WEBPACK_IMPORTED_MODULE_6__["TreinosPage"]]
      })], TreinosPageModule);
      /***/
    },

    /***/
    "y+m4":
    /*!*******************************************!*\
      !*** ./src/app/treinos/treinos.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function yM4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".box {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n.box .row {\n  border: 1px dotted grey;\n}\n\n.box .row.header {\n  flex: 0 1 auto;\n  /* The above is shorthand for:\n  flex-grow: 0,\n  flex-shrink: 1,\n  flex-basis: auto\n  */\n}\n\n.box .row.content {\n  flex: 1 1 auto;\n}\n\n.box .row.footer {\n  flex: 0 1 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyZWlub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQTs7OztHQUFBO0FBSUo7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0FBQUoiLCJmaWxlIjoidHJlaW5vcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJveCAucm93IHtcclxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBncmV5O1xyXG4gIH1cclxuICBcclxuICAuYm94IC5yb3cuaGVhZGVyIHtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgLyogVGhlIGFib3ZlIGlzIHNob3J0aGFuZCBmb3I6XHJcbiAgICBmbGV4LWdyb3c6IDAsXHJcbiAgICBmbGV4LXNocmluazogMSxcclxuICAgIGZsZXgtYmFzaXM6IGF1dG9cclxuICAgICovXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggLnJvdy5jb250ZW50IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuYm94IC5yb3cuZm9vdGVyIHtcclxuICAgIGZsZXg6IDAgMSA0MHB4O1xyXG4gIH0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=treinos-treinos-module-es5.js.map