import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {Login} from '../login/login.component';
import {WebMail} from '../webMail/webMail.component';
import {GoogleAuth} from '../../services/googleAuth.service';

@Component({
    selector: 'webmail',
    templateUrl: 'app/components/appBootstrap/appBootstrap.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/login', component: Login, as: 'Login', useAsDefault: true},
    {path: '/mail/...', component: WebMail, as: 'WebMail'}
])
export class AppBootstrap {
    constructor(router:Router, auth:GoogleAuth) {
        auth.googleToken()
            .subscribe(data => {console.log(data); auth.saveToken(data.access_token);
                if (data.access_token !== null) {
                    router.navigate(['/WebMail']);
                } else {
                    router.navigate(['/Login']);
                }
            });
    }
}