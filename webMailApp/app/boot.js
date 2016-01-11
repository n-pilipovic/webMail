System.register(['angular2/core', "angular2/http", 'angular2/router', 'angular2/platform/browser', './components/appBootstrap/appBootstrap.component', './services/googleAuth.service', './services/gmailApi.service'], function(exports_1) {
    var core_1, http_1, router_1, browser_1, appBootstrap_component_1, googleAuth_service_1, gmailApi_service_1;
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
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (appBootstrap_component_1_1) {
                appBootstrap_component_1 = appBootstrap_component_1_1;
            },
            function (googleAuth_service_1_1) {
                googleAuth_service_1 = googleAuth_service_1_1;
            },
            function (gmailApi_service_1_1) {
                gmailApi_service_1 = gmailApi_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(appBootstrap_component_1.AppBootstrap, [http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), gmailApi_service_1.GmailAPI, googleAuth_service_1.GoogleAuth]);
        }
    }
});
//# sourceMappingURL=boot.js.map