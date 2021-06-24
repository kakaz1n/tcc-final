(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sinais-sintomas-sinais-sintomas-module"],{

/***/ "0g34":
/*!***********************************************************!*\
  !*** ./src/app/sinais-sintomas/sinais-sintomas.module.ts ***!
  \***********************************************************/
/*! exports provided: SinaisSintomasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinaisSintomasPageModule", function() { return SinaisSintomasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sinais_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sinais-sintomas-routing.module */ "ermu");
/* harmony import */ var _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sinais-sintomas.page */ "TRw4");







let SinaisSintomasPageModule = class SinaisSintomasPageModule {
};
SinaisSintomasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sinais_sintomas_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinaisSintomasPageRoutingModule"]
        ],
        declarations: [_sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_6__["SinaisSintomasPage"]]
    })
], SinaisSintomasPageModule);



/***/ }),

/***/ "DRiG":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sinais-sintomas/sinais-sintomas.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goPre_questionario()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: left;float: left;margin-top: 5%; font-size: xx-large;font-weight: bold;\">\n      <ion-label>\n        Sinais e Sintomas\n      </ion-label>\n    </div>\n    <div style=\"float: left; text-align: justify;font-size: x-large;\">\n      Selecione o que você apresenta ou já apresentou:\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\"  class=\"ion-content\" color=\"primary\">\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Dor ou desconforto no peito durante esforço</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox   style=\"width: 10%;height: 10%;float: left;border-radius: 10%\" (ionChange)=\"onTermsChecked($event)\"\n       color=\"secondary\">\n    </ion-checkbox>\n    <h3>Falta de ar sem justificativa</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox class=\"checkbox-square\" style=\"width: 10%;height: 10%;float: left;\"\n      (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Tontura/Vertigem, desmaio e/ou apagões</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Inchaço no tornozelo</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  color=\"secondary\">\n    </ion-checkbox>\n    <h3>Sensação desagradável de batimento cardíaco forte, rápido ou irregular</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"queimacao\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Sensação de queimação ou câimbras nas pernas ao caminhar distâncias curtas</h3>\n  </div>\n  <div style=\"text-align: center;margin-left: 5%;margin-top: 5%;margin-right: 5%;\">\n    <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"  isChecked=\"dores\" color=\"secondary\">\n    </ion-checkbox>\n    <h3>Dores nas articulações do joelho, quadril e/ou coluna</h3>\n  </div>\n  <ion-button class=\"your-class\" color=\"secondary\" (click)=\"somar()\">\n    Continuar\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "TRw4":
/*!*********************************************************!*\
  !*** ./src/app/sinais-sintomas/sinais-sintomas.page.ts ***!
  \*********************************************************/
/*! exports provided: SinaisSintomasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinaisSintomasPage", function() { return SinaisSintomasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sinais_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sinais-sintomas.page.html */ "DRiG");
/* harmony import */ var _sinais_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sinais-sintomas.page.scss */ "lHoX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/File/ngx */ "FAH8");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/core */ "gcOT");














const MEDIA_FOLDER_NAME = 'my_media';



const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["Plugins"];
let SinaisSintomasPage = class SinaisSintomasPage {
    constructor(navCtrl, authService, alertController, imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage) {
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
            this.dor = !this.dor;
        if (($event.currentTarget.name) == "ion-cb-1")
            this.ar = !this.ar;
        if (($event.currentTarget.name) == "ion-cb-2")
            this.tontura = !this.tontura;
        if (($event.currentTarget.name) == "ion-cb-3")
            this.inchaco = !this.inchaco;
        if (($event.currentTarget.name) == "ion-cb-4")
            this.batimento = !this.batimento;
        if (($event.currentTarget.name) == "ion-cb-5")
            this.queimacao = !this.queimacao;
        if (($event.currentTarget.name) == "ion-cb-6")
            this.dores = !this.dores;
        console.log($event.currentTarget.name);
        if ($event.currentTarget.checked)
            this.cont++;
        else
            this.cont--;
    }
    somar() {
        if (this.cont) {
            this.presentAlert();
        }
        else {
            this.proximo_questionario();
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
            console.log("ir pro anexo");
            this.selectMedia();
            this.loadFiles();
            //pode ser só uma funcao pra pegar um arquivo
        });
    }
    proximo_questionario() {
        console.log(this.uid);
        this.authService.setQuestionario2(this.uid);
        this.navCtrl.navigateForward('/atividade-fisica');
    }
    goPre_questionario() {
        this.navCtrl.navigateBack('/pre-questionario');
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["CameraResultType"].Uri
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
                header: 'Como você gostaria de adicionar a foto?',
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
                    message: 'Arquivo Salvo'
                });
                toast.present();
                this.proximo_questionario();
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
SinaisSintomasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] }
];
SinaisSintomasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sinais-sintomas',
        template: _raw_loader_sinais_sintomas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sinais_sintomas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SinaisSintomasPage);



/***/ }),

/***/ "ermu":
/*!*******************************************************************!*\
  !*** ./src/app/sinais-sintomas/sinais-sintomas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SinaisSintomasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinaisSintomasPageRoutingModule", function() { return SinaisSintomasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sinais-sintomas.page */ "TRw4");




const routes = [
    {
        path: '',
        component: _sinais_sintomas_page__WEBPACK_IMPORTED_MODULE_3__["SinaisSintomasPage"]
    }
];
let SinaisSintomasPageRoutingModule = class SinaisSintomasPageRoutingModule {
};
SinaisSintomasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SinaisSintomasPageRoutingModule);



/***/ }),

/***/ "lHoX":
/*!***********************************************************!*\
  !*** ./src/app/sinais-sintomas/sinais-sintomas.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbmFpcy1zaW50b21hcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQXdCLGFBQUE7RUFDeEIsbUJBQUE7QUFNRjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFPSiIsImZpbGUiOiJzaW5haXMtc2ludG9tYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2Vjb25kYXJ5O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmVzdGFkb3tcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5jaWRhZGV7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uZG9ie1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5idXR0b24uY2VudHJhbGl6YWRve1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzYuNXB4O2Rpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9IFxyXG4gIC55b3VyLWNsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=sinais-sintomas-sinais-sintomas-module-es2015.js.map