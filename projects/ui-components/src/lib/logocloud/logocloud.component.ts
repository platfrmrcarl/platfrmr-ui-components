import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-logocloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logocloud.component.html',
  styleUrl: './logocloud.component.css',
})
export class LogocloudComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() imgsrc_1: string = '';
  @Input() imgsrc_2: string = '';
  @Input() imgsrc_3: string = '';
  @Input() imgsrc_4: string = '';
  @Input() imgsrc_5: string = '';
}
