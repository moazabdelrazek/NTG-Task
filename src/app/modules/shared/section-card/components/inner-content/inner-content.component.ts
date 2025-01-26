import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-content',
  templateUrl: './inner-content.component.html',
  styleUrl: './inner-content.component.scss',
  imports: [],
})
export class InnerContentComponent {

  /**
   * @description content title
   */
  @Input({ alias: 'title', required: true}) public Title: string = "";

  /**
   * @description content description
   */
  @Input({ alias: 'description', required: true}) public Description: string = "";  

}
