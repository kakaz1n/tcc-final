(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-questionario-pre-questionario-module"], {
    /***/
    "HAMV":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-questionario/pre-questionario.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HAMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom: 5%;margin-left: 5%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Questionário pré-participação\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"proximo_questionario()\">\n    <ion-item lines=\"none\" color=\"transparent\">\n      <div display=\"block\">\n        <h4 style=\"text-align: justify;font-weight: 100;\">O questionário a seguir tem o objetivo de indicar a\n          necessidade ou não de avaliação médica antes de iniciar a prática exercícios. O mesmo é composto de três\n          etapas: <br>\n          1 - Sinais e sintomas que apresenta ou já apresentou; <br>\n          2 - Estado e histórico de saúde; e<br>\n          3 - Nível de atividade física. <br>\n          <br>\n        </h4>\n        <h4 style=\"text-align: justify;font-weight: bolder;font-size: larger;\">\n          É fundamental que preste muita atenção ao que é descrito em cada item do questionário, e que responda com a\n          verdade, para que não ocorra danos à sua saúde!\n        </h4>\n      </div>\n    </ion-item>\n\n    <div style=\" height: 50%;width:100%;margin-left: 25%;\">\n      <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"\n        fromControlName=\"termos\" class=\"form-controll\" color=\"transparent\" name=\"termos\"></ion-checkbox>\n\n      <h2 style=\"margin-left: 15%;font-size: x-large;\">Entendi</h2>\n    </div>\n    <div class=\"estado\">\n      <ion-button (click)=\"logout()\" style=\"width: 70%;margin-left: 20%;\" color=\"danger\">\n        Sair</ion-button>\n    </div>\n    <div class=\"cidade\">\n      <ion-button  style=\"width: 70%;margin-left: 10%;\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Continuar</ion-button>\n    </div>\n\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "IEoN":
    /*!*********************************************************************!*\
      !*** ./src/app/pre-questionario/pre-questionario-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PreQuestionarioPageRoutingModule */

    /***/
    function IEoN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreQuestionarioPageRoutingModule", function () {
        return PreQuestionarioPageRoutingModule;
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


      var _pre_questionario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pre-questionario.page */
      "pnmT");

      var routes = [{
        path: '',
        component: _pre_questionario_page__WEBPACK_IMPORTED_MODULE_3__["PreQuestionarioPage"]
      }];

      var PreQuestionarioPageRoutingModule = function PreQuestionarioPageRoutingModule() {
        _classCallCheck(this, PreQuestionarioPageRoutingModule);
      };

      PreQuestionarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreQuestionarioPageRoutingModule);
      /***/
    },

    /***/
    "g8DW":
    /*!*************************************************************!*\
      !*** ./src/app/pre-questionario/pre-questionario.module.ts ***!
      \*************************************************************/

    /*! exports provided: PreQuestionarioPageModule */

    /***/
    function g8DW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreQuestionarioPageModule", function () {
        return PreQuestionarioPageModule;
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


      var _pre_questionario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pre-questionario-routing.module */
      "IEoN");
      /* harmony import */


      var _pre_questionario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pre-questionario.page */
      "pnmT");

      var PreQuestionarioPageModule = function PreQuestionarioPageModule() {
        _classCallCheck(this, PreQuestionarioPageModule);
      };

      PreQuestionarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pre_questionario_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreQuestionarioPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_pre_questionario_page__WEBPACK_IMPORTED_MODULE_6__["PreQuestionarioPage"]]
      })], PreQuestionarioPageModule);
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
    "pnmT":
    /*!***********************************************************!*\
      !*** ./src/app/pre-questionario/pre-questionario.page.ts ***!
      \***********************************************************/

    /*! exports provided: PreQuestionarioPage */

    /***/
    function pnmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreQuestionarioPage", function () {
        return PreQuestionarioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pre_questionario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pre-questionario.page.html */
      "HAMV");
      /* harmony import */


      var _pre_questionario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pre-questionario.page.scss */
      "pr4U");
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

      var PreQuestionarioPage = /*#__PURE__*/function () {
        function PreQuestionarioPage(navCtrl, authService, formBuilder, dadosserv, toastController, alertController) {
          _classCallCheck(this, PreQuestionarioPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
          this.alertController = alertController;
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

        _createClass(PreQuestionarioPage, [{
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: '<h1>LEIA <br> COM <br>ATENÇÃO!!!</h1>',
                        buttons: ['OK'],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
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
            this.presentAlert();
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
          key: "logout",
          value: function logout() {
            var _this2 = this;

            this.authService.logoutUser().then(function (res) {
              console.log(res);

              _this2.navCtrl.navigateBack('');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "proximo_questionario",
          value: function proximo_questionario() {
            console.log(this.uid);
            this.authService.setQuestionario1(this.uid);
            this.navCtrl.navigateForward('/sinais-sintomas');
          }
        }]);

        return PreQuestionarioPage;
      }();

      PreQuestionarioPage.ctorParameters = function () {
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
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      PreQuestionarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pre-questionario',
        template: _raw_loader_pre_questionario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pre_questionario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PreQuestionarioPage);
      /***/
    },

    /***/
    "pr4U":
    /*!*************************************************************!*\
      !*** ./src/app/pre-questionario/pre-questionario.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function pr4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByZS1xdWVzdGlvbmFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0c7RUFDQywyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJwcmUtcXVlc3Rpb25hcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXN0YWRve1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuY2lkYWRle1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAgLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pre-questionario-pre-questionario-module-es5.js.map