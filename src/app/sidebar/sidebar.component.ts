import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {'class': 'col col-md-1'},
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

	currentUrl: string;
	constructor(private router: Router) { 
		router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url); 
	}

	ngOnInit() {
	}

}

