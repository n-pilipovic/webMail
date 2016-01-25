System.register(['angular2/core', 'angular2/router', '../login/login.component', '../webMail/webMail.component', '../../services/googleAuth.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_component_1, webMail_component_1, googleAuth_service_1;
    var AppBootstrap;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (webMail_component_1_1) {
                webMail_component_1 = webMail_component_1_1;
            },
            function (googleAuth_service_1_1) {
                googleAuth_service_1 = googleAuth_service_1_1;
            }],
        execute: function() {
            AppBootstrap = (function () {
                function AppBootstrap(router, auth) {
                    var socket = io.connect('https://localhost:8080/socketAPI');
                    // auth.googleToken()
                    //     .subscribe(data => {console.log(data); auth.saveToken(data.access_token);
                    //         if (data.access_token !== null) {
                    //             router.navigate(['/WebMail']);
                    //         } else {
                    //             router.navigate(['/Login']);
                    //         }
                    //     });
                    socket.on('accessTokenRecieved', function (data) {
                        console.log(data);
                        auth.saveToken(data.access_token);
                        if (data.access_token !== null) {
                            router.navigate(['/WebMail']);
                        }
                        else {
                            router.navigate(['/Login']);
                        }
                    });
                }
                AppBootstrap = __decorate([
                    core_1.Component({
                        selector: 'webmail',
                        templateUrl: 'app/components/appBootstrap/appBootstrap.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', component: login_component_1.Login, as: 'Login', useAsDefault: true },
                        { path: '/mail/...', component: webMail_component_1.WebMail, as: 'WebMail' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, googleAuth_service_1.GoogleAuth])
                ], AppBootstrap);
                return AppBootstrap;
            })();
            exports_1("AppBootstrap", AppBootstrap);
        }
    }
});
//# sourceMappingURL=appBootstrap.component.js.map