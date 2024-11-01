import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() icon: string = 'delete';
  @Input() alt: string = 'icon button';

  isHovered: boolean = false;
  private iconPath: string = 'assets/icons/';

  getIconPath(iconName: string): string {
    return `${this.iconPath}${iconName}/${
      this.isHovered ? iconName + '_active' : iconName
    }.svg`;
  }
}
