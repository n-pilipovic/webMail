import {Component} from 'angular2/core';
import {Router, RouteParams, Location} from 'angular2/router';

@Component([])
export class Auth {
    private urlPath:string;
    constructor(private _location:Location) {
        this.urlPath = this._location.path();
        console.log('location path: ', this.urlPath);
    }
}