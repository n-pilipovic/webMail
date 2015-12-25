var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var googleAuth_service_1 = require('./googleAuth.service');
var GmailAPI = (function () {
    function GmailAPI(http, googleAuth) {
        this.http = http;
        this.googleAuth = googleAuth;
        this.serviceRoot = 'http://localhost:3000/api';
    }
    GmailAPI.prototype.authenticateUser = function () {
        this.googleAuth.handleAuthClick();
    };
    GmailAPI.prototype.getUserDetails = function () {
        return this.googleAuth.getGoogleClientId();
    };
    GmailAPI = __decorate([
        angular2_1.Injectable(),
        __param(1, angular2_1.Inject(googleAuth_service_1.GoogleAuth)), 
        __metadata('design:paramtypes', [http_1.Http, googleAuth_service_1.GoogleAuth])
    ], GmailAPI);
    return GmailAPI;
})();
exports.GmailAPI = GmailAPI;
//# sourceMappingURL=gmailApi.service.js.map