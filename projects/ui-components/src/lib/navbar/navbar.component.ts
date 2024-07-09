import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() bgColor: string = '';
  @Input() logo: string = '';
  @Input() title: string = '';
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
}
