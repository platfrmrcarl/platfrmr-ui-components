import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  url: string = '';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  setURL(url: string) {
    this.url = url;
  }

  submitRegistration(
    email: string,
    password: string,
    confirmed_password: string
  ) {
    this.http
      .post(this.url, {
        email: email,
        password: password,
        confirmed_password: confirmed_password,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
