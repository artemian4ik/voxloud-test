import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import { WeatherInterface } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKeyWeather: string = 'eaa2bb44be30f3ef709e5edb11085b82';
  private apiUrlWeather: string =
    'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  getWeatherByCity(cityName: string): Observable<WeatherInterface> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('exclude', 'daily')
      .set('appid', this.apiKeyWeather);

    return this.http.get<WeatherResponse>(this.apiUrlWeather, { params }).pipe(
      map((response: WeatherResponse) => ({
        id: response.id,
        city: response.name,
        temperature: response.main.temp,
        weather: response.weather[0].main,
        weather_id: response.weather[0].id,
        wind: response.wind,
        condition: {
          feels_like: response.main.feels_like,
          pressure: response.main.pressure,
          humidity: response.main.humidity,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
        },
      })),
      catchError((error) => {
        console.error('Error! Can\'t to get "openweathermap" :', error);
        return throwError(() => new Error('City not found'));
      })
    );
  }
}
