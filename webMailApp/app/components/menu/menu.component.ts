import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuItem} from '../../models/menuItem/menuItem.model';
import {Inbox} from '../inbox/inbox.component';

@Component({
	selector: 'menu',
	templateUrl: 'app/components/menu/menu.component.html',
	styleUrls: ['app/components/menu/menu.component.css'],
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class Menu {
	public menuItems = MENUITEMS;
}

var MENUITEMS:MenuItem[] = [
	new MenuItem('Write Mail', './Write'),
	new MenuItem('Inbox', './Inbox'),
	new MenuItem('Sent', './Sent'),
	new MenuItem('Drafts', './Drafts'),
	new MenuItem('Labels', './Labels')
]