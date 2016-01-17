System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1;
    var GoogleAuth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            GoogleAuth = (function () {
                function GoogleAuth(_http, _router) {
                    var _this = this;
                    this._http = _http;
                    this._router = _router;
                    this.access_token = null;
                    this.googleCode = null;
                    this.app_API_root = 'https://localhost:8080/api';
                    this.authRoot = 'https://accounts.google.com/o/oauth2/v2/auth?';
                    this.authScope = 'email profile https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly';
                    this.initialAppState = 'home';
                    this.redirect_uri = 'https://localhost:8080/api/googleAuthCallback';
                    this.response_type = 'code';
                    this.access_type = 'offline';
                    this._http.get('../../webMailApp/lib/googleCredentials.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.client_ID = data.client_ID;
                        _this.client_secret = data.client_secret;
                    });
                    this.token_uri = 'https://www.googleapis.com/oauth2/v4/token';
                    this.googleToken();
                }
                GoogleAuth.prototype.loginToGoogle = function () {
                    this.getAccessToken();
                };
                ;
                GoogleAuth.prototype.getAccessToken = function () {
                    window.location.href = this.createUrlWithParameters();
                };
                GoogleAuth.prototype.createUrlWithParameters = function () {
                    var retVal = this.authRoot;
                    retVal = retVal.concat('scope=', this.authScope, '&client_id=', this.client_ID, '&response_type=', this.response_type, '&state=', this.initialAppState, '&redirect_uri=', this.redirect_uri, '&access_type', this.access_type);
                    return retVal;
                };
                GoogleAuth.prototype.googleToken = function () {
                    var _this = this;
                    console.log('Client id: ', this.client_ID);
                    console.log('Client secret: ', this.client_secret);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var tokenData = ''.concat('redirect_uri=', this.redirect_uri, '&grant_type=authorization_code');
                    this._http.get(this.app_API_root + '/googleAuthCode')
                        .map(function (res) { return res.json(); })
                        .flatMap(function (res) { tokenData = tokenData.concat('&code=', res.code); return _this._http.get('../../webMailApp/lib/googleCredentials.json'); })
                        .map(function (res) { return res.json(); })
                        .flatMap(function (res) {
                        tokenData = tokenData.concat('&client_id=', res.client_ID, '&client_secret=', res.client_secret);
                        return _this._http.post(_this.token_uri, tokenData, { headers: headers });
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { console.log(data); _this.saveToken(data.access_token); _this._router.navigate(['/WebMail']); });
                };
                GoogleAuth.prototype.createNonce = function (length) {
                    var text = '';
                    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    for (var i = 0; i < length; i++) {
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                    }
                    return text;
                };
                GoogleAuth.prototype.saveToken = function (token) {
                    this.access_token = token;
                    localStorage.setItem('googleToken', token);
                };
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