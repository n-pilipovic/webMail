import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {MenuItem} from '../../models/menuItem/menuItem.model';
import {Inbox} from '../inbox/inbox.component';

@Component({
	selector: 'menu',
	templateUrl: 'app/components/menu/menu.component.html',
	styleUrls: ['app/components/menu/menu.component.css'],
	directives: [CORE_DIRECTIVES]
})
export class Menu {
	public menuItems = MENUITEMS;
}

var MENUITEMS:MenuItem[] = [
	new MenuItem('New Mail', 'new'),
	new MenuItem('Inbox', 'inbox'),
	new MenuItem('Sent', 'sent'),
	new MenuItem('Drafts', 'drafts')
]