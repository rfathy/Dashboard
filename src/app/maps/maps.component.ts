import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  host: {'class': 'col col-md-11'},
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
