import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}
  url: string = '';

  setURL(url: string) {
    this.url = url;
  }

  submitLogin(email: string, password: string) {
    this.http
      .post(this.url, { email: email, password: password })
      .subscribe((data) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
