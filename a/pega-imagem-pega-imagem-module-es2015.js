(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pega-imagem-pega-imagem-module"],{

/***/ "0i7o":
/*!*************************************************!*\
  !*** ./src/app/pega-imagem/pega-imagem.page.ts ***!
  \*************************************************/
/*! exports provided: PegaImagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PegaImagemPage", function() { return PegaImagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pega_imagem_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pega-imagem.page.html */ "NkZC");
/* harmony import */ var _pega_imagem_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pega-imagem.page.scss */ "XwnA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/File/ngx */ "FAH8");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");















const MEDIA_FOLDER_NAME = 'my_media';
let PegaImagemPage = class PegaImagemPage {
    constructor(imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage, navCtrl, authService) {
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
        this.navCtrl = navCtrl;
        this.authService = authService;
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
        this.plt.ready().then(() => {
            let path = this.file.dataDirectory;
            this.file.checkDir(path, MEDIA_FOLDER_NAME).then(() => {
                this.loadFiles();
            }, err => {
                this.file.createDir(path, MEDIA_FOLDER_NAME, false);
            });
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
                        text: 'Capture Image',
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
            const uploadTask = this.storage.upload(`files/${new Date().getTime()}_${randomId}`, fileBlob);
            uploadTask.percentageChanges().subscribe(change => {
                this.uploadProgress = change;
            });
            uploadTask.then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'File upload finished!'
                });
                toast.present();
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
PegaImagemPage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticateService"] }
];
PegaImagemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pega-imagem',
        template: _raw_loader_pega_imagem_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pega_imagem_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PegaImagemPage);



/***/ }),

/***/ "HSKx":
/*!***************************************************!*\
  !*** ./src/app/pega-imagem/pega-imagem.module.ts ***!
  \***************************************************/
/*! exports provided: PegaImagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PegaImagemPageModule", function() { return PegaImagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pega_imagem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pega-imagem-routing.module */ "fQPg");
/* harmony import */ var _pega_imagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pega-imagem.page */ "0i7o");







let PegaImagemPageModule = class PegaImagemPageModule {
};
PegaImagemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pega_imagem_routing_module__WEBPACK_IMPORTED_MODULE_5__["PegaImagemPageRoutingModule"]
        ],
        declarations: [_pega_imagem_page__WEBPACK_IMPORTED_MODULE_6__["PegaImagemPage"]]
    })
], PegaImagemPageModule);



/***/ }),

/***/ "NkZC":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pega-imagem/pega-imagem.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Ionic Media Capture\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cloud-list\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-done\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-progress-bar [value]=\"uploadProgress\" color=\"success\"></ion-progress-bar>\n \n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files\">\n      <ion-item (click)=\"openFile(f)\">\n        <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\n        <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\n        <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\n \n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n          <p>{{ f.fullPath }}</p>\n        </ion-label>\n      </ion-item> \n \n \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"uploadFile(f)\" color=\"primary\">\n          <ion-icon name=\"cloud-upload\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\">\n      <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n      Select Media\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "XwnA":
/*!***************************************************!*\
  !*** ./src/app/pega-imagem/pega-imagem.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWdhLWltYWdlbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fQPg":
/*!***********************************************************!*\
  !*** ./src/app/pega-imagem/pega-imagem-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PegaImagemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PegaImagemPageRoutingModule", function() { return PegaImagemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pega_imagem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pega-imagem.page */ "0i7o");




const routes = [
    {
        path: '',
        component: _pega_imagem_page__WEBPACK_IMPORTED_MODULE_3__["PegaImagemPage"]
    }
];
let PegaImagemPageRoutingModule = class PegaImagemPageRoutingModule {
};
PegaImagemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PegaImagemPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pega-imagem-pega-imagem-module-es2015.js.map