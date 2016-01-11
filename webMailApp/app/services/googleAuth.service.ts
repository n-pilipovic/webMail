import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleAuth {

    private serviceRoot:string;
    private client_ID:string;
    private scopes:string;

    constructor(public _http:Http, public _router:Router) {
        this.serviceRoot = 'http://localhost:3000/api';
        this.scopes = 'https://www.googleapis.com/auth/gmail.readonly';
        this._http.get('../../webMailApp/lib/googleCredentials.json')
                .map(res => res.json())
                .subscribe(data => this.client_ID = data.client_ID);
    }
    
    public getGoogleClientId():string {
        return this.client_ID;
    };
    
    public handleAuthClick() {
        return this.client_ID;
    };


}