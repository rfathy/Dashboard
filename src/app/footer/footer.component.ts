import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  currentUrl: string;
	constructor(private router: Router) { 
		router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url); 
	}

  ngOnInit() {
  }

}
