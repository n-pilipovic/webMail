import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Login} from '../login/login.component';
import {WebMail} from '../webMail/webMail.component';

@Component({
    selector: 'webmail',
    templateUrl: 'app/components/appBootstrap/appBootstrap.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/login', component: Login, as: 'Login', useAsDefault: true},
    {path: '/mail/...', component: WebMail, as: 'WebMail'}
])
export class AppBootstrap {
    constructor() {}
}