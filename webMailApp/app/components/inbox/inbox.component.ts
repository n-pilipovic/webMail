import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {ReadMail} from '../readMail/readMail.component';

import {InboxModel} from '../../models/inbox/inbox.model';
import {RecievedMail} from '../../models/recievedMail/recievedMail.model';
import {GmailAPI} from '../../services/gmailApi.service';

@Component({
	templateUrl: 'app/components/inbox/inbox.component.html',
    styleUrls: ['app/components/inbox/inbox.component.css'],
    directives: [ROUTER_DIRECTIVES],
	providers: [GmailAPI]
})
export class Inbox {
    public allMails:Array<RecievedMail>;
	constructor(private _gmailAPI:GmailAPI, private _router:Router) {
		this._gmailAPI.getAllMails(['INBOX']);
        this.allMails = this._gmailAPI.mails;
	}
    
    public openMail(_id:string) {
        this._router.parent.navigate(['./ReadMail', {id: _id}]);
    }
}