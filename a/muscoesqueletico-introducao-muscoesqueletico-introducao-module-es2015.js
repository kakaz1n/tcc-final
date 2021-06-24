(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["muscoesqueletico-introducao-muscoesqueletico-introducao-module"],{

/***/ "7xrH":
/*!*********************************************************************************!*\
  !*** ./src/app/muscoesqueletico-introducao/muscoesqueletico-introducao.page.ts ***!
  \*********************************************************************************/
/*! exports provided: MuscoesqueleticoIntroducaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoIntroducaoPage", function() { return MuscoesqueleticoIntroducaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_muscoesqueletico_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./muscoesqueletico-introducao.page.html */ "D7kH");
/* harmony import */ var _muscoesqueletico_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muscoesqueletico-introducao.page.scss */ "kUTl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_dados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/dados.service */ "gMzz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









let MuscoesqueleticoIntroducaoPage = class MuscoesqueleticoIntroducaoPage {
    constructor(navCtrl, authService, dadosserv, toastController, dadosService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dadosserv = dadosserv;
        this.toastController = toastController;
        this.dadosService = dadosService;
    }
    ngOnInit() {
        this.authService.userDetails().subscribe(res => {
            console.log('res', res);
            if (res !== null) {
                this.uid = res.uid;
                console.log("uid = " + this.uid);
                this.getIdade_sexo();
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
    getIdade_sexo() {
        console.log(this.uid);
        console.log("a");
        let a = this.dadosService.getBooking(this.uid);
        console.log(a);
        a.snapshotChanges().subscribe(res => {
            const data = res.payload.toJSON();
            console.log(data);
            data['email'];
            console.log(Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date, 'yyyy/MM/dd', 'en'));
            let dob = new Date(data['dados']['dob']);
            let y = Math.abs(Date.now() - dob.getTime());
            this.idade = Math.floor((y / (1000 * 3600 * 24)) / 365);
            this.sexo = data['dados']['sexo'];
            console.log(this.idade);
            console.log(this.sexo);
        });
    }
    proxima_pagina() {
        console.log(this.uid);
        this.authService.setMusco1(this.uid);
        this.navCtrl.navigateForward('muscoesqueletico-registro');
    }
    voltar() {
        this.navCtrl.navigateBack('dashboard');
    }
};
MuscoesqueleticoIntroducaoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _services_dados_service__WEBPACK_IMPORTED_MODULE_6__["DadosService"] }
];
MuscoesqueleticoIntroducaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-muscoesqueletico-introducao',
        template: _raw_loader_muscoesqueletico_introducao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_muscoesqueletico_introducao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MuscoesqueleticoIntroducaoPage);



/***/ }),

/***/ "D7kH":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/muscoesqueletico-introducao/muscoesqueletico-introducao.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-bottom:05%;margin-left: 2%;\">\n      <ion-label style=\"font-size:large;text-align: center;\">\n        Capacidade Musculoesquelética<br>e<br> Funcional\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\">\n  <ion-item lines=\"none\" color=\"transparent\" >\n    <div display=\"block\" *ngIf=\"sexo == 'Masculino' && idade < 50\"> <!-- homens < 50-->\n      <h2 style=\"text-align: center;\">\n        Flexão de braços\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        Nenhum<br>\n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Encontre um bom espaço livre.<br>\n        • Aquecer-se, certificando-se de movimentar os braços e ombros<br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        Apoie-se no chão com o corpo estendido (reto como uma prancha) , sustentando o peso sobre a ponta dos pés e sobre as mãos. Seus braços devem estar estendidos e com as mãos separadas e alinhadas com os ombros.\n        <br>\n        1. Flexione os braços, com os cotovelos voltados para os lados, abaixando o corpo até que o peito toque chão, e retorne a posição inicial estendendo os braços para suspender o corpo. <br>\n        2. Mantenha o corpo totalmente estendido (reto como uma prancha) durante todo o movimento de abaixar até o chão e retornar à posição inicial. <br>\n        3. Repita o movimento, sem pausas, até não conseguir mais retornar à posição inicial mantendo o corpo estendido, contando o número de repetições realizadas (considere uma repetição completa cada vez que abaixar e retornar seu corpo à posição inicial). <br>\n        4. Registre o número de repetições realizadas.<br>\n      </h4>\n      <iframe width=\"100%\" src=\"https://www.youtube.com/embed/B0d4Jc8OxOA?list=PLjivMaYpY8ImY8m6HLP4VF04pKhndaIcx\" frameborder=\"0\" allowfullscreen ></iframe>\n\n    </div>\n    <div display=\"block\" *ngIf=\"sexo == 'Feminino' && idade < 50\"> <!-- mulheres < 50-->\n      <h2 style=\"text-align: center;\">\n        Flexão de braços\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamento</h3>\n        Nenhum<br>\n\n        <h3 style=\"text-align: center;\">Preparação</h3>\n        • Encontre um bom espaço livre.<br>\n        • Aquecer-se, certificando-se de movimentar os braços e ombros<br>\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        Apoie-se no chão com o corpo estendido (reto como uma prancha) , sustentando o peso sobre os joelhos e sobre as mãos. Seus braços devem estar estendidos e com as mãos separadas e alinhadas com os ombros. Para ficar mais confortável, pode ser utilizado um colchonete ou tapete macio para apoiar os joelhos        <br>\n        1. Flexione os braços, com os cotovelos voltados para os lados, abaixando o corpo até que o peito toque chão, e retorne a posição inicial estendendo os braços para suspender o corpo. <br>\n        2. Mantenha o corpo totalmente estendido (reto como uma prancha) durante todo o movimento de abaixar até o chão e retornar à posição inicial. <br>\n        3. Repita o movimento, sem pausas, até não conseguir mais retornar à posição inicial mantendo o corpo estendido, contando o número de repetições realizadas (considere uma repetição completa cada vez que abaixar e retornar seu corpo à posição inicial). <br>\n        4. Registre o número de repetições realizadas.<br>\n      </h4>\n      <iframe width=\"100%\" src=\"https://www.youtube.com/embed/NcDxJOH-oAw?list=PLjivMaYpY8ImY8m6HLP4VF04pKhndaIcx\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <div display=\"block\" *ngIf=\"idade >= 50\"> \n      <h2 style=\"text-align: center;\">\n        Flexão de antebraço\n      </h2>\n      <h4 style=\"text-align: justify;text-justify: distribute\">\n        <h3 style=\"text-align: center;\">Equipamentos</h3>\n        • Cronômetro, ou relógio de pulso ou qualquer outro que tenha ponteiro de segundos. <br>\n        • Cadeira com encosto e sem braços <br>\n        <div *ngIg=\"sexo == 'Masculino'\">• Halteres de mão 4 Kg</div>\n        <div *ngIg=\"sexo == 'Feminino'\">• Halteres de mão 2 Kg <br></div>\n\n        <h3 style=\"text-align: center;\">Organização dos equipamentos</h3>\n        O participante senta em uma cadeira com as costas retas, os pés no chão e o lado dominante do corpo próximo à borda da cadeira. Ele\nsegura o halter com a mão dominante, utilizando uma empunhadura de aperto de mão. \n\n        <h3 style=\"text-align: center;\">Posição do avaliado</h3>\n        o participante senta em uma cadeira com as costas retas, os pés\nno chão e o lado dominante do corpo próximo à borda da cadeira. Ele segura o halter\ncom a mão dominante, utilizando uma empunhadura de aperto de mão. O teste começa\ncom o braço estendido perto da cadeira, perpendicular ao chão. \n<h3 style=\"text-align: center;\">Posição do avaliador</h3>\no avaliador ajoelha-se (ou senta em uma cadeira) próximo ao\navaliado no lado do braço dominante, colocando seus dedos no meio do braço da\npessoa para estabilizar a parte superior do braço e pra garantir que uma flexão total\nseja feita (o antebraço do avaliado deve apertar os dedos do avaliador. É importante\nque a região superior do braço do avaliado permaneça parada durante todo o teste. O\navaliador pode também precisar posicionar sua outra mão atrás do cúbito do avaliado\npara ajudar a medir quando a extensão total tenha sido alcançada e para impedir um\nmovimento de balanço para trás do braço.\n\n        <h3 style=\"text-align: center;\">Procedimentos</h3>\n        O teste começa com o braço estendido perto da cadeira e perpendicular\n        ao chão. Ao sinal indicativo, o participante gira sua palma para cima enquanto\n        flexiona o braço em amplitude total de movimento e então retorna o braço para uma\n        posição completamente estendida. Na posição inicial, o peso deve retornar para a\n        posição de empunhadura de aperto de mão. O avaliado é encorajado a executar tantas\n        repetições quanto possível em 30 segundos. Após a demonstração, faça uma ou duas\n        repetições para verificar a forma apropriada, seguida do teste. Deverá ser executado\n        o teste uma vez. \n      </h4>\n    </div>\n  </ion-item>\n  <div class=\"centralizado\">\n    <ion-button full color=\"tertiary\" (click)=\"proxima_pagina()\">\n      Continuar</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "PGUt":
/*!*******************************************************************************************!*\
  !*** ./src/app/muscoesqueletico-introducao/muscoesqueletico-introducao-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MuscoesqueleticoIntroducaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoIntroducaoPageRoutingModule", function() { return MuscoesqueleticoIntroducaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _muscoesqueletico_introducao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muscoesqueletico-introducao.page */ "7xrH");




const routes = [
    {
        path: '',
        component: _muscoesqueletico_introducao_page__WEBPACK_IMPORTED_MODULE_3__["MuscoesqueleticoIntroducaoPage"]
    }
];
let MuscoesqueleticoIntroducaoPageRoutingModule = class MuscoesqueleticoIntroducaoPageRoutingModule {
};
MuscoesqueleticoIntroducaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MuscoesqueleticoIntroducaoPageRoutingModule);



/***/ }),

/***/ "Y/dy":
/*!***********************************************************************************!*\
  !*** ./src/app/muscoesqueletico-introducao/muscoesqueletico-introducao.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MuscoesqueleticoIntroducaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuscoesqueleticoIntroducaoPageModule", function() { return MuscoesqueleticoIntroducaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _muscoesqueletico_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./muscoesqueletico-introducao-routing.module */ "PGUt");
/* harmony import */ var _muscoesqueletico_introducao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./muscoesqueletico-introducao.page */ "7xrH");







let MuscoesqueleticoIntroducaoPageModule = class MuscoesqueleticoIntroducaoPageModule {
};
MuscoesqueleticoIntroducaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _muscoesqueletico_introducao_routing_module__WEBPACK_IMPORTED_MODULE_5__["MuscoesqueleticoIntroducaoPageRoutingModule"]
        ],
        declarations: [_muscoesqueletico_introducao_page__WEBPACK_IMPORTED_MODULE_6__["MuscoesqueleticoIntroducaoPage"]]
    })
], MuscoesqueleticoIntroducaoPageModule);



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

/***/ "kUTl":
/*!***********************************************************************************!*\
  !*** ./src/app/muscoesqueletico-introducao/muscoesqueletico-introducao.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.centralizado {\n  position: relative;\n  margin-left: 30%;\n}\n\n.your-class {\n  position: fixed;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG11c2NvZXNxdWVsZXRpY28taW50cm9kdWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNGLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUxJO0VBQ0UsYUFBQTtBQU9OOztBQUFHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUdGIiwiZmlsZSI6Im11c2NvZXNxdWVsZXRpY28taW50cm9kdWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWNvbmRhcnk7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pb24tY29udGVudCB7ICAgIFxyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICAuY2VudHJhbGl6YWRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcbi55b3VyLWNsYXNzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=muscoesqueletico-introducao-muscoesqueletico-introducao-module-es2015.js.map