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
var gmailApi_service_1 = require('../../services/gmailApi.service');
var Labels = (function () {
    function Labels(gmailAPI) {
        this.gmailAPI = gmailAPI;
        gmailAPI.authenticateUser();
        // gmailAPI.authenticateUserCallback().subscribe(
        //                                         res => console.log(res),
        //                                         console.error,
        //                                         () => console.log('Authenticated!')
        //                                    );
    }
    Labels = __decorate([
        angular2_1.Component({
            selector: 'labels',
            templateUrl: 'app/components/labels/labels.component.html',
            styleUrls: ['app/components/labels/labels.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES],
            providers: [gmailApi_service_1.GmailAPI]
        }), 
        __metadata('design:paramtypes', [gmailApi_service_1.GmailAPI])
    ], Labels);
    return Labels;
})();
exports.Labels = Labels;
//# sourceMappingURL=labels.component.js.map