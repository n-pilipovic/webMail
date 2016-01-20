import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import 'rxjs/Rx';

@Injectable()
export class GoogleAuth {

    public access_token:string = null;
    public googleCode:string = null;

    private client_ID:string;
    private client_secret:string;
    private app_API_root:string;

    private authRoot:string;
    private authScope:string;
    private initialAppState:string;
    private redirect_uri:string;
    private response_type:string;
    private access_type:string;

    private token_uri:string;

    constructor(private _http:Http, private _router:Router) {
        this.app_API_root = 'https://localhost:8080/api';
        this.authRoot = 'https://accounts.google.com/o/oauth2/v2/auth?';
        this.authScope = 'email profile https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.compose';
        this.initialAppState = 'home';
        this.redirect_uri = 'https://localhost:8080/api/googleAuthCallback';
        this.response_type = 'code';
        this.access_type = 'offline';
        this._http.get('../../webMailApp/lib/googleCredentials.json')
                    .map(res => res.json())
                    .subscribe(data => {this.client_ID = data.client_ID;
                                        this.client_secret = data.client_secret;});
        this.token_uri = 'https://www.googleapis.com/oauth2/v4/token';
        this.googleToken();
    }
    
    public loginToGoogle() {
        this.getAccessToken();
    };

    private getAccessToken() {
        window.location.href = this.createUrlWithParameters();
    }

    private createUrlWithParameters():string {
        var retVal = this.authRoot;
        retVal = retVal.concat('scope=', this.authScope,
                               '&client_id=', this.client_ID,
                               '&response_type=', this.response_type,
                               '&state=', this.initialAppState,
                               '&redirect_uri=', this.redirect_uri,
                               '&access_type', this.access_type);
        return retVal;
    }

    private googleToken() {
        console.log('Client id: ', this.client_ID);
        console.log('Client secret: ', this.client_secret);

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var tokenData = ''.concat('redirect_uri=', this.redirect_uri,
                                  '&grant_type=authorization_code');
        this._http.get(this.app_API_root + '/googleAuthCode')
            .map(res => res.json())
            .flatMap(res => {
                if(res.code) {
                    tokenData = tokenData.concat('&code=', res.code); 
                    return this._http.get('../../webMailApp/lib/googleCredentials.json');
                } else {
                    this._router.navigate(['/Login']);
                }
            })
            .map(res => res.json())
            .flatMap(res => {tokenData = tokenData.concat('&client_id=', res.client_ID, '&client_secret=', res.client_secret);
                             return this._http.post(this.token_uri, tokenData, {headers: headers});})
            .map(res => res.json())
            .subscribe(data => {console.log(data); this.saveToken(data.access_token); this._router.navigate(['/WebMail']);});
    }

    private createNonce(length):string {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    private saveToken(token:string):void {
        this.access_token = token;
        localStorage.setItem('googleToken', token);
    }

}