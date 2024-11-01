import { Component } from '@angular/core';
import { InputCityFormComponent } from '../../form/input-city/input-city.component';
import { testWeatherData, WeatherInterface } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { CityComponent } from '../../card/city/city.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CityComponent, InputCityFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cityWeather: WeatherInterface[] = testWeatherData;

  updateCityWeather(newCityWeather: WeatherInterface) {
    this.cityWeather = [...this.cityWeather, newCityWeather];
    console.log(this.cityWeather);
  }
}
