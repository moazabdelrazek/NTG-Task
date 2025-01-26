import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  templateUrl: './plus-icon.component.html',
  styleUrl: './plus-icon.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass],
})
export class PlusIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";  

}
