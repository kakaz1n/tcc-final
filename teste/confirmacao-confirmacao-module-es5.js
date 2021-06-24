(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmacao-confirmacao-module"], {
    /***/
    "3FE4":
    /*!***********************************************************!*\
      !*** ./src/app/confirmacao/confirmacao-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ConfirmacaoPageRoutingModule */

    /***/
    function FE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmacaoPageRoutingModule", function () {
        return ConfirmacaoPageRoutingModule;
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


      var _confirmacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirmacao.page */
      "5Z/t");

      var routes = [{
        path: '',
        component: _confirmacao_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmacaoPage"]
      }];

      var ConfirmacaoPageRoutingModule = function ConfirmacaoPageRoutingModule() {
        _classCallCheck(this, ConfirmacaoPageRoutingModule);
      };

      ConfirmacaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmacaoPageRoutingModule);
      /***/
    },

    /***/
    "5Z/t":
    /*!*************************************************!*\
      !*** ./src/app/confirmacao/confirmacao.page.ts ***!
      \*************************************************/

    /*! exports provided: ConfirmacaoPage */

    /***/
    function ZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmacaoPage", function () {
        return ConfirmacaoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirmacao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirmacao.page.html */
      "D4nL");
      /* harmony import */


      var _confirmacao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirmacao.page.scss */
      "amnj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../services/dados.service */
      "gMzz");

      var ConfirmacaoPage = /*#__PURE__*/function () {
        function ConfirmacaoPage(navCtrl, authService, formBuilder, dadosserv, toastController) {
          _classCallCheck(this, ConfirmacaoPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
          this.errorMessage = '';
          this.successMessage = '';
          this.validation_messages = {
            'termos': [{
              type: 'required',
              message: 'É necessário aceitar essa opção.'
            }, {
              type: 'pattern',
              message: 'É necessário aceitar essa opção.'
            }]
          };
        }

        _createClass(ConfirmacaoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.validations_form = this.formBuilder.group({
              termos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('true')])]
            });
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
          key: "onTermsChecked",
          value: function onTermsChecked($event) {
            console.log($event.currentTarget.checked);
            this.validations_form.patchValue({
              termos: $event.currentTarget.checked
            });
            console.log(this.validations_form);
          }
        }, {
          key: "proxima_pagina",
          value: function proxima_pagina() {
            console.log('proxima pagina');
            console.log("id" + this.uid);
            this.authService.setQuestionario6(this.uid);
            this.navCtrl.navigateForward('treino-iniciar');
          }
        }, {
          key: "goEstado_historico",
          value: function goEstado_historico() {
            this.navCtrl.navigateBack('estado-historico');
          }
        }]);

        return ConfirmacaoPage;
      }();

      ConfirmacaoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      ConfirmacaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmacao',
        template: _raw_loader_confirmacao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmacao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfirmacaoPage);
      /***/
    },

    /***/
    "8j6S":
    /*!***************************************************!*\
      !*** ./src/app/confirmacao/confirmacao.module.ts ***!
      \***************************************************/

    /*! exports provided: ConfirmacaoPageModule */

    /***/
    function j6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmacaoPageModule", function () {
        return ConfirmacaoPageModule;
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


      var _confirmacao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirmacao-routing.module */
      "3FE4");
      /* harmony import */


      var _confirmacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirmacao.page */
      "5Z/t");

      var ConfirmacaoPageModule = function ConfirmacaoPageModule() {
        _classCallCheck(this, ConfirmacaoPageModule);
      };

      ConfirmacaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirmacao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmacaoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_confirmacao_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmacaoPage"]]
      })], ConfirmacaoPageModule);
      /***/
    },

    /***/
    "D4nL":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmacao/confirmacao.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function D4nL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom: 5%;margin-left: 10%;\">\n      <ion-label style=\"font-size:large;text-align: center;\">\n        Confirmação sobre as informações\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"proxima_pagina()\">\n    <ion-item lines=\"none\" color=\"transparent\">\n      <div display=\"block\">\n        <h4 style=\"text-align: justify;font-weight: bolder;font-size:x-large\">\n          Declaro que as informações prestadas sobre os meus sinais e sintomas, nível atual de atividade física e estado/histórico de saúde são verdadeiras, me responsabilizando por qualquer resposta incorreta e suas respectivas consequências à minha saúde, durante a realização dos exercícios e testes propostos.\n        </h4>\n      </div>\n    </ion-item>\n\n    <div style=\" height: 50%;width:100%;margin-left: 25%;\">\n      <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"\n        fromControlName=\"termos\" class=\"form-controll\" color=\"transparent\" name=\"termos\"></ion-checkbox>\n\n      <h2 style=\"margin-left: 15%;font-size: x-large;\">Entendi</h2>\n    </div>\n    <div class=\"estado\">\n      <ion-button (click)=\"goEstado_historico()\" style=\"width: 70%;margin-left: 20%;\" color=\"danger\">\n        Voltar</ion-button>\n    </div>\n    <div class=\"cidade\">\n      <ion-button  style=\"width: 70%;margin-left: 10%;\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Continuar</ion-button>\n    </div>\n\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "amnj":
    /*!***************************************************!*\
      !*** ./src/app/confirmacao/confirmacao.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function amnj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm1hY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNHO0VBQ0MsMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoiY29uZmlybWFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lc3RhZG97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5jaWRhZGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */";
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
    }
  }]);
})();
//# sourceMappingURL=confirmacao-confirmacao-module-es5.js.map