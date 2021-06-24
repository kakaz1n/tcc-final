(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aerobica-introducao-aerobica-introducao-module"], {
    /***/
    "FmlM":
    /*!*******************************************************************!*\
      !*** ./src/app/aerobica-introducao/aerobica-introducao.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function FmlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFlcm9iaWNhLWludHJvZHVjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFMSTtFQUNFLGFBQUE7QUFPTjs7QUFBRztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFHRiIsImZpbGUiOiJhZXJvYmljYS1pbnRyb2R1Y2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgIC5jZW50cmFsaXphZG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLnlvdXItY2xhc3Mge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICByaWdodDogMDtcclxufSJdfQ== */";
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
    "hWVs":
    /*!*******************************************************************!*\
      !*** ./src/app/aerobica-introducao/aerobica-introducao.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AerobicaIntroducaoPageModule */

    /***/
    function hWVs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AerobicaIntroducaoPageModule", function () {
        return AerobicaIntroducaoPageModule;
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


      var _aerobica_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aerobica-introducao-routing.module */
      "kTW2");
      /* harmony import */


      var _aerobica_introducao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./aerobica-introducao.page */
      "i4Kr");

      var AerobicaIntroducaoPageModule = function AerobicaIntroducaoPageModule() {
        _classCallCheck(this, AerobicaIntroducaoPageModule);
      };

      AerobicaIntroducaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aerobica_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__["AerobicaIntroducaoPageRoutingModule"]],
        declarations: [_aerobica_introducao_page__WEBPACK_IMPORTED_MODULE_6__["AerobicaIntroducaoPage"]]
      })], AerobicaIntroducaoPageModule);
      /***/
    },

    /***/
    "i4Kr":
    /*!*****************************************************************!*\
      !*** ./src/app/aerobica-introducao/aerobica-introducao.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AerobicaIntroducaoPage */

    /***/
    function i4Kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AerobicaIntroducaoPage", function () {
        return AerobicaIntroducaoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_aerobica_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./aerobica-introducao.page.html */
      "kIfg");
      /* harmony import */


      var _aerobica_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aerobica-introducao.page.scss */
      "FmlM");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AerobicaIntroducaoPage = /*#__PURE__*/function () {
        function AerobicaIntroducaoPage(navCtrl, authService, dadosserv, toastController, dadosService) {
          _classCallCheck(this, AerobicaIntroducaoPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.dadosserv = dadosserv;
          this.toastController = toastController;
          this.dadosService = dadosService;
          this.idade = 0;
          this.ciclismo = '';
        }

        _createClass(AerobicaIntroducaoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userDetails().subscribe(function (res) {
              console.log('res', res);

              if (res !== null) {
                _this.uid = res.uid;
                console.log("uid = " + _this.uid);

                _this.getIdade_sexo(); //console.log(res.uid)
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
          key: "getIdade_sexo",
          value: function getIdade_sexo() {
            var _this2 = this;

            console.log(this.uid);
            console.log("a");
            var a = this.dadosService.getBooking(this.uid);
            console.log(a);
            a.snapshotChanges().subscribe(function (res) {
              var data = res.payload.toJSON();
              console.log(data);
              data['email'];
              console.log(Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
              var dob = new Date(data['dados']['dob']);
              var y = Math.abs(Date.now() - dob.getTime());
              _this2.idade = Math.floor(y / (1000 * 3600 * 24) / 365);
              _this2.sexo = data['dados']['sexo'];
              console.log(_this2.idade);
              console.log(_this2.sexo);
            });
            var b = this.dadosService.pegarQuestionario(this.uid);
            b.snapshotChanges().subscribe(function (res) {
              var data = res.payload.toJSON();
              console.log(data);
              _this2.resposta = data['questionarios']['questionario3']['resposta'];
              _this2.ciclismo = data['questionarios']['questionario4']['ciclismo'];
              _this2.corrida = data['questionarios']['questionario4']['corrida'];
              console.log(_this2.resposta);
              console.log(_this2.ciclismo);
              console.log(_this2.corrida);
            });
            console.log(this.resposta);
            console.log(this.ciclismo);
            console.log(this.corrida);
          }
        }, {
          key: "proxima_pagina",
          value: function proxima_pagina() {
            console.log(this.uid);
            this.authService.setAerobica1(this.uid);
            this.navCtrl.navigateForward('aerobica-registro');
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.navCtrl.navigateBack('dashboard');
          }
        }]);

        return AerobicaIntroducaoPage;
      }();

      AerobicaIntroducaoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"]
        }];
      };

      AerobicaIntroducaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aerobica-introducao',
        template: _raw_loader_aerobica_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aerobica_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AerobicaIntroducaoPage);
      /***/
    },

    /***/
    "kIfg":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aerobica-introducao/aerobica-introducao.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kIfg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 2%;\">\n      <ion-label style=\"font-size:x-large;text-align: center;\">\n        Capacidade Aeróbica<br><br>\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <ion-item lines=\"none\" color=\"transparent\">\n    <div display=\"block\" *ngIf=\"idade > 50\">\n      <!-- homens < 50-->\n      <h2 style=\"text-align: center;\">\n        Teste de caminhada de 6 minutos\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Terreno plano e com espaço para caminhada.<br>\n        • Relógio de pulso ou cronômetro.<br>\n        • Celular para medir a distância percorrida (use o aplicativo de sua preferência).<br>\n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Use roupas largas e confortáveis, e sapatos apropriados para a caminhada.<br>\n        • Teste se o seu celular/aplicativo está funcionado corretamente para o monitoramento da\n        distância percorrida.<br>\n        • Faça um aquecimento andando devagar por alguns minutos. Depois disto, faça um\n        alongamento suave para os quadríceps (pernas), apoiando-se na parede (média de 5 min).<br>\n\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        1. Consulte o relógio para registrar o tempo ou acionar o cronômetro.<br>\n        2. Comece a caminhada e complete 6 minutos caminhando o mais rápido que puder, mas\n        sem trotar e/ou correr.<br>\n        3. Pare no lugar e anote imediatamente a distância percorrida (em metros) que seu celular\n        estará mostrando ao completar os 6 minutos.<br>\n        4. Registre a distância percorrida no seu perfil pessoal de condicionamento físico. <br>\n      </h4>\n    </div>\n    <div display=\"block\" *ngIf=\"(idade <= 50 && (resposta == 'nao' || (resposta=='sim' && (!corrida && !ciclismo))))\">\n      <!-- mulheres < 50-->\n      <h2 style=\"text-align: center;\">\n        Caminhada Rockport de 1.600 metros\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Terreno plano para percorrer 1.600 metros.<br>\n        • Relógio de pulso ou cronômetro.<br>\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Usar roupas largas e confortáveis e sapatos\n        apropriados para a caminhada.<br>\n        • Evitar fumar, comer e tomar café duas horas\n        antes do teste. É aconselhável tomar bebidas\n        sem cafeína.<br>\n        • Praticar a tomada de pulsação.<br>\n        O teste de caminhada requer que você conte os batimentos cardíacos de forma precisa.\n        Você deverá tomar a sua pulsação e a contagem das batidas do coração.\n        Sua pulsação deve ser medida na base do dedo polegar no pulso ou no pescoço, bem ao lado da traquéia.\n        Usará os dedos indicador e médio para encontrar seu pulso e contará as batidas durante quinze segundos.\n        Contando a primeira que sentir como sendo zero.\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        1. Aquecer-se andando devagar por alguns minutos e, então alongar suavemente os quadríceps apoiando-se na\n        parede.<br>\n        2. Consultar o relógio para registrar o tempo ou acionar o cronômetro.<br>\n        3. Começar a caminhada. Completar a distância de 1.600 metros o mais rápido que puder.<br>\n        4. Anotar imediatamente o tempo empregado para completar a distância.<br>\n        5. Medir sua pulsação e contar o número de batimentos cardíacos em quinze segundos. Lembrar de contar como zero\n        a primeira\n        batida que sentir.<br>\n        6. Registrar seu tempo e o número de batimentos cardíacos no\n        seu perfil pessoal de condicionamento físico.<br>\n      </h4>\n    </div>\n    <div display=\"block\" *ngIf=\"idade <= 50 && (resposta == 'sim' && (corrida || ciclismo))\">\n      <!-- mulheres < 50-->\n      <h2 style=\"text-align: center;\">\n        Teste de Cooper\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        • Terreno plano e com espaço.<br>\n        • Relógio de pulso ou cronômetro.<br>\n        • Celular para medir a distância percorrida (use o aplicativo de sua preferência).<br>\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Use roupas largas e confortáveis, e sapatos apropriados para a caminhada.<br>\n        • Teste se o seu celular/aplicativo está funcionado corretamente para o monitoramento da\n        distância percorrida.<br>\n        • Faça um aquecimento andando devagar por alguns minutos e, então alongue suavemente\n        os quadríceps (pernas), apoiando-se na parede.<br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        1. Consulte o relógio para registrar o tempo ou acionar o cronômetro.<br>\n        2. Comece o teste e complete 12 minutos caminhando ou correndo, de acordo com seu\n        condicionamento. Lembre-se de manter a mesma velocidade (aproximadamente) durante\n        todo o percurso.<br>\n        3. Pare no lugar e anote imediatamente a distância percorrida (em metros) ao completar\n        os 12 minutos.<br>\n        4. Registre a distância percorrida no seu perfil pessoal de condicionamento físico.<br>\n      </h4>\n    </div>\n  </ion-item>\n  <div class=\"centralizado\">\n    <ion-button full color=\"tertiary\" (click)=\"proxima_pagina()\">\n      Continuar</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "kTW2":
    /*!***************************************************************************!*\
      !*** ./src/app/aerobica-introducao/aerobica-introducao-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AerobicaIntroducaoPageRoutingModule */

    /***/
    function kTW2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AerobicaIntroducaoPageRoutingModule", function () {
        return AerobicaIntroducaoPageRoutingModule;
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


      var _aerobica_introducao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aerobica-introducao.page */
      "i4Kr");

      var routes = [{
        path: '',
        component: _aerobica_introducao_page__WEBPACK_IMPORTED_MODULE_3__["AerobicaIntroducaoPage"]
      }];

      var AerobicaIntroducaoPageRoutingModule = function AerobicaIntroducaoPageRoutingModule() {
        _classCallCheck(this, AerobicaIntroducaoPageRoutingModule);
      };

      AerobicaIntroducaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AerobicaIntroducaoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=aerobica-introducao-aerobica-introducao-module-es5.js.map