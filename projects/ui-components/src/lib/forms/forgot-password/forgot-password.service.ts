import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor() { }
  url:string = '';

  setURL(url: string){
    this.url = url;
  }
  
}
