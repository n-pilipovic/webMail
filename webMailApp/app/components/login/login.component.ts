import {Component} from 'angular2/core';

import {GmailAPI} from '../../services/gmailApi.service';

@Component({
	selector: 'login-form',
	templateUrl: 'app/components/login/login.component.html',
	styleUrls: ['app/components/login/login.component.css'],
	providers: [GmailAPI]
})
export class Login {

    constructor(private _gmailAPI:GmailAPI) {
    }

	loginUser() {
		this._gmailAPI.authenticateUser();
	}
}