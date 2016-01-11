import {Component} from 'angular2/core';

@Component({
	selector: 'write',
	templateUrl: 'app/components/writeMail/writeMail.component.html'
})
export class WriteMail {
	message:string = 'write mail';
}