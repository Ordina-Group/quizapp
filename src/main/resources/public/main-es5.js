function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../$$_lazy_route_resource lazy recursive":
  /*!*******************************************************!*\
    !*** ../$$_lazy_route_resource lazy namespace object ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./app/app-routing.module.ts":
  /*!***********************************!*\
    !*** ./app/app-routing.module.ts ***!
    \***********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function appAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./app/home/home.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./question/question.component */
    "./app/question/question.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'question',
      component: _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/app.component.ts":
  /*!******************************!*\
    !*** ./app/app.component.ts ***!
    \******************************/

  /*! exports provided: AppComponent */

  /***/
  function appAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _surveys_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./surveys/survey.service */
    "./app/surveys/survey.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(surveyService) {
        _classCallCheck(this, AppComponent);

        this.surveyService = surveyService;
        this.title = 'Welkom bij de survey';
        this.errorMessage = '';
        console.log("constructor van AppComponent");
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('ngInit van AppComponent');
          this.surveyService.getSurveys().subscribe(function (data) {
            _this.surveys = data;
          });
        }
      }, {
        key: "getSurvey",
        value: function getSurvey(id) {
          var _this2 = this;

          this.surveyService.getSurvey(id).subscribe({
            next: function next(survey) {
              return _this2.currentSurvey = survey;
            },
            error: function error(err) {
              return _this2.errorMessage = err;
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_surveys_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _surveys_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/app.module.ts":
  /*!***************************!*\
    !*** ./app/app.module.ts ***!
    \***************************/

  /*! exports provided: AppModule */

  /***/
  function appAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./app/home/home.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./question/question.component */
    "./app/question/question.component.ts");
    /* harmony import */


    var _surveys_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./surveys/survey.service */
    "./app/surveys/survey.service.ts");
    /* harmony import */


    var _submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./submittedanswers/submittedanswer.service */
    "./app/submittedanswers/submittedanswer.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_surveys_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"], _submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_7__["SubmittedAnswerService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
          providers: [_surveys_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"], _submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_7__["SubmittedAnswerService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/home/home.component.ts":
  /*!************************************!*\
    !*** ./app/home/home.component.ts ***!
    \************************************/

  /*! exports provided: HomeComponent */

  /***/
  function appHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/question"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 2,
      consts: [["Style", "background-image: url('./assets/images/code.jpg');", 1, "jumbotron-fluid"], [1, "container", "mx-auto"], [1, "row"], [1, "mx-auto", 2, "margin-top", "4rem"], [1, "mx-auto"], [1, "btn", "btn-dark", "btn-lg", "btn-block", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welkom bij de Ordina developers Quiz!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".jumbotron-fluid[_ngcontent-%COMP%]{\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height:700px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  color:white;\r\n  font-size: 50px;\r\n  font-family: 'Roboto', sans serif;\r\n  font-weight: bold;\r\n  text-align: center;\r\n\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color:white;\r\n  font-family:'Roboto', sans-serif;\r\n  font-size: 30px;\r\n  align-self: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  align-self: center;\r\n  width:95%;\r\n  height: 300px;\r\n  background-color: rgba(245, 245, 245, .4);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYix5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24tZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDo3MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDo5NSU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIC40KTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/question/question.component.ts":
  /*!********************************************!*\
    !*** ./app/question/question.component.ts ***!
    \********************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function appQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _surveys_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../surveys/survey.service */
    "./app/surveys/survey.service.ts");
    /* harmony import */


    var _submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../submittedanswers/submittedanswer.service */
    "./app/submittedanswers/submittedanswer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function QuestionComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionComponent_div_14_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.selectedValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r6 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", answer_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r6);
      }
    }

    function QuestionComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function QuestionComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.answerIsCorrect.isCorrect === true ? "green" : "red"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.answerIsCorrect.answerExplanation, "");
      }
    }

    function QuestionComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
      }
    }

    function QuestionComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_div_21_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.nextQuestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Volgende");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent(surveyService, submittedAnswerService) {
        _classCallCheck(this, QuestionComponent);

        this.surveyService = surveyService;
        this.submittedAnswerService = submittedAnswerService;
        this.selectedValue = '';
        this.currentQuestion = 0;
        this.buttonClicked = false;
        this.show = true;
        this.showVolgende = false;
        this.errorMessage = '';
        this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({// gridradios: new FormControl()
        });
        console.log('constructor van Question');
        console.log('constructor van Submittedanswer');
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.surveyService.getSurvey(1).subscribe({
            next: function next(survey) {
              return _this3.currentSurvey = survey;
            },
            error: function error(err) {
              return _this3.errorMessage = err;
            }
          });
        }
      }, {
        key: "setAnswersToRadiobuttons",
        // hier wordt de String array"answers" geleegd in de functie,
        // vervolgens wordt de array gelijk /gematched aan de answeroption van deze vraag die uit de database zijn gehaald
        // In de forloop (HTML) wordt dan de answers gematched met dezelfde value waarde (dus antwoord A wordt radiobutton met Antwoord A)
        value: function setAnswersToRadiobuttons() {
          var _this4 = this;

          this.answers = [];
          this.currentQuestionObject = this.currentSurvey.questions.filter(function (question) {
            return question.number === _this4.currentQuestion + 1;
          })[0];

          if (this.currentQuestionObject === undefined) {
            console.log('geen volgende vraag!'); // hier wil je iets doen om naar een eindpagina te gaan.

            return;
          }

          this.answerOptionsArray = this.currentQuestionObject.answerOptions;
          this.answerOptionsArray.forEach(function (answerOption) {
            _this4.answers.push(answerOption.value);
          });
        } // deze functie laat het witte vlak met uitleg zien en reset de buttonclicked gelijk
        // showvolgende knop wordt getoond

      }, {
        key: "clicked",
        value: function clicked() {
          this.buttonClicked = !this.buttonClicked;
          this.showVolgende = !this.showVolgende;
        } // Als je op submit drukt, laat het programma het witte vlak zien en verdwijnt de knop submit
        // (dit gebeurd met show) en clicked() functie wordt aangeroepen.
        // Tevens wordt het antwoord gekoppeld met het juiste antwoord dmv aanroepen setchosenanswer functie

      }, {
        key: "onFormSubmit",
        value: function onFormSubmit(questionForm) {
          var _this5 = this;

          this.clicked();
          this.show = !this.show;
          console.log(this.selectedValue); //  this.setChosenAnswer();

          this.submittedAnswerService.postSubmittedAnswer(this.submittedAnswer).subscribe(function (answerIsCorrect) {
            _this5.answerIsCorrect = answerIsCorrect;
          });
        } // // hier vergelijk je het gekozen antwoord met het antwoord van het object answeroptions
        // setChosenAnswer() {
        //   const chosenAnswerAsArray = this.answerOptionsArray.filter(answerOption => {
        //     return answerOption.value === this.selectedValue;
        //   });
        //   this.chosenAnswer = chosenAnswerAsArray[0];
        //   console.log(this.chosenAnswer);
        //   console.log(this.chosenAnswer.correct);
        // }

      }, {
        key: "onItemChange",
        value: function onItemChange(value) {
          console.log(' Value is : ', value);
        } // als je op knop "volgende" drukt wil je de volgende vraag laten zien

      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          this.currentQuestion++;
          this.setAnswersToRadiobuttons();
          this.show = true;
          this.showVolgende = false;
          this.buttonClicked = false;
          this.selectedValue = null;
          console.log('witte vlak is nu weg');
        }
      }, {
        key: "currentSurvey",
        get: function get() {
          return this._currentSurvey;
        },
        set: function set(value) {
          this._currentSurvey = value;
          this.setAnswersToRadiobuttons();
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
      return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_surveys_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_3__["SubmittedAnswerService"]));
    };

    QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionComponent,
      selectors: [["app-question"]],
      decls: 22,
      vars: 7,
      consts: [["Style", "background-image: url('./assets/images/traffic.jpg');", 1, "jumbotron-fluid"], [1, "container", "mx-auto"], [1, "row"], ["Style", "background-color:black;", 1, "jumbotron-fluid"], [1, "container"], [2, "margin-top", "2rem"], [1, "col-sm-6"], [3, "ngSubmit"], ["questionForm", "ngForm"], ["class", "radioBlok", 4, "ngFor", "ngForOf"], ["type", "submit", 4, "ngIf"], ["class", "col-sm-6", "style", "background-color: white", 3, "ngStyle", 4, "ngIf"], [1, "row", 2, "margin-top", "5px"], [1, "col-sm-12"], ["class", "col-11", "Style", "background-color:black;", 4, "ngIf"], ["class", "col-1", "Style", "background-color:black;", 4, "ngIf"], [1, "radioBlok"], ["type", "radio", "name", "answerButtons", 3, "ngModel", "value", "ngModelChange"], [1, "antwoordLabel"], ["type", "submit"], [1, "col-sm-6", 2, "background-color", "white", 3, "ngStyle"], ["Style", "background-color:black;", 1, "col-11"], ["Style", "background-color:black;", 1, "col-1"], [2, "margin", "1rem"], [1, "btn", "btn-dark", "btn-lg", 3, "click"]],
      template: function QuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuestionComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.onFormSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionComponent_div_14_Template, 4, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuestionComponent_div_16_Template, 2, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuestionComponent_div_20_Template, 1, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuestionComponent_div_21_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._currentSurvey == null ? null : ctx._currentSurvey.surveyDescription, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentQuestionObject == null ? null : ctx.currentQuestionObject.questionDescription, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonClicked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonClicked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showVolgende);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".jumbotron-fluid[_ngcontent-%COMP%]{\r\n  background-size: cover;\r\n  height:400px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  color:white;\r\n  font-family:'Roboto', sans-serif;\r\n  font-size: 30px;\r\n  align-self: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  align-self:start;\r\n  width:95%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color:white;\r\n  font-family:'Roboto', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.p-green[_ngcontent-%COMP%]{\r\n  color:green;\r\n  font-family:'Roboto', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.p-red[_ngcontent-%COMP%]{\r\n  color:red;\r\n  font-family:'Roboto', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n  color:white;\r\n  margin-top:1rem;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%]{\r\n  margin-top:1rem;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%]{\r\n  margin-top:1rem;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n  margin: 2rem;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n\r\n.td[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n\r\ninput[type=radio][_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\n\r\nlabel.antwoordLabel[_ngcontent-%COMP%]{\r\n  color: white;\r\n  margin-left: .5rem;\r\n}\r\n\r\n.radioBlok[_ngcontent-%COMP%]{\r\n  display: block;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDo0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGFsaWduLXNlbGY6c3RhcnQ7XHJcbiAgd2lkdGg6OTUlO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wLWdyZWVue1xyXG4gIGNvbG9yOmdyZWVuO1xyXG4gIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnAtcmVke1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dHtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNre1xyXG4gIG1hcmdpbi10b3A6MXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0e1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4udGR7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9de1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxubGFiZWwuYW50d29vcmRMYWJlbHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcblxyXG4ucmFkaW9CbG9re1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-question',
          templateUrl: './question.component.html',
          styleUrls: ['./question.component.css']
        }]
      }], function () {
        return [{
          type: _surveys_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]
        }, {
          type: _submittedanswers_submittedanswer_service__WEBPACK_IMPORTED_MODULE_3__["SubmittedAnswerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/submittedanswers/submittedanswer.service.ts":
  /*!*********************************************************!*\
    !*** ./app/submittedanswers/submittedanswer.service.ts ***!
    \*********************************************************/

  /*! exports provided: SubmittedAnswerService */

  /***/
  function appSubmittedanswersSubmittedanswerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmittedAnswerService", function () {
      return SubmittedAnswerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SubmittedAnswerService = /*#__PURE__*/function () {
      function SubmittedAnswerService(http) {
        _classCallCheck(this, SubmittedAnswerService);

        this.http = http;
      }

      _createClass(SubmittedAnswerService, [{
        key: "postSubmittedAnswer",
        value: function postSubmittedAnswer(submittedAnswer) {
          return this.http.post('localhost:8080/quiz/submittedanswers/submittedAnswer', submittedAnswer);
        }
      }]);

      return SubmittedAnswerService;
    }();

    SubmittedAnswerService.ɵfac = function SubmittedAnswerService_Factory(t) {
      return new (t || SubmittedAnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SubmittedAnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SubmittedAnswerService,
      factory: SubmittedAnswerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmittedAnswerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/surveys/survey.service.ts":
  /*!***************************************!*\
    !*** ./app/surveys/survey.service.ts ***!
    \***************************************/

  /*! exports provided: SurveyService */

  /***/
  function appSurveysSurveyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
      return SurveyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SurveyService = /*#__PURE__*/function () {
      function SurveyService(http) {
        _classCallCheck(this, SurveyService);

        this.http = http; // private surveyUrl = '/server/quiz/surveys';

        this.surveyUrl = 'http://localhost:8080/quiz/surveys';
        console.log('constructor van SurveyService');
      }

      _createClass(SurveyService, [{
        key: "getSurveys",
        value: function getSurveys() {
          console.log('getSurveys');
          return this.http.get(this.surveyUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('All: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getSurvey",
        value: function getSurvey(id) {
          console.log('getSurvey by id');
          return this.getSurveys().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (surveys) {
            return surveys.find(function (s) {
              return s.id === id;
            });
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return SurveyService;
    }();

    SurveyService.ɵfac = function SurveyService_Factory(t) {
      return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SurveyService,
      factory: SurveyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./environments/environment.ts":
  /*!*************************************!*\
    !*** ./environments/environment.ts ***!
    \*************************************/

  /*! exports provided: environment */

  /***/
  function environmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./main.ts":
  /*!*****************!*\
    !*** ./main.ts ***!
    \*****************/

  /*! no exports provided */

  /***/
  function mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***********************!*\
    !*** multi ./main.ts ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\afl23454\Documents\Git\quizapp\src\main\resources\frontend\angular-app\src\main.ts */
    "./main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map