(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["make-appointment-make-appointment-module"], {
    /***/
    "3Jk3":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/make-appointment/make-appointment.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"ios hydrated\">\n    <ion-title class=\"ios title-ios hydrated\">Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n    <form [formGroup]=\"bookingForm\" (ngSubmit)=\"formSubmit()\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input formControlName=\"nome\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Descricao</ion-label>\n        <ion-input formControlName=\"descricao\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Video</ion-label>\n        <ion-input value=\" \" formControlName=\"video\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Book Appointment</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "NNdq":
    /*!*********************************************************************!*\
      !*** ./src/app/make-appointment/make-appointment-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MakeAppointmentPageRoutingModule */

    /***/
    function NNdq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MakeAppointmentPageRoutingModule", function () {
        return MakeAppointmentPageRoutingModule;
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


      var _make_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./make-appointment.page */
      "oj2i");

      var routes = [{
        path: '',
        component: _make_appointment_page__WEBPACK_IMPORTED_MODULE_3__["MakeAppointmentPage"]
      }];

      var MakeAppointmentPageRoutingModule = function MakeAppointmentPageRoutingModule() {
        _classCallCheck(this, MakeAppointmentPageRoutingModule);
      };

      MakeAppointmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MakeAppointmentPageRoutingModule);
      /***/
    },

    /***/
    "OhlD":
    /*!*************************************************************!*\
      !*** ./src/app/make-appointment/make-appointment.module.ts ***!
      \*************************************************************/

    /*! exports provided: MakeAppointmentPageModule */

    /***/
    function OhlD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MakeAppointmentPageModule", function () {
        return MakeAppointmentPageModule;
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


      var _make_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./make-appointment-routing.module */
      "NNdq");
      /* harmony import */


      var _make_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./make-appointment.page */
      "oj2i");

      var MakeAppointmentPageModule = function MakeAppointmentPageModule() {
        _classCallCheck(this, MakeAppointmentPageModule);
      };

      MakeAppointmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _make_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["MakeAppointmentPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_make_appointment_page__WEBPACK_IMPORTED_MODULE_6__["MakeAppointmentPage"]]
      })], MakeAppointmentPageModule);
      /***/
    },

    /***/
    "oj2i":
    /*!***********************************************************!*\
      !*** ./src/app/make-appointment/make-appointment.page.ts ***!
      \***********************************************************/

    /*! exports provided: MakeAppointmentPage */

    /***/
    function oj2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MakeAppointmentPage", function () {
        return MakeAppointmentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_make_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./make-appointment.page.html */
      "3Jk3");
      /* harmony import */


      var _make_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./make-appointment.page.scss */
      "rIcZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../shared/appointment.service */
      "JoXq");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var MakeAppointmentPage = /*#__PURE__*/function () {
        function MakeAppointmentPage(aptService, router, fb, authService) {
          _classCallCheck(this, MakeAppointmentPage);

          this.aptService = aptService;
          this.router = router;
          this.fb = fb;
          this.authService = authService;
        }

        _createClass(MakeAppointmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bookingForm = this.fb.group({
              nome: [''],
              descricao: [''],
              video: ['']
            });
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            if (!this.bookingForm.valid) {
              return false;
            } else {
              this.authService.RegistrarExercicio(this.bookingForm.value);
              this.bookingForm.reset();
              ;
            }
          }
        }]);

        return MakeAppointmentPage;
      }();

      MakeAppointmentPage.ctorParameters = function () {
        return [{
          type: _shared_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticateService"]
        }];
      };

      MakeAppointmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-make-appointment',
        template: _raw_loader_make_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_make_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MakeAppointmentPage);
      /***/
    },

    /***/
    "rIcZ":
    /*!*************************************************************!*\
      !*** ./src/app/make-appointment/make-appointment.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function rIcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWtlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=make-appointment-make-appointment-module-es5.js.map