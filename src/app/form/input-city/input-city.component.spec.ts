import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCityFormComponent } from './input-city.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { WeatherInterface } from '../../models/weather.model';
import { of } from 'rxjs';

describe('InputCityComponent', () => {
  let component: InputCityFormComponent;
  let fixture: ComponentFixture<InputCityFormComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getWeatherByCity',
    ]);

    await TestBed.configureTestingModule({
      imports: [InputCityFormComponent, HttpClientModule],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCityFormComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
    fixture.detectChanges();
  });

  it('should create component "InputCityFormComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should update inputCityName', () => {
    component.handleCityChange('Kyiv');
    expect(component.inputCityName).toBe('Kyiv');
  });

  it('should emit event "cityWeatherChange" on successful weather fetch', () => {
    const testWeatherData: WeatherInterface = {
      temperature: 20,
      city: 'Kyiv',
      id: 0,
      weather_id: 0,
      weather: '',
      wind: {
        speed: 0,
        deg: 0,
      },
      condition: {
        pressure: 0,
        humidity: 0,
        temp_min: 0,
        temp_max: 0,
        feels_like: 0,
      },
    };

    component.inputCityName = 'Kyiv';
    weatherService.getWeatherByCity.and.returnValue(of(testWeatherData));
    spyOn(component.cityWeatherChange, 'emit');
    component.addCityToLocalStore();

    expect(weatherService.getWeatherByCity).toHaveBeenCalledWith('Kyiv');
    expect(component.cityWeatherChange.emit).toHaveBeenCalledWith(
      testWeatherData
    );
    expect(component.errorMessage).toBeNull();
  });
});
