import {Component} from 'angular2/angular2';

@Component({
	selector: 'write',
	templateUrl: 'app/components/writeMail/writeMail.component.html'
})
export class WriteMail {
	message:string = 'write mail';
}