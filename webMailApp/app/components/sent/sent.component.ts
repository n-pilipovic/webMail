import {Component} from 'angular2/angular2';

@Component({
	selector: 'sent',
	templateUrl: 'app/components/sent/sent.component.html'
})
export class Sent {
	message:string = 'sent';
}