import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';
import { OrderPlaceComponent } from './components/order-place/order-place.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'profile', component: ProfileComponent },
  { path: 'order-track', component: OrderTrackComponent },
  { path: 'order-plac', component: OrderPlaceComponent },
  { path: 'order-place', component: PaymentComponent },
  { path: '**', redirectTo: '' },
];
