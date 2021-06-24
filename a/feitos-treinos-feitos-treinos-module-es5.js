(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feitos-treinos-feitos-treinos-module"], {
    /***/
    "0f0Q":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feitos-treinos/feitos-treinos.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function f0Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" style=\"text-align: center;font-size: x-large;\">\n\n      <ion-buttons slot=\"start\">\n        <ion-button href=\"/dashboard\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-label>\n        Como são feitos os treinos\n      </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div style=\"min-height: 600px;text-align: justify;\">\n\n  <h2 style=\"margin:5%;\">O aplicativo tem como objetivo gerar rotinas de exercícios físicos que beneficiem à saúde dos usuários. Foi desenvolvido como um Trabalho de Conclusão de Curso (TCC) do curso de Bacharelado em Ciência da Computação em parceria com o Laboratório de Pesquisa em Exercício Físico e Doenças Crônicas (LEDOC) da Faculdade de Ciências da UNESP, campus de Bauru. </h2>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "2I+M":
    /*!*********************************************************!*\
      !*** ./src/app/feitos-treinos/feitos-treinos.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function IM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 600px;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZlaXRvcy10cmVpbm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFBd0IsYUFBQTtFQUN4QixtQkFBQTtBQU1GOztBQUhFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFJQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0MsaUJBQUE7QUFHTDs7QUFWSTtFQUNFLGFBQUE7QUFZTiIsImZpbGUiOiJmZWl0b3MtdHJlaW5vcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZXN0YWRve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNpZGFkZXtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kb2J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmJ1dHRvbi5jZW50cmFsaXphZG97XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAzNi41cHg7ZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gXHJcblxyXG4gIGlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBtaW4taGVpZ2h0OiA2MDBweDsgICAgIFxyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    "ITxn":
    /*!*****************************************************************!*\
      !*** ./src/app/feitos-treinos/feitos-treinos-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FeitosTreinosPageRoutingModule */

    /***/
    function ITxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeitosTreinosPageRoutingModule", function () {
        return FeitosTreinosPageRoutingModule;
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


      var _feitos_treinos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feitos-treinos.page */
      "q1Sj");

      var routes = [{
        path: '',
        component: _feitos_treinos_page__WEBPACK_IMPORTED_MODULE_3__["FeitosTreinosPage"]
      }];

      var FeitosTreinosPageRoutingModule = function FeitosTreinosPageRoutingModule() {
        _classCallCheck(this, FeitosTreinosPageRoutingModule);
      };

      FeitosTreinosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeitosTreinosPageRoutingModule);
      /***/
    },

    /***/
    "kQLH":
    /*!*********************************************************!*\
      !*** ./src/app/feitos-treinos/feitos-treinos.module.ts ***!
      \*********************************************************/

    /*! exports provided: FeitosTreinosPageModule */

    /***/
    function kQLH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeitosTreinosPageModule", function () {
        return FeitosTreinosPageModule;
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


      var _feitos_treinos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feitos-treinos-routing.module */
      "ITxn");
      /* harmony import */


      var _feitos_treinos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feitos-treinos.page */
      "q1Sj");

      var FeitosTreinosPageModule = function FeitosTreinosPageModule() {
        _classCallCheck(this, FeitosTreinosPageModule);
      };

      FeitosTreinosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feitos_treinos_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeitosTreinosPageRoutingModule"]],
        declarations: [_feitos_treinos_page__WEBPACK_IMPORTED_MODULE_6__["FeitosTreinosPage"]]
      })], FeitosTreinosPageModule);
      /***/
    },

    /***/
    "q1Sj":
    /*!*******************************************************!*\
      !*** ./src/app/feitos-treinos/feitos-treinos.page.ts ***!
      \*******************************************************/

    /*! exports provided: FeitosTreinosPage */

    /***/
    function q1Sj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeitosTreinosPage", function () {
        return FeitosTreinosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feitos_treinos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feitos-treinos.page.html */
      "0f0Q");
      /* harmony import */


      var _feitos_treinos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feitos-treinos.page.scss */
      "2I+M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FeitosTreinosPage = /*#__PURE__*/function () {
        function FeitosTreinosPage() {
          _classCallCheck(this, FeitosTreinosPage);
        }

        _createClass(FeitosTreinosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeitosTreinosPage;
      }();

      FeitosTreinosPage.ctorParameters = function () {
        return [];
      };

      FeitosTreinosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feitos-treinos',
        template: _raw_loader_feitos_treinos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feitos_treinos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeitosTreinosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feitos-treinos-feitos-treinos-module-es5.js.map