import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {GmailAPI} from '../../services/gmailApi.service';

@Component({
    selector: 'labels',
    templateUrl: 'app/components/labels/labels.component.html',
    styleUrls: ['app/components/labels/labels.component.css'],
    directives: [CORE_DIRECTIVES]
})
export class Labels {

    public labels:Array<any>;
    public user:any;

    constructor(private gmailAPI:GmailAPI) {
        gmailAPI.authenticateUser();
        // gmailAPI.authenticateUserCallback().subscribe(
        //                                         res => console.log(res),
        //                                         console.error,
        //                                         () => console.log('Authenticated!')
        //                                    );
    }
}