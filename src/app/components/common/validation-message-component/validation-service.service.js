"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../../../environments/environment");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            //static myvalue=environment.xyz==3?"arabic value":" english value";
            'required': environment_1.environment.language == 'ar' ? "هذه الخانة الزامية" : "This information is required.",
            'maxlength': environment_1.environment.language == 'ar' ? "arabic.." : "Maximum length ${validatorValue.requiredLength} characters.",
            'invalidCreditCard': environment_1.environment.language == 'ar' ? "arabi" : "Is invalid credit card number.",
            'invalidEmailAddress': environment_1.environment.language == 'ar' ? "يبدو ان هناك خطأ في الايميل الذي ادخلته، يرجى مراجعة الخانة والمحاولة مرة اخرى" : "Something seems to be wrong with your email address.",
            'email': environment_1.environment.language == 'ar' ? "يبدو ان هناك خطأ في الايميل الذي ادخلته، يرجى مراجعة الخانة والمحاولة مرة اخرى" : "Invalid email address.",
            'invalidPassword': environment_1.environment.language == 'ar' ? "يجب أن تتكون كلمة المرور من ٦ أحرف او ارقام على الأقل" : "Invalid password. Password must be at least 6 characters long, and contain a number",
            'minlength': environment_1.environment.language == 'ar' ? "arabic" : "Field must contain atleast ${validatorValue.requiredLength} characters.",
            'matchPassword': environment_1.environment.language == 'ar' ? "arabic" : "Password does not match.",
            'pattern': environment_1.environment.language == 'ar' ? "arabic" : "Pattern not valid."
        };
        return config[validatorName];
    };
    ValidationService.emailValidator = function (control) {
        if (control.value.length > 0) {
            if (control.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return null;
            }
            else {
                return { 'invalidEmailAddress': true };
            }
        }
        else {
            return { 'required': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ 'matchPassword': true });
            }
            else {
                if (passwordInput.value.length == 0 && passwordConfirmationInput.value.length == 0) {
                }
                else {
                    return passwordConfirmationInput.setErrors(null);
                }
            }
        };
    };
    ValidationService = __decorate([
        core_1.Injectable()
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
