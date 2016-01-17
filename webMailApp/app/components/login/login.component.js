System.register(['angular2/core', '../../services/gmailApi.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, gmailApi_service_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gmailApi_service_1_1) {
                gmailApi_service_1 = gmailApi_service_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(_gmailAPI) {
                    this._gmailAPI = _gmailAPI;
                }
                Login.prototype.loginUser = function () {
                    this._gmailAPI.authenticateUser();
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/components/login/login.component.html',
                        styleUrls: ['app/components/login/login.component.css'],
                        providers: [gmailApi_service_1.GmailAPI]
                    }), 
                    __metadata('design:paramtypes', [gmailApi_service_1.GmailAPI])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map