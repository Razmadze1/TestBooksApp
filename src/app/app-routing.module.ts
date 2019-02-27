import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, 
	{
		path: 'details/:id',
		component: DetailsComponent
	}, 
	{
		path: 'favourites',
		component: FavouritesComponent
	}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }