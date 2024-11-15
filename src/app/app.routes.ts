import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' },
];
