import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import {
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ForgotPasswordComponent],
  providers: [provideHttpClient(withFetch(), withJsonpSupport())],
  exports: [ForgotPasswordComponent],
})
export class ForgotPasswordModule {}
