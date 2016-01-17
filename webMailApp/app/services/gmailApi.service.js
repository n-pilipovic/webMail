System.register(['angular2/core', 'angular2/http', './googleAuth.service', '../common/headers/google.header'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, googleAuth_service_1, google_header_1;
    var GmailAPI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (googleAuth_service_1_1) {
                googleAuth_service_1 = googleAuth_service_1_1;
            },
            function (google_header_1_1) {
                google_header_1 = google_header_1_1;
            }],
        execute: function() {
            GmailAPI = (function () {
                function GmailAPI(_http, _googleAuth) {
                    this._http = _http;
                    this._googleAuth = _googleAuth;
                    this.gmailRoot = 'https://www.googleapis.com/gmail/v1/users/me';
                }
                GmailAPI.prototype.authenticateUser = function () {
                    this._googleAuth.loginToGoogle();
                };
                GmailAPI.prototype.getAllMails = function () {
                    var _this = this;
                    this._http.get(this.gmailRoot + '/messages', { headers: google_header_1.googleHeader })
                        .map(function (res) { return res.json(); })
                        .flatMap(function (res) {
                        for (var message in res.messages) {
                            return _this._http.get(_this.gmailRoot + '/messages/' + res.messages[message].id, { headers: google_header_1.googleHeader });
                        }
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log(data); });
                };
                GmailAPI = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, googleAuth_service_1.GoogleAuth])
                ], GmailAPI);
                return GmailAPI;
            })();
            exports_1("GmailAPI", GmailAPI);
        }
    }
});
//# sourceMappingURL=gmailApi.service.js.map