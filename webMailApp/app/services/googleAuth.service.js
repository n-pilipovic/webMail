System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var GoogleAuth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            GoogleAuth = (function () {
                function GoogleAuth(_http, _router) {
                    var _this = this;
                    this._http = _http;
                    this._router = _router;
                    this.serviceRoot = 'http://localhost:3000/api';
                    this.scopes = 'https://www.googleapis.com/auth/gmail.readonly';
                    this._http.get('../../webMailApp/lib/googleCredentials.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.client_ID = data.client_ID; });
                }
                GoogleAuth.prototype.getGoogleClientId = function () {
                    return this.client_ID;
                };
                ;
                GoogleAuth.prototype.handleAuthClick = function () {
                    return this.client_ID;
                };
                ;
                GoogleAuth = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], GoogleAuth);
                return GoogleAuth;
            })();
            exports_1("GoogleAuth", GoogleAuth);
        }
    }
});
//# sourceMappingURL=googleAuth.service.js.map