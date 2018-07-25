# Dashboard -- Under Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps

ng new Dashboard --style=scss --routing
npm install bootstrap font-awesome

to src/styles.css add
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";

npm install --save @ng-bootstrap/ng-bootstrap

In angular.json
"scripts": ["node_modules/jquery/dist/jquery.min.js",  "node_modules/bootstrap/dist/js/bootstrap.min.js"]

## exclude nav from login

in app.component.html
<app-sidebar *ngIf="router.url != '/'"></app-sidebar>

in app.component.ts
import { Router, NavigationEnd} from '@angular/router';

export class AppComponent {
  title = 'app';
  constructor(public router: Router){}
}


## Serve

$ ng build --base-href .
copy dist/Dsshboard to C:\..\apache-tomcat-8.5.32\webapps

on C:\..\apache-tomcat-8.5.32\bin run "startup"

on browser
http://localhost:9999/Dashboard/