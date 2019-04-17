(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/generated-form/abstract-value-accessor.ts":
/*!***********************************************************!*\
  !*** ./src/app/generated-form/abstract-value-accessor.ts ***!
  \***********************************************************/
/*! exports provided: AbstractValueAccessor, MakeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractValueAccessor", function() { return AbstractValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeProvider", function() { return MakeProvider; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbstractValueAccessor = /** @class */ (function () {
    function AbstractValueAccessor() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    AbstractValueAccessor.prototype.get_value = function () {
        return this.value;
    };
    AbstractValueAccessor.prototype.set_value = function (value) {
        if (value !== this.value) {
            this.value = value;
            this.onChange(value);
        }
    };
    AbstractValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    AbstractValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AbstractValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AbstractValueAccessor;
}());

function MakeProvider(type) {
    return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return type; }),
        multi: true
    };
}


/***/ }),

/***/ "./src/app/generated-form/checkbox/checkbox.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/generated-form/checkbox/checkbox.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{title}}</h2>\n  <ion-item *ngFor=\"let option of options\" >\n    <ion-label>{{option.val}}</ion-label>\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"option.isChecked\" (ionChange)=\"onChange(options)\"></ion-checkbox>\n  </ion-item>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/checkbox/checkbox.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/generated-form/checkbox/checkbox.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/generated-form/checkbox/checkbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/generated-form/checkbox/checkbox.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxComponent, CheckboxOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxOption", function() { return CheckboxOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-value-accessor */ "./src/app/generated-form/abstract-value-accessor.ts");



var CheckboxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxComponent, _super);
    function CheckboxComponent() {
        return _super.call(this) || this;
    }
    CheckboxComponent_1 = CheckboxComponent;
    CheckboxComponent.prototype.ngOnInit = function () { };
    var CheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CheckboxComponent.prototype, "options", void 0);
    CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/generated-form/checkbox/checkbox.component.html"),
            providers: [Object(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["MakeProvider"])(CheckboxComponent_1)],
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/generated-form/checkbox/checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["AbstractValueAccessor"]));

var CheckboxOption = /** @class */ (function () {
    function CheckboxOption() {
    }
    return CheckboxOption;
}());



/***/ }),

/***/ "./src/app/generated-form/form/form.component.html":
/*!*********************************************************!*\
  !*** ./src/app/generated-form/form/form.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"generatedForm\">\n    <app-short-text [title]=\"'Texto curto'\" [label]=\"'Resposta'\" formControlName=\"input1\"></app-short-text>\n    <app-long-text [title]=\"'Texto longo'\" [label]=\"'Resposta'\" formControlName=\"input2\"></app-long-text>\n    <app-multiple-choice [title]=\"'Escolha Múltipla'\" [label]=\"'Resposta'\" [options]=\"['Opção 1', 'Opção 2', 'Opção 3']\" formControlName=\"input3\"></app-multiple-choice>\n    <app-checkbox [title]=\"'Checkbox'\" [options]=\"checkbox_options\" formControlName=\"input4\"></app-checkbox>\n    <app-select [title]=\"'Select'\" [label]=\"'Resposta'\" [placeholder]=\"'Opções'\" [okText]=\"'Ok'\" [cancelText]=\"'Cancelar'\" [options]=\"['Opção 1', 'Opção 2', 'Opção 3']\" formControlName=\"input5\"></app-select>\n    <ion-button color=\"primary\" (click)=\"printForm()\">Print form on console</ion-button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/form/form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/generated-form/form/form.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/generated-form/form/form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/generated-form/form/form.component.ts ***!
  \*******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.checkbox_options = [
            { val: 'Opção 1', isChecked: false },
            { val: 'Opção 2', isChecked: false },
            { val: 'Opção 3', isChecked: false },
            { val: 'Opção 4', isChecked: false }
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.generatedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            input1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            input2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            input3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            input4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            input5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    FormComponent.prototype.printForm = function () {
        console.log(this.generatedForm.value);
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/generated-form/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/generated-form/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/generated-form/generated-form.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/generated-form/generated-form.module.ts ***!
  \*********************************************************/
/*! exports provided: GeneratedFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratedFormModule", function() { return GeneratedFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/generated-form/form/form.component.ts");
/* harmony import */ var _short_text_short_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-text/short-text.component */ "./src/app/generated-form/short-text/short-text.component.ts");
/* harmony import */ var _long_text_long_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-text/long-text.component */ "./src/app/generated-form/long-text/long-text.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multiple-choice/multiple-choice.component */ "./src/app/generated-form/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/generated-form/checkbox/checkbox.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select/select.component */ "./src/app/generated-form/select/select.component.ts");











var GeneratedFormModule = /** @class */ (function () {
    function GeneratedFormModule() {
    }
    GeneratedFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
                _short_text_short_text_component__WEBPACK_IMPORTED_MODULE_4__["ShortTextComponent"],
                _long_text_long_text_component__WEBPACK_IMPORTED_MODULE_5__["LongTextComponent"],
                _multiple_choice_multiple_choice_component__WEBPACK_IMPORTED_MODULE_8__["MultipleChoiceComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [
                _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
                _short_text_short_text_component__WEBPACK_IMPORTED_MODULE_4__["ShortTextComponent"],
                _long_text_long_text_component__WEBPACK_IMPORTED_MODULE_5__["LongTextComponent"]
            ]
        })
    ], GeneratedFormModule);
    return GeneratedFormModule;
}());



/***/ }),

/***/ "./src/app/generated-form/long-text/long-text.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/generated-form/long-text/long-text.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{title}}</h2>\n  <ion-item>\n    <ion-label position=\"floating\">{{label}}</ion-label>\n    <ion-textarea (ionInput)=\"onChange($event)\"></ion-textarea>\n  </ion-item>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/long-text/long-text.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/generated-form/long-text/long-text.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL2xvbmctdGV4dC9sb25nLXRleHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/generated-form/long-text/long-text.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/generated-form/long-text/long-text.component.ts ***!
  \*****************************************************************/
/*! exports provided: LongTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongTextComponent", function() { return LongTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var customValueProvider = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return LongTextComponent; }),
    multi: true
};
var LongTextComponent = /** @class */ (function () {
    function LongTextComponent() {
        this._value = '';
        this.propagateChange = function () { };
    }
    LongTextComponent.prototype.ngOnInit = function () { };
    LongTextComponent.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
        }
    };
    LongTextComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    LongTextComponent.prototype.registerOnTouched = function (fn) { };
    LongTextComponent.prototype.onChange = function (event) {
        this.propagateChange(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LongTextComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LongTextComponent.prototype, "label", void 0);
    LongTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-long-text',
            template: __webpack_require__(/*! ./long-text.component.html */ "./src/app/generated-form/long-text/long-text.component.html"),
            providers: [customValueProvider],
            styles: [__webpack_require__(/*! ./long-text.component.scss */ "./src/app/generated-form/long-text/long-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LongTextComponent);
    return LongTextComponent;
}());



/***/ }),

/***/ "./src/app/generated-form/multiple-choice/multiple-choice.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/generated-form/multiple-choice/multiple-choice.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{title}}</h2>\n  <ion-list>\n    <ion-radio-group (ionChange)=\"onChange($event.target.value)\">\n      <ion-list-header>\n        <ion-label>{{label}}</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let option of options\">\n        <ion-label>{{option}}</ion-label>\n        <ion-radio slot=\"start\" value=\"{{option}}\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/multiple-choice/multiple-choice.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/generated-form/multiple-choice/multiple-choice.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL211bHRpcGxlLWNob2ljZS9tdWx0aXBsZS1jaG9pY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/generated-form/multiple-choice/multiple-choice.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/generated-form/multiple-choice/multiple-choice.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MultipleChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleChoiceComponent", function() { return MultipleChoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-value-accessor */ "./src/app/generated-form/abstract-value-accessor.ts");



var MultipleChoiceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MultipleChoiceComponent, _super);
    function MultipleChoiceComponent() {
        return _super.call(this) || this;
    }
    MultipleChoiceComponent_1 = MultipleChoiceComponent;
    MultipleChoiceComponent.prototype.ngOnInit = function () { };
    var MultipleChoiceComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultipleChoiceComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultipleChoiceComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MultipleChoiceComponent.prototype, "options", void 0);
    MultipleChoiceComponent = MultipleChoiceComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multiple-choice',
            template: __webpack_require__(/*! ./multiple-choice.component.html */ "./src/app/generated-form/multiple-choice/multiple-choice.component.html"),
            providers: [Object(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["MakeProvider"])(MultipleChoiceComponent_1)],
            styles: [__webpack_require__(/*! ./multiple-choice.component.scss */ "./src/app/generated-form/multiple-choice/multiple-choice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["AbstractValueAccessor"]));



/***/ }),

/***/ "./src/app/generated-form/select/select.component.html":
/*!*************************************************************!*\
  !*** ./src/app/generated-form/select/select.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{title}}</h2>\n  <ion-item>\n      <ion-label>{{label}}</ion-label>\n      <ion-select placeholder=\"{{placeholder}}\" okText=\"{{okText}}\" cancelText=\"{{cancelText}}\" (ionChange)=\"onChange($event.target.value)\">\n        <ion-select-option *ngFor=\"let option of options\" value=\"{{option}}\">{{option}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/select/select.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/generated-form/select/select.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/generated-form/select/select.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/generated-form/select/select.component.ts ***!
  \***********************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-value-accessor */ "./src/app/generated-form/abstract-value-accessor.ts");



var SelectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectComponent, _super);
    function SelectComponent() {
        return _super.call(this) || this;
    }
    SelectComponent_1 = SelectComponent;
    SelectComponent.prototype.ngOnInit = function () { };
    var SelectComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "okText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectComponent.prototype, "cancelText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    SelectComponent = SelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/generated-form/select/select.component.html"),
            providers: [Object(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["MakeProvider"])(SelectComponent_1)],
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/generated-form/select/select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}(_abstract_value_accessor__WEBPACK_IMPORTED_MODULE_2__["AbstractValueAccessor"]));



/***/ }),

/***/ "./src/app/generated-form/short-text/short-text.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/generated-form/short-text/short-text.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{title}}</h2>\n  <ion-item>\n    <ion-label position=\"floating\">{{label}}</ion-label>\n    <ion-input (ionInput)=\"onChange($event)\"></ion-input>\n  </ion-item>\n</div>"

/***/ }),

/***/ "./src/app/generated-form/short-text/short-text.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/generated-form/short-text/short-text.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlZC1mb3JtL3Nob3J0LXRleHQvc2hvcnQtdGV4dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/generated-form/short-text/short-text.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/generated-form/short-text/short-text.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShortTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTextComponent", function() { return ShortTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var customValueProvider = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ShortTextComponent; }),
    multi: true
};
var ShortTextComponent = /** @class */ (function () {
    function ShortTextComponent() {
        // @Output() value = new EventEmitter<string>();
        this._value = '';
        this.propagateChange = function () { };
    }
    ShortTextComponent.prototype.ngOnInit = function () { };
    ShortTextComponent.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
        }
    };
    ShortTextComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ShortTextComponent.prototype.registerOnTouched = function (fn) { };
    ShortTextComponent.prototype.onChange = function (event) {
        this.propagateChange(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ShortTextComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ShortTextComponent.prototype, "label", void 0);
    ShortTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-text',
            template: __webpack_require__(/*! ./short-text.component.html */ "./src/app/generated-form/short-text/short-text.component.html"),
            providers: [customValueProvider],
            styles: [__webpack_require__(/*! ./short-text.component.scss */ "./src/app/generated-form/short-text/short-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShortTextComponent);
    return ShortTextComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _generated_form_generated_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated-form/generated-form.module */ "./src/app/generated-form/generated-form.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _generated_form_generated_form_module__WEBPACK_IMPORTED_MODULE_7__["GeneratedFormModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Formulário\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-form></app-form>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map