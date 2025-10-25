import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./app.scss'],
  template: `
    <nav class="topnav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/products" routerLinkActive="active">Products</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
