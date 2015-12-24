var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var gmailApi_service_1 = require('../../services/gmailApi.service');
var Login = (function () {
    function Login(gmailAPI) {
    }
    Login = __decorate([
        angular2_1.Component({
            selector: 'login-form',
            templateUrl: 'app/components/login/login.component.html',
            styleUrls: ['app/components/login/login.component.css'],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            providers: [gmailApi_service_1.GmailAPI]
        }), 
        __metadata('design:paramtypes', [gmailApi_service_1.GmailAPI])
    ], Login);
    return Login;
})();
exports.Login = Login;
//# sourceMappingURL=login.component.js.map