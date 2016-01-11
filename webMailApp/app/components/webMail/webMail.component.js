System.register(['angular2/core', 'angular2/router', '../menu/menu.component', '../inbox/inbox.component', '../sent/sent.component', '../writeMail/writeMail.component', '../drafts/drafts.component', '../labels/labels.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, menu_component_1, inbox_component_1, sent_component_1, writeMail_component_1, drafts_component_1, labels_component_1;
    var WebMail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (inbox_component_1_1) {
                inbox_component_1 = inbox_component_1_1;
            },
            function (sent_component_1_1) {
                sent_component_1 = sent_component_1_1;
            },
            function (writeMail_component_1_1) {
                writeMail_component_1 = writeMail_component_1_1;
            },
            function (drafts_component_1_1) {
                drafts_component_1 = drafts_component_1_1;
            },
            function (labels_component_1_1) {
                labels_component_1 = labels_component_1_1;
            }],
        execute: function() {
            WebMail = (function () {
                function WebMail() {
                }
                WebMail = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/webMail/webMail.component.html',
                        styleUrls: ['app/components/webMail/webMail.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.Menu]
                    }),
                    router_1.RouteConfig([
                        //{path: '/', redirectTo: ['Inbox']},
                        { path: '/new', component: writeMail_component_1.WriteMail, as: 'Write' },
                        { path: '/inbox', component: inbox_component_1.Inbox, as: 'Inbox', useAsDefault: true },
                        { path: '/sent', component: sent_component_1.Sent, as: 'Sent' },
                        { path: '/drafts', component: drafts_component_1.Drafts, as: 'Drafts' },
                        { path: '/labels', component: labels_component_1.Labels, as: 'Labels' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], WebMail);
                return WebMail;
            })();
            exports_1("WebMail", WebMail);
        }
    }
});
//# sourceMappingURL=webMail.component.js.map