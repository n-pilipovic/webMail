import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {RecievedMail} from '../../models/recievedMail/recievedMail.model';
import {GmailAPI} from '../../services/gmailApi.service';
import {MailHelper} from '../../utils/mail.helper';


@Component({
	selector: 'readMail',
	templateUrl: 'app/components/readMail/readMail.component.html',
    directives: [ROUTER_DIRECTIVES],
	providers: [GmailAPI]
})
export class ReadMail {
    public message:RecievedMail;
	constructor(private _gmailAPI:GmailAPI, private _mailHelper:MailHelper, private _routeParams:RouteParams) {
        this._gmailAPI.getMailWithId(this._routeParams.params['id']);
        this.message = this._gmailAPI.mail;
        console.log(this.message.body);
	}
}