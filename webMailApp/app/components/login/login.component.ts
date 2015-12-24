import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {GmailAPI} from '../../services/gmailApi.service';

@Component({
	selector: 'login-form',
	templateUrl: 'app/components/login/login.component.html',
	styleUrls: ['app/components/login/login.component.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [GmailAPI]
})
export class Login {
	public email:string;
	public password:string;
    constructor(gmailAPI:GmailAPI) {
        
    }
}