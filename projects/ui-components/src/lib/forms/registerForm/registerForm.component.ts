import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormService } from './registerform.service';
@Component({
  selector: 'uic-registerform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registerForm.component.html',
})
export class RegisterFormComponent {
  constructor(private readonly service: RegisterFormService) {}

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(' '),
    confirmed_password: new FormControl(' '),
  });

  @Input() url: string = '';

  ngOnInit() {
    this.url = this.url + '/auth/register';
    this.service.setURL(this.url);
  }

  ///----------------------
  ///    Submit registration form
  ///-----------------------
  submitRegistration() {
    this.service.submitRegistration(
      this.registerForm.value.email ?? '',
      this.registerForm.value.password ?? '',
      this.registerForm.value.confirmed_password ?? ''
    );
  }
}
