(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estado-historico-estado-historico-module"], {
    /***/
    "IYmt":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estado-historico/estado-historico.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IYmt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goAtividadefisica()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: left;float: left;margin-top: 5%; font-size: larger;font-weight: bold;\">\n      <ion-label>\n        Estado e Histórico de Saúde\n      </ion-label>\n    </div>\n    <div style=\"float: left; text-align: justify;font-size: large;\">\n      Selecione o que você tem ou já teve:\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\"  class=\"ion-content\" color=\"primary\">\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Ataque Cardíaco(infarto agudo do miocárdio)</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox   style=\"width: 10%;height: 10%;float: left;border-radius: 10%\" (ionChange)=\"onTermsChecked($event)\"\n       color=\"secondary\">\n    </ion-checkbox>\n    <h3>Cirurgia cardíaca, cateterismo ou angioplastia </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox class=\"checkbox-square\" style=\"width: 10%;height: 10%;float: left;\"\n      (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Marcapasso ou desfibrilador interno implantado ou arritmia </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença valvar </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Insuficiência cardíaca </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Transplante cardíaco</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença cardíaca congênita</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Diabetes</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença renal</h3>\n  </div>\n  <ion-button full class=\"your-class\" color=\"secondary\" (click)=\"somar()\">\n    Continuar\n  </ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "QHkg":
    /*!*************************************************************!*\
      !*** ./src/app/estado-historico/estado-historico.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function QHkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\n.your-class {\n  position: static;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVzdGFkby1oaXN0b3JpY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtFQUF3QixhQUFBO0VBQ3hCLG1CQUFBO0FBTUY7O0FBSkU7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFPSiIsImZpbGUiOiJlc3RhZG8taGlzdG9yaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5lc3RhZG97XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uY2lkYWRle1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRvYntcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnV0dG9uLmNlbnRyYWxpemFkb3tcclxuICAtLWJvcmRlci1yYWRpdXM6IDM2LjVweDtkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSBcclxuICAueW91ci1jbGFzcyB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "X7EX":
    /*!*************************************************************!*\
      !*** ./src/app/estado-historico/estado-historico.module.ts ***!
      \*************************************************************/

    /*! exports provided: EstadoHistoricoPageModule */

    /***/
    function X7EX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPageModule", function () {
        return EstadoHistoricoPageModule;
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


      var _estado_historico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./estado-historico-routing.module */
      "sY5+");
      /* harmony import */


      var _estado_historico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./estado-historico.page */
      "b2DI");

      var EstadoHistoricoPageModule = function EstadoHistoricoPageModule() {
        _classCallCheck(this, EstadoHistoricoPageModule);
      };

      EstadoHistoricoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _estado_historico_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstadoHistoricoPageRoutingModule"]],
        declarations: [_estado_historico_page__WEBPACK_IMPORTED_MODULE_6__["EstadoHistoricoPage"]]
      })], EstadoHistoricoPageModule);
      /***/
    },

    /***/
    "b2DI":
    /*!***********************************************************!*\
      !*** ./src/app/estado-historico/estado-historico.page.ts ***!
      \***********************************************************/

    /*! exports provided: EstadoHistoricoPage */

    /***/
    function b2DI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPage", function () {
        return EstadoHistoricoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_estado_historico_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./estado-historico.page.html */
      "IYmt");
      /* harmony import */


      var _estado_historico_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./estado-historico.page.scss */
      "QHkg");
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
      /* harmony import */


      var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/dados.service */
      "gMzz");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "RU0F");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var MEDIA_FOLDER_NAME = 'my_media';
      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_14__["Plugins"].Camera;

      var EstadoHistoricoPage = /*#__PURE__*/function () {
        function EstadoHistoricoPage(navCtrl, authService, alertController, dadosService, imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage) {
          _classCallCheck(this, EstadoHistoricoPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.alertController = alertController;
          this.dadosService = dadosService;
          this.imagePicker = imagePicker;
          this.mediaCapture = mediaCapture;
          this.file = file;
          this.media = media;
          this.streamingMedia = streamingMedia;
          this.photoViewer = photoViewer;
          this.actionSheetController = actionSheetController;
          this.plt = plt;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.ataque_cardiaco = false;
          this.cirurgia_cardiaca = false;
          this.marcapasso = false;
          this.valvar = false;
          this.insuficiencia = false;
          this.transplante = false;
          this.cardiaca = false;
          this.diabetes = false;
          this.renal = false;
          this.salvo = false;
          this.cont = 0;
          this.files = [];
          this.uploadProgress = 0;
        }

        _createClass(EstadoHistoricoPage, [{
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
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class2',
                        message: '<h2 style="text-align:justify">Você pode continuar a se exercitar em intensidade leve a moderada sem necessidade de avaliação médica. Avaliação médica é recomendada antes de iniciar um programa de exercício de intensidade vigorosa.</h2>',
                        buttons: [{
                          text: 'Selecionar novamente',
                          role: 'cancel'
                        }, {
                          text: 'Continuar',
                          handler: function handler() {
                            _this2.goConfirmacao();
                          }
                        }]
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
          key: "presentAlert2",
          value: function presentAlert2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class2',
                        message: '<h1>ATENÇÃO</h1> <br> <h2 style="text-align:justify">Você deve fazer uma avaliação médica antes de iniciar o programa de exercícios. </h2>',
                        buttons: [{
                          text: 'Tenho atestado médico',
                          role: 'cancel',
                          handler: function handler() {
                            _this3.goAnexo();
                          }
                        }, {
                          text: 'Selecionar novamente',
                          role: 'cancel'
                        }, {
                          text: 'Sair',
                          handler: function handler() {
                            _this3.logout();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onTermsChecked",
          value: function onTermsChecked($event) {
            if ($event.currentTarget.name == "ion-cb-0") this.ataque_cardiaco = !this.ataque_cardiaco;
            if ($event.currentTarget.name == "ion-cb-1") this.cirurgia_cardiaca = !this.cirurgia_cardiaca;
            if ($event.currentTarget.name == "ion-cb-2") this.marcapasso = !this.marcapasso;
            if ($event.currentTarget.name == "ion-cb-3") this.valvar = !this.valvar;
            if ($event.currentTarget.name == "ion-cb-4") this.insuficiencia = !this.insuficiencia;
            if ($event.currentTarget.name == "ion-cb-5") this.transplante = !this.transplante;
            if ($event.currentTarget.name == "ion-cb-6") this.cardiaca = !this.cardiaca;
            if ($event.currentTarget.name == "ion-cb-7") this.diabetes = !this.diabetes;
            if ($event.currentTarget.name == "ion-cb-8") this.renal = !this.renal;
            console.log($event.currentTarget.name);
            if ($event.currentTarget.checked) this.cont++;else this.cont--;
          }
        }, {
          key: "somar",
          value: function somar() {
            var _this4 = this;

            var a = this.dadosService.pegarQuestionario(this.uid);
            console.log(a);

            if (this.cont == 0) {
              //sem avaliacao medica, pode passar
              this.authService.setQuestionario5(this.uid, "true", this.ataque_cardiaco, this.cirurgia_cardiaca, this.marcapasso, this.valvar, this.insuficiencia, this.transplante, this.cardiaca, this.diabetes, this.renal);
              this.goConfirmacao();
            } else {
              a.snapshotChanges().subscribe(function (res) {
                var data = res.payload.toJSON(); //data['dados'] = user.dados
                //if(data['dados'].cidade =='Água Fria') 

                console.log(data['questionarios']);

                if (data['questionarios']['questionario3']['resposta'] == 'sim' && _this4.cont) {
                  _this4.authService.setQuestionario5(_this4.uid, "true", _this4.ataque_cardiaco, _this4.cirurgia_cardiaca, _this4.marcapasso, _this4.valvar, _this4.insuficiencia, _this4.transplante, _this4.cardiaca, _this4.diabetes, _this4.renal);

                  _this4.presentAlert(); // pode continuar a se exercitar em intensidade leve a moderada sem necessidade de avaliação médica. 
                  //Avaliação médica é recomendada antes de iniciar um programa de exercício de intensidade vigorosa. **

                } else {
                  if (data['questionarios']['questionario3']['resposta'] == 'nao' && _this4.cont) {
                    _this4.authService.setQuestionario5(_this4.uid, "true", _this4.ataque_cardiaco, _this4.cirurgia_cardiaca, _this4.marcapasso, _this4.valvar, _this4.insuficiencia, _this4.transplante, _this4.cardiaca, _this4.diabetes, _this4.renal);

                    _this4.presentAlert2(); //só segue com avaliacao medica
                    // (selecionar novamente) (anexar aatestado) (sair)

                  }
                }
              });
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.authService.logoutUser().then(function (res) {
              console.log(res);

              _this5.navCtrl.navigateBack('');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "goAnexo",
          value: function goAnexo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.selectMedia();

                    case 2:
                      this.loadFiles(); //pode ser só uma funcao pra pegar um arquivo

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goConfirmacao",
          value: function goConfirmacao() {
            this.navCtrl.navigateForward('/confirmacao');
          }
        }, {
          key: "goAtividadefisica",
          value: function goAtividadefisica() {
            this.navCtrl.navigateForward('/atividade-fisica');
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var image, imageUrl;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Camera.getPhoto({
                        quality: 90,
                        allowEditing: true,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_14__["CameraResultType"].Uri
                      });

                    case 2:
                      image = _context4.sent;
                      // image.webPath will contain a path that can be set as an image src.
                      // You can access the original file using image.path, which can be
                      // passed to the Filesystem API to read the raw data of the image,
                      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                      imageUrl = image.webPath; // Can be set to the src of an image now

                      this.imageElement = imageUrl;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getImages",
          value: function getImages() {
            var _this6 = this;

            this.options = {
              // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
              // selection of a single image, the plugin will return it.
              maximumImagesCount: 1,
              // max width and height to allow the images to be.  Will keep aspect
              // ratio no matter what.  So if both are 800, the returned image
              // will be at most 800 pixels wide and 800 pixels tall.  If the width is
              // 800 and height 0 the image will be 800 pixels wide if the source
              // is at least that wide.
              width: 200,
              //height: 200,
              // quality of resized image, defaults to 100
              quality: 25,
              // output type, defaults to FILE_URIs.
              // available options are 
              // window.imagePicker.OutputType.FILE_URI (0) or 
              // window.imagePicker.OutputType.BASE64_STRING (1)
              outputType: 1
            };
            this.imageResponse = [];
            this.imagePicker.getPictures(this.options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this6.imageResponse.push('data:image/jpeg;base64,' + results[i]);
              }
            }, function (err) {
              alert(err);
            });
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            var _this7 = this;

            this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(function (res) {
              _this7.files = res;
            }, function (err) {
              return console.log('error loading files: ', err);
            });
          }
        }, {
          key: "selectMedia",
          value: function selectMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetController.create({
                        header: 'What would you like to add?',
                        buttons: [{
                          text: 'Tirar foto',
                          handler: function handler() {
                            _this8.captureImage();
                          }
                        }, {
                          text: 'Pegar imagem',
                          handler: function handler() {
                            _this8.pickImages();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      _context5.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "pickImages",
          value: function pickImages() {
            var _this9 = this;

            this.options = {
              maximumImagesCount: 1,
              width: 200,
              quality: 25,
              outputType: 1
            };
            this.imagePicker.getPictures(this.options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this9.copyFileToLocalDir(results[i]);

                _this9.uploadFile(_this9.files[_this9.files.length - 1]);
              }
            }); // If you get problems on Android, try to ask for Permission first
            // this.imagePicker.requestReadPermission().then(result => {
            //   console.log('requestReadPermission: ', result);
            //   this.selectMultiple();
            // });
          }
        }, {
          key: "captureImage",
          value: function captureImage() {
            var _this10 = this;

            this.mediaCapture.captureImage().then(function (data) {
              if (data.length > 0) {
                _this10.copyFileToLocalDir(data[0].fullPath);

                _this10.uploadFile(_this10.files[_this10.files.length - 1]);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "copyFileToLocalDir",
          value: function copyFileToLocalDir(fullPath) {
            var _this11 = this;

            var myPath = fullPath; // Make sure we copy from the right location

            if (fullPath.indexOf('file://') < 0) {
              myPath = 'file://' + fullPath;
            }

            var ext = myPath.split('.').pop();
            var d = Date.now();
            var newName = "".concat(d, ".").concat(ext);
            var name = myPath.substr(myPath.lastIndexOf('/') + 1);
            var copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
            var copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
            this.file.copyFile(copyFrom, name, copyTo, newName).then(function (success) {
              _this11.loadFiles();
            }, function (error) {
              console.log('error: ', error);
            });
          }
        }, {
          key: "openFile",
          value: function openFile(f) {
            if (f.name.indexOf('.wav') > -1) {
              // We need to remove file:/// from the path for the audio plugin to work
              var path = f.nativeURL.replace(/^file:\/\//, '');
              var audioFile = this.media.create(path);
              audioFile.play();
            } else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
              // E.g: Use the Streaming Media plugin to play a video
              this.streamingMedia.playVideo(f.nativeURL);
            } else if (f.name.indexOf('.jpg') > -1) {
              // E.g: Use the Photoviewer to present an Image
              this.photoViewer.show(f.nativeURL, 'MY awesome image');
            }
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(f) {
            var _this12 = this;

            var path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            this.file.removeFile(path, f.name).then(function () {
              _this12.loadFiles();
            }, function (err) {
              return console.log('error remove: ', err);
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(f) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this13 = this;

              var path, type, buffer, fileBlob, randomId, uploadTask;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
                      type = this.getMimeType(f.name.split('.').pop());
                      _context7.next = 4;
                      return this.file.readAsArrayBuffer(path, f.name);

                    case 4:
                      buffer = _context7.sent;
                      fileBlob = new Blob([buffer], type);
                      randomId = Math.random().toString(36).substring(2, 8); //troca $ por uid

                      uploadTask = this.storage.upload("".concat(this.uid, "/anexos/").concat(new Date().getTime(), "_").concat(randomId), fileBlob);
                      uploadTask.percentageChanges().subscribe(function (change) {
                        _this13.uploadProgress = change;
                      });
                      uploadTask.then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  _context6.next = 2;
                                  return this.toastCtrl.create({
                                    duration: 3000,
                                    message: 'File upload finished!'
                                  });

                                case 2:
                                  toast = _context6.sent;
                                  toast.present();
                                  this.salvo = true;
                                  this.goConfirmacao();

                                case 6:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getMimeType",
          value: function getMimeType(fileExt) {
            if (fileExt == 'wav') return {
              type: 'audio/wav'
            };else if (fileExt == 'jpg') return {
              type: 'image/jpg'
            };else if (fileExt == 'mp4') return {
              type: 'video/mp4'
            };else if (fileExt == 'MOV') return {
              type: 'video/quicktime'
            };
          }
        }]);

        return EstadoHistoricoPage;
      }();

      EstadoHistoricoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"]
        }, {
          type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__["Media"]
        }, {
          type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__["StreamingMedia"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorage"]
        }];
      };

      EstadoHistoricoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estado-historico',
        template: _raw_loader_estado_historico_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estado_historico_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EstadoHistoricoPage);
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
    "sY5+":
    /*!*********************************************************************!*\
      !*** ./src/app/estado-historico/estado-historico-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EstadoHistoricoPageRoutingModule */

    /***/
    function sY5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPageRoutingModule", function () {
        return EstadoHistoricoPageRoutingModule;
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


      var _estado_historico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./estado-historico.page */
      "b2DI");

      var routes = [{
        path: '',
        component: _estado_historico_page__WEBPACK_IMPORTED_MODULE_3__["EstadoHistoricoPage"]
      }];

      var EstadoHistoricoPageRoutingModule = function EstadoHistoricoPageRoutingModule() {
        _classCallCheck(this, EstadoHistoricoPageRoutingModule);
      };

      EstadoHistoricoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EstadoHistoricoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=estado-historico-estado-historico-module-es5.js.map