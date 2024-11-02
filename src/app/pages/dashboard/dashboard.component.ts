import { Component, OnInit } from '@angular/core';
import { InputCityFormComponent } from '../../form/input-city/input-city.component';
import {
  WeatherInterface,
  WeatherWeeklyCityInterface,
} from '../../models/weather.model';
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
  cityWeather: WeatherInterface[] = [];

  constructor(public weatherService: WeatherService) {}

  getWeatherImageById = getWeatherImageById;

  fetchWeatherForecast = (cityName: string) => {
    this.weatherService.getWeatherForecastByCity(cityName).subscribe({
      next: (data: any) => {
        this.cityWeather = this.cityWeather.map((item: WeatherInterface) => {
          if (item.city === cityName) {
            item.list = this.groupWeatherData(data);
          }

          return item;
        });
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  };

  groupWeatherData(list: any[]) {
    let groupWeatherCity = [];
    for (let i = 0; i < list.length; i += 2) {
      const night = list[i];
      const day = list[i + 1];

      if (day) {
        groupWeatherCity.push({
          date: night.dt_txt,
          nightTemp: night.main.temp_min,
          dayTemp: day.main.temp_max,
          dayOfWeek: this.getDayOfWeek(night.dt_txt),
        });
      }
    }

    return groupWeatherCity;
  }

  getDayOfWeek = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

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
