(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antropometria-introducao-antropometria-introducao-module"], {
    /***/
    "0l3a":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antropometria-introducao/antropometria-introducao.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-top: 2%;margin-left: 2%;\">\n      <ion-label style=\"font-size:xx-large;text-align: center;\"> \n        Antropometria\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n    <ion-item lines=\"none\" color=\"transparent\">\n      <div display=\"block\">\n        <h2 style=\"text-align: center;\">\n          Índice de massa corpórea e proporção entre cintura e quadril\n        </h2>\n        <h4 style=\"text-align: justify;text-justify: distribute\">\n          <h3 style=\"text-align: center;\">Equipamento</h3>\n          • Fita métrica. <br>\n          • Balança para medir seu peso.<br>         \n\n          <h3 style=\"text-align: center;\">Preparação</h3>\n          • Use o mínimo possível de roupas e tire os sapatos.<br>\n          <h3 style=\"text-align: center;\">Procedimentos</h3>\n          1.  Pese-se na balança.<br>\n          2. Fique em pé, apoiando a cabeça, os ombros, as nádegas e os calcanhares na parede. Use a fita métrica para medir sua altura.<br>\n          3. Use a fita métrica para medir a circunferência de seu quadril na parte mais larga das nádegas e meça sua cintura na parte mais estreita que, em geral fica logo acima do umbigo. Tire as medidas expirando naturalmente o ar dos pulmões e sem apertar a fita métrica.<br>\n        </h4>\n        </div>\n    </ion-item>\n    <div class=\"centralizado\">\n      <ion-button  full color=\"tertiary\" (click)=\"proxima_pagina()\">\n        Continuar</ion-button>\n    </div>\n</ion-content>\n";
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
    "o/6g":
    /*!***************************************************************************!*\
      !*** ./src/app/antropometria-introducao/antropometria-introducao.page.ts ***!
      \***************************************************************************/

    /*! exports provided: AntropometriaIntroducaoPage */

    /***/
    function o6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AntropometriaIntroducaoPage", function () {
        return AntropometriaIntroducaoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_antropometria_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./antropometria-introducao.page.html */
      "0l3a");
      /* harmony import */


      var _antropometria_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./antropometria-introducao.page.scss */
      "vXnN");
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

      var AntropometriaIntroducaoPage = /*#__PURE__*/function () {
        function AntropometriaIntroducaoPage(navCtrl, authService, dadosserv, toastController) {
          _classCallCheck(this, AntropometriaIntroducaoPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
        }

        _createClass(AntropometriaIntroducaoPage, [{
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
            this.authService.setAntropometria1(this.uid);
            this.navCtrl.navigateForward('antropometria-registro');
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.navCtrl.navigateBack('dashboard');
          }
        }]);

        return AntropometriaIntroducaoPage;
      }();

      AntropometriaIntroducaoPage.ctorParameters = function () {
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

      AntropometriaIntroducaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-antropometria-introducao',
        template: _raw_loader_antropometria_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_antropometria_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AntropometriaIntroducaoPage);
      /***/
    },

    /***/
    "onIQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/antropometria-introducao/antropometria-introducao.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AntropometriaIntroducaoPageModule */

    /***/
    function onIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AntropometriaIntroducaoPageModule", function () {
        return AntropometriaIntroducaoPageModule;
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


      var _antropometria_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./antropometria-introducao-routing.module */
      "rjL/");
      /* harmony import */


      var _antropometria_introducao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./antropometria-introducao.page */
      "o/6g");

      var AntropometriaIntroducaoPageModule = function AntropometriaIntroducaoPageModule() {
        _classCallCheck(this, AntropometriaIntroducaoPageModule);
      };

      AntropometriaIntroducaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _antropometria_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__["AntropometriaIntroducaoPageRoutingModule"]],
        declarations: [_antropometria_introducao_page__WEBPACK_IMPORTED_MODULE_6__["AntropometriaIntroducaoPage"]]
      })], AntropometriaIntroducaoPageModule);
      /***/
    },

    /***/
    "rjL/":
    /*!*************************************************************************************!*\
      !*** ./src/app/antropometria-introducao/antropometria-introducao-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AntropometriaIntroducaoPageRoutingModule */

    /***/
    function rjL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AntropometriaIntroducaoPageRoutingModule", function () {
        return AntropometriaIntroducaoPageRoutingModule;
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


      var _antropometria_introducao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./antropometria-introducao.page */
      "o/6g");

      var routes = [{
        path: '',
        component: _antropometria_introducao_page__WEBPACK_IMPORTED_MODULE_3__["AntropometriaIntroducaoPage"]
      }];

      var AntropometriaIntroducaoPageRoutingModule = function AntropometriaIntroducaoPageRoutingModule() {
        _classCallCheck(this, AntropometriaIntroducaoPageRoutingModule);
      };

      AntropometriaIntroducaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AntropometriaIntroducaoPageRoutingModule);
      /***/
    },

    /***/
    "vXnN":
    /*!*****************************************************************************!*\
      !*** ./src/app/antropometria-introducao/antropometria-introducao.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function vXnN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFudHJvcG9tZXRyaWEtaW50cm9kdWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUc7RUFDQywyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKOztBQUhJO0VBQ0UsYUFBQTtBQUtOOztBQUVHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6ImFudHJvcG9tZXRyaWEtaW50cm9kdWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgIC5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgIC5jZW50cmFsaXphZG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLnlvdXItY2xhc3Mge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICByaWdodDogMDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=antropometria-introducao-antropometria-introducao-module-es5.js.map