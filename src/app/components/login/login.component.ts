import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'login-form',
	templateUrl: 'app/components/login/login.component.html',
	styleUrls: ['app/components/login/login.component.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class Login {
	public email:string;
	public password:string;
}