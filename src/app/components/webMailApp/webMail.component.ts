import {bootstrap, Component} from 'angular2/angular2';
import {Inbox} from '../inbox/inbox.component';
import {Menu} from '../menu/menu.component';

@Component({
	selector: 'webmail',
	templateUrl: 'app/components/webMailApp/webMail.component.html',
	styleUrls: ['app/components/webMailApp/webMail.component.css'],
	directives: [Inbox, Menu]
})
export class WebMailApp {
	public title:string;
	constructor() {
		this.title = 'Web Mail Angular 2.0';
	}
	
}

bootstrap(WebMailApp);