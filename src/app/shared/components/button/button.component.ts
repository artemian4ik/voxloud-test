import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderSpinnerComponent } from '../../../loader-spinner/loader-spinner.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LoaderSpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonClass: string = '';
  @Input() buttonText: string = 'Submit';
  @Input() buttonType: string = 'button';
  @Input() buttonLoading: boolean = false;

  onClick() {}

  isButtonLoading = (): boolean => {
    return this.buttonLoading;
  };
}
