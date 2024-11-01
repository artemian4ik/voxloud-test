import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCityFormComponent } from './input-city.component';
import { HttpClientModule } from '@angular/common/http';

describe('InputCityComponent', () => {
  let component: InputCityFormComponent;
  let fixture: ComponentFixture<InputCityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCityFormComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
