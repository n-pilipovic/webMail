import {Headers} from 'angular2/http';

export const googleHeader = new Headers();
googleHeader.append('Authorization', 'Bearer ' + localStorage.getItem('googleToken'));