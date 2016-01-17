import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Auth} from '../auth/auth.component';
import {Menu} from '../menu/menu.component';
import {Inbox} from '../inbox/inbox.component';
import {Sent} from '../sent/sent.component';
import {WriteMail} from '../writeMail/writeMail.component';
import {Drafts} from '../drafts/drafts.component';
import {Labels} from '../labels/labels.component';

@Component({
	templateUrl: 'app/components/webMail/webMail.component.html',
	styleUrls: ['app/components/webMail/webMail.component.css'],
	directives: [ROUTER_DIRECTIVES, Menu]
})
@RouteConfig([
	//{path: '/', redirectTo: ['Inbox']},
	{path: '/new', component: WriteMail, as: 'Write'},
	{path: '/inbox', component: Inbox, as: 'Inbox', useAsDefault: true},
	{path: '/sent', component: Sent, as: 'Sent'},
	{path: '/drafts', component: Drafts, as: 'Drafts'},
	{path: '/labels', component: Labels, as: 'Labels'}
])
export class WebMail {
	constructor() {}
}