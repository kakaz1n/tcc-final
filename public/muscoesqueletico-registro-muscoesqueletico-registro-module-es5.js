(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["muscoesqueletico-registro-muscoesqueletico-registro-module"], {
    /***/
    "2m+Z":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/muscoesqueletico-registro/muscoesqueletico-registro.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 2%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Capacidade Musculoesquelética<br><br>e Funcional\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n\n      <h2 style=\"text-align: center;\">\n        Flexão \n      </h2>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_musco(validations_form.value)\">\n      <h3>Número de flexões</h3>\n      <ion-input placeholder=\"50\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"flexoes\" class=\"form-controll\" required ></ion-input>\n      <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Registrar</ion-button>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "8Zux":
    /*!***************************************************************************************!*\
      !*** ./src/app/muscoesqueletico-registro/muscoesqueletico-registro-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: MuscoesqueleticoRegistroPageRoutingModule */

    /***/
    function Zux(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoRegistroPageRoutingModule", function () {
        return MuscoesqueleticoRegistroPageRoutingModule;
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


      var _muscoesqueletico_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./muscoesqueletico-registro.page */
      "aG2P");

      var routes = [{
        path: '',
        component: _muscoesqueletico_registro_page__WEBPACK_IMPORTED_MODULE_3__["MuscoesqueleticoRegistroPage"]
      }];

      var MuscoesqueleticoRegistroPageRoutingModule = function MuscoesqueleticoRegistroPageRoutingModule() {
        _classCallCheck(this, MuscoesqueleticoRegistroPageRoutingModule);
      };

      MuscoesqueleticoRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MuscoesqueleticoRegistroPageRoutingModule);
      /***/
    },

    /***/
    "aG2P":
    /*!*****************************************************************************!*\
      !*** ./src/app/muscoesqueletico-registro/muscoesqueletico-registro.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: MuscoesqueleticoRegistroPage */

    /***/
    function aG2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoRegistroPage", function () {
        return MuscoesqueleticoRegistroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_muscoesqueletico_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./muscoesqueletico-registro.page.html */
      "2m+Z");
      /* harmony import */


      var _muscoesqueletico_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./muscoesqueletico-registro.page.scss */
      "sbVV");
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

      var MuscoesqueleticoRegistroPage = /*#__PURE__*/function () {
        function MuscoesqueleticoRegistroPage(navCtrl, authService, formBuilder, dadosserv, toastController) {
          _classCallCheck(this, MuscoesqueleticoRegistroPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
          this.errorMessage = '';
          this.successMessage = '';
          this.validation_messages = {
            'flexoes': [{
              type: 'required',
              message: 'É necessário aceitar essa opção.'
            }]
          };
        }

        _createClass(MuscoesqueleticoRegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.validations_form = this.formBuilder.group({
              flexoes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
          key: "voltar",
          value: function voltar() {
            this.navCtrl.navigateBack('/muscoesqueletico-introducao');
          }
        }, {
          key: "Registrar_musco",
          value: function Registrar_musco(value) {
            this.authService.Registrar_Musco(this.uid, value);
            this.goDashboard();
          }
        }, {
          key: "goDashboard",
          value: function goDashboard() {
            this.navCtrl.navigateForward('/dashboard');
          }
        }]);

        return MuscoesqueleticoRegistroPage;
      }();

      MuscoesqueleticoRegistroPage.ctorParameters = function () {
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

      MuscoesqueleticoRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-muscoesqueletico-registro',
        template: _raw_loader_muscoesqueletico_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_muscoesqueletico_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MuscoesqueleticoRegistroPage);
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
    "rldl":
    /*!*******************************************************************************!*\
      !*** ./src/app/muscoesqueletico-registro/muscoesqueletico-registro.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: MuscoesqueleticoRegistroPageModule */

    /***/
    function rldl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoRegistroPageModule", function () {
        return MuscoesqueleticoRegistroPageModule;
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


      var _muscoesqueletico_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./muscoesqueletico-registro-routing.module */
      "8Zux");
      /* harmony import */


      var _muscoesqueletico_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./muscoesqueletico-registro.page */
      "aG2P");

      var MuscoesqueleticoRegistroPageModule = function MuscoesqueleticoRegistroPageModule() {
        _classCallCheck(this, MuscoesqueleticoRegistroPageModule);
      };

      MuscoesqueleticoRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _muscoesqueletico_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["MuscoesqueleticoRegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_muscoesqueletico_registro_page__WEBPACK_IMPORTED_MODULE_6__["MuscoesqueleticoRegistroPage"]]
      })], MuscoesqueleticoRegistroPageModule);
      /***/
    },

    /***/
    "sbVV":
    /*!*******************************************************************************!*\
      !*** ./src/app/muscoesqueletico-registro/muscoesqueletico-registro.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function sbVV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15pt;\n  font-weight: bold;\n}\n\nion-input .text-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG11c2NvZXNxdWVsZXRpY28tcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVDO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUk7RUFBYSxrQkFBQTtBQUVqQiIsImZpbGUiOiJtdXNjb2VzcXVlbGV0aWNvLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24taW5wdXR7IFxyXG4gICAgLnRleHQtaW5wdXR7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG59XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=muscoesqueletico-registro-muscoesqueletico-registro-module-es5.js.map