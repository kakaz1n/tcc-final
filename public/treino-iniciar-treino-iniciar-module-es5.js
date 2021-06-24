(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treino-iniciar-treino-iniciar-module"], {
    /***/
    "eJ4i":
    /*!*****************************************************************!*\
      !*** ./src/app/treino-iniciar/treino-iniciar-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TreinoIniciarPageRoutingModule */

    /***/
    function eJ4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoIniciarPageRoutingModule", function () {
        return TreinoIniciarPageRoutingModule;
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


      var _treino_iniciar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./treino-iniciar.page */
      "qR+7");

      var routes = [{
        path: '',
        component: _treino_iniciar_page__WEBPACK_IMPORTED_MODULE_3__["TreinoIniciarPage"]
      }];

      var TreinoIniciarPageRoutingModule = function TreinoIniciarPageRoutingModule() {
        _classCallCheck(this, TreinoIniciarPageRoutingModule);
      };

      TreinoIniciarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TreinoIniciarPageRoutingModule);
      /***/
    },

    /***/
    "hyrd":
    /*!*********************************************************!*\
      !*** ./src/app/treino-iniciar/treino-iniciar.module.ts ***!
      \*********************************************************/

    /*! exports provided: TreinoIniciarPageModule */

    /***/
    function hyrd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoIniciarPageModule", function () {
        return TreinoIniciarPageModule;
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


      var _treino_iniciar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./treino-iniciar-routing.module */
      "eJ4i");
      /* harmony import */


      var _treino_iniciar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./treino-iniciar.page */
      "qR+7");

      var TreinoIniciarPageModule = function TreinoIniciarPageModule() {
        _classCallCheck(this, TreinoIniciarPageModule);
      };

      TreinoIniciarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _treino_iniciar_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreinoIniciarPageRoutingModule"]],
        declarations: [_treino_iniciar_page__WEBPACK_IMPORTED_MODULE_6__["TreinoIniciarPage"]]
      })], TreinoIniciarPageModule);
      /***/
    },

    /***/
    "qR+7":
    /*!*******************************************************!*\
      !*** ./src/app/treino-iniciar/treino-iniciar.page.ts ***!
      \*******************************************************/

    /*! exports provided: TreinoIniciarPage */

    /***/
    function qR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoIniciarPage", function () {
        return TreinoIniciarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treino_iniciar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treino-iniciar.page.html */
      "ssuw");
      /* harmony import */


      var _treino_iniciar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./treino-iniciar.page.scss */
      "tVzO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var TreinoIniciarPage = /*#__PURE__*/function () {
        function TreinoIniciarPage(navCtrl, authService) {
          _classCallCheck(this, TreinoIniciarPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
        }

        _createClass(TreinoIniciarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userDetails().subscribe(function (res) {
              console.log('res', res);

              if (res !== null) {
                _this.uid = res.uid;
                console.log("uid = " + _this.uid); //console.log(res.uid)
                // console.log(this.authService.lerDados(res.uid))
              } else {
                _this.navCtrl.navigateBack('');
              }

              console.log(_this.authService.userDetails);
            }, function (err) {
              console.log('err', err);
            });
          }
        }, {
          key: "goOrientacoesGerais",
          value: function goOrientacoesGerais() {
            this.authService.setTreino_iniciar(this.uid);
            this.navCtrl.navigateForward('/orientacoes-gerais');
          }
        }, {
          key: "goDashboard",
          value: function goDashboard() {
            this.navCtrl.navigateBack('/dashboard');
          }
        }]);

        return TreinoIniciarPage;
      }();

      TreinoIniciarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }];
      };

      TreinoIniciarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-treino-iniciar',
        template: _raw_loader_treino_iniciar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_treino_iniciar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TreinoIniciarPage);
      /***/
    },

    /***/
    "ssuw":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treino-iniciar/treino-iniciar.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ssuw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goDashboard()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-left: 15%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Avaliações\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" color=\"primary\" >  \n    <h2 style=\"margin-left: 5%;margin-right: 5%;\">Para a criação da sua rotina de exercícios, você precisa realizar as seguintes avaliações:</h2>\n    <h5 style=\"margin-left: 5%;margin-right: 5%;\">* algumas avaliações são realizadas apenas em indivíduos acima de 50 anos de idade</h5>\n<div class=\"container\">\n  <ion-img src=\"../assets/fotos/aerobica.jpeg\" >\n  </ion-img>\n  <div class=\"centered\">Capacidade Aeróbica</div>\n</div>\n<div class=\"container\">\n  <ion-img src=\"../assets/fotos/funcional.jpg\"  >\n  </ion-img>\n  <div class=\"centered\">Capacidade Musculoesquelética <br>\n      e<br>\n    Funcional\n  </div>\n</div>\n<div class=\"container\">\n  <ion-img src=\"../assets/fotos/flexibilidade.jpeg\"  >\n  </ion-img>\n  <div class=\"centered\">Flexibilidade</div>\n</div>\n<div class=\"container\">\n  <ion-img src=\"../assets/fotos/antropometria.jpg\"  >\n  </ion-img>\n  <div class=\"centered\">Antropometria</div>\n</div>\n  <ion-button color=\"tertiary\" expand=\"full\" style=\"position: relative;margin: 0%;\" (click)=\"goOrientacoesGerais()\">\n  Iniciar</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "tVzO":
    /*!*********************************************************!*\
      !*** ./src/app/treino-iniciar/treino-iniciar.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function tVzO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n/* Centered text */\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15pt;\n  font-weight: bold;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 100%;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-img {\n  opacity: 65%;\n  height: 65pt;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyZWluby1pbmljaWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUUsa0JBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFOSTtFQUNFLGFBQUE7QUFRTjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUdKIiwiZmlsZSI6InRyZWluby1pbmljaWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBDZW50ZXJlZCB0ZXh0ICovXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQgeyAgICBcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24taW1ne1xyXG4gICAgb3BhY2l0eTogNjUlO1xyXG4gICAgaGVpZ2h0OiA2NXB0O1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuXHJcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=treino-iniciar-treino-iniciar-module-es5.js.map