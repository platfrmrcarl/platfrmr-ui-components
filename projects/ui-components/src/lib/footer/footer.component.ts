import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() bgColor: string = '';
  @Input() logo: string = '';
  @Input() appName: string = '';
  @Input() lnk1: string = '';
  @Input() lnk2: string = '';
  @Input() lnk3: string = '';
  @Input() lnk4: string = '';
  @Input() lnk5: string = '';
  @Input() lnk6: string = '';
  @Input() fillColor: string = '';

  ngOnInit() {
    this.appName = this.appName + '  ©' + new Date().getFullYear().toString();
  }
}
