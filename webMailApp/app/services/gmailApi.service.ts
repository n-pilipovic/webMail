import {Injectable, Inject} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {GoogleAuth} from './googleAuth.service';

@Injectable()
export class GmailAPI {

    private http:Http;
    private googleAuth:GoogleAuth;
    private serviceRoot:string;

    constructor(http:Http, @Inject(GoogleAuth) googleAuth:GoogleAuth) {
        this.http = http;
        this.googleAuth = googleAuth;
        this.serviceRoot = 'http://localhost:3000/api';
    }

    public authenticateUser() {
        this.googleAuth.handleAuthClick();
    }
    
    public getUserDetails() {
        return this.googleAuth.getGoogleClientId();
    }
}