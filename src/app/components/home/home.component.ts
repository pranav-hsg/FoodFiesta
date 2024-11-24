import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  restaurants: Array<any> = [];

  filteredRestaurants: any[] = this.restaurants; // Initial restaurant list

  // Filter criteria
  selectedCuisine: string = '';
  selectedRating: string = '';
  selectedLocation: string = '';

  constructor(private restaurantService: RestaurantService, private router: Router) {
    this.restaurants = this.restaurantService.restaurants;
  }

  ngOnInit(): void {
    this.filterRestaurants();
  }

  // Filter function to apply filters
  filterRestaurants() {
    this.filteredRestaurants = this.restaurants.filter((restaurant) => {
      const matchesCuisine = this.selectedCuisine ? restaurant.cuisine.toLowerCase() === this.selectedCuisine.toLowerCase() : true;
      const matchesRating = this.selectedRating ? restaurant.rating >= +this.selectedRating : true;
      const matchesLocation = this.selectedLocation ? restaurant.location.toLowerCase() === this.selectedLocation.toLowerCase() : true;
      return matchesCuisine && matchesRating && matchesLocation;
    });
  }
  placeOrder(r: any) {
    this.restaurantService.selectedRestaurant = r;
    this.router.navigate(['order-place']);
  }
}
