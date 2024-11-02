import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  @Input() cityName: string = '';
  @Output() fetchWeatherForecast = new EventEmitter<string>();
  isFlipped: boolean = false;
  errorMessage: string = '';

  constructor() {}

  onClickFlipCard = () => {
    this.isFlipped = !this.isFlipped;

    if (this.isFlipped) {
      this.fetchWeatherForecast.emit(this.cityName);
    }
  };
}
