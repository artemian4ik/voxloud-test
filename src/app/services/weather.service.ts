import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import {
  WeatherCityLocationInterface,
  WeatherInterface,
} from '../models/weather.model';
import { RequestStatus } from '../models/request-status.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKeyWeather: string = 'eaa2bb44be30f3ef709e5edb11085b82';
  private apiUrlWeather: string = 'https://api.openweathermap.org/data/2.5';
  private storageKey = 'weatherData';

  requestStatus: RequestStatus = {
    isLoading: false,
    error: null,
  };

  constructor(private http: HttpClient) {}

  getWeatherForecastByCity = (
    cityName: string
  ): Observable<WeatherInterface> => {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.apiKeyWeather);

    return this.http
      .get<any>(`https://api.openweathermap.org/data/2.5/forecast`, {
        params,
      })
      .pipe(
        map((response) => {
          const currentDate = new Date();
          const formatCurrentDate = currentDate.toISOString().split('T')[0];

          const listWeather = response.list.filter((item: any) => {
            const date = new Date(item.dt * 1000);
            const formatDate = date.toISOString().split('T')[0];

            if (formatDate === formatCurrentDate) {
              return false;
            }

            const hours = date.getUTCHours();

            return hours === 12 || hours === 0;
          });

          return listWeather;
        }),
        catchError((error) => {
          console.error('Error! Can\'t to get "openweathermap" :', error);
          return throwError(() => new Error('City not found'));
        })
      );
  };

  getWeatherByCity = (cityName: string): Observable<WeatherInterface> => {
    this.requestStatus.isLoading = true;
    this.requestStatus.error = null;

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('exclude', 'daily')
      .set('appid', this.apiKeyWeather);

    return this.http
      .get<WeatherResponse>(`${this.apiUrlWeather}/weather`, { params })
      .pipe(
        map((response: WeatherResponse) => {
          const weatherData: WeatherInterface = {
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
          };

          this.saveWeatherDataToLocalStorage(weatherData);
          this.requestStatus.isLoading = false;
          return weatherData;
        }),
        catchError((error) => {
          this.requestStatus.error = 'City not found';
          this.requestStatus.isLoading = false;
          console.error('Error! Can\'t to get "openweathermap" :', error);
          return throwError(() => new Error('City not found'));
        })
      );
  };

  saveWeatherDataToLocalStorage = (data: WeatherInterface): void => {
    if (typeof window === 'undefined') {
      return;
    }
    const existingData = this.getWeatherDataFromLocalStorage() || [];
    existingData.push(data);
    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
  };

  saveWeatherListToLocalStorage = (data: WeatherInterface[]): void => {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  };

  getWeatherDataFromLocalStorage = (): WeatherInterface[] => {
    if (typeof window === 'undefined') {
      return [];
    }

    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  };
}
