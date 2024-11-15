import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-track',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-track.component.html',
  styleUrl: './order-track.component.scss',
})
export class OrderTrackComponent {
  // Order status data
  currentStep = 0;
  statusSteps = [
    { text: 'Order Placed', description: 'Your order has been placed and is being processed.', icon: 'fa-box', color: 'bg-blue-500' },
    { text: 'Preparing', description: 'Your order is being prepared by the kitchen.', icon: 'fa-cogs', color: 'bg-indigo-500' },
    { text: 'Out for Delivery', description: 'Your order is on its way!', icon: 'fa-truck', color: 'bg-yellow-500' },
    { text: 'Delivered', description: 'Your order has been delivered!', icon: 'fa-check-circle', color: 'bg-green-500' },
  ];

  // Current status display
  currentStatus = 'Order Placed';
  statusDescription = 'Your order has been placed and is being processed.';

  constructor() {}

  ngOnInit(): void {
    // Start the order tracking process
    this.startOrderTracking();
  }

  // Function to simulate the order status updates
  startOrderTracking() {
    this.updateOrderStatus();
  }

  // Function to update the order status dynamically
  private updateOrderStatus() {
    if (this.currentStep < 4) {
      setTimeout(() => {
        // Update status for the next step
        this.currentStep++;
        this.currentStatus = this.statusSteps[this.currentStep - 1].text;
        this.statusDescription = this.statusSteps[this.currentStep - 1].description;

        // Simulate gradual delay for the next step (5 seconds for demo)
        this.updateOrderStatus();
      }, 1000); // Update every 5 seconds
    }
  }
}
