import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from './loginForm.service';
@Component({
  selector: 'uic-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './loginForm.component.html',
})
export class LoginFormComponent {
  constructor(private readonly service: LoginFormService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(' '),
  });

  @Input() url: string = '';

  ngOnInit() {
    this.url = this.url + '/auth/login';
    this.service.setURL(this.url);
  }
  onGoogleLoginClicked() {
    console.log('We clicked it!');
  }

  ///----------------------
  ///    Submit login form
  ///-----------------------
  submitLogin() {
    this.service.submitLogin(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    );
  }
}
