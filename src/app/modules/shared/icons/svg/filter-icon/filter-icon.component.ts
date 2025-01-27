import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrl: './filter-icon.component.scss',
  imports: [NgClass],
})
export class FilterIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class!: string

}
