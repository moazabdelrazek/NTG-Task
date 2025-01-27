import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-package-icon',
  templateUrl: './price-package-icon.component.html',
  styleUrl: './price-package-icon.component.scss',
  imports: [NgClass],
})
export class PricePackageIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class!: string  

}
