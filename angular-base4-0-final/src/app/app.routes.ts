import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home';
import { AboutComponent } from './features/home/pages/about/about';
import { NotFoundComponent } from './features/home/pages/not-found/not-found';
import { ContactComponent } from './features/home/pages/contact/contact';
import { RegisterComponent } from './features/home/pages/register/register';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', loadComponent: () => import('./features/products/pages/list/list').then(m => m.ListComponent) },
  // add other feature routes (products, etc.) as needed
  { path: '**', component: NotFoundComponent },
];
