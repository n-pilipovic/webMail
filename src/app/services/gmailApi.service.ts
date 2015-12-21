import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class GmailAPI {

    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    public getAllLabels() {
        return this.http.get('http://localhost:3000/api/labels')
                        .map((res) => { return res.json(); });
    }
}