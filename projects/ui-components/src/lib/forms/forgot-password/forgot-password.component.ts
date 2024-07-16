import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordService } from './forgot-password.service';

@Component({
  selector: 'lib-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  constructor(private readonly service: ForgetPasswordService) {}

  @Input() url: string = '';

  ngOnInit() {
    this.url = this.url + '/auth/forgotpassword';
    this.service.setURL(this.url);
  }
  submitForm() {}
}
