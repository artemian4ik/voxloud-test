import { Component } from '@angular/core';
import { InputCityFormComponent } from '../../form/input-city/input-city.component';
import { testWeatherData, WeatherInterface } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { CityComponent } from '../../card/city/city.component';
import { getWeatherImageById } from '../../shared/utils/weather-images.util';
import { MathRoundPipe } from '../../shared/pipes/math-round.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CityComponent, InputCityFormComponent, MathRoundPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cityWeather: WeatherInterface[] = testWeatherData;
  getWeatherImageById = getWeatherImageById;

  updateCityWeather(newCityWeather: WeatherInterface) {
    this.cityWeather = [...this.cityWeather, newCityWeather];
  }
}
