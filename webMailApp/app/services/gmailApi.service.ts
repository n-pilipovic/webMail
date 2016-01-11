import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GoogleAuth} from './googleAuth.service';

@Injectable()
export class GmailAPI {

    private serviceRoot:string;

    constructor(public _googleAuth:GoogleAuth) {
        this.serviceRoot = 'http://localhost:3000/api';
    }

    public authenticateUser() {
        return this._googleAuth.handleAuthClick();
    }
    
    public getUserDetails() {
        return this._googleAuth.getGoogleClientId();
    }
}