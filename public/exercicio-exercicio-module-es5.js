(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exercicio-exercicio-module"], {
    /***/
    "67Fp":
    /*!*********************************************!*\
      !*** ./src/app/exercicio/exercicio.page.ts ***!
      \*********************************************/

    /*! exports provided: ExercicioPage */

    /***/
    function Fp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExercicioPage", function () {
        return ExercicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./exercicio.page.html */
      "N1lH");
      /* harmony import */


      var _exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exercicio.page.scss */
      "KKR6");
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

      var ExercicioPage = /*#__PURE__*/function () {
        function ExercicioPage(aptService, actRoute, router, domSatizer, navCtrl, authService) {
          var _this = this;

          _classCallCheck(this, ExercicioPage);

          this.aptService = aptService;
          this.actRoute = actRoute;
          this.router = router;
          this.domSatizer = domSatizer;
          this.navCtrl = navCtrl;
          this.authService = authService;
          this.id = this.actRoute.snapshot.paramMap.get('id');
          console.log(this.id);
          this.page = this.actRoute.snapshot.paramMap.get('page');
          this.treino = this.actRoute.snapshot.paramMap.get('treino');
          this.sem = this.actRoute.snapshot.paramMap.get('sem');
          this.data = this.actRoute.snapshot.paramMap.get('data');
          console.log(this.page, this.treino, this.sem, this.data);
          console.log(this.page);
          this.authService.getExercicio().valueChanges().subscribe(function (res) {
            console.log(res[_this.id]);
            _this.descricao = res[_this.id]['descricao'];
            _this.nome = res[_this.id]['nome'];
            _this.video = _this.domSatizer.bypassSecurityTrustResourceUrl(res[_this.id]['video']); //lembrar que a url tem que ser embed
          });
        }

        _createClass(ExercicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "voltar",
          value: function voltar() {
            var x = 'treino/:' + this.treino; //this.navCtrl.pop()
            //this.navCtrl.back()
            //this.navCtrl.back()

            if (this.page == 'fake_treino') this.navCtrl.navigateBack('treino/' + this.treino + '/' + this.sem + '/' + this.data);else if (this.treino) this.navCtrl.navigateBack(x);else this.navCtrl.back();
          }
        }]);

        return ExercicioPage;
      }();

      ExercicioPage.ctorParameters = function () {
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
        }];
      };

      ExercicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exercicio',
        template: _raw_loader_exercicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExercicioPage);
      /***/
    },

    /***/
    "KKR6":
    /*!***********************************************!*\
      !*** ./src/app/exercicio/exercicio.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function KKR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ion-content {    \n   --offset-bottom: auto!important;\n   --overflow: hidden;\n   &::-webkit-scrollbar {\n     display: none;\n   }\n }*/\n.no-scroll {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4ZXJjaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7Ozs7OztHQUFBO0FBT0M7RUFDRSxrQkFBQTtBQUFKIiwiZmlsZSI6ImV4ZXJjaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC8qIGlvbi1jb250ZW50IHsgICAgXHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH0qL1xyXG4gIC5uby1zY3JvbGwge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */";
      /***/
    },

    /***/
    "N1lH":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercicio/exercicio.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function N1lH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 20%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-top: 5%;font-size: x-large;\">\n      <ion-label>\n        {{this.nome}}\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"no-scroll\" style=\"text-align: justify;\">\n  <div style=\"margin: 5%;\">\n    <h3>{{this.descricao}}</h3>\n  </div>\n  \n  <br>\n  <iframe width=\"100%\" [src]='video' frameborder=\"0\" allowfullscreen >\n  </iframe>\n</ion-content>\n";
      /***/
    },

    /***/
    "P7a+":
    /*!***********************************************!*\
      !*** ./src/app/exercicio/exercicio.module.ts ***!
      \***********************************************/

    /*! exports provided: ExercicioPageModule */

    /***/
    function P7a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExercicioPageModule", function () {
        return ExercicioPageModule;
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


      var _exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exercicio-routing.module */
      "R5PC");
      /* harmony import */


      var _exercicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exercicio.page */
      "67Fp");

      var ExercicioPageModule = function ExercicioPageModule() {
        _classCallCheck(this, ExercicioPageModule);
      };

      ExercicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _exercicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercicioPageRoutingModule"]],
        declarations: [_exercicio_page__WEBPACK_IMPORTED_MODULE_6__["ExercicioPage"]]
      })], ExercicioPageModule);
      /***/
    },

    /***/
    "R5PC":
    /*!*******************************************************!*\
      !*** ./src/app/exercicio/exercicio-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ExercicioPageRoutingModule */

    /***/
    function R5PC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExercicioPageRoutingModule", function () {
        return ExercicioPageRoutingModule;
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


      var _exercicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exercicio.page */
      "67Fp");

      var routes = [{
        path: '',
        component: _exercicio_page__WEBPACK_IMPORTED_MODULE_3__["ExercicioPage"]
      }];

      var ExercicioPageRoutingModule = function ExercicioPageRoutingModule() {
        _classCallCheck(this, ExercicioPageRoutingModule);
      };

      ExercicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExercicioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=exercicio-exercicio-module-es5.js.map