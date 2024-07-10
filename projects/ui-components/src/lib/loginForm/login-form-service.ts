import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor() {}
  url: string = '';

  submitLogin(email: string, passsword: string) {
    console.log(email, passsword, this.url);
  }

  setURL(url: string) {
    this.url = url;
  }
}
