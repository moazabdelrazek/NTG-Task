import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [NgClass],
})
export class BadgeComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";  

}
