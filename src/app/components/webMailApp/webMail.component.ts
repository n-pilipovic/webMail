import {bootstrap, bind, Component} from 'angular2/angular2';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';
import {Menu} from '../menu/menu.component';
import {Inbox} from '../inbox/inbox.component';
import {Sent} from '../sent/sent.component';
import {WriteMail} from '../writeMail/writeMail.component';
import {Drafts} from '../drafts/drafts.component';

@Component({
	selector: 'webmail',
	templateUrl: 'app/components/webMailApp/webMail.component.html',
	styleUrls: ['app/components/webMailApp/webMail.component.css'],
	directives: [ROUTER_DIRECTIVES, Inbox, Menu]
})
@RouteConfig([
	{path: '/', redirectTo: '/inbox'},
	{path: '/new', component: WriteMail, as: 'Write'},
	{path: '/inbox', component: Inbox, as: 'Inbox'},
	{path: '/sent', component: WriteMail, as: 'Sent'},
	{path: '/drafts', component: Drafts, as: 'Drafts'}
])
export class WebMailApp {
	public title:string;
	constructor() {
		this.title = 'Web Mail Angular 2.0';
	}
	
}

bootstrap(WebMailApp, [ROUTER_BINDINGS, bind(APP_BASE_HREF).toValue(location.pathname)]);