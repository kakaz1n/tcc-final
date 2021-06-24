(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treino-treino-module"], {
    /***/
    "5JkX":
    /*!***************************************!*\
      !*** ./src/app/treino/treino.page.ts ***!
      \***************************************/

    /*! exports provided: TreinoPage */

    /***/
    function JkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoPage", function () {
        return TreinoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treino_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treino.page.html */
      "HBHT");
      /* harmony import */


      var _treino_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./treino.page.scss */
      "sTRH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../shared/appointment.service */
      "JoXq");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_dados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/dados.service */
      "gMzz");

      var TreinoPage = /*#__PURE__*/function () {
        function TreinoPage(aptService, actRoute, router, domSatizer, navCtrl, authService, dadosService, alertController) {
          _classCallCheck(this, TreinoPage);

          this.aptService = aptService;
          this.actRoute = actRoute;
          this.router = router;
          this.domSatizer = domSatizer;
          this.navCtrl = navCtrl;
          this.authService = authService;
          this.dadosService = dadosService;
          this.alertController = alertController;
          this.count = 0;
          this.vezes = -1;
          this.treino = this.actRoute.snapshot.paramMap.get('treino');
          if (this.treino[0] == ':') this.treino = this.treino.replace(":", '');
          this.sem = this.actRoute.snapshot.paramMap.get('semana');
          this.data_volta = this.actRoute.snapshot.paramMap.get('data');
          console.log(this.data_volta);
          console.log(this.sem);
          console.log(this.treino);
        }

        _createClass(TreinoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.innerWidth = window.innerWidth;
            console.log(this.innerWidth);
            this.vezes++;
            this.authService.userDetails().subscribe(function (res) {
              console.log('res', res);

              if (res !== null) {
                _this.uid = res.uid;

                if (!_this.sem) {
                  console.log(_this.uid);

                  var b = _this.authService.pegarProgresso(_this.uid);

                  console.log(b);
                  b.snapshotChanges().subscribe(function (res) {
                    console.log(res.payload);
                    var data = res.payload.toJSON();
                    console.log(data);
                    console.log(_this.treino);
                    _this.etapa = data['etapa'];
                    _this.nivel = data['nivel'];

                    var c = _this.authService.getTreino(_this.treino);

                    console.log(c);
                    c.snapshotChanges().subscribe(function (res) {
                      console.log(res.payload.toJSON());
                      var x = res.payload.toJSON();
                      console.log(_this.etapa);
                      console.log(x[_this.etapa]['Niveis']['1']);
                      _this.treinos = [];

                      for (var i in x[_this.etapa]['Exercicios']) {
                        _this.count++;
                        console.log(i);
                        console.log(x[_this.etapa]['Niveis'][_this.nivel]);

                        if (_this.treino == 'Aerobico') {
                          console.log('entrou');

                          _this.treinos.push({
                            nome: i,
                            cor: "success",
                            intensidade: x[_this.etapa]['Niveis'][_this.nivel]['intensidade'],
                            duracao: x[_this.etapa]['Niveis'][_this.nivel]['tempo']
                          });
                        }

                        if (_this.treino == 'Resistido') {
                          console.log('entrou');

                          _this.treinos.push({
                            nome: i,
                            cor: "success",
                            carga: x[_this.etapa]['Niveis'][_this.nivel]['carga'],
                            descanso: x[_this.etapa]['Niveis'][_this.nivel]['descanso'],
                            quantidade: x[_this.etapa]['Niveis'][_this.nivel]['quantidade']
                          });

                          _this.descanso = x[_this.etapa]['Niveis'][_this.nivel]['descanso'];
                          _this.carga = x[_this.etapa]['Niveis'][_this.nivel]['carga'];
                        }
                      }
                    });
                  }); //console.log(res.uid)
                  // console.log(this.authService.lerDados(res.uid))
                } else {
                  console.log(_this.uid);

                  var _b = _this.authService.pegarProgresso(_this.uid);

                  console.log(_b);

                  _b.snapshotChanges().subscribe(function (res) {
                    console.log(res.payload);
                    var data = res.payload.toJSON();
                    console.log(data);
                    console.log(_this.treino);
                    _this.etapa = data['etapa'];
                    _this.nivel = data['nivel'];

                    var c = _this.authService.getTreino(_this.treino);

                    console.log(c);
                    c.snapshotChanges().subscribe(function (res) {
                      console.log(res.payload.toJSON());
                      var x = res.payload.toJSON();
                      console.log(_this.etapa);
                      console.log(x[_this.etapa]['Niveis']);
                      _this.treinos = [];

                      for (var i in x[_this.etapa]['Exercicios']) {
                        _this.count++;
                        console.log(i);
                        console.log(x[_this.etapa]['Niveis'][_this.nivel]);

                        if (_this.treino == 'Aerobico') {
                          console.log('entrou');

                          _this.treinos.push({
                            nome: i,
                            cor: "tertiary",
                            intensidade: x[_this.etapa]['Niveis'][_this.nivel]['intensidade'],
                            duracao: x[_this.etapa]['Niveis'][_this.nivel]['tempo']
                          });
                        }

                        if (_this.treino == 'Resistido') {
                          console.log('entrou');

                          _this.treinos.push({
                            nome: i,
                            cor: "tertiary",
                            carga: x[_this.etapa]['Niveis'][_this.nivel]['carga'],
                            descanso: x[_this.etapa]['Niveis'][_this.nivel]['descanso'],
                            quantidade: x[_this.etapa]['Niveis'][_this.nivel]['quantidade']
                          });

                          _this.descanso = x[_this.etapa]['Niveis'][_this.nivel]['descanso'];
                          _this.carga = x[_this.etapa]['Niveis'][_this.nivel]['carga'];
                        }
                      }
                    });
                  });
                }
              } else {
                _this.navCtrl.navigateBack('');
              }

              console.log(_this.authService.userDetails);
            }, function (err) {
              console.log('err', err);
            });
          }
        }, {
          key: "checkado",
          value: function checkado() {
            if (this.sem) return true;
            if (this.count) return false;
            return true;
          }
        }, {
          key: "onTermsChecked",
          value: function onTermsChecked($event) {
            console.log($event.currentTarget.name);
            if ($event.currentTarget.checked) this.count--;else this.count++;
            this.mudarcor($event.currentTarget.name);
          }
        }, {
          key: "mudarcor",
          value: function mudarcor(nome) {
            var x = 0;

            var _iterator = _createForOfIteratorHelper(this.treinos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                console.log('i:' + i['nome'] + 'nome:' + nome);
                if (i['nome'] == nome) break;
                x++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (!this.sem) {
              console.log(nome);

              if (this.treinos[x]['cor'] == "success") {
                this.treinos[x]['cor'] = "tertiary";
              } else this.treinos[x]['cor'] = "success";
            }
          }
        }, {
          key: "goExercicio",
          value: function goExercicio(x) {
            console.log(x);
            if (!this.sem) this.navCtrl.navigateForward('exercicio/' + x + '/treino/' + this.treino);else this.navCtrl.navigateForward('exercicio/' + x + '/fake_treino/' + this.treino + '/' + this.sem + '/' + this.data_volta);
          }
        }, {
          key: "voltar",
          value: function voltar() {
            if (this.sem) this.router.navigate(['/treino-realizado/', this.data_volta]);else {
              this.navCtrl.navigateBack('/dashboard');
              this.vezes++;
            }
          }
        }, {
          key: "set_treino",
          value: function set_treino() {
            if (!this.sem) {
              console.log('dale');
              this.authService.SetTreino(this.uid, this.treino);
              this.navCtrl.navigateBack('dashboard');
            } else this.router.navigate(['/treino-realizado/', this.data_volta]);
          }
        }]);

        return TreinoPage;
      }();

      TreinoPage.ctorParameters = function () {
        return [{
          type: _shared_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticateService"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_9__["DadosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      TreinoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-treino',
        template: _raw_loader_treino_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_treino_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TreinoPage);
      /***/
    },

    /***/
    "HBHT":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treino/treino.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function HBHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-left: 15%; font-size: x-large;font-weight: bold;\">\n      <ion-label>        \n        <div *ngIf=\"this.treino == 'Alongamento'\">\n          Alongamento Inicial\n        </div>\n        <div *ngIf=\"this.treino == 'Alongamento final'\">\n          Alongamento Final\n        </div>\n        <div *ngIf=\"this.treino == 'Aerobico'\">\n          Aeróbio\n        </div>\n        <div *ngIf=\"this.treino == 'Resistido'\" style=\"font-size: xx-large;margin-top: -15%;margin-bottom: 5%;\">\n          {{this.treino}} \n        </div>\n        <div *ngIf=\"this.treino == 'Aerobico' || this.treino == 'Resistido'\" style=\"text-align: center;margin-top: -5%;font-size: xx-large;\">\n           <h4>{{this.descanso}}</h4>             \n          <div *ngIf=\"this.carga\">\n            <h4> carga : {{this.carga}}</h4>\n          </div>\n       </div>\n           \n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content  fullscreen=\"true\" color=\"primary\" class=\"ion-content\"> \n  <div style=\"min-height: 600px;\">\n    <div *ngIf=\"this.treino == 'Alongamento'\" >\n      <h1 style=\"margin: 2%;\">ANTES DE SE EXERCITAR, LEIA ATENTAMENTE! </h1>\n      <h4 style=\"margin: 3%;\"><p>Cada movimento deve ser executado devagar e mantido na posição entre 10 a 15 segundos. </p> </h4>\n      <h4 style=\"margin: 3%;\"><p>Realize alongamentos para todos os grupos musculares, isto é: alongue seu pescoço, braços, mãos, tronco, pernas e pés. </p> </h4>\n      <h4 style=\"margin: 3%;\"><p>Todo músculo deve ser alongado tanto do lado direito, quanto do lado esquerdo, tanto a parte da frente, como a parte de trás. </p> </h4>\n      <h4 style=\"margin: 3%;\"><p>Você pode realizar estes alongamentos na sua casa, usando um apoio se necessário, como uma mesa, cadeira ou até parede.</p> </h4>\n      <ion-img style=\"width:300px;background-color: transparent;margin: 3%;\" src=\"../../assets/fotos/alongamento_inicial.png\">\n      </ion-img>\n    </div>  \n    <div *ngIf=\"this.treino == 'Alongamento final'\">\n      <h2 style=\"margin: 3%;\">Ao terminar seu treino, não pare bruscamente; diminua progressivamente a intensidade de sua atividade. Relaxe, se alongue e faça exercícios de respiração (inspire e expire o ar profundamente). Não se esqueça de se hidratar!</h2>\n      <ion-img style=\"height:500px;background-color: transparent;margin: 3%;\" src=\"../../assets/fotos/alongamento final.png\">\n      </ion-img>\n    </div>    \n<ion-item *ngFor=\"let t of treinos\" style=\"width: 100%;margin-top: 5%;height:100px\" color=\"transparent\" lines=\"none\">\n  \n  \n  <ion-button  [name] = \"t.nome\" *ngIf=\"!this.sem\" expand=\"full\" style=\"display: inline-block;border-radius: 36.5pt; height:100%;width:100%;text-align: center;font-size:auto;height: 90px;\" [color]=\"t.cor\">\n      <div style=\"font-size: 30px;float: left;position: fixed;margin-right: 90%;margin-left: 2% ;\">\n        <ion-icon (click)=\"goExercicio(t.nome)\" name=\"information-circle-outline\"></ion-icon>\n      </div>\n      <div *ngIf=\"this.treino == 'Aerobico'\">\n        <ion-label>{{t.nome}}<br><br><br>\n          {{t.duracao}}</ion-label>\n        </div>\n        <div *ngIf=\"this.treino == 'Resistido'\">\n          <ion-label>{{t.nome}}<br><br><br>           \n            {{t.quantidade}} <br>\n          </ion-label>\n          </div>\n      <div style=\"position:relative;float: left;\">\n        <ion-checkbox name=\"{{t.nome}}\" color=\"warning\" (ionChange)=\"onTermsChecked($event)\"></ion-checkbox>\n      </div>\n      </ion-button>    \n      <!-- caso venha do realizado-->\n      <ion-button  *ngIf=\"this.sem\" expand=\"full\" style=\"display: inline-block;border-radius: 36.5pt; height:100%;width:100%;text-align: center;font-size:auto;height: 90px;\" [color]=\"t.cor\">\n        <div style=\"font-size: 30px;float: left;position: fixed;margin-right: 90%;margin-left: 2% ;\">\n          <ion-icon (click)=\"goExercicio(t.nome)\" name=\"information-circle-outline\"></ion-icon>\n        </div>\n        <div *ngIf=\"this.treino == 'Aerobico'\">\n          <ion-label>{{t.nome}}<br><br><br>\n            {{t.duracao}}</ion-label>\n          </div>\n          <div *ngIf=\"this.treino == 'Resistido'\">\n            <ion-label>{{t.nome}}<br><br>            \n              {{t.quantidade}}\n             \n            </ion-label>\n            </div>\n        <div style=\"position:relative;float: left;\">\n          <ion-checkbox  color=\"warning\" checked=\"true\"></ion-checkbox>\n        </div>\n        </ion-button>      \n\n  </ion-item>\n    <ion-button  style=\"width: 70%;margin-left: 10%;\" color=\"tertiary\" (click)=\"set_treino()\" [disabled]=\"!checkado()\">\n      Continuar</ion-button>  \n  </div>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "VqSj":
    /*!*************************************************!*\
      !*** ./src/app/treino/treino-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TreinoPageRoutingModule */

    /***/
    function VqSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoPageRoutingModule", function () {
        return TreinoPageRoutingModule;
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


      var _treino_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./treino.page */
      "5JkX");

      var routes = [{
        path: '',
        component: _treino_page__WEBPACK_IMPORTED_MODULE_3__["TreinoPage"]
      }];

      var TreinoPageRoutingModule = function TreinoPageRoutingModule() {
        _classCallCheck(this, TreinoPageRoutingModule);
      };

      TreinoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TreinoPageRoutingModule);
      /***/
    },

    /***/
    "Vwae":
    /*!*****************************************!*\
      !*** ./src/app/treino/treino.module.ts ***!
      \*****************************************/

    /*! exports provided: TreinoPageModule */

    /***/
    function Vwae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinoPageModule", function () {
        return TreinoPageModule;
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


      var _treino_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./treino-routing.module */
      "VqSj");
      /* harmony import */


      var _treino_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./treino.page */
      "5JkX");

      var TreinoPageModule = function TreinoPageModule() {
        _classCallCheck(this, TreinoPageModule);
      };

      TreinoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _treino_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreinoPageRoutingModule"]],
        declarations: [_treino_page__WEBPACK_IMPORTED_MODULE_6__["TreinoPage"]]
      })], TreinoPageModule);
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
    "sTRH":
    /*!*****************************************!*\
      !*** ./src/app/treino/treino.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function sTRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyZWluby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUpJO0VBQ0UsYUFBQTtBQU1OIiwiZmlsZSI6InRyZWluby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7ICAgIFxyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=treino-treino-module-es5.js.map