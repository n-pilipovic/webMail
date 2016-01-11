System.register(['angular2/core', './googleAuth.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, googleAuth_service_1;
    var GmailAPI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (googleAuth_service_1_1) {
                googleAuth_service_1 = googleAuth_service_1_1;
            }],
        execute: function() {
            GmailAPI = (function () {
                function GmailAPI(_googleAuth) {
                    this._googleAuth = _googleAuth;
                    this.serviceRoot = 'http://localhost:3000/api';
                }
                GmailAPI.prototype.authenticateUser = function () {
                    return this._googleAuth.handleAuthClick();
                };
                GmailAPI.prototype.getUserDetails = function () {
                    return this._googleAuth.getGoogleClientId();
                };
                GmailAPI = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [googleAuth_service_1.GoogleAuth])
                ], GmailAPI);
                return GmailAPI;
            })();
            exports_1("GmailAPI", GmailAPI);
        }
    }
});
//# sourceMappingURL=gmailApi.service.js.map