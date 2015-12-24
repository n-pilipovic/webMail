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
var http_1 = require('angular2/http');
var GmailAPI = (function () {
    function GmailAPI(http) {
        this.http = http;
        this.serviceRoot = 'http://localhost:3000/api';
    }
    GmailAPI.prototype.authenticateUser = function () {
        return this.http.get(this.serviceRoot + '/auth/google');
    };
    GmailAPI.prototype.authenticateUserCallback = function () {
        return this.http.get(this.serviceRoot + '/auth/google/callback')
            .map(function (res) { console.log(res); return res.json(); });
    };
    GmailAPI.prototype.getUserDetails = function () {
        return this.http.get('');
    };
    GmailAPI = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GmailAPI);
    return GmailAPI;
})();
exports.GmailAPI = GmailAPI;
//# sourceMappingURL=gmailApi.service.js.map