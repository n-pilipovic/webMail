

import {Inject} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Http} from 'angular2/http';

export class GoogleAuth {

    private http:Http;
    public router:Router;
    private serviceRoot:string;
    private client_ID:string;
    private scopes:Array<string>

    constructor(@Inject(Http) http:Http, @Inject(Router) router:Router) {
        this.http = http;
        this.router = router;
        this.serviceRoot = 'http://localhost:3000/api';
        this.scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
        this.http.get('../../webMailApp/lib/googleCredentials.json')
                .map(res => res.json())
                .subscribe(data => {this.client_ID = data.client_ID;});
    }
    
    public getGoogleClientId():string {
        return this.client_ID;
    };
    
    public handleAuthClick() {
        gapi.auth.authorize({
            client_id: this.client_ID, 
            scope: this.scopes,
            immediate: true
        }, this.handleAuthResult);
        return false;
    };
    
    private handleAuthResult(result) {
        if (result && !result.error) {
            console.log(result);
            this.loadGmailApi;
        } else {
            // window.alert('Not Authorized to Google\'s Services!');
            this.router.navigate(['/login']);
        }
    }
    
    private loadGmailApi() {
        console.log('inside');
        gapi.client.load('gmail', 'v1');
        this.router.navigate(['/']);
    }

}