import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-icon',
  templateUrl: './alert-icon.component.html',
  styleUrl: './alert-icon.component.scss',
  imports: [NgClass],
})
export class AlertIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class!: string  

}
