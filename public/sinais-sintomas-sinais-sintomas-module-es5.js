(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sinais-sintomas-sinais-sintomas-module"], {
    /***/
    "0g34":
    /*!***********************************************************!*\
      !*** ./src/app/sinais-sintomas/sinais-sintomas.module.ts ***!
      \***********************************************************/

    /*! exports provided: SinaisSintomasPageModule */

    /***/
    function g34(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinaisSintomasPageModule", function () {
        return SinaisSintomasPageModule;
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


      var _sinais_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sinais-sintomas-routing.module */
      "ermu");
      /* harmony import */


      var _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sinais-sintomas.page */
      "TRw4");

      var SinaisSintomasPageModule = function SinaisSintomasPageModule() {
        _classCallCheck(this, SinaisSintomasPageModule);
      };

      SinaisSintomasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sinais_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinaisSintomasPageRoutingModule"]],
        declarations: [_sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_6__["SinaisSintomasPage"]]
      })], SinaisSintomasPageModule);
      /***/
    },

    /***/
    "DRiG":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sinais-sintomas/sinais-sintomas.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DRiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goPre_questionario()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: left;float: left;margin-top: 5%; font-size: xx-large;font-weight: bold;\">\n      <ion-label>\n        Sinais e Sintomas\n      </ion-label>\n    </div>\n    <div style=\"float: left; text-align: justify;font-size: x-large;\">\n      Selecione o que você apresenta ou já apresentou:\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\"  class=\"ion-content\" color=\"primary\">\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Dor ou desconforto no peito durante esforço</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox   style=\"width: 10%;height: 10%;float: left;border-radius: 10%\" (ionChange)=\"onTermsChecked($event)\"\n       color=\"secondary\">\n    </ion-checkbox>\n    <h3>Falta de ar sem justificativa</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox class=\"checkbox-square\" style=\"width: 10%;height: 10%;float: left;\"\n      (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Tontura/Vertigem, desmaio e/ou apagões</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Inchaço no tornozelo</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Sensação desagradável de batimento cardíaco forte, rápido ou irregular</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Sensação de queimação ou câimbras nas pernas ao caminhar distâncias curtas</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"dores\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Dores nas articulações do joelho, quadril e/ou coluna</h3>\n  </div>\n  <ion-button class=\"your-class\" color=\"secondary\" (click)=\"somar()\">\n    Continuar\n  </ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "TRw4":
    /*!*********************************************************!*\
      !*** ./src/app/sinais-sintomas/sinais-sintomas.page.ts ***!
      \*********************************************************/

    /*! exports provided: SinaisSintomasPage */

    /***/
    function TRw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinaisSintomasPage", function () {
        return SinaisSintomasPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sinais_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sinais-sintomas.page.html */
      "DRiG");
      /* harmony import */


      var _sinais_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sinais-sintomas.page.scss */
      "lHoX");
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


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "RU0F");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var MEDIA_FOLDER_NAME = 'my_media';
      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["Plugins"].Camera;

      var SinaisSintomasPage = /*#__PURE__*/function () {
        function SinaisSintomasPage(navCtrl, authService, alertController, imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage) {
          _classCallCheck(this, SinaisSintomasPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.alertController = alertController;
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
          this.dor = false;
          this.ar = false;
          this.tontura = false;
          this.inchaco = false;
          this.batimento = false;
          this.queimacao = true;
          this.dores = false;
          this.cont = 0;
          this.salvo = false;
          this.files = [];
          this.uploadProgress = 0;
        }

        _createClass(SinaisSintomasPage, [{
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
                        message: '<h1>ATENÇÃO</h1> <br> <h2 style="text-align:justify">Você deve fazer uma avaliação médica antes de iniciar o programa de exercícios. </h2>',
                        buttons: [{
                          text: 'Tenho atestado médico',
                          role: 'cancel',
                          handler: function handler() {
                            _this2.goAnexo();
                          }
                        }, {
                          text: 'Selecionar novamente',
                          role: 'cancel'
                        }, {
                          text: 'Sair',
                          handler: function handler() {
                            _this2.logout();
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
          key: "onTermsChecked",
          value: function onTermsChecked($event) {
            if ($event.currentTarget.name == "ion-cb-0") this.dor = !this.dor;
            if ($event.currentTarget.name == "ion-cb-1") this.ar = !this.ar;
            if ($event.currentTarget.name == "ion-cb-2") this.tontura = !this.tontura;
            if ($event.currentTarget.name == "ion-cb-3") this.inchaco = !this.inchaco;
            if ($event.currentTarget.name == "ion-cb-4") this.batimento = !this.batimento;
            if ($event.currentTarget.name == "ion-cb-5") this.queimacao = !this.queimacao;
            if ($event.currentTarget.name == "ion-cb-6") this.dores = !this.dores;
            console.log($event.currentTarget.name);
            if ($event.currentTarget.checked) this.cont++;else this.cont--;
          }
        }, {
          key: "somar",
          value: function somar() {
            if (this.cont) {
              this.presentAlert();
            } else {
              this.proximo_questionario();
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.authService.logoutUser().then(function (res) {
              console.log(res);

              _this3.navCtrl.navigateBack('');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "goAnexo",
          value: function goAnexo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("ir pro anexo");
                      this.selectMedia();
                      this.loadFiles(); //pode ser só uma funcao pra pegar um arquivo

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "proximo_questionario",
          value: function proximo_questionario() {
            console.log(this.uid);
            this.authService.setQuestionario2(this.uid);
            this.navCtrl.navigateForward('/atividade-fisica');
          }
        }, {
          key: "goPre_questionario",
          value: function goPre_questionario() {
            this.navCtrl.navigateBack('/pre-questionario');
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var image, imageUrl;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Camera.getPhoto({
                        quality: 90,
                        allowEditing: true,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["CameraResultType"].Uri
                      });

                    case 2:
                      image = _context3.sent;
                      // image.webPath will contain a path that can be set as an image src.
                      // You can access the original file using image.path, which can be
                      // passed to the Filesystem API to read the raw data of the image,
                      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                      imageUrl = image.webPath; // Can be set to the src of an image now

                      this.imageElement = imageUrl;

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getImages",
          value: function getImages() {
            var _this4 = this;

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
                _this4.imageResponse.push('data:image/jpeg;base64,' + results[i]);
              }
            }, function (err) {
              alert(err);
            });
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            var _this5 = this;

            this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(function (res) {
              _this5.files = res;
            }, function (err) {
              return console.log('error loading files: ', err);
            });
          }
        }, {
          key: "selectMedia",
          value: function selectMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Como você gostaria de adicionar a foto?',
                        buttons: [{
                          text: 'Tirar foto',
                          handler: function handler() {
                            _this6.captureImage();
                          }
                        }, {
                          text: 'Pegar imagem',
                          handler: function handler() {
                            _this6.pickImages();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "pickImages",
          value: function pickImages() {
            var _this7 = this;

            this.options = {
              maximumImagesCount: 1,
              width: 200,
              quality: 25,
              outputType: 1
            };
            this.imagePicker.getPictures(this.options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this7.copyFileToLocalDir(results[i]);

                _this7.uploadFile(_this7.files[_this7.files.length - 1]);
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
            var _this8 = this;

            this.mediaCapture.captureImage().then(function (data) {
              if (data.length > 0) {
                _this8.copyFileToLocalDir(data[0].fullPath);

                _this8.uploadFile(_this8.files[_this8.files.length - 1]);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "copyFileToLocalDir",
          value: function copyFileToLocalDir(fullPath) {
            var _this9 = this;

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
              _this9.loadFiles();
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
            var _this10 = this;

            var path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            this.file.removeFile(path, f.name).then(function () {
              _this10.loadFiles();
            }, function (err) {
              return console.log('error remove: ', err);
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(f) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this11 = this;

              var path, type, buffer, fileBlob, randomId, uploadTask;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
                      type = this.getMimeType(f.name.split('.').pop());
                      _context6.next = 4;
                      return this.file.readAsArrayBuffer(path, f.name);

                    case 4:
                      buffer = _context6.sent;
                      fileBlob = new Blob([buffer], type);
                      randomId = Math.random().toString(36).substring(2, 8); //troca $ por uid

                      uploadTask = this.storage.upload("".concat(this.uid, "/anexos/").concat(new Date().getTime(), "_").concat(randomId), fileBlob);
                      uploadTask.percentageChanges().subscribe(function (change) {
                        _this11.uploadProgress = change;
                      });
                      uploadTask.then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.toastCtrl.create({
                                    duration: 3000,
                                    message: 'Arquivo Salvo'
                                  });

                                case 2:
                                  toast = _context5.sent;
                                  toast.present();
                                  this.proximo_questionario();

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
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

        return SinaisSintomasPage;
      }();

      SinaisSintomasPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["ImagePicker"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"]
        }, {
          type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"]
        }, {
          type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]
        }];
      };

      SinaisSintomasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sinais-sintomas',
        template: _raw_loader_sinais_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sinais_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SinaisSintomasPage);
      /***/
    },

    /***/
    "ermu":
    /*!*******************************************************************!*\
      !*** ./src/app/sinais-sintomas/sinais-sintomas-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SinaisSintomasPageRoutingModule */

    /***/
    function ermu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinaisSintomasPageRoutingModule", function () {
        return SinaisSintomasPageRoutingModule;
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


      var _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sinais-sintomas.page */
      "TRw4");

      var routes = [{
        path: '',
        component: _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_3__["SinaisSintomasPage"]
      }];

      var SinaisSintomasPageRoutingModule = function SinaisSintomasPageRoutingModule() {
        _classCallCheck(this, SinaisSintomasPageRoutingModule);
      };

      SinaisSintomasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SinaisSintomasPageRoutingModule);
      /***/
    },

    /***/
    "lHoX":
    /*!***********************************************************!*\
      !*** ./src/app/sinais-sintomas/sinais-sintomas.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function lHoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbmFpcy1zaW50b21hcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQXdCLGFBQUE7RUFDeEIsbUJBQUE7QUFNRjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFPSiIsImZpbGUiOiJzaW5haXMtc2ludG9tYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmVzdGFkb3tcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jaWRhZGV7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uZG9ie1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5idXR0b24uY2VudHJhbGl6YWRve1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzYuNXB4O2Rpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9IFxyXG4gIC55b3VyLWNsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sinais-sintomas-sinais-sintomas-module-es5.js.map