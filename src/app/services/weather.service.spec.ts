import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherInterface } from '../models/weather.model';
import { WeatherResponse } from '../models/weather-response.model';

describe('WeatherService', () => {
  const apiKeyWeather: string = '';
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created WeatherService', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data for a valid city', () => {
    const mockWeatherResponse: WeatherResponse = {
      id: 1,
      name: 'Test City',
      main: {
        temp: 20,
        feels_like: 19,
        pressure: 1010,
        humidity: 50,
        temp_min: 15,
        temp_max: 25,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: '',
          icon: '',
        },
      ],
      wind: {
        speed: 5,
        deg: 0,
      },
      coord: {
        lon: 0,
        lat: 0,
      },
      base: '',
      visibility: 0,
      clouds: {
        all: 0,
      },
      dt: 0,
      sys: {
        type: 0,
        id: 0,
        message: 0,
        country: '',
        sunrise: 0,
        sunset: 0,
      },
      cod: 0,
    };

    const expectedWeatherData: WeatherInterface = {
      id: mockWeatherResponse.id,
      city: mockWeatherResponse.name,
      temperature: mockWeatherResponse.main.temp,
      weather: mockWeatherResponse.weather[0].main,
      weather_id: mockWeatherResponse.weather[0].id,
      wind: mockWeatherResponse.wind,
      condition: {
        feels_like: mockWeatherResponse.main.feels_like,
        pressure: mockWeatherResponse.main.pressure,
        humidity: mockWeatherResponse.main.humidity,
        temp_min: mockWeatherResponse.main.temp_min,
        temp_max: mockWeatherResponse.main.temp_max,
      },
    };

    service.getWeatherByCity('Test City').subscribe((data) => {
      expect(data).toEqual(expectedWeatherData);
      expect(service.requestStatus.isLoading).toBeFalse();
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?q=Test%20City&units=metric&exclude=daily&appid=${apiKeyWeather}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherResponse);
  });
});
