import {Component} from 'angular2/angular2';
import {Inbox} from '../inbox/inbox.component';

@Component({
	selector: 'webmail',
	templateUrl: 'app/components/webMailApp/webMail.component.html',
	styleUrls: ['app/components/webMailApp/webMail.component.css']
})
export class WebMailApp {
	title:string = 'Web Mail Angular 2.0';
}