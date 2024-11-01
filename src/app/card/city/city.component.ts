import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  isFlipped = false;

  onClickFlipCard = () => {
    this.isFlipped = !this.isFlipped;
    console.log(this.isFlipped);
  };
}
