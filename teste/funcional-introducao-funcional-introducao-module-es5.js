(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcional-introducao-funcional-introducao-module"], {
    /***/
    "624i":
    /*!*********************************************************************!*\
      !*** ./src/app/funcional-introducao/funcional-introducao.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZ1bmNpb25hbC1pbnRyb2R1Y2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFJQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBTEk7RUFDRSxhQUFBO0FBT047O0FBQUc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBR0YiLCJmaWxlIjoiZnVuY2lvbmFsLWludHJvZHVjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQgeyAgICBcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAgLmNlbnRyYWxpemFkbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4ueW91ci1jbGFzcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG59Il19 */";
      /***/
    },

    /***/
    "gMzz":
    /*!*******************************************!*\
      !*** ./src/app/services/dados.service.ts ***!
      \*******************************************/

    /*! exports provided: DadosService */

    /***/
    function gMzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DadosService", function () {
        return DadosService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var DadosService = /*#__PURE__*/function () {
        function DadosService(db) {
          _classCallCheck(this, DadosService);

          this.db = db;
        } // Create


        _createClass(DadosService, [{
          key: "createBooking",
          value: function createBooking(dados) {
            return this.UsuariosListRef.push({
              nome: dados.nome,
              email: dados.email,
              telefone: dados.telefone,
              estado: dados.estado,
              cidade: dados.cidade,
              senha: dados.senha
            });
          } // Get Single

        }, {
          key: "getBooking",
          value: function getBooking(id) {
            this.usuarioRef = this.db.object('/usuarios/' + id);
            return this.usuarioRef;
          }
        }, {
          key: "pegarQuestionario",
          value: function pegarQuestionario(id) {
            this.usuarioRef = this.db.object('/questionario/' + id);
            return this.usuarioRef;
          } // Get List

        }, {
          key: "getBookingList",
          value: function getBookingList() {
            this.UsuariosListRef = this.db.list('/usuarios');
            return this.UsuariosListRef;
          }
        }]);

        return DadosService;
      }();

      DadosService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      DadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DadosService);
      /***/
    },

    /***/
    "nrlp":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcional-introducao/funcional-introducao.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nrlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-top: 2%;margin-left: 10%;\">\n      <ion-label style=\"font-size:xx-large;text-align: center;\">\n        Funcional\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <ion-item lines=\"none\" color=\"transparent\">\n    <div display=\"block\">\n      <h2 style=\"text-align: center;\">\n        TIMED UP & GO\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Cadeira com encosto e sem “braços”.<br>\n        • Régua/fita métrica.<br>\n• Fita adesiva/crepe.<br>\n• Cronômetro.<br>\n• Local plano e com espaço.<br> \n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Utilize a fita métrica para demarcar 3 metros de distância da cadeira. Use a fita adesiva\npara sinalizar essa distância, começando exatamente da frente da cadeira.<br>\n• Chame alguém para marcar o tempo no cronômetro.<br>\n• Use roupas largas e confortáveis, e sapatos apropriados para a caminhada. <br>\n• Faça um aquecimento, certificando-se de alongar bem as pernas. <br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n\n        1. Sente-se na cadeira que foi posicionada em frente a demarcação de 3 metros.\n        Certifique-se de que suas nádegas, coxas e costas estão totalmente encostadas na cadeira.<br>\n        2. Peça para alguém soltar o cronômetro assim que você começar o teste, ou seja, assim\n        que levantar da cadeira.<br>\n        3. Levante-se da cadeira sem apoiar-se em lugar algum.<br>\n        4. Caminhe o mais rápido que puder (sem trotar ou correr) até o final dos 3 metros e volte\n        para a posição inicial sem parar ou diminuir a velocidade no meio do caminho.<br>\n        5. Assim que você sentar, novamente com as nádegas, coxas e costas apoiadas totalmente\n        na cadeira, peça para a pessoa que está marcando o tempo, pausar imediatamente o\n        cronômetro.<br>\n        6. Anote quanto tempo você gastou nesse percurso de 3 metros ao levantar, caminhar e\n        sentar novamente em uma cadeira e registre no seu perfil pessoal de condicionamento\n        físico. <br>\n      </h4>\n      <iframe width=\"100%\" src=\"https://www.youtube.com/embed/BeKTd8-7M2s?list=PLjivMaYpY8ImY8m6HLP4VF04pKhndaIcx\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </ion-item>\n  <div class=\"centralizado\">\n    <ion-button full color=\"tertiary\" (click)=\"proxima_pagina()\">\n      Continuar</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "tB0E":
    /*!*********************************************************************!*\
      !*** ./src/app/funcional-introducao/funcional-introducao.module.ts ***!
      \*********************************************************************/

    /*! exports provided: FuncionalIntroducaoPageModule */

    /***/
    function tB0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalIntroducaoPageModule", function () {
        return FuncionalIntroducaoPageModule;
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


      var _funcional_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./funcional-introducao-routing.module */
      "vAjt");
      /* harmony import */


      var _funcional_introducao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./funcional-introducao.page */
      "u4wa");

      var FuncionalIntroducaoPageModule = function FuncionalIntroducaoPageModule() {
        _classCallCheck(this, FuncionalIntroducaoPageModule);
      };

      FuncionalIntroducaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _funcional_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__["FuncionalIntroducaoPageRoutingModule"]],
        declarations: [_funcional_introducao_page__WEBPACK_IMPORTED_MODULE_6__["FuncionalIntroducaoPage"]]
      })], FuncionalIntroducaoPageModule);
      /***/
    },

    /***/
    "u4wa":
    /*!*******************************************************************!*\
      !*** ./src/app/funcional-introducao/funcional-introducao.page.ts ***!
      \*******************************************************************/

    /*! exports provided: FuncionalIntroducaoPage */

    /***/
    function u4wa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalIntroducaoPage", function () {
        return FuncionalIntroducaoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_funcional_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./funcional-introducao.page.html */
      "nrlp");
      /* harmony import */


      var _funcional_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./funcional-introducao.page.scss */
      "624i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/dados.service */
      "gMzz");

      var FuncionalIntroducaoPage = /*#__PURE__*/function () {
        function FuncionalIntroducaoPage(navCtrl, authService, dadosserv, toastController) {
          _classCallCheck(this, FuncionalIntroducaoPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
        }

        _createClass(FuncionalIntroducaoPage, [{
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
          key: "proxima_pagina",
          value: function proxima_pagina() {
            console.log(this.uid);
            this.authService.setFuncional1(this.uid);
            this.navCtrl.navigateForward('funcional-registro');
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.navCtrl.navigateBack('dashboard');
          }
        }]);

        return FuncionalIntroducaoPage;
      }();

      FuncionalIntroducaoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      FuncionalIntroducaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-funcional-introducao',
        template: _raw_loader_funcional_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_funcional_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FuncionalIntroducaoPage);
      /***/
    },

    /***/
    "vAjt":
    /*!*****************************************************************************!*\
      !*** ./src/app/funcional-introducao/funcional-introducao-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: FuncionalIntroducaoPageRoutingModule */

    /***/
    function vAjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalIntroducaoPageRoutingModule", function () {
        return FuncionalIntroducaoPageRoutingModule;
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


      var _funcional_introducao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./funcional-introducao.page */
      "u4wa");

      var routes = [{
        path: '',
        component: _funcional_introducao_page__WEBPACK_IMPORTED_MODULE_3__["FuncionalIntroducaoPage"]
      }];

      var FuncionalIntroducaoPageRoutingModule = function FuncionalIntroducaoPageRoutingModule() {
        _classCallCheck(this, FuncionalIntroducaoPageRoutingModule);
      };

      FuncionalIntroducaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FuncionalIntroducaoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=funcional-introducao-funcional-introducao-module-es5.js.map