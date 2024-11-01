import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputCityFormComponent } from './form/input-city/input-city.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputCityFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Weather Dashboard';
}
