(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-appointment-edit-appointment-module"], {
    /***/
    "2HY3":
    /*!*************************************************************!*\
      !*** ./src/app/edit-appointment/edit-appointment.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function HY3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "GVAI":
    /*!*************************************************************!*\
      !*** ./src/app/edit-appointment/edit-appointment.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditAppointmentPageModule */

    /***/
    function GVAI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditAppointmentPageModule", function () {
        return EditAppointmentPageModule;
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


      var _edit_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-appointment-routing.module */
      "h5DW");
      /* harmony import */


      var _edit_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-appointment.page */
      "gy5n");

      var EditAppointmentPageModule = function EditAppointmentPageModule() {
        _classCallCheck(this, EditAppointmentPageModule);
      };

      EditAppointmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditAppointmentPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_edit_appointment_page__WEBPACK_IMPORTED_MODULE_6__["EditAppointmentPage"]]
      })], EditAppointmentPageModule);
      /***/
    },

    /***/
    "OhxK":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-appointment/edit-appointment.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OhxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Edit Appointment\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n    <form [formGroup]=\"updateBookingForm\" (ngSubmit)=\"updateForm()\">\n      <ion-item>\n        <ion-label position=\"floating\">Nome</ion-label>\n        <ion-input formControlName=\"nome\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Descricao</ion-label>\n        <ion-input formControlName=\"descricao\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Video</ion-label>\n        <ion-input formControlName=\"video\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Update Appointment</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "gy5n":
    /*!***********************************************************!*\
      !*** ./src/app/edit-appointment/edit-appointment.page.ts ***!
      \***********************************************************/

    /*! exports provided: EditAppointmentPage */

    /***/
    function gy5n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditAppointmentPage", function () {
        return EditAppointmentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-appointment.page.html */
      "OhxK");
      /* harmony import */


      var _edit_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-appointment.page.scss */
      "2HY3");
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

      var EditAppointmentPage = /*#__PURE__*/function () {
        function EditAppointmentPage(aptService, actRoute, router, fb) {
          var _this = this;

          _classCallCheck(this, EditAppointmentPage);

          this.aptService = aptService;
          this.actRoute = actRoute;
          this.router = router;
          this.fb = fb;
          this.id = this.actRoute.snapshot.paramMap.get('id');
          this.aptService.getBooking(this.id).valueChanges().subscribe(function (res) {
            _this.updateBookingForm.setValue(res);
          });
        }

        _createClass(EditAppointmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateBookingForm = this.fb.group({
              name: [''],
              email: [''],
              mobile: ['']
            });
            console.log(this.updateBookingForm.value);
          }
        }, {
          key: "updateForm",
          value: function updateForm() {
            var _this2 = this;

            this.aptService.updateBooking(this.id, this.updateBookingForm.value).then(function () {
              _this2.router.navigate(['/home']);
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }]);

        return EditAppointmentPage;
      }();

      EditAppointmentPage.ctorParameters = function () {
        return [{
          type: _shared_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      EditAppointmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-appointment',
        template: _raw_loader_edit_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditAppointmentPage);
      /***/
    },

    /***/
    "h5DW":
    /*!*********************************************************************!*\
      !*** ./src/app/edit-appointment/edit-appointment-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EditAppointmentPageRoutingModule */

    /***/
    function h5DW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditAppointmentPageRoutingModule", function () {
        return EditAppointmentPageRoutingModule;
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


      var _edit_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-appointment.page */
      "gy5n");

      var routes = [{
        path: '',
        component: _edit_appointment_page__WEBPACK_IMPORTED_MODULE_3__["EditAppointmentPage"]
      }];

      var EditAppointmentPageRoutingModule = function EditAppointmentPageRoutingModule() {
        _classCallCheck(this, EditAppointmentPageRoutingModule);
      };

      EditAppointmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditAppointmentPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-appointment-edit-appointment-module-es5.js.map