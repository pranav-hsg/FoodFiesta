import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockStripeService {
  // Simulate creating a payment method (mocking Stripe's `createPaymentMethod`)
  createPaymentMethod(paymentDetails: any): Observable<any> {
    const paymentMethodType = paymentDetails.payment_method_type || 'card'; // Default to card

    // If it's UPI, we simulate a different payment method
    if (paymentMethodType === 'upi') {
      return of({
        paymentMethod: {
          id: 'pm_upi_fake1234567890', // Fake UPI ID
          upi: {
            upi_id: 'test@upi',
            provider: 'Google Pay', // Simulating UPI provider
            status: 'pending',
          },
          billing_details: {
            name: paymentDetails.billing_details.name,
            email: paymentDetails.billing_details.email,
          },
        },
      });
    }

    // Simulating a successful credit/debit card payment method for India (Visa, MasterCard, RuPay)
    return of({
      paymentMethod: {
        id: 'pm_fake1234567890',
        card: {
          brand: 'Visa', // You can modify this to simulate MasterCard or RuPay for India
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
    // Simulate a successful payment confirmation based on the payment method ID
    if (paymentMethodId === 'pm_upi_fake1234567890') {
      return of({
        success: true,
        message: 'UPI Payment initiated successfully!',
        paymentIntentId: 'pi_upi_fake1234567890',
        status: 'pending', // UPI payments are usually pending until confirmed
      });
    }

    // For card payments (Visa, MasterCard, etc.)
    return of({
      success: true,
      message: 'Payment processed successfully!',
      paymentIntentId: 'pi_fake1234567890',
      status: 'succeeded',
    });
  }
}
