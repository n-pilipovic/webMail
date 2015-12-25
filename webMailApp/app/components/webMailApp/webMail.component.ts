import {bootstrap, provide, Component} from 'angular2/angular2';
import {HTTP_BINDINGS} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {GoogleAuth} from '../../services/googleAuth.service';
import {Menu} from '../menu/menu.component';
import {Login} from '../login/login.component';
import {Inbox} from '../inbox/inbox.component';
import {Sent} from '../sent/sent.component';
import {WriteMail} from '../writeMail/writeMail.component';
import {Drafts} from '../drafts/drafts.component';
import {Labels} from '../labels/labels.component';

declare var gapi:any;

@Component({
	selector: 'webmail',
	templateUrl: 'app/components/webMailApp/webMail.component.html',
	styleUrls: ['app/components/webMailApp/webMail.component.css'],
	directives: [ROUTER_DIRECTIVES, Inbox, Menu]
})
@RouteConfig([
	{path: '/', redirectTo: '/inbox'},
    {path: '/login', component: Login, as: 'Login'},
	{path: '/new', component: WriteMail, as: 'Write'},
	{path: '/inbox', component: Inbox, as: 'Inbox'},
	{path: '/sent', component: Sent, as: 'Sent'},
	{path: '/drafts', component: Drafts, as: 'Drafts'},
	{path: '/labels', component: Labels, as: 'Labels'}
])
export class WebMailApp {
	constructor() {}
}

bootstrap(WebMailApp, [HTTP_BINDINGS, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), GoogleAuth]);