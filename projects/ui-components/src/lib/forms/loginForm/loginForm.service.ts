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
  registeredUrl: string = '';
  googleUrl: string = '';

  setURL(url: string) {
    this.registeredUrl = url + '/login';
    this.googleUrl = url + '/google';
  }
  GoogleLogin() {
    const token = this.http.get(this.googleUrl).subscribe((data) => {
      if (token) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  submitLogin(email: string, password: string) {
    /*  this.http
      .post(this.url, { email: email, password: password })
      .subscribe((data) => {
        this.router.navigate(['/dashboard']);
      }); */
  }
}
