import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-down-icon',
  templateUrl: './chevron-down-icon.component.html',
  styleUrl: './chevron-down-icon.component.scss',
  imports: [NgClass],
})
export class ChevronDownIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";

}
