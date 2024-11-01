import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCityFormComponent } from './input-city.component';

describe('InputCityComponent', () => {
  let component: InputCityFormComponent;
  let fixture: ComponentFixture<InputCityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCityFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
