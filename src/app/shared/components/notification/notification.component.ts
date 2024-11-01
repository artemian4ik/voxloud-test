import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  showNotification = false;
  message = '';
  type = 'info';

  constructor() {}

  ngOnInit(): void {}

  displayNotification(msg: string, type = 'info') {
    this.message = msg;
    this.showNotification = true;
    this.type = type;

    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
