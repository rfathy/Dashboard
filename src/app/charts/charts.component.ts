import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  host: {'class': 'col col-md-11'},
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
