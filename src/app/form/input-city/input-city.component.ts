import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockComponent } from '../../card/block/block.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputWithButtonComponent } from '../../shared/components/input-with-button/input-with-button.component';

@Component({
  selector: 'app-form-input-city',
  standalone: true,
  imports: [
    FormsModule,
    BlockComponent,
    InputComponent,
    InputWithButtonComponent,
  ],
  templateUrl: './input-city.component.html',
  styleUrl: './input-city.component.scss',
})
export class InputCityFormComponent {
  addCityToLocalStore = () => {};
}
