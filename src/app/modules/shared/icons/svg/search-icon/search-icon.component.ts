import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  templateUrl: './search-icon.component.html',
  styleUrl: './search-icon.component.scss',
  imports: [NgClass],
})
export class SearchIconComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";  
    
}
