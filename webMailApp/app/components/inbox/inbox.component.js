System.register(['angular2/core', 'angular2/router', '../../services/gmailApi.service', '../readMail/readMail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, gmailApi_service_1, readMail_component_1;
    var Inbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (gmailApi_service_1_1) {
                gmailApi_service_1 = gmailApi_service_1_1;
            },
            function (readMail_component_1_1) {
                readMail_component_1 = readMail_component_1_1;
            }],
        execute: function() {
            Inbox = (function () {
                function Inbox(_gmailAPI) {
                    this._gmailAPI = _gmailAPI;
                    this._gmailAPI.getAllMails();
                    this.allMails = this._gmailAPI.mails;
                }
                Inbox = __decorate([
                    core_1.Component({
                        selector: 'inbox',
                        templateUrl: 'app/components/inbox/inbox.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [gmailApi_service_1.GmailAPI]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: Inbox, as: 'Djura' },
                        { path: '/:id', component: readMail_component_1.ReadMail, as: 'ReadMail' }
                    ]), 
                    __metadata('design:paramtypes', [gmailApi_service_1.GmailAPI])
                ], Inbox);
                return Inbox;
            })();
            exports_1("Inbox", Inbox);
        }
    }
});
//# sourceMappingURL=inbox.component.js.map