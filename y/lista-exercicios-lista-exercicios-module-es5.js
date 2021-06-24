(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-exercicios-lista-exercicios-module"], {
    /***/
    "MobM":
    /*!***********************************************************!*\
      !*** ./src/app/lista-exercicios/lista-exercicios.page.ts ***!
      \***********************************************************/

    /*! exports provided: ListaExerciciosPage */

    /***/
    function MobM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaExerciciosPage", function () {
        return ListaExerciciosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_exercicios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista-exercicios.page.html */
      "xXQ0");
      /* harmony import */


      var _lista_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista-exercicios.page.scss */
      "Uu07");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../shared/appointment.service */
      "JoXq");

      var ListaExerciciosPage = /*#__PURE__*/function () {
        function ListaExerciciosPage(aptService) {
          _classCallCheck(this, ListaExerciciosPage);

          this.aptService = aptService;
          this.Bookings = [];
        }

        _createClass(ListaExerciciosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fetchBookings();
            var bookingRes = this.aptService.getBookingList();
            bookingRes.snapshotChanges().subscribe(function (res) {
              _this.Bookings = [];
              res.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;

                _this.Bookings.push(a);
              });
            });
          }
        }, {
          key: "sortBy",
          value: function sortBy(prop) {
            return this.Bookings.sort(function (a, b) {
              return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1;
            });
          }
        }, {
          key: "fetchBookings",
          value: function fetchBookings() {
            this.aptService.getBookingList().valueChanges().subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "deleteBooking",
          value: function deleteBooking(id) {
            console.log(id);

            if (window.confirm('Do you really want to delete?')) {
              this.aptService.deleteBooking(id);
            }
          }
        }]);

        return ListaExerciciosPage;
      }();

      ListaExerciciosPage.ctorParameters = function () {
        return [{
          type: _shared_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"]
        }];
      };

      ListaExerciciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-exercicios',
        template: _raw_loader_lista_exercicios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_exercicios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListaExerciciosPage);
      /***/
    },

    /***/
    "PCZV":
    /*!*********************************************************************!*\
      !*** ./src/app/lista-exercicios/lista-exercicios-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ListaExerciciosPageRoutingModule */

    /***/
    function PCZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaExerciciosPageRoutingModule", function () {
        return ListaExerciciosPageRoutingModule;
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


      var _lista_exercicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-exercicios.page */
      "MobM");

      var routes = [{
        path: '',
        component: _lista_exercicios_page__WEBPACK_IMPORTED_MODULE_3__["ListaExerciciosPage"]
      }];

      var ListaExerciciosPageRoutingModule = function ListaExerciciosPageRoutingModule() {
        _classCallCheck(this, ListaExerciciosPageRoutingModule);
      };

      ListaExerciciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListaExerciciosPageRoutingModule);
      /***/
    },

    /***/
    "Uu07":
    /*!*************************************************************!*\
      !*** ./src/app/lista-exercicios/lista-exercicios.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Uu07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login {\n  background-color: secondary;\n  font-family: Roboto;\n  font-size: 40px;\n  line-height: 10px;\n  text-align: left;\n}\n\n.estado {\n  float: left;\n  width: 50%;\n}\n\n.cidade {\n  width: 50%;\n  float: left;\n}\n\n.dob {\n  width: 100%;\n  float: left;\n}\n\n.button.centralizado {\n  --border-radius: 36.5px;\n  display: flex;\n  align-items: center;\n}\n\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpc3RhLWV4ZXJjaWNpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDRixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtFQUF3QixhQUFBO0VBQ3hCLG1CQUFBO0FBTUY7O0FBSEU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUlBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFUSTtFQUNFLGFBQUE7QUFXTiIsImZpbGUiOiJsaXN0YS1leGVyY2ljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5lc3RhZG97XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uY2lkYWRle1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRvYntcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnV0dG9uLmNlbnRyYWxpemFkb3tcclxuICAtLWJvcmRlci1yYWRpdXM6IDM2LjVweDtkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSBcclxuXHJcbiAgaW9uLWNvbnRlbnQgeyAgICBcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    "qmEI":
    /*!*************************************************************!*\
      !*** ./src/app/lista-exercicios/lista-exercicios.module.ts ***!
      \*************************************************************/

    /*! exports provided: ListaExerciciosPageModule */

    /***/
    function qmEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaExerciciosPageModule", function () {
        return ListaExerciciosPageModule;
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


      var _lista_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista-exercicios-routing.module */
      "PCZV");
      /* harmony import */


      var _lista_exercicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista-exercicios.page */
      "MobM");

      var ListaExerciciosPageModule = function ListaExerciciosPageModule() {
        _classCallCheck(this, ListaExerciciosPageModule);
      };

      ListaExerciciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lista_exercicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaExerciciosPageRoutingModule"]],
        declarations: [_lista_exercicios_page__WEBPACK_IMPORTED_MODULE_6__["ListaExerciciosPage"]]
      })], ListaExerciciosPageModule);
      /***/
    },

    /***/
    "xXQ0":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-exercicios/lista-exercicios.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xXQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n\n    <div style=\"width: 30%;float: left;\">\n      <ion-buttons slot=\"start\">\n        <ion-button href=\"/dashboard\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"login\" style=\"text-align: right;float: left;margin-top: 5%;\">\n      <ion-label>\n        Exercicios\n      </ion-label>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"primary\" class=\"ion-content\" scrollX=\"true\"><!---->\n  <ion-list class=\"ios list-ios hydrated\" style=\"margin-top:-5%;margin-bottom: -5%;\">\n    <ion-item *ngFor=\"let booking of sortBy('nome')\" class=\"user-list\" color=\"transparent\" lines='none'>\n          <ion-button [routerLink]=\"['/exercicio/',booking.$key]\" color=\"transparent\"  style=\"height:40px;\" >\n           <h3>{{booking.nome}} </h3>\n          </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=lista-exercicios-lista-exercicios-module-es5.js.map