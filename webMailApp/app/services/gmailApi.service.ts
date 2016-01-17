import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GoogleAuth} from './googleAuth.service';

import {googleHeader} from '../common/headers/google.header';

@Injectable()
export class GmailAPI {

    private gmailRoot:string;

    constructor(private _http:Http, private _googleAuth:GoogleAuth) {
        this.gmailRoot= 'https://www.googleapis.com/gmail/v1/users/me';
    }

    public authenticateUser():void {
        this._googleAuth.loginToGoogle();
    }

    public getAllMails() {
        this._http.get(this.gmailRoot + '/messages', {headers: googleHeader})
                    .map(res => res.json())
                    .flatMap(res => {
                        for(var message in res.messages) {
                            return this._http.get(this.gmailRoot + '/messages/' + res.messages[message].id, {headers: googleHeader});
                        }
                    })
                    .map(res => res.json())
                    .subscribe(data => console.log(data));
    }
}