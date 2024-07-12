import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() btn_title: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
}
