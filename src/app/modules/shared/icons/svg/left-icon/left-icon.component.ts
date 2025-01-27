import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-icon',
  templateUrl: './left-icon.component.html',
  styleUrl: './left-icon.component.scss',
  imports: [NgClass],
})
export class LeftIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class!: string  

}
