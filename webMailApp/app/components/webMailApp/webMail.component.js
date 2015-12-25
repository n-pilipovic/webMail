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
var http_1 = require("angular2/http");
var router_1 = require('angular2/router');
var googleAuth_service_1 = require('../../services/googleAuth.service');
var menu_component_1 = require('../menu/menu.component');
var login_component_1 = require('../login/login.component');
var inbox_component_1 = require('../inbox/inbox.component');
var sent_component_1 = require('../sent/sent.component');
var writeMail_component_1 = require('../writeMail/writeMail.component');
var drafts_component_1 = require('../drafts/drafts.component');
var labels_component_1 = require('../labels/labels.component');
var WebMailApp = (function () {
    function WebMailApp() {
    }
    WebMailApp = __decorate([
        angular2_1.Component({
            selector: 'webmail',
            templateUrl: 'app/components/webMailApp/webMail.component.html',
            styleUrls: ['app/components/webMailApp/webMail.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, inbox_component_1.Inbox, menu_component_1.Menu]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/inbox' },
            { path: '/login', component: login_component_1.Login, as: 'Login' },
            { path: '/new', component: writeMail_component_1.WriteMail, as: 'Write' },
            { path: '/inbox', component: inbox_component_1.Inbox, as: 'Inbox' },
            { path: '/sent', component: sent_component_1.Sent, as: 'Sent' },
            { path: '/drafts', component: drafts_component_1.Drafts, as: 'Drafts' },
            { path: '/labels', component: labels_component_1.Labels, as: 'Labels' }
        ]), 
        __metadata('design:paramtypes', [])
    ], WebMailApp);
    return WebMailApp;
})();
exports.WebMailApp = WebMailApp;
angular2_1.bootstrap(WebMailApp, [http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), googleAuth_service_1.GoogleAuth]);
//# sourceMappingURL=webMail.component.js.map