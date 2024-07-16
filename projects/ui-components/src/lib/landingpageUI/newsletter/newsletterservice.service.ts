import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterserviceService {
  url:string = '';
  constructor(url: string) { 
    this.url = url;
  }

  async submitApplication(email: string){
    
  }
}
