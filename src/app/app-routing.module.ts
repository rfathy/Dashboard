import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'users',
		component: UsersComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
	{
		path: 'charts',
		component: ChartsComponent
	},
	{
		path: 'forms',
		component: FormsComponent
	},
	{
		path: 'tables',
		component: TablesComponent
	},
	{
		path: 'maps',
		component: MapsComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
