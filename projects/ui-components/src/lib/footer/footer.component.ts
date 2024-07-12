import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'uic-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() bgColor: string = '';
  @Input() imgSrc: string = '';
  @Input() imgSrc_w:number = 0;
  @Input() imgSrc_h:number = 0;
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
