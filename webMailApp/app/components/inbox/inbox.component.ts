import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {InboxModel} from '../../models/inbox/inbox.model';
import {RecievedMail} from '../../models/recievedMail/recievedMail.model';
import {GmailAPI} from '../../services/gmailApi.service';


@Component({
	selector: 'inbox',
	templateUrl: 'app/components/inbox/inbox.component.html',
    directives: [ROUTER_DIRECTIVES],
	providers: [GmailAPI]
})
export class Inbox {
    public allMails:Array<RecievedMail>;
	constructor(private _gmailAPI:GmailAPI) {
		this._gmailAPI.getAllMails();
	}
	message:string = 'inboxaaa';
}