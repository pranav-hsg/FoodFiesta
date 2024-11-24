import { CommonModule } from '@angular/common';
import { RestaurantService } from './../../services/restaurant.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-place',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order-place.component.html',
  styleUrl: './order-place.component.scss',
})
export class OrderPlaceComponent {
  constructor(private router: Router, private toastr: ToastrService, private restaurantService: RestaurantService) {}
  selectedRestaurant: any = {};
  menuItem: any = {};
  ngOnInit() {
    this.selectedRestaurant = this.restaurantService.selectedRestaurant;
    if (this.selectedRestaurant?.name == null) {
      this.router.navigate(['home']);
      this.toastr.error('Choose a restaurant to place the order.');
    }
    console.log(this.selectedRestaurant);
  }
  placeOrder() {
    this.router.navigate(['payment']);
  }
}
