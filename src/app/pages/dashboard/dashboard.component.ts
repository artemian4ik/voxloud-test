import { Component, OnInit } from '@angular/core';
import { InputCityFormComponent } from '../../form/input-city/input-city.component';
import { testWeatherData, WeatherInterface } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { CityComponent } from '../../card/city/city.component';
import { getWeatherImageById } from '../../shared/utils/weather-images.util';
import { MathRoundPipe } from '../../shared/pipes/math-round.pipe';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    IconButtonComponent,
    CityComponent,
    InputCityFormComponent,
    MathRoundPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  cityWeather: WeatherInterface[] = testWeatherData;

  constructor(public weatherService: WeatherService) {}

  getWeatherImageById = getWeatherImageById;

  updateCityWeather = (newCityWeather: WeatherInterface): void => {
    this.cityWeather = [...this.cityWeather, newCityWeather];
  };

  ngOnInit(): void {
    this.cityWeather = this.weatherService.getWeatherDataFromLocalStorage();
  }

  onDeleteCity = (cityId: number) => {
    const index = this.cityWeather.findIndex((weather) => weather.id == cityId);

    if (index != -1) {
      this.cityWeather.splice(index, 1);
      this.weatherService.saveWeatherListToLocalStorage(this.cityWeather);
    }
  };
}
