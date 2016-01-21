import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Inbox} from '../inbox/inbox.component';
import {ReadMail} from '../readMail/readMail.component';

@Component({
    templateUrl: 'app/components/allMails/allMails.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: Inbox, as: 'Inbox', useAsDefault: true},
    {path: '/:id', component: ReadMail, as: 'ReadMail'}
])
export class AllMails {
    constructor() {}
}