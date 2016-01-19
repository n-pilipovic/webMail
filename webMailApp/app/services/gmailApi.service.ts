import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {googleHeader} from '../common/headers/google.header';
import {MailHelper} from '../utils/mail.helper';

import {RecievedMail} from '../models/recievedMail/recievedMail.model';

import {GoogleAuth} from './googleAuth.service';

@Injectable()
export class GmailAPI {

    private gmailRoot:string;
    private recieveMailInFormat:string;

    constructor(private _http:Http, private _googleAuth:GoogleAuth, private _mailHelper:MailHelper) {
        this.gmailRoot= 'https://www.googleapis.com/gmail/v1/users/me';
        this.recieveMailInFormat = 'full';
    }

    public authenticateUser():void {
        this._googleAuth.loginToGoogle();
    }

    public getAllMails():Array<RecievedMail> {
        var mails:Array<RecievedMail> = [];
        this._http.get(this.gmailRoot + '/messages', {headers: googleHeader}).toPromise()
                    .then(res => {
                            var requests = [];
                            for(var message in res.json().messages) {
                                requests.push(this._http.get(this.gmailRoot + '/messages/' + res.json().messages[message].id + '?format=' + this.recieveMailInFormat, {headers: googleHeader}).map(res => res.json()));
                            }
                            Observable.forkJoin(
                                requests
                            ).subscribe(data => { 
                                for(var item in data) {
                                    mails.push(new RecievedMail(data[item].id, 
                                                                this._mailHelper.getHeader(data[item].payload.headers, 'From'), 
                                                                this._mailHelper.getHeader(data[item].payload.headers, 'Subject'), 
                                                                this._mailHelper.getHeader(data[item].payload.headers, 'Date'), 
                                                                this._mailHelper.getBody(data[item].payload)
                                                                )
                                                );
                                    // console.log('From: ', this._mailHelper.getHeader(data[item].payload.headers, 'From'));
                                    // console.log('Subject: ', this._mailHelper.getHeader(data[item].payload.headers, 'Subject'));
                                    // console.log('Date: ', this._mailHelper.getHeader(data[item].payload.headers, 'Date'));
                                    // console.log('Body: ', this._mailHelper.getBody(data[item].payload));
                                }
                                return mails;
                            });
                        }
                    );
    }
    
    public getMailWithId(id:string):any {
        var mail:RecievedMail;
        this._http.get(this.gmailRoot + '/messages/' + id + '?format=' + this.recieveMailInFormat, {headers: googleHeader})
                    .map(res => res.json())
                    .subscribe(data => {
                        mail = new RecievedMail(data.id,
                                                this._mailHelper.getHeader(data.payload.headers, 'From'), 
                                                this._mailHelper.getHeader(data.payload.headers, 'Subject'), 
                                                this._mailHelper.getHeader(data.payload.headers, 'Date'), 
                                                this._mailHelper.getBody(data.payload));
                        return mail;
                    });
    }
}