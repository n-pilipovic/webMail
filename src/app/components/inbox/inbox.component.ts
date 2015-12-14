import {Component} from 'angular2/angular2';
import {InboxModel} from '../../models/inbox/inbox.model';

@Component({
	selector: 'inbox',
	templateUrl: 'app/components/inbox/inbox.component.html'
})
export class Inbox {
	message:string = 'inbox';
}