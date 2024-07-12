import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.component.html',
})
export class ConnectComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() lnk1: string = '';
  @Input() lnk2: string = '';
  @Input() lnk3: string = '';
  @Input() lnk4: string = '';
  @Input() lnk5: string = '';
  @Input() lnk6: string = '';
}
