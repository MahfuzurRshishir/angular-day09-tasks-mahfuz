import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home';
import { AboutComponent } from './features/home/pages/about/about';
import { NotFoundComponent } from './features/home/pages/not-found/not-found';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // add other feature routes (products, etc.) as needed
  { path: '**', component: NotFoundComponent },
];
