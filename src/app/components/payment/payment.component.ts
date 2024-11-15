import { Component, OnInit } from '@angular/core';
import { MockStripeService } from '../../services/mock-stripe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit {
  name: string = '';
  email: string = '';
  paymentMethodType: string = 'card'; // Default to 'card', options are 'card' or 'upi'
  paymentError: string = '';
  isProcessing: boolean = false;
  paymentMethod: any; // Simulated payment method
  elements: any;

  constructor(private fakeStripeService: MockStripeService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    // In a real-world scenario, here you would initialize Stripe Elements
    // But in this mock, we'll just simulate the payment process
  }

  // Handle form submission
  onSubmit(): void {
    this.isProcessing = true;

    // Simulate creating a payment method with selected type (card or UPI)
    const paymentDetails = {
      payment_method_type: this.paymentMethodType, // Send the selected payment method type
      billing_details: {
        name: this.name,
        email: this.email,
      },
    };

    this.fakeStripeService.createPaymentMethod(paymentDetails).subscribe({
      next: (result) => {
        if (result.paymentMethod) {
          // Simulate the payment confirmation step
          this.confirmPayment(result.paymentMethod.id);
        } else {
          this.paymentError = 'Payment method creation failed!';
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.paymentError = 'Error occurred while creating payment method!';
        this.isProcessing = false;
      },
    });
  }

  // Confirm the payment using the fake service
  private confirmPayment(paymentMethodId: string): void {
    this.fakeStripeService.confirmPayment(paymentMethodId).subscribe({
      next: (confirmation) => {
        if (confirmation.success) {
          this.isProcessing = false;
          this.toastr.success('Payment link generated and sent to email : ' + this.email);
          this.router.navigate(['home']);
          // Further actions like navigating to a confirmation page can be added here
        } else {
          this.paymentError = 'Payment failed! Please try again.';
          this.isProcessing = false;
        }
      },
      error: (error) => {
        this.paymentError = 'Payment confirmation failed!';
        this.isProcessing = false;
      },
    });
  }
}
