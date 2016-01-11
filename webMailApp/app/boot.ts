import {provide} from 'angular2/core';
import {HTTP_BINDINGS} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';

import {AppBootstrap} from './components/appBootstrap/appBootstrap.component';
import {GoogleAuth} from './services/googleAuth.service';
import {GmailAPI} from './services/gmailApi.service';

bootstrap(AppBootstrap, [HTTP_BINDINGS, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), GmailAPI, GoogleAuth]);