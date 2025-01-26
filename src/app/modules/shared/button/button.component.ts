import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass],
})
export class ButtonComponent {
  
  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";

  /**
   * @description to disabled button behavior
   */
  @Input({ alias: "disabled" }) public Disabled: boolean = false;

}
