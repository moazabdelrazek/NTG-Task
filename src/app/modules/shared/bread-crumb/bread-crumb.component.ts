import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss',
  imports: [NgFor, NgIf, NgClass],
})
export class BreadCrumbComponent {
  
  /**
   * @description Tree path
   */
  @Input({ alias: "paths", required: true}) public Paths: string[] = [];

}
