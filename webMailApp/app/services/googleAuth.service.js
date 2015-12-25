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
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var GoogleAuth = (function () {
    function GoogleAuth(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.serviceRoot = 'http://localhost:3000/api';
        this.scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
        this.http.get('../../webMailApp/lib/googleCredentials.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.client_ID = data.client_ID; });
    }
    GoogleAuth.prototype.getGoogleClientId = function () {
        return this.client_ID;
    };
    ;
    GoogleAuth.prototype.handleAuthClick = function () {
        gapi.auth.authorize({
            client_id: this.client_ID,
            scope: this.scopes,
            immediate: true
        }, this.handleAuthResult);
        return false;
    };
    ;
    GoogleAuth.prototype.handleAuthResult = function (result) {
        if (result && !result.error) {
            console.log(result);
            this.loadGmailApi;
        }
        else {
            // window.alert('Not Authorized to Google\'s Services!');
            this.router.navigate(['/login']);
        }
    };
    GoogleAuth.prototype.loadGmailApi = function () {
        console.log('inside');
        gapi.client.load('gmail', 'v1');
        this.router.navigate(['/']);
    };
    GoogleAuth = __decorate([
        __param(0, angular2_1.Inject(http_1.Http)),
        __param(1, angular2_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], GoogleAuth);
    return GoogleAuth;
})();
exports.GoogleAuth = GoogleAuth;
//# sourceMappingURL=googleAuth.service.js.map