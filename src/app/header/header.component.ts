import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  currentUrl: string;
	constructor(private router: Router) { 
		router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url); 
	}

  ngOnInit() {
  }

}
