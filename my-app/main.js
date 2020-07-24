(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");



class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
    } }, directives: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]], styles: [".my-column[_ngcontent-%COMP%] {\n  background-color: #f7f7f9;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent, SolutionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionState", function() { return SolutionState; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class MainPageComponent {
    constructor() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            monthYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('2020-08'),
            peopleList: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Mai, Ping'),
            avaliableStr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.getTextAreaTemplate('2020-08')),
            minGap: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](3),
        });
        this.solutionState = new SolutionState();
        this.displaySolutions = [];
    }
    ngOnInit() {
    }
    submit() {
        if (this.solutionState.running) {
            return;
        }
        const peopleList = this.getPeopleList(this.formGroup.value.peopleList);
        const avaliableList = this.getAvaliableList(this.formGroup.value.avaliableStr);
        const calendarList = this.getCalendar(this.formGroup.value.monthYear);
        const minGap = this.formGroup.value.minGap;
        this.solutionState = new SolutionState();
        this.solutionState.running = true;
        let solutionInput = {
            peopleList: peopleList,
            avaliableList: avaliableList,
            calendarList: calendarList,
            minGap: minGap
        };
        this.createSolution(solutionInput, [], []);
        if (this.solutionState.findSolution) {
            this.displaySolutions = this.getDisplaySolutions(this.solutionState.result);
            console.log(this.getDisplaySolutions(this.solutionState.result));
        }
        else {
            this.displaySolutions = ["Can't find solution"];
        }
        this.solutionState.running = false;
    }
    onChangeInMonthYear() {
        this.formGroup.patchValue({
            avaliableStr: this.getTextAreaTemplate(this.formGroup.value.monthYear)
        });
    }
    getDisplaySolutions(solutionArr) {
        let displaySolutions = [];
        for (let i = 0; i < solutionArr.length; i++) {
            displaySolutions.push((i + 1) + ": " + solutionArr[i]);
        }
        return displaySolutions;
    }
    getTextAreaTemplate(monthYear) {
        const date = new Date(monthYear + '-01 GMT-0700');
        const month = date.getMonth();
        const year = date.getFullYear();
        const daysInMonth = this.getDaysInMonth(year, month);
        let text = '';
        for (let i = 0; i < daysInMonth; i++) {
            const tempDay = new Date(monthYear + '-' + (i + 1) + ' GMT-0700').getDay();
            if (tempDay == /*Saturday*/ 6 || tempDay == /*Sunday*/ 0) {
                text += ((i + 1) + ': [Weekend]\n');
            }
            else {
                text += ((i + 1) + ':\n');
            }
        }
        return text;
    }
    getPeopleList(peopleListStr) {
        const splitResult = peopleListStr.split(/,/);
        return splitResult.map(name => { return name.trim(); });
    }
    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    ;
    getAvaliableList(avaliableStr) {
        const tmpAvaliableListPerDay = avaliableStr.trim().split(/\n/);
        let avaliableList = [];
        for (let i = 0; i < tmpAvaliableListPerDay.length; i++) {
            avaliableList.push((tmpAvaliableListPerDay[i].split(":"))[1].split(/,/).map(t => t.trim()));
        }
        return avaliableList;
    }
    getCalendar(monthYear) {
        const date = new Date(monthYear + '-01 GMT-0700');
        const month = date.getMonth();
        const year = date.getFullYear();
        const daysInMonth = this.getDaysInMonth(year, month);
        const cal = [];
        for (let i = 0; i < daysInMonth; i++) {
            const tempDay = new Date(monthYear + '-' + (i + 1) + ' GMT-0700').getDay();
            cal.push((tempDay == /*Saturday*/ 6 || tempDay == /*Sunday*/ 0));
        }
        return cal;
    }
    // ======== ag =======
    getRandomUserList(peopleList) {
        let tmp = [];
        for (var i = 0; i < peopleList.length; i++) {
            tmp.push(peopleList[i]);
        }
        return this.randomStringArrLocation(tmp);
    }
    randomStringArrLocation(arr) {
        let randomArr = [];
        while (arr.length > 0) {
            let randomIndex = this.getRandomInt(arr.length);
            randomArr.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);
        }
        return randomArr;
    }
    isViolateMinGap(assignedCal, nextAssignPeople, minGap) {
        for (var j = 1; j <= minGap; j++) {
            if (assignedCal.length > j && nextAssignPeople == assignedCal[assignedCal.length - j]) {
                return true;
            }
        }
        return false;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    findMinDiffAndAvgDiff(assigneedArr, peopleList) {
        let tmp = {};
        let minDiff = 90;
        for (var i = 0; i < peopleList.length; i++) {
            tmp[peopleList[i]] = -1;
        }
        for (var i = 0; i < assigneedArr.length; i++) {
            let p = assigneedArr[i];
            if (tmp[p] > -1) {
                const newLocal = i - tmp[p];
                minDiff = Math.min(newLocal, minDiff);
            }
            tmp[p] = i;
        }
        return minDiff;
    }
    findMaxCount(assigneedArr, peopleList) {
        let tmp = {};
        let maxCount = 0;
        for (var i = 0; i < peopleList.length; i++) {
            tmp[peopleList[i]] = 0;
        }
        for (var i = 0; i < assigneedArr.length; i++) {
            let p = assigneedArr[i];
            tmp[p]++;
            maxCount = Math.max(maxCount, tmp[p]);
        }
        return maxCount;
    }
    createSolutionForWorkday(solutionInput, assignedCal, avaliablePeopleForVacation) {
        let nextAssignIndex = assignedCal.length;
        let possibleNextAssign = solutionInput.avaliableList[nextAssignIndex].slice();
        for (var i = 0; i < possibleNextAssign.length; i++) {
            let newAssignedCal = assignedCal.slice();
            let nextAssignPeople = possibleNextAssign[i];
            if (this.isViolateMinGap(assignedCal, nextAssignPeople, solutionInput.minGap)) {
                continue;
            }
            newAssignedCal.push(possibleNextAssign[i]);
            this.createSolution(solutionInput, newAssignedCal, avaliablePeopleForVacation);
        }
    }
    createSolutionForWeekend(solutionInput, assignedCal, avaliablePeopleForVacation) {
        let possibleNextAssign;
        if (avaliablePeopleForVacation.length == 0) {
            possibleNextAssign = this.getRandomUserList(solutionInput.peopleList);
        }
        else {
            possibleNextAssign = avaliablePeopleForVacation.slice();
        }
        for (var i = 0; i < possibleNextAssign.length; i++) {
            let newAssignedCal = assignedCal.slice();
            newAssignedCal.push(possibleNextAssign[i]);
            let newAvaliablePeopleForVacation = possibleNextAssign.slice();
            newAvaliablePeopleForVacation.splice(i, 1);
            this.createSolution(solutionInput, newAssignedCal, newAvaliablePeopleForVacation);
        }
    }
    createSolution(solutionInput, assignedCal, avaliablePeopleForVacation) {
        if (this.solutionState.stop) {
            return;
        }
        if (assignedCal.length == solutionInput.calendarList.length) {
            this.solutionState.count++;
            var score = this.findMinDiffAndAvgDiff(assignedCal, solutionInput.peopleList);
            var maxCount = this.findMaxCount(assignedCal, solutionInput.peopleList);
            if (score > this.solutionState.score || score == this.solutionState.score && this.solutionState.maxCount > maxCount) {
                this.solutionState.score = score;
                this.solutionState.maxCount = maxCount;
                this.solutionState.findSolution = true;
                this.solutionState.result = assignedCal;
            }
            if (this.solutionState.count % 100000 == 0) {
                const dots = ['.', '..', '...'];
                const randomIndex = this.getRandomInt(3);
                console.log(`finding solution ${dots[randomIndex]}`);
            }
            if (this.solutionState.count > 2000000) {
                this.solutionState.stop = true;
            }
            return;
        }
        if (solutionInput.calendarList[assignedCal.length]) {
            this.createSolutionForWeekend(solutionInput, assignedCal, avaliablePeopleForVacation);
        }
        else {
            this.createSolutionForWorkday(solutionInput, assignedCal, avaliablePeopleForVacation);
        }
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 29, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "my-column"], [3, "formGroup"], [1, "form-group", "row"], ["for", "people-list", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "month", "placeholder", "", "formControlName", "monthYear", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Mai, ...", "formControlName", "peopleList", 1, "form-control"], ["for", "avaliable-list", 1, "col-sm-2", "col-form-label"], ["id", "avaliable list", "rows", "32", "formControlName", "avaliableStr", 1, "form-control"], ["for", "min-gap", 1, "col-sm-2", "col-form-label"], ["type", "text", "placeholder", "3", "formControlName", "minGap", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["for", "result", 1, "col-sm-12", "col-form-label"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MainPageComponent_Template_input_change_8_listener() { return ctx.onChangeInMonthYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "People list:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Avaliable list:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Min Gap:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displaySolutions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".my-column[_ngcontent-%COMP%] {\n  background-color: #f7f7f9;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], null, null); })();
class SolutionState {
    constructor() {
        this.count = 0;
        this.score = -1;
        this.maxCount = 0;
        this.stop = false;
        this.result = {};
        this.findSolution = false;
        this.running = false;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/supicha/workspace/Mai/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map