import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockStripeService {
  // Simulate creating a payment method (mocking Stripe's `createPaymentMethod`)
  createPaymentMethod(paymentDetails: any): Observable<any> {
    // Simulating a success response after creating the payment method
    return of({
      paymentMethod: {
        id: 'pm_fake1234567890', // A fake payment method ID
        card: {
          brand: 'Visa',
          last4: '4242',
          exp_month: 12,
          exp_year: 2025,
        },
        billing_details: {
          name: paymentDetails.billing_details.name,
          email: paymentDetails.billing_details.email,
        },
      },
    });
  }

  // Simulate confirming the payment (mocking Stripe's `confirmPayment`)
  confirmPayment(paymentMethodId: string): Observable<any> {
    // Simulate a successful payment confirmation
    return of({
      success: true,
      message: 'Payment processed successfully!',
      paymentIntentId: 'pi_fake1234567890', // Fake Payment Intent ID
      status: 'succeeded',
    });
  }
}
