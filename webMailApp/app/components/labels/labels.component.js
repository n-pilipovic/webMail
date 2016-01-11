System.register(['angular2/core', '../../services/gmailApi.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, gmailApi_service_1;
    var Labels;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gmailApi_service_1_1) {
                gmailApi_service_1 = gmailApi_service_1_1;
            }],
        execute: function() {
            Labels = (function () {
                function Labels(gmailAPI) {
                    this.gmailAPI = gmailAPI;
                    //gmailAPI.authenticateUser();
                }
                Labels = __decorate([
                    core_1.Component({
                        selector: 'labels',
                        templateUrl: 'app/components/labels/labels.component.html',
                        styleUrls: ['app/components/labels/labels.component.css'],
                        providers: [gmailApi_service_1.GmailAPI]
                    }), 
                    __metadata('design:paramtypes', [gmailApi_service_1.GmailAPI])
                ], Labels);
                return Labels;
            })();
            exports_1("Labels", Labels);
        }
    }
});
//# sourceMappingURL=labels.component.js.map