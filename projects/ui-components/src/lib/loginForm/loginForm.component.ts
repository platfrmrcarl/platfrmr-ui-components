import { Component, Input } from '@angular/core';
import { CoolGoogleButtonComponent } from '@angular-cool/social-login-buttons';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from './login-form-service';
@Component({
  selector: 'uic-login',
  standalone: true,
  imports: [CommonModule, CoolGoogleButtonComponent, ReactiveFormsModule],
  templateUrl: './loginForm.component.html',
})
export class LoginFormComponent {
  constructor(private readonly loginFormService: LoginFormService) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(' '),
  });
  @Input() url: string = '';

  ngOnInit() {
    this.url = this.url + '/auth/login';
    this.loginFormService.setURL(this.url);
  }
  onGoogleLoginClicked() {
    console.log('We clicked it!');
  }

  submitLogin() {
    this.loginFormService.submitLogin(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
  }
}
