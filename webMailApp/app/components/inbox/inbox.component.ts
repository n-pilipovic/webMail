import {Component} from 'angular2/core';

import {InboxModel} from '../../models/inbox/inbox.model';
import {GmailAPI} from '../../services/gmailApi.service';


@Component({
	selector: 'inbox',
	templateUrl: 'app/components/inbox/inbox.component.html',
	providers: [GmailAPI]
})
export class Inbox {
	constructor(private _gmailAPI:GmailAPI) {
		this._gmailAPI.getAllMails();
	}
	message:string = 'inboxaaa';
}