import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {RecievedMail} from '../../models/recievedMail/recievedMail.model';
import {GmailAPI} from '../../services/gmailApi.service';


@Component({
	selector: 'readMail',
	templateUrl: 'app/components/readMail/readMail.component.html',
    directives: [ROUTER_DIRECTIVES],
	providers: [GmailAPI]
})
export class ReadMail {
    public message:RecievedMail;
	constructor(private _gmailAPI:GmailAPI, private _routeParams:RouteParams) {
        this.getMail();
	}
	private getMail() {
        this._gmailAPI.getMailWithId(this._routeParams.params.id)
                            .subscribe(data => this.message = data);
    }
}