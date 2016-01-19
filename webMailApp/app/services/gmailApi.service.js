System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../common/headers/google.header', '../utils/mail.helper', '../models/recievedMail/recievedMail.model', './googleAuth.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, google_header_1, mail_helper_1, recievedMail_model_1, googleAuth_service_1;
    var GmailAPI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (google_header_1_1) {
                google_header_1 = google_header_1_1;
            },
            function (mail_helper_1_1) {
                mail_helper_1 = mail_helper_1_1;
            },
            function (recievedMail_model_1_1) {
                recievedMail_model_1 = recievedMail_model_1_1;
            },
            function (googleAuth_service_1_1) {
                googleAuth_service_1 = googleAuth_service_1_1;
            }],
        execute: function() {
            GmailAPI = (function () {
                function GmailAPI(_http, _googleAuth, _mailHelper) {
                    this._http = _http;
                    this._googleAuth = _googleAuth;
                    this._mailHelper = _mailHelper;
                    this.gmailRoot = 'https://www.googleapis.com/gmail/v1/users/me';
                    this.recieveMailInFormat = 'full';
                }
                GmailAPI.prototype.authenticateUser = function () {
                    this._googleAuth.loginToGoogle();
                };
                GmailAPI.prototype.getAllMails = function () {
                    var _this = this;
                    var mails = [];
                    this._http.get(this.gmailRoot + '/messages', { headers: google_header_1.googleHeader }).toPromise()
                        .then(function (res) {
                        var requests = [];
                        for (var message in res.json().messages) {
                            requests.push(_this._http.get(_this.gmailRoot + '/messages/' + res.json().messages[message].id + '?format=' + _this.recieveMailInFormat, { headers: google_header_1.googleHeader }).map(function (res) { return res.json(); }));
                        }
                        Observable_1.Observable.forkJoin(requests).subscribe(function (data) {
                            for (var item in data) {
                                mails.push(new recievedMail_model_1.RecievedMail(data[item].id, _this._mailHelper.getHeader(data[item].payload.headers, 'From'), _this._mailHelper.getHeader(data[item].payload.headers, 'Subject'), _this._mailHelper.getHeader(data[item].payload.headers, 'Date'), _this._mailHelper.getBody(data[item].payload)));
                            }
                            return mails;
                        });
                    });
                };
                GmailAPI.prototype.getMailWithId = function (id) {
                    var _this = this;
                    var mail;
                    this._http.get(this.gmailRoot + '/messages/' + id + '?format=' + this.recieveMailInFormat, { headers: google_header_1.googleHeader })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        mail = new recievedMail_model_1.RecievedMail(data.id, _this._mailHelper.getHeader(data.payload.headers, 'From'), _this._mailHelper.getHeader(data.payload.headers, 'Subject'), _this._mailHelper.getHeader(data.payload.headers, 'Date'), _this._mailHelper.getBody(data.payload));
                        return mail;
                    });
                };
                GmailAPI = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, googleAuth_service_1.GoogleAuth, mail_helper_1.MailHelper])
                ], GmailAPI);
                return GmailAPI;
            })();
            exports_1("GmailAPI", GmailAPI);
        }
    }
});
//# sourceMappingURL=gmailApi.service.js.map