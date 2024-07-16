import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'uic-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() bgColor: string = '';
  @Input() imgSrc: string = '';
  @Input() imgSrc_w: number = 0;
  @Input() imgSrc_h: number = 0;
  @Input() appName: string = '';
  @Input() lnk1: string = '';
  @Input() lnk2: string = '';
  @Input() lnk3: string = '';
  @Input() lnk4: string = '';
  @Input() lnk5: string = '';
  @Input() lnk_txt_1: string = '';
  @Input() lnk_txt_2: string = '';
  @Input() lnk_txt_3: string = '';
  @Input() lnk_txt_4: string = '';
  @Input() lnk_txt_5: string = '';
  @Input() profile_pic: string = '';
  @Input() isAuthenticated?: boolean = false;

  ngOnInit() {}
}
