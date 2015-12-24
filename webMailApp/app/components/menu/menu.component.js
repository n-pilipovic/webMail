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
var router_1 = require('angular2/router');
var menuItem_model_1 = require('../../models/menuItem/menuItem.model');
var Menu = (function () {
    function Menu() {
        this.menuItems = MENUITEMS;
    }
    Menu = __decorate([
        angular2_1.Component({
            selector: 'menu',
            templateUrl: 'app/components/menu/menu.component.html',
            styleUrls: ['app/components/menu/menu.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
var MENUITEMS = [
    new menuItem_model_1.MenuItem('Write Mail', './Write'),
    new menuItem_model_1.MenuItem('Inbox', './Inbox'),
    new menuItem_model_1.MenuItem('Sent', './Sent'),
    new menuItem_model_1.MenuItem('Drafts', './Drafts'),
    new menuItem_model_1.MenuItem('Labels', './Labels')
];
//# sourceMappingURL=menu.component.js.map