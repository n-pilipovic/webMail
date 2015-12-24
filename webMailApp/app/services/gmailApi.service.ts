import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class GmailAPI {

    private http:Http;
    private serviceRoot:string;

    constructor(http:Http) {
        this.http = http;
        this.serviceRoot = 'http://localhost:3000/api';
    }

    public authenticateUser() {
        return this.http.get(this.serviceRoot + '/auth/google');
    }
    
    public authenticateUserCallback() {
        return this.http.get(this.serviceRoot + '/auth/google/callback')
                        .map((res) => { console.log(res); return res.json(); });
    }
    
    public getUserDetails() {
        return this.http.get('')
    }
}