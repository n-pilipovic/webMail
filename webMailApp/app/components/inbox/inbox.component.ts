import {Component} from 'angular2/core';
import {InboxModel} from '../../models/inbox/inbox.model';

@Component({
	selector: 'inbox',
	templateUrl: 'app/components/inbox/inbox.component.html'
})
export class Inbox {
	message:string = 'inboxaaa';
}