import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeCheckoutComponent } from './stripe-checkout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, StripeCheckoutComponent],
  exports: [StripeCheckoutComponent],
})
export class StripeCheckoutModule {}
