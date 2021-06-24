(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n\n    <div style=\"width: 30%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"login\" [text]=\"\"></ion-back-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: right;float: left;margin-top: 5%;\">\n      <ion-label>\n        Cadastro\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\">\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\" style=\"font-size:xx-large;\">Nome</ion-label>\n      <!---->\n      <ion-input type=\"text\" formControlName=\"nome\" placeholder=\"Seu Nome\"  [(ngModel)]=\"nome\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.nome\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('nome').hasError(validation.type) && (validations_form.get('nome').dirty || validations_form.get('nome').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\" style=\"font-size:xx-large;\">Email</ion-label>\n      <!--  -->\n     <ion-input type=\"text\" formControlName=\"email\"  placeholder=\"exemplo@email.com\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\" style=\"font-size:xx-large;\">Telefone</ion-label>\n      <ion-input maxlength=\"15\" type=\"text\" formControlName=\"telefone\"\n        [brmasker]=\"{form: validations_form.get('telefone'), mask: '(99) 99999-9999'}\" placeholder=\"(14) 99999-9999\">\n      </ion-input>\n    </ion-item>\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\"style=\"font-size:x-large;\">Senha</ion-label>\n      <ion-input type=\"password\" formControlName=\"senha\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    <ion-item color=\"transparent\">\n      <ion-label position=\"floating\"style=\"font-size:x-large;\">Confirmar Senha</ion-label>\n      <ion-input type=\"password\" formControlName=\"confirmar_senha\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.senha\">\n        <div class=\"error-message\"\n          *ngIf=\"validations_form.get('senha').hasError(validation.type) && (validations_form.get('senha').dirty || validations_form.get('senha').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n      <div class=\"error-message\"\n        *ngIf=\"!validations_form.get('confirmar_senha').errors && validations_form.hasError('passwordNotMatch') && (validations_form.get('confirmar_senha').dirty || validations_form.get('confirmar_senha').touched)\">\n        Os campos Senha e Confirmar Senha devem ser iguais\n      </div>\n    </div>\n    <div class=\"estado\">\n      <ion-item color=\"transparent\">\n        <ion-label position=\"floating\"style=\"font-size:x-large;\">Estado</ion-label>\n        <ion-select name=\"estado\" formControlName=\"estado\" class=\"form-controll\" required\n          (ionChange)=\"setCidades(estado)\" [(ngModel)]=\"estado\">\n          <ion-select-option [value]=\"item.sigla\" *ngFor=\"let item of data\">{{item.nome}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class=\"cidade\">\n      <ion-item color=\"transparent\">\n        <ion-label position=\"floating\"style=\"font-size:x-large;\">Cidade</ion-label>\n        <ion-select name=\"cidade\" formControlName=\"cidade\" class=\"form-controll\" required>\n          <ion-select-option *ngFor=\"let item2 of cidades\">{{item2}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class=\"dob\">\n      <ion-item color=\"transparent\">\n        <ion-label position=\"floating\"style=\"font-size:x-large;\">Data de Nascimento</ion-label>\n        <ion-datetime name=\"dob\" formControlName=\"dob\" class=\"form-controll\" displayFormat=\"DD MM YYYY\"\n          pickerFormat=\"DD MM YYYY\"></ion-datetime>\n      </ion-item>\n    </div>\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\" style=\"margin-bottom: 20%;\">\n      <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n      Carregar foto de perfil\n    </ion-button>    \n    <div style=\"height: 100px;\"></div>\n    <h5 style=\"text-align:center;font-size:x-large;\">Sexo</h5>\n    <ion-radio-group (ionChange)=\"onChangeHandler($event)\" name=\"sexo\" formControlName=\"sexo\" class=\"form-controll\">\n      <ion-item color=\"transparent\" class=\"estado\">\n        <ion-label>Masculino</ion-label>\n        <ion-radio value=\"Masculino\" [checked]=\"this.sexo.sex=='Masculino'\" color=\"light\"></ion-radio>\n      </ion-item>\n      <ion-item color=\"transparent\" class=\"cidade\">\n        <ion-label>Feminino</ion-label>\n        <ion-radio value=\"Feminino\" [checked]=\"this.sexo.sex=='Feminino'\" color=\"light\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <div style=\" height: 50%;width:100%;margin-top: 100px;\">\n      <ion-checkbox style=\"width: 10%;height: 10%;float: left;\" (ionChange)=\"onTermsChecked($event)\"\n        fromControlName=\"termos\" class=\"form-controll\" color=\"transparent\" name=\"termos\"></ion-checkbox>\n\n      <h3>Autorizo o uso dos meus dados pelo aplicativo.</h3>\n    </div>\n    <ion-button class=\"centralizado\" color=\"tertiary\" type=\"submit\" [disabled]=\"!validations_form.valid\">\n      Cadastrar</ion-button>\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n  </form>\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/File/ngx */ "FAH8");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");



// register.page.ts















const MEDIA_FOLDER_NAME = 'my_media';
const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let RegisterPage = class RegisterPage {
    constructor(navCtrl, authService, formBuilder, dadosserv, toastController, imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
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
        this.errorMessage = '';
        this.successMessage = '';
        this.sexo = {
            sex: 'Masculino'
        };
        this.validation_messages = {
            'nome': [
                {
                    type: 'required', message: 'É necessário preencher o nome.'
                }
            ],
            'email': [
                { type: 'required', message: 'É necessário preencher o Email.' },
                { type: 'pattern', message: 'Preenchar o campo com um email válido.' }
            ],
            'senha': [
                { type: 'required', message: 'É necessário preencher a senha' },
                { type: 'minlength', message: 'A senha deve ter pelo menos 5 caracteres' }
            ],
            'telefone': [
                {
                    type: 'required', message: 'É necessário preencher o telefone.'
                }
            ],
            'estado': [
                {
                    type: 'required', message: 'É necessário escolher um estado.'
                }
            ],
            'cidade': [
                {
                    type: 'required', message: 'É necessário escolher uma cidade.'
                }
            ],
            'dob': [
                {
                    type: 'required', message: 'É necessário escolher a data de nascinemto.'
                }
            ],
            'termos': [
                {
                    type: 'required', message: 'É necessário aceitar essa opção.'
                },
                {
                    type: 'pattern', message: 'É necessário aceitar essa opção.'
                }
            ],
        };
        this.files = [];
        this.uploadProgress = 0;
        this.read_data();
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)
                ])],
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            confirmar_senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])),
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            termos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('true')
                ])]
        }, {
            validator: this.password.bind(this)
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
    password(formGroup) {
        const { value: senha } = formGroup.get('senha');
        const { value: confirmar_senha } = formGroup.get('confirmar_senha');
        return senha === confirmar_senha ? null : { passwordNotMatch: true };
    }
    read_data() {
        console.log('teste');
        fetch('./assets/estados_cidades.json').then(res => res.json())
            .then(json => {
            this.data = json;
            console.log(this.data);
        });
    }
    setCidades(estado) {
        this.estado_atual = this.data.filter((res) => {
            return res.sigla === estado;
        });
        this.cidades = this.estado_atual[0].cidades;
        console.log(this.cidades);
    }
    tryRegister(value) {
        console.log(value);
        if (!this.url)
            this.url = ' ';
        this.authService.registerUser(value, this.url)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.successMessage = "Sua conta foi criado. Você será redirecionado para o login";
            this.presentToast(this.successMessage);
            console.log('tentando logar');
            this.goDashboard();
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.presentToast(this.errorMessage);
            this.successMessage = "";
        });
    }
    goLoginPage() {
        this.navCtrl.navigateBack('/login');
    }
    goDashboard() {
        this.navCtrl.navigateForward('/dashboard');
    }
    onChangeHandler($event) {
        this.sexo.sex = $event.target.value;
    }
    onTermsChecked($event) {
        console.log($event.currentTarget.checked);
        this.validations_form.patchValue({ termos: $event.currentTarget.checked });
        console.log(this.validations_form);
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Uri
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
                header: 'Como você deseja adicionar uma foto?',
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
                        text: 'Cancelar',
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
            this.url = `${new Date().getTime()}_${randomId}`;
            const uploadTask = this.storage.upload(this.url, fileBlob);
            uploadTask.percentageChanges().subscribe(change => {
                this.uploadProgress = change;
            });
            uploadTask.then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'Foto Salva!'
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
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_7__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorage"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLDJCQUFBO0VBQ0YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFBd0IsYUFBQTtFQUN4QixtQkFBQTtBQU1GOztBQUhFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFJQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0MsWUFBQTtBQUdMOztBQVZJO0VBQ0UsYUFBQTtBQVlOIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZXN0YWRve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNpZGFkZXtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kb2J7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmJ1dHRvbi5jZW50cmFsaXphZG97XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAzNi41cHg7ZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gXHJcblxyXG4gIGlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBoZWlnaHQ6IDkwdmg7ICAgICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! br-mask */ "/oCc");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]],
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map