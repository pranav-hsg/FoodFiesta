import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-place',
  standalone: true,
  imports: [],
  templateUrl: './order-place.component.html',
  styleUrl: './order-place.component.scss',
})
export class OrderPlaceComponent {
  constructor(private router: Router, private toastr: ToastrService) {}
  placeOrder() {
    this.router.navigate(['payment']);
  }
}
