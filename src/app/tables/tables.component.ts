import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  host: {'class': 'col col-md-11'},
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
