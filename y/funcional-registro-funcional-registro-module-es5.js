(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["funcional-registro-funcional-registro-module"], {
    /***/
    "HVvC":
    /*!*****************************************************************!*\
      !*** ./src/app/funcional-registro/funcional-registro.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function HVvC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jaW9uYWwtcmVnaXN0cm8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "ULil":
    /*!*****************************************************************!*\
      !*** ./src/app/funcional-registro/funcional-registro.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FuncionalRegistroPageModule */

    /***/
    function ULil(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalRegistroPageModule", function () {
        return FuncionalRegistroPageModule;
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


      var _funcional_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./funcional-registro-routing.module */
      "hGI5");
      /* harmony import */


      var _funcional_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./funcional-registro.page */
      "rMhB");

      var FuncionalRegistroPageModule = function FuncionalRegistroPageModule() {
        _classCallCheck(this, FuncionalRegistroPageModule);
      };

      FuncionalRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _funcional_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["FuncionalRegistroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_funcional_registro_page__WEBPACK_IMPORTED_MODULE_6__["FuncionalRegistroPage"]]
      })], FuncionalRegistroPageModule);
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
    "hGI5":
    /*!*************************************************************************!*\
      !*** ./src/app/funcional-registro/funcional-registro-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: FuncionalRegistroPageRoutingModule */

    /***/
    function hGI5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalRegistroPageRoutingModule", function () {
        return FuncionalRegistroPageRoutingModule;
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


      var _funcional_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./funcional-registro.page */
      "rMhB");

      var routes = [{
        path: '',
        component: _funcional_registro_page__WEBPACK_IMPORTED_MODULE_3__["FuncionalRegistroPage"]
      }];

      var FuncionalRegistroPageRoutingModule = function FuncionalRegistroPageRoutingModule() {
        _classCallCheck(this, FuncionalRegistroPageRoutingModule);
      };

      FuncionalRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FuncionalRegistroPageRoutingModule);
      /***/
    },

    /***/
    "lGxf":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/funcional-registro/funcional-registro.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lGxf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 5%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Funcional\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <div display=\"block\" style=\"align-items: center;text-align: center;\">\n\n      <h2 style=\"text-align: center;\">\n        TIMED UP & GO \n      </h2>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"Registrar_func1(validations_form.value)\">\n      <h3>Tempo em segundos</h3>\n      <ion-input placeholder=\"50\"  type=\"number\" style=\"font-size: xx-large;\"formControlName=\"tempo\" class=\"form-controll\" required ></ion-input>\n      <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n        Registrar</ion-button>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "rMhB":
    /*!***************************************************************!*\
      !*** ./src/app/funcional-registro/funcional-registro.page.ts ***!
      \***************************************************************/

    /*! exports provided: FuncionalRegistroPage */

    /***/
    function rMhB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncionalRegistroPage", function () {
        return FuncionalRegistroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_funcional_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./funcional-registro.page.html */
      "lGxf");
      /* harmony import */


      var _funcional_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./funcional-registro.page.scss */
      "HVvC");
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

      var FuncionalRegistroPage = /*#__PURE__*/function () {
        function FuncionalRegistroPage(navCtrl, authService, formBuilder, dadosserv, toastController) {
          _classCallCheck(this, FuncionalRegistroPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
          this.errorMessage = '';
          this.successMessage = '';
          this.validation_messages = {
            'tempo': [{
              type: 'required',
              message: 'É necessário aceitar essa opção.'
            }]
          };
        }

        _createClass(FuncionalRegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.validations_form = this.formBuilder.group({
              tempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
          key: "Registrar_func1",
          value: function Registrar_func1(value) {
            this.authService.RegistrarFunc1(this.uid, value);
            this.goDashboard();
          }
        }, {
          key: "goDashboard",
          value: function goDashboard() {
            this.navCtrl.navigateForward('/dashboard');
          }
        }]);

        return FuncionalRegistroPage;
      }();

      FuncionalRegistroPage.ctorParameters = function () {
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

      FuncionalRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-funcional-registro',
        template: _raw_loader_funcional_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_funcional_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FuncionalRegistroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=funcional-registro-funcional-registro-module-es5.js.map