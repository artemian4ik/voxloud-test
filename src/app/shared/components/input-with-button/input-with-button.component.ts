import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-input-with-button',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './input-with-button.component.html',
  styleUrl: './input-with-button.component.scss',
})
export class InputWithButtonComponent {
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonType: string = 'button';
  @Input() buttonText: string = 'Submit';
  @Input() buttonLoading: boolean = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onInputChange(value: string) {
    this.valueChange.emit(value);
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
