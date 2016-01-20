import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InboxModel} from '../../models/inbox/inbox.model';
import {RecievedMail} from '../../models/recievedMail/recievedMail.model';
import {GmailAPI} from '../../services/gmailApi.service';


import {ReadMail} from '../readMail/readMail.component';


@Component({
	selector: 'inbox',
	templateUrl: 'app/components/inbox/inbox.component.html',
    directives: [ROUTER_DIRECTIVES],
	providers: [GmailAPI]
})
@RouteConfig([
	{path: '/', component: Inbox, as: 'Djura'},
    {path: '/:id', component: ReadMail, as: 'ReadMail'}
])
export class Inbox {
    public allMails:Array<RecievedMail>;
	constructor(private _gmailAPI:GmailAPI) {
		this._gmailAPI.getAllMails();
        this.allMails = this._gmailAPI.mails;
	}
}