(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estado-historico-estado-historico-module"],{

/***/ "IYmt":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estado-historico/estado-historico.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goAtividadefisica()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: left;float: left;margin-top: 5%; font-size: larger;font-weight: bold;\">\n      <ion-label>\n        Estado e Histórico de Saúde\n      </ion-label>\n    </div>\n    <div style=\"float: left; text-align: justify;font-size: large;\">\n      Selecione o que você tem ou já teve:\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\"  class=\"ion-content\" color=\"primary\">\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Ataque Cardíaco(infarto agudo do miocárdio)</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox   style=\"width: 10%;height: 10%;float: left;border-radius: 10%\" (ionChange)=\"onTermsChecked($event)\"\n       color=\"secondary\">\n    </ion-checkbox>\n    <h3>Cirurgia cardíaca, cateterismo ou angioplastia </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox class=\"checkbox-square\" style=\"width: 10%;height: 10%;float: left;\"\n      (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Marcapasso ou desfibrilador interno implantado ou arritmia </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença valvar </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Insuficiência cardíaca </h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Transplante cardíaco</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença cardíaca congênita</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Diabetes</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Doença renal</h3>\n  </div>\n  <ion-button full class=\"your-class\" color=\"secondary\" (click)=\"somar()\">\n    Continuar\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "QHkg":
/*!*************************************************************!*\
  !*** ./src/app/estado-historico/estado-historico.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\n.your-class {\n  position: static;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVzdGFkby1oaXN0b3JpY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtFQUF3QixhQUFBO0VBQ3hCLG1CQUFBO0FBTUY7O0FBSkU7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFPSiIsImZpbGUiOiJlc3RhZG8taGlzdG9yaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5lc3RhZG97XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uY2lkYWRle1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRvYntcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnV0dG9uLmNlbnRyYWxpemFkb3tcclxuICAtLWJvcmRlci1yYWRpdXM6IDM2LjVweDtkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSBcclxuICAueW91ci1jbGFzcyB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "X7EX":
/*!*************************************************************!*\
  !*** ./src/app/estado-historico/estado-historico.module.ts ***!
  \*************************************************************/
/*! exports provided: EstadoHistoricoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPageModule", function() { return EstadoHistoricoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estado_historico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estado-historico-routing.module */ "sY5+");
/* harmony import */ var _estado_historico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estado-historico.page */ "b2DI");







let EstadoHistoricoPageModule = class EstadoHistoricoPageModule {
};
EstadoHistoricoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estado_historico_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstadoHistoricoPageRoutingModule"]
        ],
        declarations: [_estado_historico_page__WEBPACK_IMPORTED_MODULE_6__["EstadoHistoricoPage"]]
    })
], EstadoHistoricoPageModule);



/***/ }),

/***/ "b2DI":
/*!***********************************************************!*\
  !*** ./src/app/estado-historico/estado-historico.page.ts ***!
  \***********************************************************/
/*! exports provided: EstadoHistoricoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPage", function() { return EstadoHistoricoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estado_historico_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estado-historico.page.html */ "IYmt");
/* harmony import */ var _estado_historico_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estado-historico.page.scss */ "QHkg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dados.service */ "gMzz");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/File/ngx */ "FAH8");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/core */ "gcOT");















const MEDIA_FOLDER_NAME = 'my_media';



const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_14__["Plugins"];
let EstadoHistoricoPage = class EstadoHistoricoPage {
    constructor(navCtrl, authService, alertController, dadosService, imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage) {
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
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log("uid = " + this.uid);
                //console.log(res.uid)
                // console.log(this.authService.lerDados(res.uid))
            }
            else {
                this.navCtrl.navigateBack('');
            }
            console.log(this.authService.userDetails);
        }, err => {
            console.log('err', err);
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class2',
                message: '<h2 style="text-align:justify">Você pode continuar a se exercitar em intensidade leve a moderada sem necessidade de avaliação médica. Avaliação médica é recomendada antes de iniciar um programa de exercício de intensidade vigorosa.</h2>',
                buttons: [
                    {
                        text: 'Selecionar novamente',
                        role: 'cancel'
                    },
                    {
                        text: 'Continuar',
                        handler: () => {
                            this.goConfirmacao();
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class2',
                message: '<h1>ATENÇÃO</h1> <br> <h2 style="text-align:justify">Você deve fazer uma avaliação médica antes de iniciar o programa de exercícios. </h2>',
                buttons: [{
                        text: 'Tenho atestado médico',
                        role: 'cancel',
                        handler: () => {
                            this.goAnexo();
                        }
                    },
                    {
                        text: 'Selecionar novamente',
                        role: 'cancel'
                    },
                    {
                        text: 'Sair',
                        handler: () => {
                            this.logout();
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    onTermsChecked($event) {
        if (($event.currentTarget.name) == "ion-cb-0")
            this.ataque_cardiaco = !this.ataque_cardiaco;
        if (($event.currentTarget.name) == "ion-cb-1")
            this.cirurgia_cardiaca = !this.cirurgia_cardiaca;
        if (($event.currentTarget.name) == "ion-cb-2")
            this.marcapasso = !this.marcapasso;
        if (($event.currentTarget.name) == "ion-cb-3")
            this.valvar = !this.valvar;
        if (($event.currentTarget.name) == "ion-cb-4")
            this.insuficiencia = !this.insuficiencia;
        if (($event.currentTarget.name) == "ion-cb-5")
            this.transplante = !this.transplante;
        if (($event.currentTarget.name) == "ion-cb-6")
            this.cardiaca = !this.cardiaca;
        if (($event.currentTarget.name) == "ion-cb-7")
            this.diabetes = !this.diabetes;
        if (($event.currentTarget.name) == "ion-cb-8")
            this.renal = !this.renal;
        console.log($event.currentTarget.name);
        if ($event.currentTarget.checked)
            this.cont++;
        else
            this.cont--;
    }
    somar() {
        let a = this.dadosService.pegarQuestionario(this.uid);
        console.log(a);
        if (this.cont == 0) {
            //sem avaliacao medica, pode passar
            this.authService.setQuestionario5(this.uid, "true", this.ataque_cardiaco, this.cirurgia_cardiaca, this.marcapasso, this.valvar, this.insuficiencia, this.transplante, this.cardiaca, this.diabetes, this.renal);
            this.goConfirmacao();
        }
        else {
            a.snapshotChanges().subscribe(res => {
                const data = res.payload.toJSON();
                //data['dados'] = user.dados
                //if(data['dados'].cidade =='Água Fria') 
                console.log(data['questionarios']);
                if (data['questionarios']['questionario3']['resposta'] == 'sim' && this.cont) {
                    this.authService.setQuestionario5(this.uid, "true", this.ataque_cardiaco, this.cirurgia_cardiaca, this.marcapasso, this.valvar, this.insuficiencia, this.transplante, this.cardiaca, this.diabetes, this.renal);
                    this.presentAlert();
                    // pode continuar a se exercitar em intensidade leve a moderada sem necessidade de avaliação médica. 
                    //Avaliação médica é recomendada antes de iniciar um programa de exercício de intensidade vigorosa. **
                }
                else {
                    if (data['questionarios']['questionario3']['resposta'] == 'nao' && this.cont) {
                        this.authService.setQuestionario5(this.uid, "true", this.ataque_cardiaco, this.cirurgia_cardiaca, this.marcapasso, this.valvar, this.insuficiencia, this.transplante, this.cardiaca, this.diabetes, this.renal);
                        this.presentAlert2();
                        //só segue com avaliacao medica
                        // (selecionar novamente) (anexar aatestado) (sair)
                    }
                }
            });
        }
    }
    logout() {
        this.authService.logoutUser()
            .then(res => {
            console.log(res);
            this.navCtrl.navigateBack('');
        })
            .catch(error => {
            console.log(error);
        });
    }
    goAnexo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.selectMedia();
            this.loadFiles();
            //pode ser só uma funcao pra pegar um arquivo
        });
    }
    goConfirmacao() {
        this.navCtrl.navigateForward('/confirmacao');
    }
    goAtividadefisica() {
        this.navCtrl.navigateForward('/atividade-fisica');
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_14__["CameraResultType"].Uri
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            // Can be set to the src of an image now
            this.imageElement = imageUrl;
        });
    }
    getImages() {
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
        this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
            }
        }, (err) => {
            alert(err);
        });
    }
    loadFiles() {
        this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(res => {
            this.files = res;
        }, err => console.log('error loading files: ', err));
    }
    selectMedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Tirar foto',
                        handler: () => {
                            this.captureImage();
                        }
                    },
                    {
                        text: 'Pegar imagem',
                        handler: () => {
                            this.pickImages();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImages() {
        this.options = {
            maximumImagesCount: 1,
            width: 200,
            quality: 25,
            outputType: 1
        };
        this.imagePicker.getPictures(this.options).then(results => {
            for (var i = 0; i < results.length; i++) {
                this.copyFileToLocalDir(results[i]);
                this.uploadFile(this.files[this.files.length - 1]);
            }
        });
        // If you get problems on Android, try to ask for Permission first
        // this.imagePicker.requestReadPermission().then(result => {
        //   console.log('requestReadPermission: ', result);
        //   this.selectMultiple();
        // });
    }
    captureImage() {
        this.mediaCapture.captureImage().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
                this.uploadFile(this.files[this.files.length - 1]);
            }
        }, (err) => console.error(err));
    }
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;
        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
        this.file.copyFile(copyFrom, name, copyTo, newName).then(success => {
            this.loadFiles();
        }, error => {
            console.log('error: ', error);
        });
    }
    openFile(f) {
        if (f.name.indexOf('.wav') > -1) {
            // We need to remove file:/// from the path for the audio plugin to work
            const path = f.nativeURL.replace(/^file:\/\//, '');
            const audioFile = this.media.create(path);
            audioFile.play();
        }
        else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
            // E.g: Use the Streaming Media plugin to play a video
            this.streamingMedia.playVideo(f.nativeURL);
        }
        else if (f.name.indexOf('.jpg') > -1) {
            // E.g: Use the Photoviewer to present an Image
            this.photoViewer.show(f.nativeURL, 'MY awesome image');
        }
    }
    deleteFile(f) {
        const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
        this.file.removeFile(path, f.name).then(() => {
            this.loadFiles();
        }, err => console.log('error remove: ', err));
    }
    uploadFile(f) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            const type = this.getMimeType(f.name.split('.').pop());
            const buffer = yield this.file.readAsArrayBuffer(path, f.name);
            const fileBlob = new Blob([buffer], type);
            const randomId = Math.random()
                .toString(36)
                .substring(2, 8);
            //troca $ por uid
            const uploadTask = this.storage.upload(`${this.uid}/anexos/${new Date().getTime()}_${randomId}`, fileBlob);
            uploadTask.percentageChanges().subscribe(change => {
                this.uploadProgress = change;
            });
            uploadTask.then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'File upload finished!'
                });
                toast.present();
                this.salvo = true;
                this.goConfirmacao();
            }));
        });
    }
    getMimeType(fileExt) {
        if (fileExt == 'wav')
            return { type: 'audio/wav' };
        else if (fileExt == 'jpg')
            return { type: 'image/jpg' };
        else if (fileExt == 'mp4')
            return { type: 'video/mp4' };
        else if (fileExt == 'MOV')
            return { type: 'video/quicktime' };
    }
};
EstadoHistoricoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_9__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_10__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorage"] }
];
EstadoHistoricoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estado-historico',
        template: _raw_loader_estado_historico_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estado_historico_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstadoHistoricoPage);



/***/ }),

/***/ "gMzz":
/*!*******************************************!*\
  !*** ./src/app/services/dados.service.ts ***!
  \*******************************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



let DadosService = class DadosService {
    constructor(db) {
        this.db = db;
    }
    // Create
    createBooking(dados) {
        return this.UsuariosListRef.push({
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone,
            estado: dados.estado,
            cidade: dados.cidade,
            senha: dados.senha,
        });
    }
    // Get Single
    getBooking(id) {
        this.usuarioRef = this.db.object('/usuarios/' + id);
        return this.usuarioRef;
    }
    pegarQuestionario(id) {
        this.usuarioRef = this.db.object('/questionario/' + id);
        return this.usuarioRef;
    }
    // Get List
    getBookingList() {
        this.UsuariosListRef = this.db.list('/usuarios');
        return this.UsuariosListRef;
    }
};
DadosService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
DadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DadosService);



/***/ }),

/***/ "sY5+":
/*!*********************************************************************!*\
  !*** ./src/app/estado-historico/estado-historico-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EstadoHistoricoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoHistoricoPageRoutingModule", function() { return EstadoHistoricoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estado_historico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estado-historico.page */ "b2DI");




const routes = [
    {
        path: '',
        component: _estado_historico_page__WEBPACK_IMPORTED_MODULE_3__["EstadoHistoricoPage"]
    }
];
let EstadoHistoricoPageRoutingModule = class EstadoHistoricoPageRoutingModule {
};
EstadoHistoricoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstadoHistoricoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=estado-historico-estado-historico-module-es2015.js.map