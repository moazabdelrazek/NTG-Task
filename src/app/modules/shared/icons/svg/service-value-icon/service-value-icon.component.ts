import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-value-icon',
  templateUrl: './service-value-icon.component.html',
  styleUrl: './service-value-icon.component.scss',
  imports: [NgClass],
})
export class ServiceValueIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class!: string

}
