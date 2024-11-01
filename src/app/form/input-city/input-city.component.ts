import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockComponent } from '../../card/block/block.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { InputWithButtonComponent } from '../../shared/components/input-with-button/input-with-button.component';
import { WeatherService } from '../../services/weather.service';
import { WeatherInterface } from '../../models/weather.model';
import { LoaderSpinnerComponent } from '../../loader-spinner/loader-spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input-city',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BlockComponent,
    InputComponent,
    InputWithButtonComponent,
    LoaderSpinnerComponent,
  ],
  templateUrl: './input-city.component.html',
  styleUrl: './input-city.component.scss',
})
export class InputCityFormComponent {
  @Input() isLoading: boolean = false;
  @Output() cityWeatherChange = new EventEmitter<WeatherInterface>();
  errorMessage: string | null = null;
  inputCityName: string = '';

  constructor(public weatherService: WeatherService) {}

  handleCityChange(value: string) {
    this.inputCityName = value;
  }

  addCityToLocalStore = () => {
    this.weatherService.getWeatherByCity(this.inputCityName).subscribe({
      next: (data) => {
        this.cityWeatherChange.emit(data);
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  };
}
