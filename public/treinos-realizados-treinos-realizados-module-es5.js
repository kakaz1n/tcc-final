(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["treinos-realizados-treinos-realizados-module"], {
    /***/
    "/Akw":
    /*!*************************************************************************!*\
      !*** ./src/app/treinos-realizados/treinos-realizados-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TreinosRealizadosPageRoutingModule */

    /***/
    function Akw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosRealizadosPageRoutingModule", function () {
        return TreinosRealizadosPageRoutingModule;
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


      var _treinos_realizados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./treinos-realizados.page */
      "z05K");

      var routes = [{
        path: '',
        component: _treinos_realizados_page__WEBPACK_IMPORTED_MODULE_3__["TreinosRealizadosPage"]
      }];

      var TreinosRealizadosPageRoutingModule = function TreinosRealizadosPageRoutingModule() {
        _classCallCheck(this, TreinosRealizadosPageRoutingModule);
      };

      TreinosRealizadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TreinosRealizadosPageRoutingModule);
      /***/
    },

    /***/
    "OYWP":
    /*!*****************************************************************!*\
      !*** ./src/app/treinos-realizados/treinos-realizados.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function OYWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVpbm9zLXJlYWxpemFkb3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "bqWM":
    /*!*****************************************************************!*\
      !*** ./src/app/treinos-realizados/treinos-realizados.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TreinosRealizadosPageModule */

    /***/
    function bqWM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosRealizadosPageModule", function () {
        return TreinosRealizadosPageModule;
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


      var _treinos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./treinos-realizados-routing.module */
      "/Akw");
      /* harmony import */


      var _treinos_realizados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./treinos-realizados.page */
      "z05K");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "zTSL");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var TreinosRealizadosPageModule = function TreinosRealizadosPageModule() {
        _classCallCheck(this, TreinosRealizadosPageModule);
      };

      TreinosRealizadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _treinos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreinosRealizadosPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_treinos_realizados_page__WEBPACK_IMPORTED_MODULE_6__["TreinosRealizadosPage"]]
      })], TreinosRealizadosPageModule);
      /***/
    },

    /***/
    "toPq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treinos-realizados/treinos-realizados.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function toPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <div style=\"width: 10%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"voltar()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: center;float: left;margin-left: 15%; font-size: x-large;font-weight: bold;\">\n      <ion-label>\n           Treinos Concluídos  \n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content color=\"primary\">\n  <div class=\"ion-padding\">\n\n    <ion-calendar [(ngModel)]=\"dateMulti\"\n    [options]=\"optionsRange\"\n    (change)=\"onChange($event)\"\n      [type]=\"type\"\n      [format]=\"'YYYY-MM-DD'\" \n      >\n    </ion-calendar>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "z05K":
    /*!***************************************************************!*\
      !*** ./src/app/treinos-realizados/treinos-realizados.page.ts ***!
      \***************************************************************/

    /*! exports provided: TreinosRealizadosPage */

    /***/
    function z05K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreinosRealizadosPage", function () {
        return TreinosRealizadosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treinos_realizados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treinos-realizados.page.html */
      "toPq");
      /* harmony import */


      var _treinos_realizados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./treinos-realizados.page.scss */
      "OYWP");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TreinosRealizadosPage = /*#__PURE__*/function () {
        function TreinosRealizadosPage(navCtrl, authService, datePipe, router) {
          _classCallCheck(this, TreinosRealizadosPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.datePipe = datePipe;
          this.router = router;
          this.optionsRange = {
            pickMode: 'multi',
            weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            weekStart: 1,
            daysConfig: [],
            monthPickerFormat: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            color: "transparent",
            disableWeeks: [],
            from: new Date("2020-11-2")
          };
        }

        _createClass(TreinosRealizadosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userDetails().subscribe(function (res) {
              console.log('res', res);

              if (res !== null) {
                _this.uid = res.uid;
                console.log(_this.uid);
                var z = new Date();
                console.log(Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(z, 'yyyy-MM-dd', 'en'));

                var a = _this.authService.getTreino_realizado(_this.uid);

                a.snapshotChanges().subscribe(function (res) {
                  var dados = res.payload.toJSON();
                  console.log(dados);
                  _this.dateMulti = [];

                  for (var x in dados) {
                    console.log(dados[x]['data_realizada']);
                    var data = {
                      date: dados[x]['data_realizada'],
                      marked: false,
                      cssClass: dados[x]['cor']
                    };
                    var p = dados[x]['data_realizada'];

                    _this.optionsRange.daysConfig.push(data);
                  }

                  console.log(_this.optionsRange.daysConfig);
                });
              }
            });
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            var _this2 = this;

            console.log('datas:' + this.dateMulti);
            console.log("onchange event called"); //this.datePipe.transform($event[this.dateMulti.length - 1]._d,"yyyy-MM-dd")

            console.log(this.uid);
            var a = this.authService.getTreino_realizado2(this.uid, this.datePipe.transform(this.dateMulti[this.dateMulti.length - 1], "yyyy-MM-dd"));
            console.log([this.dateMulti.length - 1]);
            a.snapshotChanges().subscribe(function (res) {
              var dados = res.payload.toJSON();

              if (dados != null) {
                _this2.router.navigate(['/treino-realizado/', _this2.datePipe.transform(_this2.dateMulti[_this2.dateMulti.length - 1], "yyyy-MM-dd")]);
              }
            });
          }
        }, {
          key: "voltar",
          value: function voltar() {
            this.navCtrl.navigateBack('dashboard');
          }
        }]);

        return TreinosRealizadosPage;
      }();

      TreinosRealizadosPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      TreinosRealizadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-treinos-realizados',
        template: _raw_loader_treinos_realizados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_treinos_realizados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TreinosRealizadosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=treinos-realizados-treinos-realizados-module-es5.js.map