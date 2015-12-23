import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class GmailAPI {

    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    public authenticateUser() {
        return this.http.get('http://localhost:3000/api/auth/google');
    }
    
    public authenticateUserCallback() {
        return this.http.get('http://localhost:3000/api/auth/google/callback')
                        .map((res) => { console.log(res); return res.json(); });
    }
}